import { ICustomCard } from "@/lib/types";

const CardType8: ICustomCard = {
  title: "Card type 8",
  fullWidth: true,
  source: (
    <div className="flex flex-col  md:flex-row items-stretch bg-gray-100 shadow-xl rounded-xl text-gray-800 dark:bg-stone-800 dark:text-gray-50">
      <div className="flex items-center justify-center max-w-[600px] max-h-[600px] rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl overflow-hidden">
        <img
          src="https://source.unsplash.com/JRuNzvfhTe0"
          alt="Album"
          width={1200}
          height={600}
          loading="lazy"
        />
      </div>{" "}
      <div className="flex flex-col flex-1 p-4 md:p-8 gap-2 justify-between">
        <h2 className="flex items-center gap-2 text-lg leading-7 font-semibold">
          Example of a big card
        </h2>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          reprehenderit ex. Perferendis iusto, eveniet velit earum rerum neque
          beatae corporis.
        </p>{" "}
        <div className="justify-end flex flex-wrap items-start gap-2">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-stone-500 via-stone-600 to-stone-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-stone-300 dark:focus:ring-stone-800 shadow-lg shadow-stone-500/50 dark:shadow-lg dark:shadow-stone-800/80 font-medium rounded-lg text-base px-4 py-2.5 text-center me-2 mb-2"
          >
            More
          </button>
        </div>
      </div>
    </div>
  ),
};

export default CardType8;
