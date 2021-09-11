import { useState } from "react";
import Menuprincipal from "./Components/Menuprincipal";
import Quiz from "./Components/Quiz";
import Final from "./Components/Final";
import Tablero from "./Components/Tablero";
import QuizContext from "./Provider/Contexts"
import AddQuestion from "./Partbypart/AddQuestion"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {

  const [gameState, setGameState] = useState("menu");

  return (
    <Provider store={store}>
      <div className="app">
        <h1>Preguntas y Respuestas</h1>

        <QuizContext.Provider value={{ gameState, setGameState }}>
          {gameState === "menu" && <Menuprincipal />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "final" && <Final />}
          {gameState === "addquestion" && <AddQuestion />}
          {gameState === "tablero" && <Tablero />}
        </QuizContext.Provider>

      </div>
    </Provider>
  );
}

export default App;
