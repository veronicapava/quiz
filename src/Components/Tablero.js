import { useContext, useState, useEffect } from "react"
import QuizContext from "../Provider/Contexts"
import "../styles/styles.scss"



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
        <div className="ed-grid s-grid-3 s-pxy-3">
            <table className="table--dark s-cols-3">
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



            <button className="button dark-color s-cols-1 s-x-2"
                onClick={() => {
                    setGameState("menu")
                }}>Atrás</button>
        </div>
    )
}


export default Tablero;