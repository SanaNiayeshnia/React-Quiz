import { useQuiz } from "../contexts/QuizContext";
import OptionList from "./OptionList";
import "./Question.css";
export default function Question() {
  const { questions, currentQuestion } = useQuiz();
  return (
    <div className="question-container">
      <h3 className="question">{questions[currentQuestion - 1].question}</h3>
      <OptionList />
    </div>
  );
}
