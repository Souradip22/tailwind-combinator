import { IButton } from "@/lib/types";

const ButtonType4: IButton = {
  title: "Button type 4",
  source: (
    <button className="group border bg-stone-900 text-gray-300 px-3 py-2 rounded-md text-sm font-semibold hover:text-gray-50 transition ease-in-out duration-200">
      Button 4
      <span
        aria-hidden="true"
        className="ml-1 inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
      >
        →
      </span>
    </button>
  ),
};

export default ButtonType4;
