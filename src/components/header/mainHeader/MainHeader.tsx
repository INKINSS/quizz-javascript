import { JavascriptLogo } from "@/components/common/logo/JavascriptLogo";

const MainHeader = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <JavascriptLogo />
        <p className="text-white text-[2rem]">Quizz Javascript</p>
      </div>
    </header>
  );
};

export default MainHeader;
