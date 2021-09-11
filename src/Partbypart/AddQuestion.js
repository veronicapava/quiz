import { useState, useContext } from "react"
import QuizContext from "../Provider/Contexts"


const AddQuestion = () => {

    const { gameState, setGameState } = useContext(QuizContext)



    const [pregunta, setPregunta] = useState()
    const [resA, setResponseA] = useState()
    const [resB, setResponseB] = useState()
    const [resC, setResponseC] = useState()
    const [resD, setResponseD] = useState()
    const [respuesta, setCorrecta] = useState("opcionA")
    const [dificultad, setDificultad] = useState("1")

    const [posteando, setPostingState] = useState(false)


    const postear = (e) => {
        e.preventDefault()
        const preguntas = {
            pregunta,
            opcionA: resA,
            opcionB: resB,
            opcionC: resC,
            opcionD: resD,
            respuesta,
            dificultad
        }

        setPostingState(true)

        fetch("http://localhost:3001/preguntas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(preguntas)
        }).then(() => setPostingState(false))

    }


    return (
        <>
            <form onSubmit={postear}>

                <label>Escribe aquí la pregunta:</label>
                <input type="text"
                    required
                    value={pregunta}
                    onChange={(e) => setPregunta(e.target.value)}
                />
                <br />

                <label>Escribe aquí la opción A:</label>
                <input type="text" required
                    required
                    value={resA}
                    onChange={(e) => setResponseA(e.target.value)} />
                <br />

                <label>Escribe aquí la opción B:</label>
                <input type="text" required
                    required
                    value={resB}
                    onChange={(e) => setResponseB(e.target.value)} />
                <br />
                <label>Escribe aquí la opción c:</label>
                <input type="text" required
                    required
                    value={resC}
                    onChange={(e) => setResponseC(e.target.value)} />
                <br />
                <label>Escribe aquí la opción D:</label>
                <input type="text" required
                    required
                    value={resD}
                    onChange={(e) => setResponseD(e.target.value)} />

                <br />
                <br />
                <label>Marque la respuesta correcta:</label>
                <select
                    value={respuesta}
                    onChange={(e) => setCorrecta(e.target.value)}
                >
                    <option value="opcionA"> Opción A</option>
                    <option value="opcionB"> Opción B</option>
                    <option value="opcionC"> Opción C</option>
                    <option value="opcionD"> Opción D</option>
                </select>

                <br />
                <br />
                <label>Seleccione la dificultad de esta pregunta</label>
                <select
                    value={dificultad}
                    onChange={(e) => setDificultad(e.target.value)}
                >
                    <option value="1"> Nivel 1</option>
                    <option value="2"> Nivel 2</option>
                    <option value="3"> Nivel 3</option>
                    <option value="4"> Nivel 4</option>
                    <option value="5"> Nivel 5</option>
                </select>

                <br />
                <br />

                {!posteando && <button>Guardar pregunta</button>}
                {posteando && <button disabled>Guardando pregunta...</button>}

            </form>


            < button onClick={() => {
                setGameState("menu")
            }} >No mas preguntas</button>
        </>
    )
}

export default AddQuestion;