import { useState, useEffect, useContext } from "react"
import QuizContext from "../Provider/Contexts"


const Question = (question) => {
    const { pregunta, opcionA, opcionB, opcionC, opcionD, dificultad, respuesta } = question

    const { gameState, setGameState } = useContext(QuizContext)




    const validarRespuesta = (opcionSeleccionada) => {
        console.log("validando la respuesta")
        if (opcionSeleccionada == respuesta) {
            console.log("Respuesta correcta..");


            < button onClick={() => {
                setGameState("quiz")
            }} > Finalizar juego</button>;

            console.log("aqui llegue")

        } else {
            console.log("Respuesta incorrecta. Que bruto, 🤦‍♂️ pongale cero")
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

export default Question;