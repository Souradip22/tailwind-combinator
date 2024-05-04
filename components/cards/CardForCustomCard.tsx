import { IButton } from "@/lib/types";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";
import { toast } from "sonner";

export default function CardForCustomCard({
  source,
  animation,
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
    <div className="relative">
      <div>{source}</div>
      <div
        className="mt-4 flex rounded bg-gray-100 text-gray-800 items-center justify-between py-3 px-3 gap-2 cursor-pointer"
        onClick={handleCopySource}
      >
        {favourite && (
          <span className=" text-red-500 ">
            <FaHeart className="animate-pulse" />
          </span>
        )}
        <span className="flex gap-2 items-center">
          {copy ? <LuCopyCheck /> : <LuCopy />}{" "}
          {copy ? "Copied !!!" : "Copy Code"}
        </span>
      </div>
    </div>
  );
}
