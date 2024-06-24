import { useQuiz } from "../contexts/QuizContext";
import "./ProgressBar.css";
export default function ProgressBar() {
  const { questionCount, currentQuestion, points, totalPoints, answer } =
    useQuiz();
  return (
    <div className="progress-container">
      <progress
        value={currentQuestion - 1 + Number(answer !== null)}
        min={0}
        max={questionCount}
        className="progress-bar"
      ></progress>
      <div className="progress-info">
        <p>
          Question {currentQuestion}/{questionCount}
        </p>
        <p>
          {points}/{totalPoints} points
        </p>
      </div>
    </div>
  );
}
