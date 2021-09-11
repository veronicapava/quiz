import { useState, useEffect, useContext } from "react"
import QuizContext from "../Provider/Contexts"
import { connect } from "react-redux"
import { incrementarRonda } from "../redux/actionCreators"


const Question = (question) => {
    const { pregunta, opcionA, opcionB, opcionC, opcionD, respuesta, siguienteRonda, rondaCounter } = question
    const { gameState, setGameState } = useContext(QuizContext)

    const validarRespuesta = (opcionSeleccionada) => {

        if (opcionSeleccionada == respuesta && rondaCounter <= 5) {
            siguienteRonda()
        } else {
            setGameState("final")
        }
    }

    return (
        <>
            <h3>{pregunta}</h3>

            < button onClick={() => { validarRespuesta("opcionA") }} >{opcionA}</button>
            < button onClick={() => { validarRespuesta("opcionB") }} >{opcionB}</button>
            < button onClick={() => { validarRespuesta("opcionC") }} >{opcionC}</button>
            < button onClick={() => { validarRespuesta("opcionD") }} >{opcionD}</button>
        </>
    )
}



const mapStateToProps = state => ({
    rondaCounter: state.ronda
})
const mapDispatchToProps = dispatch => ({
    siguienteRonda() {
        dispatch(incrementarRonda())
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(Question);