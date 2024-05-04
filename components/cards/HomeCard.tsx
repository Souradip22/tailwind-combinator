import { IHomeCardItem } from "@/lib/types";
import Link from "next/link";
import React from "react";

export default function Home8ard({
  item,
}: {
  item: IHomeCardItem;
}): React.JSX.Element {
  const { label, link, description } = item;
  return (
    <div className="group rounded-lg h-128 relative shadow-[rgba(0,0,0,.1)_0_1px_2px_0] dark:shadow-[rgba(255,255,255,.2)_0_1px_2px_0]  transition-all ease-out duration-300 hover:shadow-[rgba(0,0,0,.15)_2.4px_2.4px_3.2px] dark:hover:shadow-[rgba(255,255,255,.15)_2.4px_2.4px_3.2px]  dark:text-gray-200 rounded-br-[80px] ">
      <div
        style={{
          top: "30px",
          right: "0px",
          opacity: 0.2,
          width: "50%",
        }}
        className="absolute h-[2px] bg-gray-200 dark:bg-gray-600"
      ></div>
      <div
        style={{
          bottom: "30px",
          left: "0px",
          opacity: 0.2,
          width: "50%",
        }}
        className="absolute h-[2px] bg-gray-200 dark:bg-gray-600"
      ></div>
      <div
        style={{
          right: "30px",
          bottom: "18px",
          opacity: 0.2,
          height: "50%",
        }}
        className="absolute  w-[2px] bg-gray-200 dark:bg-gray-600"
      ></div>
      <div className="p-5 md:p-10">
        <div className="py-4">
          <h1 className="font-semibold  ">{label}</h1>
          <p className="mt-2 text-sm  text-gray-400">{description}</p>
          <div className="flex gap-4 mt-6">
            <Link className="relative group" href={link}>
              <button className="group border bg-stone-900 text-gray-300 px-3 py-2 rounded-md text-xs font-semibold hover:text-gray-50 transition ease-in-out duration-200">
                Examples
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
                >
                  →
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
