import { IButton } from "@/lib/types";

const ButtonTypeTest: IButton = {
  title: "Button type Test",
  source: (
    <a
      className="relative inline-flex items-center justify-center leading-normal  group cursor-pointer select-none focus:outline-none  "
      href="javascript:;"
    >
      <div className=" h-full font-semibold w-full border border-lime-400 group-active:border-[#84cc16] flex transform-gpu transition-transform  rounded-sm  py-2 px-3 text-sm hover:translate-x-2 hover:translate-y-2 bg-white text-black z-[2]">
        <span className="mx-auto text-lime-600">
          <p>Button 8</p>
        </span>
      </div>
      <div className="absolute h-full w-full rounded-sm bg-gradient-to-r from-[#84cc16] via-[#bef264] to-[#22c55e] top-2 left-2"></div>
    </a>
  ),
};

export default ButtonTypeTest;
