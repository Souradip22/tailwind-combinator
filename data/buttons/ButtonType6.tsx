import { IButton } from "@/lib/types";

const ButtonType6: IButton = {
  title: "Button type 6",
  source: (
    <button
      className="w-full px-5 py-3 text-gray-100 transition-all bg-gradient-to-tr from-violet-500 to-orange-600 rounded-md hover:bg-violet-700 hover:scale-105 disabled:opacity-80"
      type="submit"
    >
      Button 6
    </button>
  ),
};

export default ButtonType6;
