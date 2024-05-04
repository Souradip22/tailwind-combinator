import React from "react";

export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-20 flex flex-col  mx-4 sm:mx-6 md:mx-8">
      <h1 className="font-bold text-xl md:text-3xl  mb-4 text-black dark:text-white  my-20">
        {title} for <span className="header-gradient">TailwindCSS</span>
      </h1>
      <h2 className=" text-gray-700 font-normal dark:text-gray-400   ">
        {description}
      </h2>
      <p className=" text-gray-700 font-normal dark:text-gray-400    mt-4 ">
        {" "}
        📌 Press
        <span className="bg-gray-50 rounded-md  border-gray-100 px-2 py-1 mx-2">
          ⌘+D
        </span>{" "}
        to bookmark this page.
      </p>{" "}
      <hr className="  mt-10 " />
    </div>
  );
}
