import type { Config } from "tailwindcss";
// const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./safelist.txt",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
    //This might not be needed, created this helper function to get all the colors and create shadows
    // ({ theme, addUtilities }: { theme: any; addUtilities: any }) => {
    //   const neonUtilities: any = {};
    //   const colors = theme("colors");
    //   let temp = [];
    //   let hold = "";
    // // shadow-[0_0_5px_#06b6d4,_0_0_20px_#0e7490]
    // for (const color in colors) {
    //   if (typeof colors[color] === "object") {
    //     const color1 = colors[color]["500"];
    //     const color2 = colors[color]["700"];
    //     temp.push({
    //       name: color,
    //       shadow: `shadow-[0_0_5px_${color1},_0_0_20px_${color2}]`,
    //       vanilaCss: `box-shadow: 0 0 5px ${color1}, 0 0 20px ${color2}`,
    //     });

    //     console.log(`shadow-[0_0_5px_${color1},_0_0_20px_${color2}]`);

    //     neonUtilities[`.neon-${color}`] = {
    //       boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
    //     };
    //   }
    // },
    // console.log(temp);
    // addUtilities(neonUtilities);
    // },
  ],
  // require("@tailwindcss/forms"),
  // require("tailwindcss-animate"),
};
export default config;
