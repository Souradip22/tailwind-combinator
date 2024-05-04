import { IButton } from "@/lib/types";
import { FaArrowUp } from "react-icons/fa6";

const ButtonType20: IButton = {
  title: "Button type 20",
  source: (
    <a
      href="javascript.void(0)"
      download=""
      target="_blank"
      className="text-center text-sm border border-lime-500 bg-lime-500 flex items-center justify-center gap-2 text-white rounded-lg px-2 py-3.5 transition duration-300 text-[15px] font-semibold hover:bg-lime-600 hover:border-lime-600"
    >
      Button 20
      <span className="animate-bounce">
        <FaArrowUp />
      </span>
    </a>
  ),
};

export default ButtonType20;
