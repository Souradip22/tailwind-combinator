import { ICustomCard } from "@/lib/types";
//This is for testing purpse, to see if the copied code render correctly
const CardTypeTest: ICustomCard = {
  title: "Card type test",
  source: (
    <a className="group block" href="#">
      <div className="max-h-60 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
        <img
          className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
          src="https://source.unsplash.com/HXKqibWAgHs"
          alt="Image Description"
          loading="lazy"
        />
      </div>
      <div className="pt-4">
        <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-fuchsia-500 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
          Lorem, ipsum.
        </h3>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A numquam
          harum repellendus, reiciendis porro voluptatibus amet ratione qui
          magnam sapiente?
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 group-hover:border-fuchsia-500">
            View More
          </span>
        </div>
      </div>
    </a>
  ),
};

export default CardTypeTest;
