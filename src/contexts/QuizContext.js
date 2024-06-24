import { createContext, useContext, useEffect, useReducer } from "react";

const SECS_PER_QUESTION = 30;

const initialState = {
  status: "loading",
  questions: [],
  currentQuestion: 1,
  points: 0,
  answer: null,
  highscore: 0,
  timer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.preload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return {
        ...state,
        status: "active",
        timer: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      return { ...state, answer: action.preload };
    case "addToPoints":
      return { ...state, points: state.points + action.preload };
    case "nextQuestion":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answer: null,
      };
    case "finishQuiz":
      return {
        ...state,
        status: "finished",
        highscore:
          state.highscore < state.points ? state.points : state.highscore,
      };
    case "restart":
      return {
        questions: state.questions,
        status: "ready",
        currentQuestion: 1,
        points: 0,
        answer: null,
        highscore: state.highscore,
        timer: 480,
      };
    case "decTimer":
      return {
        ...state,
        timer: state.timer - 1,
        status: state.timer === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("unknown action type" + action.type);
  }
}

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions } = state;
  const totalPoints = questions.reduce(
    (total, question) => total + question.points,
    0
  );

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", preload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider value={{ ...state, totalPoints, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const q = useContext(QuizContext);
  if (q === undefined)
    throw new Error("You can't use a context outside its provider!");
  return q;
}

export { QuizProvider, useQuiz };
