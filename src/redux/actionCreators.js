import { INCREMENTAR_RONDA, REINICIAR, GUARDANDO_NOMBRE, CAMBIAR_TIPO_PREGUNTAS } from "./actions";

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

const irPreguntasPersonalizadas = tipo => ({
    type: CAMBIAR_TIPO_PREGUNTAS,
    data: tipo
})


export { incrementarRonda, reiniciarStorage, guardandoNombre, irPreguntasPersonalizadas }