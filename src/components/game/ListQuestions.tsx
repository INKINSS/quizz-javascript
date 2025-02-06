import { type Question as QuestionType } from "../../types";
import { Card } from "../ui/card";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lioshi } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useQuestionsStore } from "../../store/Questions";

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, isCorrectUserAnswer } = info;
  // el usuario no ha seleccionado nada
  if (userSelectedAnswer === undefined) return "transparent";
  // si ya seleccionó y la respuesta es correcta
  if (userSelectedAnswer === index && isCorrectUserAnswer)
    return "bg-green-200";
  // si ya seleccionó pero la respuesta es incorrecta
  if (userSelectedAnswer === index && !isCorrectUserAnswer) return "bg-red-200";
  //si el usuario seleccionó la respuesta incorrecta y la respuesta correcta es otra
  if (userSelectedAnswer !== index && isCorrectUserAnswer) return "bg-red-200";
  if (index === info.correctAnswer) return "bg-green-200";
  return "bg-transparent";
};

export const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);
  const createHandleClick = (index: number) => () => {
    if (selectAnswer) {
      selectAnswer(info.id, index);
    }
  };

  return (
    <Card className="border-none">

        <span className="w-full text-slate-800 text-[1.2rem] font-semibold text-center inline-block">
          {info.question}
        </span>
      <SyntaxHighlighter
        customStyle={{ marginTop: "10px" }}
        style={lioshi}
        language="javascript"
      >
        {info.code}
      </SyntaxHighlighter>
      <div className="mt-4">
        {info.answers.map((respuesta, index) => (
          <button
            disabled={info.userSelectedAnswer !== undefined}
            key={index}
            onClick={createHandleClick(index)}
            className={`w-full p-2 text-left hover:bg-slate-300 ${getBackgroundColor(
              info,
              index
            )}`}
          >
            {respuesta}
          </button>
        ))}
      </div>
    </Card>
  );
};
