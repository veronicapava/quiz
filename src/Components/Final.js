import { useContext } from "react"
import QuizContext from "../Provider/Contexts"
import "../index.css"

function Final() {
    const { gameState, setGameState } = useContext(QuizContext)
    return (
        <div className="menu">
            <h2>Score</h2>

        </div>
    )
}

export default Final;