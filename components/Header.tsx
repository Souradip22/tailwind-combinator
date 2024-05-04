import { navItems } from "@/lib/constant";
import { AiOutlineClose } from "react-icons/ai";
import ThemeSwitch from "./ThemeSwitch";
import { INavItem } from "@/lib/types";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [activeRoute, setActiveRoute] = useState("home");
  function openSideMenu() {
    setSideMenu(true);
  }
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveRoute(id);
  };

  return (
    <header className="sticky top-0 z-10 w-full  bg-white  dark:bg-stone-900">
      <div className=" max-w-5xl mx-auto text-sm flex items-center justify-between h-16 px-5">
        {/* left side  */}

        <div className="flex items-center gap-10 max-w-5xl">
          <FiMenu
            onClick={openSideMenu}
            className="cursor-pointer text-3xl lg:hidden text-gray-800 dark:text-white"
          />
          {/* logo */}
          <Link
            href={"/"}
            className="hidden lg:inline-flex items-center gap-1 px-3  font-semibold text-dark dark:text-white"
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

          <div className="hidden lg:flex items-center gap-4 transition-all mx-auto">
            {navItems.slice(0, 4).map((d, i) => (
              <Link
                key={i}
                href={d.link as string}
                className={`flex items-center gap-4   hover:text-gray-800  px-3 py-2 cursor-pointer dark:hover:text-gray-50
                text-gray-600  dark:text-gray-300
                  
                  `}
              >
                {d.iconImage && <d.iconImage className={`w-5 h-5 `} />}
                {d.label}
              </Link>
            ))}
          </div>
        </div>
        <Link
          href={"/"}
          className="inline-block lg:hidden items-center gap-1 px-3 text-2xl font-semibold text-dark dark:text-white"
        >
          <Image
            src="/logo/logo-no-background.svg"
            alt="Tailwind Combinator logo"
            width={1200}
            height={600}
            className="h-12 w-12 bg-gray-100 rounded-md"
          />
        </Link>
        {/* right side data */}
        <ThemeSwitch />
      </div>
      <MobileNav
        isSideMenuOpen={isSideMenuOpen}
        setSideMenu={setSideMenu}
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
        scrollToSection={scrollToSection}
      />
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0"></hr>
    </header>
  );
};

function MobileNav({
  isSideMenuOpen,
  setSideMenu,
  activeRoute,
  setActiveRoute,
  scrollToSection,
}: {
  isSideMenuOpen: any;
  setSideMenu: any;
  activeRoute?: any;
  setActiveRoute?: any;
  scrollToSection?: any;
}) {
  const className =
    "bg-black w-full max-w-[300px] lg:hidden transition-[margin-right] fixed  top-0 bottom-0 right-0 z-40";
  // Append class based on state of sidebar visiblity
  const appendClass = isSideMenuOpen ? " mr-0" : " mr-[-300px] md:ml-0";

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex lg:hidden fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30`}
      onClick={() => {
        setSideMenu((oldVal: any) => !oldVal);
      }}
    />
  );
  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="w-full max-w-[300px] text-base font-medium  h-full  bg-white dark:bg-stone-950 px-6 py-10  flex flex-col justify-between ">
          <div>
            <div className="flex justify-between dark:text-white">
              <span className="flex gap-2 items-center">
                <Link
                  href={"/"}
                  className="inline-block lg:hidden items-center gap-1 px-3 text-2xl font-semibold text-dark dark:text-white"
                >
                  <Image
                    src="/logo/logo-no-background.svg"
                    alt="Tailwind Combinator logo"
                    width={1200}
                    height={600}
                    className="h-12 w-12 bg-gray-100 rounded-md"
                  />
                </Link>
              </span>
              <AiOutlineClose
                onClick={() => {
                  setSideMenu((oldVal: any) => !oldVal);
                }}
                className="cursor-pointer text-2xl text-gray-800 dark:text-white"
              />
            </div>
            <div className=" flex flex-col text-base gap-2 mt-10">
              {navItems.slice(0, 4).map((d, i) => (
                <SingleNavItem
                  key={i}
                  label={d.label}
                  iconImage={d.iconImage}
                  link={d.link}
                  activeRoute={activeRoute}
                  setActiveRoute={setActiveRoute}
                  scrollToSection={scrollToSection}
                >
                  {d.children}
                </SingleNavItem>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col  gap-8  mt-4 items-center pb-20">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
      {isSideMenuOpen ? <ModalOverlay /> : <></>}
    </>
  );
}

function SingleNavItem(d: INavItem) {
  return (
    <Link
      className={`flex items-center gap-4 rounded-md  px-4 py-3 text-gray-700 dark:text-gray-100 cursor-pointer  
       `}
      href={d.link as string}
    >
      {d.iconImage && <d.iconImage className={`w-5 h-5 `} />}
      {d.label}
    </Link>
  );
}
