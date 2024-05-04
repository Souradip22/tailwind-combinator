import { ICustomCard } from "@/lib/types";

const CardType7: ICustomCard = {
  title: "Card type 7",
  source: (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="h-52 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-t-xl">
        <img
          src="https://source.unsplash.com/cAtzHUz7Z8g"
          alt="art cover"
          loading="lazy"
          width="1000"
          height="667"
          className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
          Lorem, ipsum.
        </span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
          lorem
        </h3>
        <p className="mt-3 text-gray-500 dark:text-neutral-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, in!
          Voluptate neque quasi numquam ducimus?
        </p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
        <a
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          href="#"
        >
          View demo
        </a>
        <a
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          href="#"
        >
          View code
        </a>
      </div>
    </div>
  ),
};

export default CardType7;
