import { useQuiz } from "../contexts/QuizContext";
import "./Finished.css";
export default function Finished() {
  const { points, totalPoints, highscore, dispatch } = useQuiz();
  const pointsPercentage = Math.floor((points / totalPoints) * 100);
  let emoji;
  if (pointsPercentage === 100) emoji = "🥇";
  else if (pointsPercentage > 80 && pointsPercentage < 100) emoji = "👌";
  else if (pointsPercentage > 60 && pointsPercentage <= 80) emoji = "🙂";
  else if (pointsPercentage > 40 && pointsPercentage <= 60) emoji = "🤨";
  else emoji = "🤔";

  return (
    <div className="finished-box">
      <p className="score">
        {emoji} You scored {points} out of {totalPoints} points (
        {pointsPercentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="restart-btn"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}
