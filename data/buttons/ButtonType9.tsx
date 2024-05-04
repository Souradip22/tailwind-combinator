import { IButton } from "@/lib/types";

const ButtonType9: IButton = {
  title: "Button type 9",
  source: (
    <a
      className="relative inline-flex items-center justify-center  group cursor-pointer "
      href="#"
    >
      <div className="z-[2] h-full font-semibold w-full border border-indigo-400 group-active:border-[#6573e6] flex  transition-transform  rounded-sm  py-2 px-3 text-sm hover:translate-x-2 hover:translate-y-2 bg-white text-black ">
        <span className="mx-auto text-indigo-600">
          <p>Button 9</p>
        </span>
      </div>
      <div className="absolute h-full w-full rounded-sm bg-gradient-to-r from-[#6573e6] via-[#a6b5fb] to-[#6b82d9] top-2 left-2"></div>
    </a>
  ),
};

export default ButtonType9;
