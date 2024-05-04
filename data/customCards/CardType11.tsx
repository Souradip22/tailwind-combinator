import { ICustomCard } from "@/lib/types";

const CardType11: ICustomCard = {
  title: "Card type 11",
  fullWidth: true,
  source: (
    <div className="group bg-white dark:bg-darkSecondary p-5 sm:p-10 flex flex-col sm:flex-row gap-8 items-center  shadow-md rounded-lg mt-[30%] sm:mt-8 transition-all;">
      <div className="relative -mt-[35%] sm:-mt-0 md:-ml-[15%] w-full sm:w-1/2 md:w-8/12 shrink-0 rounded-xl overflow-hidden shadow-2xl before:absolute before:inset-0 dark:before:bg-black/20 before:z-10">
        <img
          title="title"
          alt="alt"
          loading="lazy"
          src="https://source.unsplash.com/pxoZSTdAzeU"
          width={1200}
          height={630}
          className="transition-all duration-300 lg:group-hover:scale-110  object-cover"
        />
      </div>
      <div className="flex flex-col justify-start gap-3">
        <h1 className="font-bold text-neutral-900 ">Awesome Project Name</h1>
        <p className="text-sm text-gray-400 dark:text-neutral-400 line-clamp-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          voluptates libero quis recusandae velit repellat deserunt nemo maxime
          incidunt ea temporibus pariatur praesentium quae quod cum illo
          accusamus deleniti,
        </p>

        <div className="flex flex-wrap items-center gap-1">
          <span className="px-2 py-1 text-xs text-gray-500 bg-stone-100 rounded dark:bg-darkPrimary">
            Python
          </span>
          <span className="px-2 py-1 text-xs text-gray-500 bg-stone-100 rounded dark:bg-darkPrimary">
            Java
          </span>
          <span className="px-2 py-1 text-xs text-gray-500 bg-stone-100 rounded dark:bg-darkPrimary">
            VsCode
          </span>
        </div>

        <div className="flex items-center gap-4  mt-10 w-fit ">
          <button className="group border bg-stone-900 text-gray-300 px-3 py-2 rounded-md text-sm font-semibold hover:text-gray-50 transition ease-in-out duration-200">
            View More
            <span
              aria-hidden="true"
              className="ml-1 inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  ),
};

export default CardType11;
