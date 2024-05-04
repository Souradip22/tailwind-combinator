import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Buttons | Tailwind Combinator",
  description:
    "Explore an array of button styles crafted exclusively using TailwindCSS classes. Easily enhance the interactivity of your website by applying these Tailwind classes directly to your HTML. Elevate your buttons' appearance and functionality with minimal effort.",
  keywords: "Tailwind buttons, copy paste, responsive",
};

export default function ButtonsLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
