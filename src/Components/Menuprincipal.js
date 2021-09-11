import { useContext, useState } from "react"
import QuizContext from "../Provider/Contexts"
import "../index.css"
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
        <div className="menu">
            <button onClick={() => { setGameState("addquestion") }} >Crear preguntas</button>
            <button onClick={() => { setGameState("tablero") }} >Tablero de ganadores</button>
            <br />
            <form onSubmit={submit}>

                <input type="text"
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

                <button>Guardar nombre</button>
                <br />
            </ form>



            {submitEstado && <button onClick={() => { setGameState("quiz") }} > Empezar Juego </button>}
            {!submitEstado && <button disabled>Empezar Juego</button>}

        </div>
    )
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    guardarNombre(nombre) {
        dispatch(guardandoNombre(nombre))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Menuprincipal);