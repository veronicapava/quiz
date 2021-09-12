import { useState, useContext } from "react"
import QuizContext from "../Provider/Contexts"
import { connect } from "react-redux"
import { irPreguntasPersonalizadas } from "../redux/actionCreators"
import { contadorDePreguntas } from "../utils"

const AddQuestion = (props) => {

    const { setGameState } = useContext(QuizContext)

    const preguntasGuardadasCero = { d1: 0, d2: 0, d3: 0, d4: 0, d5: 0, total: 0 }  //d1 corresponde a dificulta 1, etc

    const [preguntasGuardadas, setPreguntasGuardadas] = useState(preguntasGuardadasCero)

    let { d1, d2, d3, d4, d5, total } = preguntasGuardadas

    const [pregunta, setPregunta] = useState("")
    const [resA, setResponseA] = useState("")
    const [resB, setResponseB] = useState("")
    const [resC, setResponseC] = useState("")
    const [resD, setResponseD] = useState("")
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
            dificultad: Number(dificultad)
        }

        setPostingState(true)

        const resetarInputs = () => {
            setPregunta("")
            setResponseA("")
            setResponseB("")
            setResponseC("")
            setResponseD("")
            setCorrecta("opcionA")
            setDificultad("1")
        }


        fetch("http://localhost:3001/preguntas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(preguntas)
        }).then(() => {
            resetarInputs()
            props.cambiarTipoDePreguntas(true)
            setPostingState(false)

            let conteoPreguntas = contadorDePreguntas(preguntasGuardadas, Number(dificultad))
            setPreguntasGuardadas(conteoPreguntas)
        })

    }


    return (
        <div className="menu">

            <form onSubmit={postear}>

                <label>Escribe aquí la pregunta:</label>
                <input type="text" required value={pregunta}
                    onChange={(e) => setPregunta(e.target.value)} />
                <br />

                <label>Escribe aquí la opción A:</label>
                <input type="text" required value={resA}
                    onChange={(e) => setResponseA(e.target.value)} />
                <br />

                <label>Escribe aquí la opción B:</label>
                <input type="text" required value={resB}
                    onChange={(e) => setResponseB(e.target.value)} />
                <br />
                <label>Escribe aquí la opción c:</label>
                <input type="text" required value={resC}
                    onChange={(e) => setResponseC(e.target.value)} />
                <br />
                <label>Escribe aquí la opción D:</label>
                <input type="text" required value={resD}
                    onChange={(e) => setResponseD(e.target.value)} />
                <br />

                <br />
                <label>Marque la respuesta correcta:</label>
                <select value={respuesta}
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
                <select value={dificultad}
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

            <br />


            {
                (d1 >= 5 && d2 >= 5 && d3 >= 5 && d4 >= 5 && d5 >= 5)   //d1 es el numero de preguntas de dificulta 1, etc
                    ? < button onClick={() => {
                        props.cambiarTipoDePreguntas(true)
                        setGameState("menu")
                    }} >No mas preguntas</button>
                    : <>
                        < button disabled >No mas preguntas</button>
                        <label>Mínimo 5 preguntas por dificultad 😢</label>
                    </>
            }


            < button onClick={() => {
                setGameState("menu")
                props.cambiarTipoDePreguntas(false)
                alert("Se van a utilizar las preguntas por defecto!")
                // alert("Las preguntas que escribistes ya fueron guardadas, vuelve aqui para añadir más luego")
            }
            } > Cancelar </button>

            <aside>
                <h4>Inventario de Preguntas</h4>
                <label>Dificultad 1: {d1}</label>
                <label>Dificultad 2: {d2}</label>
                <label>Dificultad 3: {d3}</label>
                <label>Dificultad 4: {d4}</label>
                <label>Dificultad 5: {d5}</label>
                <label> Total: {total}</label>
            </aside>
        </div>
    )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    cambiarTipoDePreguntas(tipo) {
        dispatch(irPreguntasPersonalizadas(tipo))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);