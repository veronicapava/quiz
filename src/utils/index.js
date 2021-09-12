export const getRandomInt = max => Math.floor(Math.random() * max)

export const getQuestionByDificcult = (allQuestion, round) => {
    let preguntasDeRonda = allQuestion.filter(q => q.dificultad === round)
    let ids = preguntasDeRonda.map(x => x.id)
    let randomId = getRandomInt(ids.length)
    return preguntasDeRonda[randomId]
}


export const contadorDePreguntas = (preguntas, dificultad) => {
    let { d1, d2, d3, d4, d5 } = preguntas

    d1 = dificultad === 1 ? d1 + 1 : d1
    d2 = dificultad === 2 ? d2 + 1 : d2
    d3 = dificultad === 3 ? d3 + 1 : d3
    d4 = dificultad === 4 ? d4 + 1 : d4
    d5 = dificultad === 5 ? d5 + 1 : d5

    let total = d1 + d2 + d3 + d4 + d5

    return { d1, d2, d3, d4, d5, total }
}
