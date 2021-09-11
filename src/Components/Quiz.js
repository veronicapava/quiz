import { useState, useEffect, useContext } from "react"
import Question from "../Partbypart/Question"
import QuizContext from "../Provider/Contexts"
import Header from "./Header"
import { connect } from 'react-redux';

const Quiz = props => {
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
        fetch("http://localhost:3001/preguntasDefault")
            .then(response => response.json())
            .then(data => setQuestion(data))
    }, [])


    if (props.rondaCounter > 5) {
        return (
            <>
                {setGameState("final")}
            </>)
    }


    return (
        <>
            <div className="quiz">
                <Header />

                <Question
                    {...getQuestion(questions, props.rondaCounter)}
                />

                < button onClick={() => {
                    setGameState("final")
                }} > Finalizar juego</button>
            </div>

        </>
    )
}

const mapStateToProps = state => ({
    rondaCounter: state.ronda
})
const mapDispatchToProps = () => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);