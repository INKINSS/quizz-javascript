export interface Question {
    id: number;
    pregunta: string;
    codigo: string;
    respuestas: string[];
    respuesta_correcta: string;
    dificultad: string;
    userSelectedAnswer?: number;
    isCorrectUserAnswer?: boolean;
}