import { ICustomCard } from "@/lib/types";
import { FaGithub, FaGlobe } from "react-icons/fa6";

const CardType3: ICustomCard = {
  title: "Card type 3",
  favourite: true,
  source: (
    <div className="group flex h-full w-full flex-col overflow-hidden rounded-lg  hover:scale-[1.03] transition-all ease-out duration-300 border dark:border-gray-500">
      <div className="relative flex h-14 w-full flex-row items-center space-x-2 px-4 bg-gray-100 text-gray-500 dark:bg-gray-800 group-hover:text-gray-700 dark:group-hover:text-gray-300">
        <div className="h-3 w-3 z-10 rounded-full bg-red-200   xs:opacity-100 text-black flex group-hover:bg-red-500 transition-all ease-out duration-300"></div>
        <div className="h-3 w-3 z-10 rounded-full bg-amber-200   xs:opacity-100 text-black flex group-hover:bg-amber-500 transition-all ease-out duration-300"></div>
        <div className="h-3 w-3 z-10 rounded-full bg-green-200   xs:opacity-100 text-black flex group-hover:bg-green-500 transition-all ease-out duration-300"></div>
        <span className="flex-grow"></span>
        <div className="absolute left-0 !ml-0 w-full">
          <div className="mx-auto w-[calc(100%-16px)] whitespace-nowrap rounded-md bg-gray-200 py-1 px-4 text-center text-sm dark:bg-gray-700 font-bold xs:w-72 sm:w-80 transition-all ease-out duration-300">
            Portfolio Minute
          </div>
        </div>
        <span className="flex gap-3 xs:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all ease-out duration-300 cursor-pointer">
          <FaGlobe />
          <FaGithub />
        </span>
      </div>
      <div className="bg-gray-50 glass dark:bg-gray-900 p-6 md:p-8 transition-all ease-out duration-300 h-full">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="https://source.unsplash.com/Im7lZjxeLhg"
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="m-auto pt-3">
          <p className="text-base font-bold text-neutral-900 dark:text-neutral-200"></p>
          <p className="mt-2 text-sm font-normal text-neutral-600 dark:text-neutral-400">
            Portfolio Minute is your ultimate tool for unleashing creativity and
            efficiency, enabling you to effortlessly construct a visually
            striking portfolio in just 60 seconds. Say goodbye to hours of
            tedious work and hello to a showcase that dazzles and impresses with
            ease.
          </p>
          <div className="flex gap-2 flex-wrap my-2">
            <span className="bg-red-500/20 text-red-300 group-hover:text-red-500 font-semibold rounded text-xs py-1 px-2">
              NextJs
            </span>
            <span className="bg-yellow-500/20 text-yellow-300 group-hover:text-yellow-500 font-semibold rounded text-xs py-1 px-2">
              Vercel
            </span>
            <span className="bg-green-500/20 text-green-300 group-hover:text-green-500 font-semibold rounded text-xs py-1 px-2">
              NextAuth
            </span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default CardType3;
