import { ICustomCard } from "@/lib/types";

const CardType10: ICustomCard = {
  title: "Card type 10",
  source: (
    <div className="group flex flex-col w-full h-full relative px-6 py-5 bg-gradient-to-b from-lime-300 to-lime-100 items-center rounded-md rounded-br-[100px] text-gray-800 dark:text-gray-800">
      <div className="absolute border bg-gray-50 border-lime-500 text-lime-new rounded-full top-[-20px] right-[10px]  px-3 py-2">
        Popular
      </div>
      <div className=" mb-4">
        <div className="font-bold text-lg leading-relaxed  text-center mb-3">
          Lime
        </div>
        <div className=" overflow-hidden w-full rounded-xl">
          <img
            src="https://source.unsplash.com/c5_N5ak_kJU"
            alt="art cover"
            loading="lazy"
            className=" w-full  object-contain transition duration-500 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="mb-5">
        <div className="font-bold text-xl  text-center">Title goes here</div>
      </div>
      <div className="text-sm px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        laudantium, fugiat debitis quia alias quidem vel nisi nesciunt dolorum
        harum, culpa porro! Minima corrupti itaque
      </div>
    </div>
  ),
};

export default CardType10;
