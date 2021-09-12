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
      <main>
        <h1 className="main-header center s-pxy-1 s-mb-2"> Preguntas y Respuestas</h1>
        <div>
          <QuizContext.Provider value={{ gameState, setGameState }}>
            {gameState === "menu" && <Menuprincipal />}
            {gameState === "quiz" && <Quiz />}
            {gameState === "final" && <Final />}
            {gameState === "addquestion" && <AddQuestion />}
            {gameState === "tablero" && <Tablero />}
          </QuizContext.Provider>
        </div>
      </main>
    </Provider>
  );
}

export default App;
