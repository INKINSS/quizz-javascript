import { StartButton } from "@/components/common/button/startButton/StartButton";
import { JavascriptLogo } from "@/components/common/logo/JavascriptLogo";

const MainHeader = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <JavascriptLogo />
        <p className="text-slate-700 text-[2rem]">Quizz Javascript</p>
      </div>
      <div>
        <StartButton />
      </div>
    </header>
  );
};

export default MainHeader;
