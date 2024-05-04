import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Box Shadows | Tailwind Combinator",
  description:
    "Discover a handpicked selection of box shadows for TailwindCSS. Easily apply these shadows to your HTML div sections by clicking to copy the styles. Available as classes or vanilla CSS for instant application.",
  keywords: "Tailwind box shadows, copy & paste, responsive",
};

export default function BoxShadowLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
