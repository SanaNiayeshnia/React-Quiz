import { useQuiz } from "../contexts/QuizContext";
import "./Welcome.css";
export default function Welcome() {
  const { questions, dispatch } = useQuiz();
  const questionCount = questions.length;
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome To The React Quiz!</h1>
      <h3 className="welcome-description">
        {questionCount} questions to test your React mastery
      </h3>
      <button
        className="start-btn"
        onClick={() => dispatch({ type: "startQuiz" })}
      >
        Let's Start!
      </button>
    </div>
  );
}
