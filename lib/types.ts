import { IconType } from "react-icons";

export interface IBoxShadowConfigType {
  name?: string;
  shadow?: string;
  vanillaCSS?: string;
  customCSS?: string;
}

export interface IButton {
  title?: string;
  source: JSX.Element;
  animation?: string; //to be added later
  favourite?: boolean;
}

export interface ICustomCard {
  title?: string;
  source: JSX.Element;
  animation?: string; //to be added later
  favourite?: boolean;
  fullWidth?: boolean;
}

export interface INavItem {
  label: string;
  link?: string;
  children?: INavItem[];
  iconImage?: IconType;
  activeRoute?: any;
  setActiveRoute?: any;
  scrollToSection?: any;
}

export interface IHomeCardItem {
  label: string;
  link: string;
  description: string;
}
