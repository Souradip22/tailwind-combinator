import { IButton } from "@/lib/types";

const ButtonType1: IButton = {
  title: "Button type 1",
  source: (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-lime-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative px-6 py-3 bg-gray-200 text-black rounded-lg">
        Button 1
      </div>
    </div>
  ),
};

export default ButtonType1;
