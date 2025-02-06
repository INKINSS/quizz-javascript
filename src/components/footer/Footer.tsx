import { useQuestionsStore } from "@/store/Questions"
import { Button } from "../ui/button";

export const Footer = () => {    
    const questions = useQuestionsStore((state) => state.questions)
    const restart = useQuestionsStore((state) => state.restart)
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    questions.forEach((question) => {
        if (question.userSelectedAnswer === undefined) {
            unanswered++;
        } else if (question.isCorrectUserAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    })

    

  return (
    <footer className="flex flex-col gap-x-4 mt-8 font-semibold text-slate-900">
        <div className="flex gap-x-4">
        <p className="text-green-500">correctas: {correct}</p>
        <p className="text-red-500">incorrectas: {incorrect}</p>
        <p className="text-slate-500">pendientes: {unanswered}</p>
        </div>
        <div className="flex justify-center mt-4">
            <Button className="border border-slate-800 text-slate-800 font-[1.1rem] rounded-[5px] hover:bg-green-300 hover:text-white hover:border-none transform duration-300" onClick={() => restart && restart()}>reiniciar</Button>
        </div>
        
    </footer>
  )
}
