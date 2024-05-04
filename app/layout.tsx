import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import MainLayout from "@/components/MainLayout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

const title = "Tailwind Combinator";
const description =
  "Discover finely-crafted Tailwind CSS components to enhance your web designs. Simply copy and paste the code to begin using them";
const image = "https://tailwindcombinator.souradip.ch/thumbnail.png";
const keywords =
  "cards, tailwind, CSS, box shadows, design, UI, components, web, development, styling, buttons, templates, responsive, layouts, grid, elements, frameworks, modern, interface, inspiration, customization";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [image],
  },
  metadataBase: new URL("https://tailwindcombinator.souradip.ch"),
  keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`relative min-h-screen  bg-white dark:bg-stone-900 text-white dark:text-black ${
          process.env.NODE_ENV == "development" ? "debug-screens" : ""
        }`}
      >
        <Providers>
          <MainLayout>{children} </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
