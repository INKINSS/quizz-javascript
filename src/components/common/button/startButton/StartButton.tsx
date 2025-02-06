import { Button } from "@/components/ui/button";
import { useQuestionsStore } from "@/store/Questions";

export const StartButton = () => {
  const LIMIT_QUESTIONS = 15;
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
  };

  return (
    <Button
      onClick={handleClick}
      className="border mt-5 border-slate-300 text-slate-300 rounded-[4px] hover:bg-slate-800 hover:text-white"
    >
      comenzar
    </Button>
  );
};
