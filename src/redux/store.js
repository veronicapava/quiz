import { createStore } from 'redux'
import { INCREMENTAR_RONDA, REINICIAR, GUARDANDO_NOMBRE } from './actions'

const initialStore = {
    ronda: 1,
    puntos: 0
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

    if (action.type === GUARDANDO_NOMBRE) {
        return {
            ...state,
            nombre: action.data
        }
    }

    return state
}

export default createStore(rootReducer)