import { IButton } from "@/lib/types";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";
import { toast } from "sonner";

export default function ButtonCard({
  source,
  animation, // to be added later
  favourite,
}: IButton): React.JSX.Element {
  const [copy, setCopy] = useState(false);

  function handleCopySource() {
    setCopy(true);
    toast.success("Copied successfully!!! 🥳 ");
    navigator.clipboard.writeText(ReactDOMServer.renderToStaticMarkup(source));
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  }
  return (
    <div>
      <div
        className={`relative bg-gray-50  dark:bg-gray-800 h-28 w-full rounded-lg flex 
      ${copy ? "shadow-[0_3px_3px_0_rgba(0,0,0,0.15)]" : ""} 
      
      `}
      >
        <div className="m-auto dark:text-gray-200 ">{source}</div>
        <span
          className="h-6 w-6 absolute right-0 top-2 text-cyan-500 cursor-pointer"
          onClick={handleCopySource}
        >
          {copy ? <LuCopyCheck /> : <LuCopy />}
        </span>
        {favourite && (
          <span className="h-6 w-6 absolute left-2 top-2 text-red-500 ">
            <FaHeart />
          </span>
        )}
      </div>
    </div>
  );
}
