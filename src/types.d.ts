export interface Question {
    id: number;
    question: string;
    code: string;
    answers: string[];
    correctAnswer: number;
    dificulty: string;
    userSelectedAnswer?: number;
    isCorrectUserAnswer?: boolean;
}