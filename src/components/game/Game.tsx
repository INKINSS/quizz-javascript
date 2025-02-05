import { useQuestionsStore } from "@/store/Questions";
import { Question } from "./ListQuestions";

export const Game = () => {
  const question = useQuestionsStore((state) => state.questions);
  const crrentQuestion = useQuestionsStore(
    (state) => state.currentQuestionIndex
  );
  const questionInfo = question[crrentQuestion];

  return <Question info={questionInfo} />;
};
