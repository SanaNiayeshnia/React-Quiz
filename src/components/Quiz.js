import "./Quiz.css";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Timer from "./Timer";
import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Quiz() {
  const { questions, currentQuestion, answer, dispatch } = useQuiz();

  useEffect(() => {
    document.title = "The React Quiz | question " + currentQuestion;
    return () => {
      document.title = "The React Quiz";
    };
  }, [currentQuestion]);

  return (
    <div className="quiz-container">
      <ProgressBar />
      <Question key={currentQuestion} />
      <div className="bottom">
        <Timer />
        {answer !== null && (
          <button
            onClick={() =>
              currentQuestion < questions.length
                ? dispatch({ type: "nextQuestion" })
                : dispatch({ type: "finishQuiz" })
            }
          >
            {currentQuestion === questions.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}
