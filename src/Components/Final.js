import { useContext } from "react"
import QuizContext from "../Provider/Contexts"
import "../index.css"
import { connect } from "react-redux"
import { reiniciarStorage } from "../redux/actionCreators"

function Final(props) {
    const { setGameState } = useContext(QuizContext)
    return (
        <div className="menu">
            <h2>Jugador: {props.nombreJugador}</h2>
            <h2>Score: ${props.puntosCounter}</h2>
            <button
                onClick={() => {
                    setGameState("menu")
                    props.reiniciarJuego()
                }}>Restart</button>
        </div>
    )
}

const mapStateToProps = state => ({
    rondaCounter: state.ronda,
    puntosCounter: state.puntos,
    nombreJugador: state.nombre
})


const mapDispatchToProps = dispatch => ({
    reiniciarJuego() {
        dispatch(reiniciarStorage())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Final);