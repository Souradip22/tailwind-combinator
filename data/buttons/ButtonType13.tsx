import { IButton } from "@/lib/types";
import { FaArrowDown } from "react-icons/fa6";

const ButtonType13: IButton = {
  title: "Button type 13",
  favourite: true,
  source: (
    <a
      href="#"
      className="flex gap-2 items-center py-3 px-6 rounded border border-black text-white bg-black hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50 transition-all duration-500"
    >
      <FaArrowDown /> Button 13
    </a>
  ),
};

export default ButtonType13;
