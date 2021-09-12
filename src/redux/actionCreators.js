import { INCREMENTAR_RONDA, REINICIAR, GUARDAR_NOMBRE, CAMBIAR_TIPO_PREGUNTAS, PERDER_PUNTOS } from "./actions";

const incrementarRonda = () => ({
    type: INCREMENTAR_RONDA,
    data: {}
})

const reiniciarStorage = () => ({
    type: REINICIAR,
    data: {}
})

const guardandoNombre = nombre => ({
    type: GUARDAR_NOMBRE,
    data: nombre
})

const irPreguntasPersonalizadas = tipo => ({
    type: CAMBIAR_TIPO_PREGUNTAS,
    data: tipo
})

const perderPuntos = () => ({
    type: PERDER_PUNTOS,
    data: {}
})

export { incrementarRonda, reiniciarStorage, guardandoNombre, irPreguntasPersonalizadas, perderPuntos }