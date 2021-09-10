
import { useState, useEffect } from "react"
import Question from "../Partbypart/Question"


function Quiz() {
    let random = 3
    let round = 5

    const filtradoPorDificultad = q => q => q.dificultad == round
    const randomQuestion = q => q.dificultad == random

    const preguntaUnica = (array) => array.filter(filtradoPorDificultad).filter(randomQuestion)




    const [questions, setQuestion] = useState([])


    useEffect(() => {
        fetch("http://localhost:3001/preguntas")
            .then(response => response.json())
            .then(data => setQuestion(data))
    }, [])




    return (
        <>
            <div className="quiz">
                <h1>Quiz</h1>
                <h1> Ronda {round} </h1>

                {
                    preguntaUnica(questions).map(q =>
                        <Question
                            key={q.id}
                            {...q}
                        />

                    )
                }




                <button>Finalizar juego</button>
            </div>

        </>
    )
}

export default Quiz;


                // key={preguntaUnica(questions)[0].id}