import { Button } from "@/components/ui/button";
import { useQuestionsStore } from "@/store/Questions";

export const StartButton = () => {
  const LMIT_QUESTIONS = 10;
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    //slint-disable-next-line
    fetchQuestions(LMIT_QUESTIONS);
  }

  return <Button onClick={handleClick} className="border border-slate-800 rounded-[4px]" >comenzar</Button>;
};
