import { useState, useEffect, useContext } from "react"
import Question from "../Partbypart/Question"
import QuizContext from "../Provider/Contexts"


function Quiz() {
    let round = 5
    const getRandomInt = max => Math.floor(Math.random() * max)

    const getQuestion = (allQuestion, round) => {
        let preguntasDeRonda = allQuestion.filter(q => q.dificultad == round)
        let ids = preguntasDeRonda.map(x => x.id)
        let randomId = getRandomInt(ids.length)
        return preguntasDeRonda[randomId]
    }


    const [questions, setQuestion] = useState([])
    const { gameState, setGameState } = useContext(QuizContext)


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

                <Question
                    {...getQuestion(questions, round)}
                />

                < button onClick={() => {
                    setGameState("final")
                }} > Finalizar juego</button>
            </div>

        </>
    )
}

export default Quiz;