import "./App.css";
import MainHeader from "./components/header/mainHeader/MainHeader";
import { useQuestionsStore } from "./store/Questions";

function App() {

  const questions = useQuestionsStore(state => state.questions)
  console.log(questions)

  return (
    <main>
      <MainHeader />
    </main>
  )
}

export default App;
