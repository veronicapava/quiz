import { useState, useContext } from "react";
import Menuprincipal from "./Components/Menuprincipal";
import Quiz from "./Components/Quiz";
import Final from "./Components/Final";
import QuizContext from "./Provider/Contexts"

function App() {

  const [gameState, setGameState] = useState("menu");

  return (
    <div className="app">
      <h1>Preguntas y Respuestas</h1>

      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <Menuprincipal />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "final" && <Final />}
      </QuizContext.Provider>

    </div>
  );
}

export default App;
