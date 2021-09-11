import { useContext, useState, useEffect } from "react"
import QuizContext from "../Provider/Contexts"
import "../index.css"


function Tablero() {
    const { setGameState } = useContext(QuizContext)
    const [resultados, setResultado] = useState([])


    useEffect(() => {
        const baseUrl = "http://localhost:3001/"
        const endPoint = "puntuaciones"
        fetch(baseUrl + endPoint)
            .then(response => response.json())
            .then(data => setResultado(data))
    }, [])
    return (
        <div className="tablero">
            <h2>Tablero de jugadores aca</h2>
            <table>
                <tr>
                    <td>Jugador</td>
                    <td>Ronda</td>
                    <td>Score</td>
                </tr>

                {
                    resultados.map(r =>
                        <tr>
                            <td>{r.nombreJugador}</td>
                            <td>{r.puntos}</td>
                            <td>{r.ronda}</td>
                        </tr>
                    )
                }
            </table>



            <button
                onClick={() => {
                    setGameState("menu")
                }}>Atrás</button>
        </div>
    )
}







export default Tablero;