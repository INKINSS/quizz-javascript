import { useQuestionsStore } from "@/store/Questions";
import { Question } from "./ListQuestions";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from "../footer/Footer";

export const Game = () => {
  const question = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestionIndex
  );
  const questionInfo = question[currentQuestion];
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const goPrevQuestion = useQuestionsStore((state) => state.goPrevQuestion);
  return (
    <>
      <Question info={questionInfo} />
      <div className="flex w-full justify-center items-center gap-x-2">
        <Button
          className="text-slate-700"
          disabled={currentQuestion === 0}
          onClick={goPrevQuestion}
        >
          <ChevronLeft />
          anterior
        </Button>
        <span className="font-semibold text-slate-500">
        {currentQuestion + 1} / {question.length}
      </span>
        <Button
          className="text-slate-700"
          disabled={currentQuestion >= question.length - 1}
          onClick={goNextQuestion}
        >
          siguiente <ChevronRight />
        </Button>
      </div>
      <Footer />
    </>
  );
};
