import { useQuestionsStore } from "@/store/Questions";
import { Question } from "./ListQuestions";

export const Game = () => {
  const question = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore(
    (state) => state.currentQuestionIndex
  );
  const questionInfo = question[currentQuestion];

  return <Question info={questionInfo} />;
};
