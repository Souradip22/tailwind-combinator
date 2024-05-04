import Link from "next/link";
import React from "react";
import Image from "next/image";
import { navItems } from "@/lib/constant";

export default function PageFooter() {
  return (
    <>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0"></hr>
      <div className="relative z-50 mx-auto max-w-5xl px-8 py-4">
        <div className="grid grid-cols-1 items-start md:grid-cols-4 ">
          <div className="flex flex-col items-start justify-start">
            <span className="text-left text-sm font-normal text-gray-400">
              <Link
                href={"/"}
                className="hidden lg:inline-flex items-center gap-1  font-semibold text-dark dark:text-white"
              >
                <Image
                  src="/logo/logo-no-background.svg"
                  alt="Tailwind Combinator logo"
                  width={1200}
                  height={600}
                  className="h-10 w-10 bg-gray-100 rounded-md"
                />
                <span className="text-gray-800 dark:text-gray-100">
                  Tailwind Combinator
                </span>
              </Link>
              <span className="block mt-5">
                Crafted by
                <Link
                  href={"https://souradip.ch"}
                  target="_blank"
                  className={` hover:text-amber-800   py-2 cursor-pointer dark:hover:text-amber-400
                text-amber-600  dark:text-amber-300
                  
                  `}
                >
                  {" "}
                  Souradip
                </Link>
              </span>
            </span>
          </div>
          <div className="col-span-3  flex  flex-wrap text-sm md:justify-end">
            <div className="mb-4 flex flex-col">
              {navItems.slice(0, 4).map((d, i) => (
                <Link
                  key={i}
                  href={d.link as string}
                  className={`flex items-center gap-4   hover:text-gray-800s py-2 cursor-pointer dark:hover:text-gray-50
                text-gray-600  dark:text-gray-300
                  
                  `}
                >
                  {d.iconImage && <d.iconImage className={`w-5 h-5 `} />}
                  {d.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
