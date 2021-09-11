import { useContext } from "react"
import QuizContext from "../Provider/Contexts"
import "../index.css"

function Final() {
    const { gameState, setGameState } = useContext(QuizContext)
    return (
        <div className="menu">
            <h2>Score: $
            </h2>
            <button
                onClick={() => {
                    setGameState("menu")
                }}>Restart</button>
        </div>
    )
}

export default Final;