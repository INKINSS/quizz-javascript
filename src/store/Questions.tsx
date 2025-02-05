import { create } from "zustand";
import { type Question } from "../types";

interface State {
  questions: Question[];
  currentQuestionIndex: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer?: (questionId: number, answerIndex: number) => void;
  goNextQuestion?: () => void;
  goPrevQuestion?: () => void;
}

export const useQuestionsStore = create<State>((set, get) => ({
  questions: [],
  currentQuestionIndex: 0,
  fetchQuestions: async (limit) => {
    const response = await fetch("http://localhost:5173/data.json");
    const data = await response.json();
    const questions = data.sort(() => Math.random() - 0.5).slice(0, limit);
    set({ questions });
  },
  //usar el structureClone para no mutar el estado
  selectAnswer: (questionId: number, answerIndex: number) => {
    const { questions } = get();
    const newQuestions = structuredClone(questions);
    const questionIndex = newQuestions.findIndex((q) => q.id === questionId);
    const questionInfo = newQuestions[questionIndex];
    const isCorrectUserAnswer =
      questionInfo.correctAnswer === answerIndex;
    //cambiar la informacion en la copia de la pregunta
    newQuestions[questionIndex] = {
      ...questionInfo,
      isCorrectUserAnswer,
      userSelectedAnswer: answerIndex,
    };
    set({ questions: newQuestions });
  },
  goNextQuestion: () => {
    const { questions, currentQuestionIndex } = get();
    const nextQuestionIndex = currentQuestionIndex + 1;
    if(nextQuestionIndex < questions.length){
      set({ currentQuestionIndex: nextQuestionIndex });
    }
  },
  goPrevQuestion: () => {
    const { currentQuestionIndex } = get();
    const prevQuestionIndex = currentQuestionIndex - 1;
    if(prevQuestionIndex >= 0){
      set({ currentQuestionIndex: prevQuestionIndex });
    }
  },
}));
