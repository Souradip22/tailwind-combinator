import { IButton } from "@/lib/types";

const ButtonType11: IButton = {
  title: "Button type 11",
  source: (
    <a
      className="relative inline-flex items-center justify-center group cursor-pointer  "
      href="#"
    >
      <div className="z-[2] h-full font-semibold w-full border border-red-400 group-active:border-[#dc2626] flex transition-transform not-prose rounded-sm  py-2 px-3 text-sm hover:translate-x-2 hover:translate-y-2 bg-white  ">
        <span className="mx-auto text-red-600">
          <p>Button 11</p>
        </span>
      </div>
      <div className="absolute h-full w-full rounded-sm bg-gradient-to-r from-[#dc2626] via-[#ff9c9c] to-[#fe4242] top-2 left-2"></div>
    </a>
  ),
};

export default ButtonType11;
