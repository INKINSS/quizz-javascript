import { type Question as QuestionType } from "../../types";
import { Card } from "../ui/card";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lioshi } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Question = ({ info }: { info: QuestionType }) => {
  return (
    <Card className="border-none">
      <span className="w-full text-slate-800 text-[1.2rem] font-semibold text-center inline-block">
        {info.pregunta}
      </span>
      <SyntaxHighlighter customStyle={{ marginTop:'10px' }} style={lioshi} language="javascript">
        {info.codigo}
      </SyntaxHighlighter>
      <div>
        { info.respuestas.map((respuesta, index) => (
          <button
            key={index}
            className="w-full py-2 text-slate-800 text-[1.2rem] font-normal text-center inline-block hover:bg-slate-200"
          >
            {respuesta}
          </button>
        )) }
      </div>
    </Card>
  );
};
