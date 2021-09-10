const Question = (question) => {
    const { pregunta, opcionA, opcionB, opcionC, opcionD, dificultad } = question


    return (
        <>
            <h3>{pregunta}</h3>
            <h3>{dificultad}</h3>
            <button>{opcionA}</button>
            <button>{opcionB}</button>
            <button>{opcionC}</button>
            <button>{opcionD}</button>
        </>
    )
}

export default Question;