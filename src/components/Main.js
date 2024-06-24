import { useQuiz } from "../contexts/QuizContext";
import Quiz from "./Quiz";
import Welcome from "./Welcome";
import Loader from "./Loader";
import Error from "./Error";
import Finished from "./Finished";

function Main() {
  const { status } = useQuiz();

  return (
    <main>
      {status === "loading" ? (
        <Loader />
      ) : status === "ready" ? (
        <Welcome />
      ) : status === "active" ? (
        <Quiz />
      ) : status === "error" ? (
        <Error />
      ) : (
        <Finished />
      )}
    </main>
  );
}

export default Main;
