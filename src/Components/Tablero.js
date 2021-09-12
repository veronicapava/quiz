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
                <tbody>
                    <tr>
                        <th>Jugador</th>
                        <th>Ronda</th>
                        <th>Score</th>
                    </tr>

                    {
                        resultados.map(r =>
                            <tr key={r.id}>
                                <td>{r.nombreJugador}</td>
                                <td>{r.ronda}</td>
                                <td>{r.puntos}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>



            <button
                onClick={() => {
                    setGameState("menu")
                }}>Atrás</button>
        </div>
    )
}







export default Tablero;