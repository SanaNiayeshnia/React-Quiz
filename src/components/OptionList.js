import { useQuiz } from "../contexts/QuizContext.js";
import Option from "./Option.js";
import "./OptionList.css";
export default function OptionList() {
  const { questions, currentQuestion } = useQuiz();
  return (
    <ul className="option-list">
      {questions[currentQuestion - 1].options.map((option, index) => (
        <Option index={index} key={index} />
      ))}
    </ul>
  );
}
