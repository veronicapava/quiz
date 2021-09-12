import { useContext, useState } from "react"
import QuizContext from "../Provider/Contexts"
import "../styles/styles.scss"

import { connect } from "react-redux"
import { guardandoNombre } from "../redux/actionCreators"


function Menuprincipal(props) {
    const [nombre, setNombre] = useState("")
    const [submitEstado, setSubmit] = useState(false)
    const { setGameState } = useContext(QuizContext)

    const submit = (e) => {
        e.preventDefault()
        setSubmit(true)
        props.guardarNombre(nombre)
    }

    return (
        <div className="ed-grid s-row s-border s-cross-center s-pxy-2 lg-pxy-2 s-radius s-bg-black s-shadow-bottom row-gap">

            <div className="topbar  center dark-color">
                <button className="button" onClick={() => { setGameState("addquestion") }} >Crear preguntas</button>
                <button className="button" onClick={() => { setGameState("tablero") }} >Tablero de ganadores</button>
            </div>

            <div className=" ed-grid center m-to-center m-60 lg-30">
                <form className="form"
                    onSubmit={submit}>

                    <input
                        className="form__item center"
                        type="text"
                        required
                        placeholder="Nombre del jugador"
                        value={nombre}
                        onChange={
                            (e) => {
                                setSubmit(false)
                                setNombre(e.target.value)
                            }
                        }
                    />

                    <button className="button lg-55 dark-color">Guardar nombre</button>

                </ form>

                {submitEstado && <button className="button m-to-center  lg-55  dark-color" onClick={() => { setGameState("quiz") }} > Empezar Juego </button>}
                {!submitEstado && <button className="button m-to-center   lg-55  disabled dark-color" disabled>Empezar Juego</button>}
            </div>
        </div>
    )
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    guardarNombre(nombre) {
        dispatch(guardandoNombre(nombre))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Menuprincipal);