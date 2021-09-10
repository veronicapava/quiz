import { useContext } from "react"
import QuizContext from "../Provider/Contexts"
import "../index.css"

function Menuprincipal() {
    const { gameState, setGameState } = useContext(QuizContext)
    return (
        <div className="menu">
            <button
                onClick={() => {
                    setGameState("quiz")
                }}
            >
                Empezar Juego
            </button>
        </div>
    )
}

export default Menuprincipal;