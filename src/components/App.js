import "./App.css";
import Header from "./Header";

import { QuizProvider } from "../contexts/QuizContext";
import Main from "./Main";

function App() {
  return (
    <QuizProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </QuizProvider>
  );
}

export default App;
