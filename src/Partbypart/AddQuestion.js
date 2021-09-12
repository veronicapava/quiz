import { useState, useContext } from "react"
import QuizContext from "../Provider/Contexts"
import { connect } from "react-redux"
import { irPreguntasPersonalizadas } from "../redux/actionCreators"
import { contadorDePreguntas } from "../utils"
import { MIN_PREGUNTAS } from "../constantes"

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
        <div className="ed-grid s-grid-4 s-pxy-3 s-bg-black">
            <div class="s-cols-3 " >
                <form onSubmit={postear}>

                    <div className="ed-container " >
                        <div class="ed-item form__item">
                            <label className="color light-color">Escribe aquí la pregunta: </label>
                            <input className="ed-item" type="text" required value={pregunta}
                                onChange={(e) => setPregunta(e.target.value)} />
                        </div>

                        <div class="ed-item form__item">
                            <label className="color light-color">Escribe aquí la opción A: </label>
                            <input className="recuadro" type="text" required value={resA}
                                onChange={(e) => setResponseA(e.target.value)} />
                        </div>

                        <div class="ed-item form__item">
                            <label className="color light-color">Escribe aquí la opción B: </label>
                            <input className="recuadro" type="text" required value={resB}
                                onChange={(e) => setResponseB(e.target.value)} />
                        </div>

                        <div class="ed-item form__item">
                            <label className="color light-color">Escribe aquí la opción c: </label>
                            <input className="recuadro" type="text" required value={resC}
                                onChange={(e) => setResponseC(e.target.value)} />
                        </div>

                        <div class="ed-item form__item">
                            <label className="color light-color">Escribe aquí la opción D: </label>
                            <input className="recuadro" type="text" required value={resD}
                                onChange={(e) => setResponseD(e.target.value)} />
                        </div>

                        <div class="ed-item l-30 form__item">
                            <label className="color light-color">Marque la respuesta correcta</label>
                            <select value={respuesta} onChange={(e) => setCorrecta(e.target.value)} >
                                <option value="opcionA"> Opción A</option>
                                <option value="opcionB"> Opción B</option>
                                <option value="opcionC"> Opción C</option>
                                <option value="opcionD"> Opción D</option>
                            </select>
                        </div>

                        <div class="ed-item l-30 form__item">
                            <label className="color light-color">Seleccione la dificultad</label>
                            <select value={dificultad} onChange={(e) => setDificultad(e.target.value)}>
                                <option value="1"> Nivel 1</option>
                                <option value="2"> Nivel 2</option>
                                <option value="3"> Nivel 3</option>
                                <option value="4"> Nivel 4</option>
                                <option value="5"> Nivel 5</option>
                            </select>
                        </div>
                        <div>
                            <label className="color light-color">Mínimo {MIN_PREGUNTAS} preguntas por dificultad</label>
                            {!posteando && <button className="button dark-color">Guardar pregunta</button>}
                            {posteando && <button className="button dark-color" disabled>Guardando pregunta...</button>}
                        </div>
                    </div>
                </form>

                <div className="ed-grid s-grid-2 s-row-2 dark-color">
                    < button className="button s-rows-1 lg-55 " onClick={() => {
                        setGameState("menu")
                        props.cambiarTipoDePreguntas(false)
                        alert("¡Se van a utilizar las preguntas por defecto!")
                        // alert("Las preguntas que escribistes ya fueron guardadas, vuelve aqui para añadir más luego")
                    }
                    } > Cancelar </button>

                    {
                        (d1 >= MIN_PREGUNTAS && d2 >= MIN_PREGUNTAS && d3 >= MIN_PREGUNTAS && d4 >= MIN_PREGUNTAS && d5 >= MIN_PREGUNTAS)   //d1 es el numero de preguntas de dificulta 1, etc
                            ? < button className="button dark-color" onClick={() => {
                                props.cambiarTipoDePreguntas(true)
                                setGameState("menu")
                            }} >Ya agregué todas las preguntas</button>
                            : <div>
                                < button className="button disabled ghost dark-color" disabled >Ya agregué todas las preguntas</button>
                            </div>
                    }
                </div>
            </div>

            <aside >
                <h3 className=" color light-color">Preguntas agregadas:</h3>
                <div >
                    <h4 className=" color light-color">Dificultad 1: {d1} </h4>
                    <h4 className=" color light-color">Dificultad 2: {d2} </h4>
                    <h4 className=" color light-color">Dificultad 3: {d3} </h4>
                    <h4 className=" color light-color">Dificultad 4: {d4} </h4>
                    <h4 className=" color light-color">Dificultad 5: {d5} </h4>
                    <h3 className=" color light-color"> Total: {total}</h3>
                </div>
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