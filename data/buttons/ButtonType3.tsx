import { IButton } from "@/lib/types";

const ButtonType3: IButton = {
  title: "Button type 3",
  source: (
    <a
      href="#demo"
      className="flex-shrink-0 inline-flex mr-3 items-center justify-center px-5   py-3  text-sm md:text-base font-semibold leading-6 text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:bg-gradient-to-l  rounded-full shadow-md"
    >
      Button 3
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 13l-5 5m0 0l-5-5m5 5V6"
        ></path>
      </svg>
    </a>
  ),
};

export default ButtonType3;
