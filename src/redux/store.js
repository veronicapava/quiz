import { createStore } from 'redux'
import { INCREMENTAR_RONDA, REINICIAR, GUARDAR_NOMBRE, CAMBIAR_TIPO_PREGUNTAS } from './actions'

const initialStore = {
    ronda: 1,
    puntos: 0,
    nombre: "",
    preguntasPersonalizadas: false
}

const rootReducer = (state = initialStore, action) => {

    if (action.type === INCREMENTAR_RONDA && state.ronda < 6) {
        return {
            ...state,
            ronda: state.ronda + 1,
            puntos: state.puntos + 2
        }
    }


    if (action.type === REINICIAR) {
        return {
            ...initialStore
        }
    }

    if (action.type === GUARDAR_NOMBRE) {
        return {
            ...state,
            nombre: action.data
        }
    }

    if (action.type === CAMBIAR_TIPO_PREGUNTAS) {
        return {
            ...state,
            preguntasPersonalizadas: action.data
        }
    }

    return state
}

export default createStore(rootReducer)