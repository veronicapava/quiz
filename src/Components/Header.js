import { connect } from 'react-redux';
import { PREMIOS } from "../constantes"
import { asignadorPremios } from "../utils"
import "../styles/styles.scss"


const Header = props => {
    return (
        <div className="ed-grid row-gap  s-cross-center s-bg-black s-pxy-2 s-mb-2">
            <header className="ed-grid s-grid-4  s-bg-black row-gap">
                <h3 className="lg-to-center color light-color">Ronda: {props.rondaCounter} </h3>
                <h3 className="lg-to-center color light-color">Jugador: {props.nombreJugador} </h3>
                <h3 className="lg-to-center color light-color">Score: ${props.puntosCounter}</h3>
                <h3 className="lg-to-center color light-color">En Juego: ${asignadorPremios(props.rondaCounter, PREMIOS)}</h3>
            </header>
        </div>
    )
}

const mapStateToProps = state => ({
    rondaCounter: state.ronda,
    puntosCounter: state.puntos,
    nombreJugador: state.nombre,

})
const mapDispatchToProps = () => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Header);