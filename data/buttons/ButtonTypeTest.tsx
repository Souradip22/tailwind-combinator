import { IButton } from "@/lib/types";
//this is just for testing purpose to see if the copied code renders correctly
const ButtonTypeTest: IButton = {
  title: "Button type Test",
  source: (
    <a
      className="relative inline-flex items-center justify-center group cursor-pointer  "
      href="#"
    >
      <div className="z-[2] h-full font-semibold w-full border border-purple-400 group-active:border-[#6f42c1] flex  transition-transform not-prose rounded-sm  py-2 px-3 text-sm hover:translate-x-2 hover:translate-y-2 bg-white ">
        <span className="mx-auto text-purple-600">
          <p>Button 10</p>
        </span>
      </div>
      <div className="absolute h-full w-full rounded-sm bg-gradient-to-r from-[#6f42c1] via-[#c3a5f3] to-[#9d72e3] top-2 left-2"></div>
    </a>
  ),
};

export default ButtonTypeTest;
