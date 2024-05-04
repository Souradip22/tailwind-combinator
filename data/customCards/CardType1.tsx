import { ICustomCard } from "@/lib/types";

const CardType1: ICustomCard = {
  title: "Card type 1",
  source: (
    <div className="group mt-[15%] flex flex-col items-center p-8 bg-gray-100  gap-[2rem] rounded-2xl dark:bg-gray-800">
      <div className="relative -mt-[30%] md:-mt-[25%]  w-full  rounded-xl overflow-hidden shadow-2xl transition duration-500 group-hover:scale-105">
        <img
          title="portfolio minute app"
          alt="portfolio minute app"
          decoding="async"
          width={600}
          height={500}
          src="https://source.unsplash.com/bs2Ba7t69mM"
          className="h-64 w-full object-cover "
          loading="lazy"
        />
      </div>
      <div>
        <p className="text-base font-bold text-neutral-900 dark:text-neutral-200">
          Portfolio Minute
        </p>
        <p className="mt-2 text-sm font-normal text-neutral-600 dark:text-neutral-400">
          Portfolio Minute is your ultimate tool for unleashing creativity and
          efficiency, enabling you to effortlessly construct a visually striking
          portfolio in just 60 seconds. Say goodbye to hours of tedious work and
          hello to a showcase that dazzles and impresses with ease.
        </p>
        <div className="flex gap-2 flex-wrap my-2">
          <span className="bg-purple-500/10 text-purple-500 font-semibold rounded text-xs py-1 px-2">
            NextJs
          </span>
          <span className="bg-purple-500/10 text-purple-500 font-semibold rounded text-xs py-1 px-2">
            Vercel
          </span>
          <span className="bg-purple-500/10 text-purple-500 font-semibold rounded text-xs py-1 px-2">
            NextAuth
          </span>
        </div>
        <span className="flex mt-4 ">
          <a
            className="text-white transition duration-150 ease-in-out p-2 text-xs rounded-md bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-700 hover:to-purple-700 group"
            target="_blank"
            rel="noreferrer"
            href="https://portfoliominute.in"
          >
            Live Demo{" "}
            <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              →
            </span>
          </a>
        </span>
      </div>
    </div>
  ),
};

export default CardType1;
