import { ICustomCard } from "@/lib/types";
import { BiSolidCircle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";

const CardType2: ICustomCard = {
  title: "Card type 2",
  source: (
    <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src="https://source.unsplash.com/bq31L0jQAjU"
          alt="art cover"
          loading="lazy"
          width="1000"
          height="667"
          className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-6 relative">
        <h3 className="font-semibold text-gray-800 dark:text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h3>
        <p className="my-4 text-sm text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          adipisci corporis atque rerum facilis perspiciatis eaque,
          reprehenderit, ea laborum eius eligendi dolorum dolore incidunt
          accusamus odio animi dignissimos ipsum corrupti.
        </p>
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-center text-xs border border-green-500  flex items-center justify-center gap-2 text-gray-800 dark:text-white rounded-lg px-2 py-2 transition duration-300  font-semibold hover:bg-green-500 hover:border-green-600"
          >
            Demo
            <span className="animate-pulse">
              <BiSolidCircle />
            </span>
          </a>

          <a
            href="#"
            className="text-center text-xs border border-blue-500  flex items-center justify-center gap-2 text-gray-800 dark:text-white rounded-lg px-2 py-2 transition duration-300  font-semibold hover:bg-blue-500 hover:border-blue-600"
          >
            <span className="animate-pulse">
              <FaGithub />
            </span>
            Code
          </a>
        </div>
      </div>
    </div>
  ),
};

export default CardType2;
