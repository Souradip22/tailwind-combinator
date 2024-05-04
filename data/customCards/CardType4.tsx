import { ICustomCard } from "@/lib/types";

const CardType4: ICustomCard = {
  title: "Card type 4",
  source: (
    <div className="group rounded-lg h-128 relative border border-cyan-400 shadow-[0_0_5px_rgb(6,182,212),_0_0_2px_rgb(14,116,144)]  transition-all ease-out duration-300  hover:border-cyan-300 hover:shadow-[0_0_5px_rgb(6,182,212),_0_0_20px_rgb(14,116,144)] text-gray-400 dark:text-gray-200">
      <span className="absolute md:top-[30%] md:left-[30%] dark:bg-cyan-600 blur-[150px] size-[150px] top-[50%] left-[50%] bg-cyan-400"></span>
      <div
        style={{ top: "30px", opacity: 0.2, width: "50%" }}
        className="absolute h-[2px] bg-cyan-400"
      ></div>

      <div
        style={{ left: "30px", opacity: 0.2, height: "50%" }}
        className="absolute  w-[2px] bg-cyan-400"
      ></div>

      <div
        style={{ bottom: "30px", right: "0px", opacity: 0.2, width: "50%" }}
        className="absolute h-[2px] bg-cyan-400"
      ></div>

      <div
        style={{ right: "30px", bottom: "0px", opacity: 0.2, height: "50%" }}
        className="absolute  w-[2px] bg-cyan-400"
      ></div>
      <div className="p-5 md:p-10">
        <div className="relative overflow-hidden rounded-md">
          <img
            src="https://source.unsplash.com/y39S4lk_7jU"
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            className="h-64 w-full object-cover  transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="py-4">
          <h1 className="font-bold text-cyan-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-2 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            inventore quo eius neque atque sit nam ipsam et numquam placeat
            dolore magnam eos iusto sapiente eligendi corrupti deleniti. Ad
            voluptas sed et quibusdam asperiores voluptate
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="p-2 text-xs rounded border border-cyan-500 hover:border-cyan-500 text-cyan-500 font-semibold hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/50 focus:outline focus:outline-cyan-500/50 transition-all duration-500"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default CardType4;
