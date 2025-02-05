import "./App.css";
import { StartButton } from "./components/common/button/startButton/StartButton";
import MainHeader from "./components/header/mainHeader/MainHeader";
import { useQuestionsStore } from "./store/Questions";
import { Game } from "./components/game/Game.tsx";

function App() {
  const questions = useQuestionsStore((state) => state.questions);
  console.log(questions);

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <MainHeader />
      {questions.length === 0 ? <StartButton /> : <Game />}
    </main>
  );
}

export default App;
