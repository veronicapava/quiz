const Question = ({ pregunta, opcionA, opcionB, opcionC, opcionD }) => {
    return (
        <>
            <h3>{pregunta}</h3>
            <button>{opcionA}</button>
            <button>{opcionB}</button>
            <button>{opcionC}</button>
            <button>{opcionD}</button>
        </>
    )
}

export default Question;