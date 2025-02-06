export interface Question {
    id: number;
    question: string;
    code: string;
    answers: string[];
    correctAnswer: number;
    difficulty: string;
    userSelectedAnswer?: number;
    isCorrectUserAnswer?: boolean;
}