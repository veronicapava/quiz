import { connect } from 'react-redux';

const Header = props => {
    return (
        <header>
            <ul>
                <h1>Quiz</h1>
                <h1>Ronda: {props.rondaCounter} </h1>
                <h3>Jugador:{props.nombreJugador} </h3>
                <h4>Score: ${props.puntosCounter}</h4>
            </ul>
        </header>
    )
}

const mapStateToProps = state => ({
    rondaCounter: state.ronda,
    puntosCounter: state.puntos,
    nombreJugador: state.nombre,

})
const mapDispatchToProps = () => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Header);