import { INCREMENTAR_RONDA, REINICIAR, GUARDANDO_NOMBRE } from "./actions";

const incrementarRonda = () => ({
    type: INCREMENTAR_RONDA,
    data: {}
})

const reiniciarStorage = () => ({
    type: REINICIAR,
    data: {}
})
const guardandoNombre = nombre => ({
    type: GUARDANDO_NOMBRE,
    data: nombre
})


export { incrementarRonda, reiniciarStorage, guardandoNombre }