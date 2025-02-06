import { useQuestionsStore } from "@/store/Questions";
import { Question } from "./ListQuestions";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from "../footer/Footer";

export const Game = () => {
  const question = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore(
    (state) => state.currentQuestionIndex
  );
  const questionInfo = question[currentQuestion];
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const goPrevQuestion = useQuestionsStore((state) => state.goPrevQuestion);
  return (
    <>
    <span className="font-semibold text-slate-500">{ currentQuestion+ 1 } / { question.length }</span>
      <div className="flex">
        <Button className="text-slate-700" disabled={currentQuestion === 0} onClick={goPrevQuestion}>
          <ChevronLeft />
          anterior
        </Button>
        <Button className="text-slate-700" disabled={currentQuestion >= question.length - 1} onClick={goNextQuestion}>
          siguiente <ChevronRight />
        </Button>
      </div>
      <Question info={questionInfo} />
      <Footer />
    </>
  );
};
