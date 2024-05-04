import { IBoxShadowConfigType } from "@/lib/types";

export const boxShadowConfigs: IBoxShadowConfigType[] = [
  {
    name: "neutral",
    shadow: "shadow-[0_0_5px_rgb(115,115,115),_0_0_20px_rgb(64,64,64)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(115,115,115),0 0 20px rgb(64,64,64)",
  },
  {
    name: "stone",
    shadow: "shadow-[0_0_5px_rgb(120,113,108),_0_0_20px_rgb(68,64,60)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(120,113,108),0 0 20px rgb(68,64,60)",
  },
  {
    name: "red",
    shadow: "shadow-[0_0_5px_rgb(239,68,68),0_0_20px_rgb(185,28,28)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(239,68,68),0 0 20px rgb(185,28,28)",
  },
  {
    name: "orange",
    shadow: "shadow-[0_0_5px_rgb(249,115,22),_0_0_20px_rgb(194,65,12)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(249,115,22),0 0 20px rgb(194,65,12)",
  },
  {
    name: "amber",
    shadow: "shadow-[0_0_5px_rgb(245,158,11),_0_0_20px_rgb(180,83,9)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(245,158,11),0 0 20px rgb(180,83,9)",
    favorite: true,
  },
  {
    name: "yellow",
    shadow: "shadow-[0_0_5px_rgb(234,179,8),_0_0_20px_rgb(161,98,7)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(234,179,8),0 0 20px rgb(161,98,7)",
  },
  {
    name: "lime",
    shadow: "shadow-[0_0_5px_rgb(132,204,22),_0_0_20px_rgb(77,124,15)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(132,204,22),0 0 20px rgb(77,124,15)",
  },
  {
    name: "green",
    shadow: "shadow-[0_0_5px_rgb(34,197,92),_0_0_20px_rgb(21,128,61)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(34,197,92),0 0 20px rgb(21,128,61)",
  },
  {
    name: "emerald",
    shadow: "shadow-[0_0_5px_rgb(16,185,129),_0_0_20px_rgb(4,120,87)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(16,185,129),0 0 20px rgb(4,120,87)",
  },
  {
    name: "teal",
    shadow: "shadow-[0_0_5px_rgb(20,184,166),_0_0_20px_rgb(15,118,110)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(20,184,166),0 0 20px rgb(15,118,110)",
  },
  {
    name: "cyan",
    shadow: "shadow-[0_0_5px_rgb(6,182,212),_0_0_20px_rgb(14,116,144)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(6,182,212),0 0 20px rgb(14,116,144)",
    favorite: true,
  },
  {
    name: "sky",
    shadow: "shadow-[0_0_5px_rgb(14,165,233),_0_0_20px_rgb(3,105,161)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(14,165,233),0 0 20px rgb(3,105,161)",
  },
  {
    name: "blue",
    shadow: "shadow-[0_0_5px_rgb(59,130,246),_0_0_20px_rgb(29,78,216)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(59,130,246),0 0 20px rgb(29,78,216)",
  },
  {
    name: "indigo",
    shadow: "shadow-[0_0_5px_rgb(99,102,241),_0_0_20px_rgb(67,56,202)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(99,102,241),0 0 20px rgb(67,56,202)",
  },
  {
    name: "violet",
    shadow: "shadow-[0_0_5px_rgb(139,92,246),_0_0_20px_rgb(109,40,217)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(139,92,246),0 0 20px rgb(109,40,217)",
  },
  {
    name: "purple",
    shadow: "shadow-[0_0_5px_rgb(168,85,247),_0_0_20px_rgb(126,34,217)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(168,85,247),0 0 20px rgb(126,34,217)",
  },
  {
    name: "fuchsia",
    shadow: "shadow-[0_0_5px_rgb(217,70,239),_0_0_20px_rgb(162,26,175)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(217,70,239),0 0 20px rgb(162,26,175)",
    favorite: true,
  },
  {
    name: "pink",
    shadow: "shadow-[0_0_5px_rgb(236,72,153),_0_0_20px_rgb(190,24,93)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(236,72,153),0 0 20px rgb(190,24,93)",
  },
  {
    name: "rose",
    shadow: "shadow-[0_0_5px_rgb(244,63,94),_0_0_20px_rgb(190,18,60)]",
    vanillaCSS: "box-shadow: 0 0 5px rgb(244,63,94),0 0 20px rgb(190,18,60)",
  },
  {
    name: "#1",
    shadow: "shadow-[rgba(149,157,165,0.2)_0_8px_24px]",
    vanillaCSS: "box-shadow:rgba(149,157,165,0.2) 0 8px 24px",
  },
  {
    name: "#2",
    shadow: "shadow-[0_7px_29px_0_rgba(100,100,111,.2)]",
    vanillaCSS: "box-shadow:0 7px 29px 0 rgba(100,100,111,.2)",
  },
  {
    name: "#3",
    shadow: "shadow-[rgba(0,0,0,.15)_1.95px_1.95px_2.6px]",
    vanillaCSS: "box-shadow:rgba(0,0,0,.15) 1.95px 1.95px 2.6px",
  },
  {
    name: "#4",
    shadow: "shadow-[0px_5px_15px_rgba(0,0,0,0.35)]",
    vanillaCSS: "box-shadow:0px 5px 15px rgba(0,0,0,0.35)",
  },
  {
    name: "#5",
    shadow:
      "shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,.09)_0px_-3px_5px]",
    vanillaCSS:
      "box-shadow:rgba(0,0,0,0.25) 0px 54px 55px,rgba(0,0,0,0.12) 0px -12px 30px,rgba(0,0,0,0.12) 0px 4px 6px,rgba(0,0,0,0.17) 0px 12px 13px,rgba(0,0,0,.09) 0px -3px 5px",
  },
  {
    name: "#6",
    shadow: "shadow-[rgba(0,0,0,0.24)_0_3px_8px]",
    vanillaCSS: "box-shadow:rgba(0,0,0,0.24) 0 3px 8px",
  },
  {
    name: "#7",
    shadow: "shadow-[0_2px_8px_0_rgba(99,99,99,.2)]",
    vanillaCSS: "box-shadow:0 2px 8px 0 rgba(99,99,99,.2)",
  },
  {
    name: "#8",
    shadow: "shadow-[rgba(0,0,0,0.16)_0_1px_4px,#333_0_0_0_3px]",
    vanillaCSS: "box-shadow:rgba(0,0,0,0.16) 0 1px 4px,#333 0 0 0 3px",
  },
  {
    name: "#9",
    shadow:
      "shadow-[rgba(0,0,0,0.02)_0_1px_3px_0,rgba(27,31,35,0.15)_0_0_0_1px]",
    vanillaCSS:
      "box-shadow:rgba(0,0,0,0.02) 0 1px 3px 0,rgba(27,31,35,0.15) 0 0 0 1px",
  },
  {
    name: "#10",
    shadow: "shadow-[rgba(17,12,46,0.15)_0_48px_100px_0]",
    vanillaCSS: "box-shadow:rgba(17,12,46,0.15) 0 48px 100px 0",
  },
  {
    name: "#11",
    shadow:
      "shadow-[0_6px_12px_-2px_rgba(50,50,93,0.25),0_3px_7px_-3px_rgba(0,0,0,0.3)]",
    vanillaCSS:
      "box-shadow:0 6px 12px -2px rgba(50,50,93,0.25),0 3px 7px -3px rgba(0,0,0,0.3)",
    favorite: true,
  },
  {
    name: "#12",
    shadow:
      "shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]",
    vanillaCSS:
      "box-shadow:0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3)",
  },
  {
    name: "#13",
    shadow:
      "shadow-[0_30px_60px_-12px_rgba(50,50,93,0.25),0_18px_36px_-18px_rgba(0,0,0,0.3)]",
    vanillaCSS:
      "box-shadow:0 30px 60px -12px rgba(50,50,93,0.25),0 18px 36px -18px rgba(0,0,0,0.3)",
  },
  {
    name: "#14",
    shadow:
      "shadow-[inset_0_30px_60px_-12px_rgba(50,50,93,0.25),inset_0_18px_36px_-18px_rgba(0,0,0,0.3)]",
    vanillaCSS:
      "box-shadow:inset 0 30px 60px -12px rgba(50,50,93,0.25),inset 0 18px 36px -18px rgba(0,0,0,0.3)",
  },
  {
    name: "#15",
    shadow:
      "shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)]",
    vanillaCSS:
      "box-shadow:0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3)",
  },
  {
    name: "#16",
    shadow:
      "shadow-[rgba(0,0,0,0.07)_0_1px_1px,rgba(0,0,0,0.07)_0_2px_2px,rgba(0,0,0,0.07)_0_4px_4px,rgba(0,0,0,0.07)_0_8px_8px,rgba(0,0,0,0.07)_0_16px_16px]",
    vanillaCSS:
      "box-shadow:rgba(0,0,0,0.07) 0 1px 1px,rgba(0,0,0,0.07) 0 2px 2px,rgba(0,0,0,0.07) 0 4px 4px,rgba(0,0,0,0.07) 0 8px 8px,rgba(0,0,0,0.07) 0 16px 16px",
  },
  {
    name: "#17",
    shadow: "shadow-[rgba(0,0,0,.1)_0_1px_2px_0]",
    vanillaCSS: "box-shadow:rgba(0,0,0,.1) 0 1px 2px 0",
    favorite: true,
  },
  {
    name: "#18",
    shadow: "shadow-[rgba(0,0,0,0.45)_0_25px_20px_-20px]",
    vanillaCSS: "box-shadow:rgba(0,0,0,0.45) 0 25px 20px -20px",
    favorite: true,
  },
  {
    name: "#19",
    shadow:
      "shadow-[0px_2px_4px_rgba(0,0,0,.4),0px_7px_13px_-3px_rgba(0,0,0,.3),inset_0px_-3px_0px_rgba(0,0,0,.2)]",
    vanillaCSS:
      "box-shadow:0px 2px 4px rgba(0,0,0,.4),0px 7px 13px -3px rgba(0,0,0,.3),inset 0px -3px 0px rgba(0,0,0,.2)",
  },
  {
    name: "#20",
    shadow:
      "shadow-[0_0_0_1px_rgba(0,0,0,0.05),inset_rgb(209,213,219)_0_0_0_1px]",
    vanillaCSS:
      "box-shadow:0 0 0 1px rgba(0,0,0,0.05),inset rgb(209,213,219) 0 0 0 1px",
  },
  {
    name: "#21",
    shadow: "shadow-[inset_0px_-50px_36px_-28px_rgba(0,0,0,0.35)]",
    vanillaCSS: "box-shadow:inset 0px -50px 36px -28px rgba(0,0,0,0.35)",
  },
  {
    name: "#22",
    shadow: "shadow-[0_0_5px_0_rgba(0,0,0,0.1),0_0_1px_0_rgba(0,0,0,0.1)]",
    vanillaCSS:
      "box-shadow:0 0 5px 0 rgba(0,0,0,0.1),0 0 1px 0 rgba(0,0,0,0.1)",
  },
  {
    name: "#23",
    shadow: "shadow-[rgba(0,0,0,0.1)_0_10px_50px]",
    vanillaCSS: "box-shadow:rgba(0,0,0,0.1) 0 10px 50px",
  },
  {
    name: "#24",
    shadow: "shadow-[rgba(0,0,0,0.04)_0_3px_5px]",
    vanillaCSS: "box-shadow:rgba(0,0,0,0.04) 0 3px 5px",
  },
  {
    name: "#25",
    shadow:
      "shadow-[rgba(14,30,37,0.12)_0_2px_4px_0,rgba(14,30,37,0.32)_0_2px_16px_0]",
    vanillaCSS:
      "box-shadow:rgba(14,30,37,0.12) 0 2px 4px 0,rgba(14,30,37,0.32) 0 2px 16px 0",
  },
  {
    name: "#26",
    shadow: "shadow-[rgba(0,0,0,0.16)_0_1px_4px]",
    vanillaCSS: "box-shadow:rgba(0,0,0,0.16) 0 1px 4px",
  },
  {
    name: "#27",
    shadow: "shadow-[rgba(0,0,0,0.1)_0_4px_12px]",
    vanillaCSS: "box-shadow:rgba(0,0,0,0.1) 0 4px 12px",
    favorite: true,
  },
  {
    name: "#28",
    shadow: "shadow-[rgba(0,0,0,0.05)_0_6px_24px_0,rgba(0,0,0,0.08)_0_0_0_1px]",
    vanillaCSS:
      "box-shadow:rgba(0,0,0,0.05) 0 6px 24px 0,rgba(0,0,0,0.08) 0 0 0 1px",
  },
  {
    name: "#29",
    shadow:
      "shadow-[rgba(0,0,0,0.16)_0_10px_36px_0,rgba(0,0,0,0.06)_0_0_0_1px]",
    vanillaCSS:
      "box-shadow:rgba(0,0,0,0.16) 0 10px 36px 0,rgba(0,0,0,0.06) 0 0 0 1px",
  },
  {
    name: "#30",
    shadow:
      "shadow-[rgba(50,50,93,0.25)_0_50px_100px_-20px,rgba(0,0,0,0.3)_0_30px_60px_-30px,rgba(10,37,64,0.35)_0_-2px_6px_0_inset]",

    vanillaCSS:
      "box-shadow:rgba(50,50,93,0.25) 0 50px 100px -20px,rgba(0,0,0,0.3) 0 30px 60px -30px,rgba(10,37,64,0.35) 0 -2px 6px 0 inset",
  },
  {
    name: "#31",
    shadow:
      "shadow-[rgba(255,255,255,0.1)_0_1px_1px_0_inset,rgba(50,50,93,0.25)_0_50px_100px_-20px,rgba(0,0,0,0.3)_0_30px_60px_-30px]",
    vanillaCSS:
      "box-shadow:rgba(255,255,255,0.1) 0 1px 1px 0 inset,rgba(50,50,93,0.25) 0 50px 100px -20px,rgba(0,0,0,0.3) 0 30px 60px -30px",
  },
  {
    name: "#32",
    shadow:
      "shadow-[rgba(50,50,93,0.25)_0_50px_100px_-20px,rgba(0,0,0,0.3)_0_30px_60px_-30px]",
    vanillaCSS:
      "box-shadow:rgba(50,50,93,0.25) 0 50px 100px -20px,rgba(0,0,0,0.3) 0 30px 60px -30px",
  },
  {
    name: "#33",
    shadow:
      "shadow-[0_50px_100px_-20px_rgba(50,50,93,.25),0_30px_60px_-30px_rgba(0,0,0,.3)]",
    vanillaCSS:
      "box-shadow:0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3)",
  },
  {
    name: "#34",
    shadow:
      "shadow-[0_13px_27px_-5px_rgba(50,50,93,.25),0_8px_16px_-8px_rgba(0,0,0,.3)]",
    vanillaCSS:
      "box-shadow:0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3)",
  },
  {
    name: "#35",
    shadow:
      "shadow-[0_2px_5px_-1px_rgba(50,50,93,.25),0_1px_3px_-1px_rgba(0,0,0,.3)]",
    vanillaCSS:
      "box-shadow:0 2px 5px -1px rgba(50,50,93,.25),0 1px 3px -1px rgba(0,0,0,.3)",
    favorite: true,
  },
  {
    name: "#36",
    shadow: "shadow-[0_20px_30px_-10px_#26394d]",
    vanillaCSS: "box-shadow:0 20px 30px -10px #26394d",
  },
  {
    name: "#37",
    shadow:
      "shadow-[0_0_0_2px_rgba(6,24,44,.4),0_4px_6px_-1px_rgba(6,24,44,.65),inset_0_1px_0_hsla(0,0%,100%,.08)]",
    vanillaCSS:
      "box-shadow:0 0 0 2px rgba(6,24,44,.4),0 4px 6px -1px rgba(6,24,44,.65),inset 0 1px 0 hsla(0,0%,100%,.08)",
  },
  {
    name: "#38",
    shadow: "shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)]",
    vanillaCSS:
      "box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)",
  },
  {
    name: "#39",
    shadow: "shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)]",
    vanillaCSS:
      "box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23)",
  },
  {
    name: "#40",
    shadow: "shadow-[0_10px_20px_rgba(0,0,0,0.19),0_6px_6px_rgba(0,0,0,0.23)]",
    vanillaCSS:
      "box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)",
  },
  {
    name: "#41",
    shadow:
      "shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)]",
    vanillaCSS:
      "box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)",
  },
  {
    name: "#42",
    shadow:
      "shadow-[0_19px_38px_rgba(0,0,0,0.30),0_15px_12px_rgba(0,0,0,0.22)]",
    vanillaCSS:
      "box-shadow:0 19px 38px rgba(0,0,0,0.30),0 15px 12px rgba(0,0,0,0.22)",
  },
  {
    name: "#43",
    shadow:
      "shadow-[rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px]",
    vanillaCSS:
      "box-shadow:rgba(60,64,67,0.3) 0 1px 2px 0,rgba(60,64,67,0.15) 0 2px 6px 2px",
    favorite: true,
  },
  {
    name: "#44",
    shadow:
      "shadow-[rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_1px_3px_1px]",
    vanillaCSS:
      "box-shadow:rgba(60,64,67,0.3) 0 1px 2px 0,rgba(60,64,67,0.15) 0 1px 3px 1px",
  },
  {
    name: "#45",
    shadow: "shadow-[0_0_0_1px_rgba(0,0,0,0.05)]",
    vanillaCSS: "box-shadow:0 0 0 1px rgba(0,0,0,0.05)",
  },
  {
    name: "#46",
    shadow: "shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]",
    vanillaCSS: "box-shadow:0 1px 2px 0 rgba(0,0,0,0.05)",
  },
  {
    name: "#47",
    shadow: "shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]",
    vanillaCSS:
      "box-shadow:0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)",
  },
  {
    name: "#48",
    shadow:
      "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]",
    vanillaCSS:
      "box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)",
    favorite: true,
  },
  {
    name: "#49",
    shadow:
      "shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]",
    vanillaCSS:
      "box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)",
  },
  {
    name: "#50",
    shadow:
      "shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]",
    vanillaCSS:
      "box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
  },
  {
    name: "#51",
    shadow: "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]",
    vanillaCSS: "box-shadow:0 25px 50px -12px rgba(0,0,0,0.25)",
  },
  {
    name: "#52",
    shadow: "shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.06)]",
    vanillaCSS: "box-shadow:inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  },
  {
    name: "#53",
    shadow:
      "shadow-[0_1px_2px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.07),0_4px_8px_rgba(0,0,0,0.07),0_8px_16px_rgba(0,0,0,0.07),0_16px_32px_rgba(0,0,0,0.07),0_32px_64px_rgba(0,0,0,0.07)]",
    vanillaCSS:
      "box-shadow:0 1px 2px rgba(0,0,0,0.07),0 2px 4px rgba(0,0,0,0.07),0 4px 8px rgba(0,0,0,0.07),0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07),0 32px 64px rgba(0,0,0,0.07)",
  },
  {
    name: "#54",
    shadow:
      "shadow-[0_2px_1px_rgba(0,0,0,0.09),0_4px_2px_rgba(0,0,0,0.09),0_8px_4px_rgba(0,0,0,0.09),0_16px_8px_rgba(0,0,0,0.09),0_32px_16px_rgba(0,0,0,0.09)]",
    vanillaCSS:
      "box-shadow:0 2px 1px rgba(0,0,0,0.09),0 4px 2px rgba(0,0,0,0.09),0 8px 4px rgba(0,0,0,0.09),0 16px 8px rgba(0,0,0,0.09),0 32px 16px rgba(0,0,0,0.09)",
  },
  {
    name: "#55",
    shadow: "shadow-[rgba(0,0,0,0.2)_0_18px_50px_-10px]",
    vanillaCSS: "box-shadow:rgba(0,0,0,0.2) 0 18px 50px -10px",
    favorite: true,
  },
  {
    name: "#56",
    shadow:
      "shadow-[-5px_5px_rgba(240,46,170,0.4),-10px_10px_rgba(240,46,170,0.3),-15px_15px_rgba(240,46,170,0.2),-20px_20px_rgba(240,46,170,0.1),-25px_25px_rgba(240,46,170,0.05)]",
    vanillaCSS:
      "box-shadow:-5px 5px rgba(240,46,170,0.4),-10px 10px rgba(240,46,170,0.3),-15px 15px rgba(240,46,170,0.2),-20px 20px rgba(240,46,170,0.1),-25px 25px rgba(240,46,170,0.05)",
  },
  {
    name: "#57",
    shadow:
      "shadow-[0_5px_rgba(240,46,170,0.4),0_10px_rgba(240,46,170,0.3),0_15px_rgba(240,46,170,0.2),0_20px_rgba(240,46,170,0.1),0_25px_rgba(240,46,170,0.05)]",
    vanillaCSS:
      "box-shadow:0 5px rgba(240,46,170,0.4),0 10px rgba(240,46,170,0.3),0 15px rgba(240,46,170,0.2),0 20px rgba(240,46,170,0.1),0 25px rgba(240,46,170,0.05)",
  },
  {
    name: "#58",
    shadow:
      "shadow-[5px_5px_rgba(240,46,170,0.4),10px_10px_rgba(240,46,170,0.3),15px_15px_rgba(240,46,170,0.2),20px_20px_rgba(240,46,170,0.1),25px_25px_rgba(240,46,170,0.05)]",
    vanillaCSS:
      "box-shadow:5px 5px rgba(240,46,170,0.4),10px 10px rgba(240,46,170,0.3),15px 15px rgba(240,46,170,0.2),20px 20px rgba(240,46,170,0.1),25px 25px rgba(240,46,170,0.05)",
  },
  {
    name: "#59",
    shadow:
      "shadow-[rgba(67,71,85,0.27)_0_0_.25em,rgba(90,125,188,0.05)_0_.25em_1em]",
    vanillaCSS:
      "box-shadow:rgba(67,71,85,0.27) 0 0 .25em,rgba(90,125,188,0.05) 0 .25em 1em",
  },
  {
    name: "#60",
    shadow:
      "shadow-[rgba(27,31,35,0.04)_0_1px_0,rgba(255,255,255,0.25)_0_1px_0_inset]",
    vanillaCSS:
      "box-shadow:rgba(27,31,35,0.04) 0 1px 0,rgba(255,255,255,0.25) 0 1px 0 inset",
    favorite: true,
  },
  {
    name: "#61",
    shadow: "shadow-[rgba(3,102,214,0.3)_0_0_0_3px]",
    vanillaCSS: "box-shadow:rgba(3,102,214,0.3) 0 0 0 3px",
  },
  {
    name: "#62",
    shadow:
      "shadow-[0_12px_28px_0_rgba(0,0,0,0.2),0_2px_4px_0_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.05)]",
    vanillaCSS:
      "box-shadow:0 12px 28px 0 rgba(0,0,0,0.2),0 2px 4px 0 rgba(0,0,0,0.1),inset 0 0 0 1px rgba(255,255,255,0.05)",
  },
  {
    name: "#63",
    shadow: "shadow-[rgba(0,0,0,0.15)_0_5px_15px_0]",
    vanillaCSS: "box-shadow:rgba(0,0,0,0.15) 0 5px 15px 0",
  },
  {
    name: "#64",
    shadow: "shadow-[rgba(33,35,38,0.1)_0_10px_10px_-10px]",
    vanillaCSS: "box-shadow:rgba(33,35,38,0.1) 0 10px 10px -10px",
  },
  {
    name: "#65",
    shadow:
      "shadow-[inset_blue_0_0_0_2px,10px_-10px_0_-3px_#fff,10px_-10px_#1FC11B,20px_-20px_0_-3px_#fff,20px_-20px_#FFD913,30px_-30px_0_-3px_#fff,30px_-30px_#FF9C55,40px_-40px_0_-3px_#fff,40px_-40px_#FF5555]",
    vanillaCSS:
      "box-shadow:inset blue 0 0 0 2px,10px -10px 0 -3px #fff,10px -10px #1FC11B,20px -20px 0 -3px #fff,20px -20px #FFD913,30px -30px 0 -3px #fff,30px -30px #FF9C55,40px -40px 0 -3px #fff,40px -40px #FF5555",
  },
  {
    name: "#66",
    shadow:
      "shadow-[rgb(85,91,255)_0px_0px_0px_3px,rgb(31,193,27)_0px_0px_0px_6px,rgb(255,217,19)_0px_0px_0px_9px,rgb(255,156,85)_0px_0px_0px_12px,rgb(255,85,85)_0px_0px_0px_15px]",
    vanillaCSS:
      "box-shadow:rgb(85,91,255) 0px 0px 0px 3px,rgb(31,193,27) 0px 0px 0px 6px,rgb(255,217,19) 0px 0px 0px 9px,rgb(255,156,85) 0px 0px 0px 12px,rgb(255,85,85) 0px 0px 0px 15px",
  },
  {
    name: "#67",
    shadow:
      "shadow-[3px_3px_6px_0px_#CCDBE8_inset,-3px_-3px_6px_1px_rgba(255,255,255,0.5)_inset]",
    vanillaCSS:
      "box-shadow:3px 3px 6px 0px #CCDBE8 inset,-3px -3px 6px 1px rgba(255,255,255,0.5) inset",
  },
  {
    name: "#68",
    shadow:
      "shadow-[6px_2px_16px_0px_rgba(136,165,191,0.48)_,-6px_-2px_16px_0px_rgba(255,255,255,0.8)]",
    vanillaCSS:
      "box-shadow:6px 2px 16px 0px rgba(136,165,191,0.48) ,-6px -2px 16px 0px rgba(255,255,255,0.8)",
  },
  {
    name: "#69",
    shadow: "shadow-[0px_1px_0px_rgba(17,17,26,0.1)]",
    vanillaCSS: "box-shadow:0px 1px 0px rgba(17,17,26,0.1)",
    favorite: true,
  },
  {
    name: "#70",
    shadow:
      "shadow-[0px_1px_0px_rgba(17,17,26,0.05),0px_0px_8px_rgba(17,17,26,0.1)]",
    vanillaCSS:
      "box-shadow:0px 1px 0px rgba(17,17,26,0.05),0px 0px 8px rgba(17,17,26,0.1)",
  },
  {
    name: "#71",
    shadow: "shadow-[0px_0px_16px_rgba(17,17,26,0.1)]",
    vanillaCSS: "box-shadow:0px 0px 16px rgba(17,17,26,0.1)",
    favorite: true,
  },
  {
    name: "#72",
    shadow:
      "shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)]",
    vanillaCSS:
      "box-shadow:0px 4px 16px rgba(17,17,26,0.05),0px 8px 32px rgba(17,17,26,0.05)",
  },
  {
    name: "#73",
    shadow:
      "shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_32px_rgba(17,17,26,0.05)]",
    vanillaCSS:
      "box-shadow:0px 4px 16px rgba(17,17,26,0.1),0px 8px 32px rgba(17,17,26,0.05)",
  },
  {
    name: "#74",
    shadow:
      "shadow-[0px_1px_0px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_48px_rgba(17,17,26,0.1)]",
    vanillaCSS:
      "box-shadow:0px 1px 0px rgba(17,17,26,0.1),0px 8px 24px rgba(17,17,26,0.1),0px 16px 48px rgba(17,17,26,0.1)",
  },
  {
    name: "#75",
    shadow:
      "shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)]",
    vanillaCSS:
      "box-shadow:0px 4px 16px rgba(17,17,26,0.1),0px 8px 24px rgba(17,17,26,0.1),0px 16px 56px rgba(17,17,26,0.1)",
  },
  {
    name: "#76",
    shadow:
      "shadow-[0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1),0px_24px_80px_rgba(17,17,26,0.1)]",
    vanillaCSS:
      "box-shadow:0px 8px 24px rgba(17,17,26,0.1),0px 16px 56px rgba(17,17,26,0.1),0px 24px 80px rgba(17,17,26,0.1)",
  },
  {
    name: "#77",
    shadow:
      "shadow-[rgba(50,50,105,0.15)_0_2px_5px_0,rgba(0,0,0,0.05)_0_1px_1px_0]",
    vanillaCSS:
      "box-shadow:rgba(50,50,105,0.15) 0 2px 5px 0,rgba(0,0,0,0.05) 0 1px 1px 0",
    favorite: true,
  },
  {
    name: "#78",
    shadow: "shadow-[0_15px_25px_rgba(0,0,0,0.15),0_5px_10px_rgba(0,0,0,0.05)]",
    vanillaCSS:
      "box-shadow:0 15px 25px rgba(0,0,0,0.15),0 5px 10px rgba(0,0,0,0.05)",
  },
  {
    name: "#79",
    shadow: "shadow-[rgba(0,0,0,.15)_2.4px_2.4px_3.2px]",
    vanillaCSS: "box-shadow:rgba(0,0,0,.15) 2.4px 2.4px 3.2px",
    favorite: true,
  },
  {
    name: "#80",
    shadow: "shadow-[0_3px_3px_0_rgba(0,0,0,0.15)]",
    vanillaCSS: "box-shadow:0 3px 3px 0 rgba(0,0,0,0.15)",
  },
];
