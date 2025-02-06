import { useState, useEffect } from "react";
import { useQuestionsStore } from "@/store/Questions";
import { Button } from "../ui/button";
import confetti from 'canvas-confetti';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Footer = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const restart = useQuestionsStore((state) => state.restart);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  });

  useEffect(() => {
    if (unanswered === 0) {
      setIsModalOpen(true);
      confetti();
    }
  }, [unanswered]);

  return (
    <footer className="flex flex-col gap-x-4 mt-8 font-semibold text-slate-900">
      <div className="flex gap-x-4">
        <p className="text-green-500">correctas: {correct}</p>
        <p className="text-red-500">incorrectas: {incorrect}</p>
        <p className="text-slate-300">pendientes: {unanswered}</p>
      </div>
      <div className="flex justify-center mt-4">
        <Button
          className="border border-slate-300 text-slate-200 font-[1.1rem] rounded-[5px] hover:bg-slate-800 hover:text-white"
          onClick={() => restart && restart()}
        >
          reiniciar
        </Button>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-slate-800 text-white border-none">
          <DialogHeader>
            <DialogTitle className="text-center text-[1.5rem]">Resultados</DialogTitle>
            <DialogDescription className="text-center text-[1.1rem]">
              Aquí están tus resultados:
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex flex-col justify-center">
            <p className="text-green-500 text-center">Correctas: {correct}</p>
            <p className="text-red-500 text-center">Incorrectas: {incorrect}</p>
            <p className="text-blue-300 text-center font-semibold">promedio: { ((correct / questions.length) * 100).toFixed(2) } pts </p>
          </div>
          <div className="flex justify-end mt-4">
            <Button className="border border-slate-300 text-slate-200 font-[1.1rem] rounded-[5px] hover:bg-slate-600 hover:text-white" onClick={() => setIsModalOpen(false)}>Cerrar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};