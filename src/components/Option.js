import { useQuiz } from "../contexts/QuizContext";
import "./Option.css";
export default function Option({ index }) {
  const { option, question, answer, dispatch } = useQuiz();
  const correctOption = question.correctOption;

  function chooseOptionhandler() {
    answer === null && dispatch({ type: "newAnswer", preload: index });
    if (answer === null && index === correctOption)
      dispatch({ type: "addToPoints", preload: question.points });
  }
  return (
    <li
      className={`option ${answer === null && "not-responded"} ${
        answer === index && "selected"
      } ${answer !== null && index === correctOption && "true"} `}
      onClick={chooseOptionhandler}
    >
      {option}
    </li>
  );
}
