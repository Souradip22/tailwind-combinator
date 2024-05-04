import React from "react";

export default function Warning() {
  return (
    <div className="max-w-5xl mx-auto">
      <aside className=" relative  mx-8 p-4 border border-[#eee9]  my-12  rounded-lg text-gray-600 dark:text-gray-400">
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-[#181a1b] ">
          <svg
            aria-hidden="true"
            className="w-4 h-4 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="#FFBF00"
              d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
            ></path>
          </svg>
        </div>

        <p className="mb-0 text-xs ">
          Styling Declaration:
          <br />
          Some of the design styles are inspired by different websites. I&apos;m
          trying to make it handy with tailwind css. DM me
          <span>
            <a
              href="https://api.whatsapp.com/send/?phone=7318757426&text=I+want+get+credit+for+this+component&type=phone_number&app_absent=0"
              target="_blank"
              className="text-amber-500 border-b mx-2"
            >
              here
            </a>
          </span>
          for credits.
        </p>
        <br />
        <p className="mb-0 text-xs ">
          Image Credits:
          <br />
          All images sourced from
          <span>
            <a
              href="https://unsplash.com/"
              target="_blank"
              className="text-amber-500 border-b mx-1"
            >
              Unsplash.
            </a>
          </span>
          I appreciate the talented photographers who generously share their
          work.
        </p>
      </aside>
    </div>
  );
}
