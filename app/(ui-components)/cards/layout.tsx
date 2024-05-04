import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cards | Tailwind Combinator",
  description:
    "Discover a curated selection of card designs created solely with TailwindCSS classes. Elevate the visual appeal of your website by seamlessly integrating these Tailwind classes into your HTML. Effortlessly enhance your cards with just a few clicks.",
  keywords: "Tailwind css cards, copy & paste, responsive",
};

export default function CardsLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
