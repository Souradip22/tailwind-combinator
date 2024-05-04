"use client";
import HomeCard from "@/components/cards/HomeCard";
import { homeCardContents } from "@/lib/constant";
import { IHomeCardItem } from "@/lib/types";
import { BsGithub } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <span className="absolute md:top-[30%] md:left-[30%] dark:bg-fuchsia-600 blur-[150px] size-[150px] top-[50%] left-[50%] bg-fuchsia-400"></span>
      <section className="mx-auto flex max-w-5xl flex-col gap-2 pt-24 md:pt-24 px-8 relative text-gray-800 dark:text-gray-100">
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#00000055_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] shadow-bg [background-size:20px_20px]"></div>
        <h1 className="md:text-[4rem]  max-w-4xl text-left text-[2rem] font-bold leading-[2rem] md:leading-[5rem] dark:text-white tracking-tighter text-3xl md:text-6xl  header-gradient">
          Beautifully Crafted Components
        </h1>
        <h3 className="w-full flex-wrap">
          Discover finely-crafted Tailwind CSS components to enhance your web
          designs. Simply copy and paste the code to begin using them. The
          source code for this project is accessible in the below link, where
          contributions are also welcome.
        </h3>
        <div className="flex w-full  space-x-4 py-4 md:pb-10 2xl:pt-14 relative mt-4 gap-2">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative flex gap-2 items-center px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <BsGithub />
              GitHub
            </span>
          </button>
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col gap-2 px-8 relative text-gray-800 dark:text-gray-100 pb-16 2xl:pt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full  gap-8">
          {homeCardContents.map((item: IHomeCardItem, index: number) => {
            return <HomeCard key={`homecard-${index}`} item={item} />;
          })}
        </div>
      </section>
    </>
  );
}
