import { useContext } from "react"
import QuizContext from "../Provider/Contexts"
import { connect } from "react-redux"
import { incrementarRonda } from "../redux/actionCreators"

const Question = (question) => {
    const { pregunta, opcionA, opcionB, opcionC, opcionD, respuesta, siguienteRonda, rondaCounter } = question
    const { setGameState } = useContext(QuizContext)

    const validarRespuesta = (opcionSeleccionada) => {

        if (opcionSeleccionada === respuesta && rondaCounter <= 5) {
            siguienteRonda()
        } else {
            setGameState("final")
        }
    }

    return (
        <div className="ed-grid row-gap s-rows-2 s-border s-cross-center s-bg-black s-pxy-2 s-mb-2">
            <h2 className="lg-to-center color light-color">{pregunta}</h2>
            <div class="ed-grid s-grid-2  s-row-2 rows-gap ">
                < button className="button  dark-color ed-item lg-to-center" onClick={() => { validarRespuesta("opcionA") }} >{opcionA}</button>
                < button className="button  dark-color ed-item lg-to-center" onClick={() => { validarRespuesta("opcionB") }} >{opcionB}</button>
                < button className="button  dark-color ed-item lg-to-center" onClick={() => { validarRespuesta("opcionC") }} >{opcionC}</button>
                < button className="button  dark-color ed-item lg-to-center" onClick={() => { validarRespuesta("opcionD") }} >{opcionD}</button>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    rondaCounter: state.ronda
})
const mapDispatchToProps = dispatch => ({
    siguienteRonda() {
        dispatch(incrementarRonda())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Question);