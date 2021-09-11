const Header = props => {
    return (
        <header>
            <ul>
                <h1>Quiz</h1>
                <h1> Ronda {props.round} </h1>
                <li>Score</li>
            </ul>
        </header>
    )
}

export default Header;