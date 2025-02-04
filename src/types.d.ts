export interface Question {
    id: number;
    pregunta: string;
    opciones: string[];
    respuesta_correcta: string;
    dificultad: string;
    userSelectedAnswer?: number;
    isCorrectUserAnswer?: boolean;
}