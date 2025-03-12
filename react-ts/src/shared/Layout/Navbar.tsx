import { AlignJustify, CircleHelp, Settings, Star } from "lucide-react";
import Logo from "../../assets/ESN";
import Tabs from "./Tabs";

interface IProps {}

const Navbar = (props: IProps) => {
  return (
    <div className="bg-red-200 flex justify-between">
      <section className="flex gap-4 items-center">
        <span className="bg-primary h-12 w-12 flex justify-center items-center">
          <AlignJustify color="white" />
        </span>
        <Logo />
        <span className="w-0.5 bg-gray-300 h-8" />
        <span className="text-xs">
          <span className="block font-bold text-primary">한글시스템명</span>
          <span className="text-gray-400">English System Name</span>
        </span>
      </section>
      <section>
        <Tabs />
      </section>
      <section className="flex items-center gap-2">
        <Star color="#5B5C5B" />
        <CircleHelp color="#5B5C5B" />
        <Settings color="#5B5C5B" />
      </section>
    </div>
  );
};

export { Navbar };
