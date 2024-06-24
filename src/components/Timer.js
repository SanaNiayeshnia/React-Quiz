import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Timer() {
  const { timer, dispatch } = useQuiz();
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "decTimer" });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <p className="timer">
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </p>
  );
}
