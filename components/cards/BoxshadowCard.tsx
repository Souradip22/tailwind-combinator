"use client";
import { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { FaHeart } from "react-icons/fa";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { toast } from "sonner";

export const BoxShadowCard = ({
  shadow,
  name,
  vanillaCSS,
  customCSS,
  favorite,
}: {
  shadow?: string;
  name?: string;
  vanillaCSS?: string;
  customCSS?: string;
  favorite?: boolean;
}) => {
  const [copied, setCopy] = useState(false);
  const [copyCss, setCopyCss] = useState(false);
  const classNames = (...classes: string[]) => classes.join(" ");

  function handleCopySource(type: string) {
    console.log(type);
    if (type == "cssOnly") {
      setCopyCss(true);
    }
    if (type == "tailwind") {
      setCopy(true);
    }

    toast.success("Copied successfully!!! 🥳 ");
    navigator.clipboard.writeText(
      ReactDOMServer.renderToStaticMarkup(
        type == "cssOnly" ? vanillaCSS : shadow
      )
    );
    setTimeout(() => {
      setCopy(false);
      setCopyCss(false);
    }, 1000);
  }
  return (
    <>
      <div
        className={classNames(
          "relative flex flex-col card-style group overflow-hidden",
          customCSS as string,
          shadow as string
        )}
      >
        {favorite && (
          <span className="absolute top-2 text-red-500 left-2">
            <FaHeart className="animate-pulse" />
          </span>
        )}
        <button
          onClick={() => {
            handleCopySource("tailwind");
          }}
          className={`flex gap-2 items-center px-2 py-1 rounded-md bg-white  border mb-4 hover:bg-gray-50  transition  text-xs text-gray-400
        ${copied && "text-pink-500"}
        `}
        >
          {copied ? <LuCopyCheck /> : <LuCopy />}
          Tailwind class
        </button>
        <button
          onClick={() => {
            handleCopySource("cssOnly");
          }}
          className={`flex gap-2 items-center px-2 py-1 rounded-md bg-white  border mb-4 hover:bg-gray-50  transition  text-xs text-gray-400
        ${copyCss && "text-indigo-500"}
        `}
        >
          {copyCss ? <LuCopyCheck /> : <LuCopy />}
          css style
        </button>
      </div>
    </>
  );
};
