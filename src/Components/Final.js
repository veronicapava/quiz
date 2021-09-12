import { useContext, useEffect } from "react"
import QuizContext from "../Provider/Contexts"
import "../index.css"
import { connect } from "react-redux"
import { reiniciarStorage } from "../redux/actionCreators"

function Final(props) {
    const { setGameState } = useContext(QuizContext)
    const { nombreJugador, contadorPuntos, contadorRonda } = props

    useEffect(() => {
        const puntuacion = {
            nombreJugador,
            puntos: contadorPuntos,
            ronda: contadorRonda > 5 ? "Finalista" : contadorRonda
        }

        const baseUrl = "http://localhost:3001/"
        const endPoint = "puntuaciones"

        fetch(baseUrl + endPoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(puntuacion)
        })
    })
    return (
        <div className="menu">
            <h2>Jugador: {nombreJugador}</h2>
            <h2>Score: ${contadorPuntos}</h2>
            <button
                onClick={() => {
                    setGameState("menu")
                    props.reiniciarJuego()
                }}>Restart</button>
        </div>
    )
}

const mapStateToProps = state => ({
    contadorRonda: state.ronda,
    contadorPuntos: state.puntos,
    nombreJugador: state.nombre
})


const mapDispatchToProps = dispatch => ({
    reiniciarJuego() {
        dispatch(reiniciarStorage())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Final);