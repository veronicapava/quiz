import { useContext } from "react"
import QuizContext from "../Provider/Contexts"
import "../index.css"


function Tablero() {
    const { gameState, setGameState } = useContext(QuizContext)
    return (
        <div className="tablero">
            <h2>tablero de jugadores aca</h2>


            <ul>
                <li>nombre</li>
                <li>ronda</li>
                <li>puntos</li>
            </ul>

            <button
                onClick={() => {
                    setGameState("menu")
                }}>Atrás</button>
        </div>
    )
}







export default Tablero;