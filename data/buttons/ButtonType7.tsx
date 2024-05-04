import { IButton } from "@/lib/types";

const ButtonType7: IButton = {
  title: "Button type 7",
  favourite: true,
  source: (
    <a
      href="#"
      className="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-gray-800 duration-300 text-gray-800 hover:bg-gray-800 hover:text-gray-50  dark:border-gray-100 dark:text-gray-100 dark:hover:bg-white dark:hover:text-gray-900"
    >
      Button 7
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
  ),
};

export default ButtonType7;
