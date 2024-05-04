const shadows = [
  "rgba(149,157,165,0.2)_0_8px_24px",
  "0 7px 29px 0 rgba(100,100,111,.2)",
  "rgba(0,0,0,.15) 1.95px 1.95px 2.6px",
  "0px 5px 15px rgba(0,0,0,0.35)",
  "rgba(0,0,0,0.25) 0px 54px 55px,rgba(0,0,0,0.12) 0px -12px 30px,rgba(0,0,0,0.12) 0px 4px 6px,rgba(0,0,0,0.17) 0px 12px 13px,rgba(0,0,0,.09) 0px -3px 5px",
  "rgba(0,0,0,0.24) 0 3px 8px",
  "0 2px 8px 0 rgba(99,99,99,.2)",
  "rgba(0,0,0,0.16) 0 1px 4px,#333 0 0 0 3px",
  "rgba(0,0,0,0.02) 0 1px 3px 0,rgba(27,31,35,0.15) 0 0 0 1px",
  "rgba(17,12,46,0.15) 0 48px 100px 0",
  "0 6px 12px -2px rgba(50,50,93,0.25),0 3px 7px -3px rgba(0,0,0,0.3)",
  "0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3)", // dup
  "0 30px 60px -12px rgba(50,50,93,0.25),0 18px 36px -18px rgba(0,0,0,0.3)",
  "inset 0 30px 60px -12px rgba(50,50,93,0.25),inset 0 18px 36px -18px rgba(0,0,0,0.3)",
  "0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3)", // dup
  "rgba(0,0,0,0.07) 0 1px 1px,rgba(0,0,0,0.07) 0 2px 2px,rgba(0,0,0,0.07) 0 4px 4px,rgba(0,0,0,0.07) 0 8px 8px,rgba(0,0,0,0.07) 0 16px 16px",
  "rgba(0,0,0,.1) 0 1px 2px 0",
  "rgba(0,0,0,0.45) 0 25px 20px -20px",
  "0px 2px 4px rgba(0,0,0,.4),0px 7px 13px -3px rgba(0,0,0,.3),inset 0px -3px 0px rgba(0,0,0,.2)",
  "0 0 0 1px rgba(0,0,0,0.05),inset rgb(209,213,219) 0 0 0 1px",
  "inset 0px -50px 36px -28px rgba(0,0,0,0.35)",
  "0 0 5px 0 rgba(0,0,0,0.1),0 0 1px 0 rgba(0,0,0,0.1)",
  "rgba(0,0,0,0.1) 0 10px 50px",
  "rgba(0,0,0,0.04) 0 3px 5px",
  "rgba(14,30,37,0.12) 0 2px 4px 0,rgba(14,30,37,0.32) 0 2px 16px 0",

  {
    boxShadow: "rgba(0,0,0,0.16) 0 1px 4px",
    credits: "3drops",
  },
  {
    boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
    credits: "Sketch",
  },
  {
    boxShadow: "rgba(0,0,0,0.05) 0 6px 24px 0,rgba(0,0,0,0.08) 0 0 0 1px",
    credits: "Sketch",
  },
  {
    boxShadow: "rgba(0,0,0,0.16) 0 10px 36px 0,rgba(0,0,0,0.06) 0 0 0 1px",
    credits: "Sketch",
  },
  {
    boxShadow:
      "rgba(50,50,93,0.25) 0 50px 100px -20px,rgba(0,0,0,0.3) 0 30px 60px -30px,rgba(10,37,64,0.35) 0 -2px 6px 0 inset",
    credits: "Stripe",
  },
  {
    boxShadow:
      "rgba(255,255,255,0.1) 0 1px 1px 0 inset,rgba(50,50,93,0.25) 0 50px 100px -20px,rgba(0,0,0,0.3) 0 30px 60px -30px",
    credits: "Stripe",
  },
  {
    boxShadow:
      "rgba(50,50,93,0.25) 0 50px 100px -20px,rgba(0,0,0,0.3) 0 30px 60px -30px",
    credits: "Stripe",
  },
  {
    boxShadow:
      "0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3)",
    credits: "Stripe",
  },
  {
    boxShadow:
      "0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3)",
    credits: "Stripe",
  },
  {
    boxShadow:
      "0 2px 5px -1px rgba(50,50,93,.25),0 1px 3px -1px rgba(0,0,0,.3)",
    credits: "Stripe",
  },
  {
    boxShadow: "0 20px 30px -10px #26394d",
    credits: "Stripe",
  },
  {
    boxShadow:
      "0 0 0 2px rgba(6,24,44,.4),0 4px 6px -1px rgba(6,24,44,.65),inset 0 1px 0 hsla(0,0%,100%,.08)",
    credits: "Stripe",
  },

  {
    boxShadow: "0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)",
    credits: "Material",
  },
  {
    boxShadow: "0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23)",
    credits: "Material",
  },
  {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)",
    credits: "Material",
  },
  {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)",
    credits: "Material",
  },
  {
    boxShadow: "0 19px 38px rgba(0,0,0,0.30),0 15px 12px rgba(0,0,0,0.22)",
    credits: "Material",
  },

  {
    boxShadow:
      "rgba(60,64,67,0.3) 0 1px 2px 0,rgba(60,64,67,0.15) 0 2px 6px 2px",
    credits: "Material",
  },
  {
    boxShadow:
      "rgba(60,64,67,0.3) 0 1px 2px 0,rgba(60,64,67,0.15) 0 1px 3px 1px",
    credits: "Material",
  },

  {
    boxShadow: "0 0 0 1px rgba(0,0,0,0.05)",
    credits: "Tailwind CSS",
  },
  {
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
    credits: "Tailwind CSS",
  },
  {
    boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)",
    credits: "Tailwind CSS",
  },
  {
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)",
    credits: "Tailwind CSS",
  },
  {
    boxShadow:
      "0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)",
    credits: "Tailwind CSS",
  },
  {
    boxShadow:
      "0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
    credits: "Tailwind CSS",
  },
  {
    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
    credits: "Tailwind CSS",
  },
  {
    boxShadow: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    credits: "Tailwind CSS",
  },

  {
    boxShadow:
      "0 1px 2px rgba(0,0,0,0.07),0 2px 4px rgba(0,0,0,0.07),0 4px 8px rgba(0,0,0,0.07),0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07),0 32px 64px rgba(0,0,0,0.07)",
    credits: "Tobias Ahlin",
  },
  {
    boxShadow:
      "0 2px 1px rgba(0,0,0,0.09),0 4px 2px rgba(0,0,0,0.09),0 8px 4px rgba(0,0,0,0.09),0 16px 8px rgba(0,0,0,0.09),0 32px 16px rgba(0,0,0,0.09)",
    credits: "Tobias Ahlin",
  },

  {
    boxShadow: "rgba(0,0,0,0.2) 0 18px 50px -10px",
    credits: "feedback.fish",
  },
  // Alligator
  {
    boxShadow:
      "-5px 5px rgba(240,46,170,0.4),-10px 10px rgba(240,46,170,0.3),-15px 15px rgba(240,46,170,0.2),-20px 20px rgba(240,46,170,0.1),-25px 25px rgba(240,46,170,0.05)",
    credits: "Alligator",
  },
  {
    boxShadow:
      "0 5px rgba(240,46,170,0.4),0 10px rgba(240,46,170,0.3),0 15px rgba(240,46,170,0.2),0 20px rgba(240,46,170,0.1),0 25px rgba(240,46,170,0.05)",
    credits: "Alligator",
  },
  {
    boxShadow:
      "5px 5px rgba(240,46,170,0.4),10px 10px rgba(240,46,170,0.3),15px 15px rgba(240,46,170,0.2),20px 20px rgba(240,46,170,0.1),25px 25px rgba(240,46,170,0.05)",
    credits: "Alligator",
  },

  {
    boxShadow:
      "rgba(67,71,85,0.27) 0 0 .25em,rgba(90,125,188,0.05) 0 .25em 1em",
    credits: "pqina.nl/doka",
  },

  {
    boxShadow:
      "rgba(27,31,35,0.04) 0 1px 0,rgba(255,255,255,0.25) 0 1px 0 inset",
    credits: "Github",
  },
  {
    boxShadow: "rgba(3,102,214,0.3) 0 0 0 3px",
    credits: "Github",
  },

  {
    boxShadow:
      "0 12px 28px 0 rgba(0,0,0,0.2),0 2px 4px 0 rgba(0,0,0,0.1),inset 0 0 0 1px rgba(255,255,255,0.05)",
    credits: "Facebook",
  },

  //shopify
  {
    boxShadow: "rgba(0,0,0,0.15) 0 5px 15px 0",
    credits: "Shopify",
  },
  {
    boxShadow: "rgba(33,35,38,0.1) 0 10px 10px -10px",
    credits: "Shopify",
  },

  //fossheim
  {
    boxShadow:
      "inset blue 0 0 0 2px,10px -10px 0 -3px #fff,10px -10px #1FC11B,20px -20px 0 -3px #fff,20px -20px #FFD913,30px -30px 0 -3px #fff,30px -30px #FF9C55,40px -40px 0 -3px #fff,40px -40px #FF5555",
    extra: {
      borderRadius: 0,
    },
    credits: "Fossheim",
  },

  {
    boxShadow:
      "rgb(85,91,255) 0px 0px 0px 3px,rgb(31,193,27) 0px 0px 0px 6px,rgb(255,217,19) 0px 0px 0px 9px,rgb(255,156,85) 0px 0px 0px 12px,rgb(255,85,85) 0px 0px 0px 15px",
    extra: {
      borderRadius: 0,
    },
    credits: "Fossheim",
  },

  //boxshadows.com
  {
    boxShadow:
      "3px 3px 6px 0px #CCDBE8 inset,-3px -3px 6px 1px rgba(255,255,255,0.5) inset",
    credits: "boxshadows.com",
  },
  {
    boxShadow:
      "6px 2px 16px 0px rgba(136,165,191,0.48) ,-6px -2px 16px 0px rgba(255,255,255,0.8)",
    credits: "boxshadows.com",
  },

  //box-shadows.co
  {
    boxShadow: "0px 1px 0px rgba(17,17,26,0.1)",
    credits: "box-shadows.co",
  },
  {
    boxShadow: "0px 1px 0px rgba(17,17,26,0.05),0px 0px 8px rgba(17,17,26,0.1)",
    credits: "box-shadows.co",
  },
  {
    boxShadow: "0px 0px 16px rgba(17,17,26,0.1)",
    credits: "box-shadows.co",
  },
  {
    boxShadow:
      "0px 4px 16px rgba(17,17,26,0.05),0px 8px 32px rgba(17,17,26,0.05)",
    credits: "box-shadows.co",
  },
  {
    boxShadow:
      "0px 4px 16px rgba(17,17,26,0.1),0px 8px 32px rgba(17,17,26,0.05)",
    credits: "box-shadows.co",
  },
  {
    boxShadow:
      "0px 1px 0px rgba(17,17,26,0.1),0px 8px 24px rgba(17,17,26,0.1),0px 16px 48px rgba(17,17,26,0.1)",
    credits: "box-shadows.co",
  },
  {
    boxShadow:
      "0px 4px 16px rgba(17,17,26,0.1),0px 8px 24px rgba(17,17,26,0.1),0px 16px 56px rgba(17,17,26,0.1)",
    credits: "box-shadows.co",
  },
  {
    boxShadow:
      "0px 8px 24px rgba(17,17,26,0.1),0px 16px 56px rgba(17,17,26,0.1),0px 24px 80px rgba(17,17,26,0.1)",
    credits: "box-shadows.co",
  },

  {
    boxShadow: "rgba(50,50,105,0.15) 0 2px 5px 0,rgba(0,0,0,0.05) 0 1px 1px 0",
    credits: "10er.app",
  },

  {
    boxShadow: "0 15px 25px rgba(0,0,0,0.15),0 5px 10px rgba(0,0,0,0.05)",
    credits: "wip.chat",
  },

  {
    boxShadow: "rgba(0,0,0,.15) 2.4px 2.4px 3.2px",
  },

  {
    boxShadow: "0 3px 3px 0 rgba(0,0,0,0.15)",
    credits: "Airbnb",
  },

  {
    boxShadow: "rgba(0,0,0,0.08) 0 4px 12px",
    credits: "Airbnb",
  },

  {
    boxShadow: "rgba(0,0,0,0.15) 0 2px 8px",
    credits: "Airbnb",
  },

  {
    boxShadow: "rgba(0,0,0,0.18) 0 2px 4px",
    credits: "Airbnb",
  },

  {
    boxShadow: "-4px 9px 25px -6px rgba(0,0,0,.1)",
    credits: "ls.graphics",
  },

  {
    boxShadow: "0 60px 40px -7px rgba(0,0,0,.2)",
    credits: "ls.graphics",
  },

  {
    boxShadow: "0 30px 90px rgba(0,0,0,0.4)",
    credits: "Lonely Planet",
  },

  {
    boxShadow: "0 22px 70px 4px rgba(0,0,0,0.56)",
    credits: "Mac",
  },
  {
    boxShadow: "0px 20px 30px rgba(0,0,0,0.2)",
    credits: "Mac",
  },
  {
    boxShadow:
      "rgba(255,255,255,0.2) 0px 0px 0px 1px inset,rgba(0,0,0,0.9) 0px 0px 0px 1px",
    credits: "Mac",
  },
  {
    boxShadow:
      "0 .0625em .0625em rgba(0,0,0,0.25),0 .125em .5em rgba(0,0,0,0.25),inset 0 0 0 1px rgba(255,255,255,0.1)",
    credits: "pqina.nl/doka",
  },
  {
    boxShadow: "rgba(0,0,0,0.09) 0px 3px 12px",
    credits: "Typedream",
  },
  {
    boxShadow:
      "inset 0px -23px 25px 0 rgba(0,0,0,.17),inset 0 -36px 30px 0px rgba(0,0,0,.15) ,inset 0 -79px 40px 0px rgba(0,0,0,.1),rgba(0,0,0,0.06) 0px 2px 1px,rgba(0,0,0,0.09) 0px 4px 2px,rgba(0,0,0,0.09) 0px 8px 4px,rgba(0,0,0,0.09) 0px 16px 8px,rgba(0,0,0,0.09) 0px 32px 16px",
    extra: {
      borderRadius: "35px",
    },
  },
  {
    boxShadow: "rgba(9,30,66,0.25) 0 1px 1px,rgba(9,30,66,0.13) 0 0 1px 1px",
    credits: "Trello",
  },
  {
    boxShadow: "rgba(9,30,66,0.25) 0 4px 8px -2px,rgba(9,30,66,0.08) 0 0 0 1px",
    credits: "Trello",
  },
];
console.log(shadows);

let temp = [];
let i = 1;
for (const shadow in shadows) {
  if (typeof shadows[shadow] === "object") {
    let hold = shadows[shadow]["boxShadow"];
    let replacedStr = hold.replace(" ", "_");
    temp.push({
      name: "#" + i,
      shadow: replacedStr,
      vanillaCSS: "box-shadow:" + hold,
    });
  } else {
    let hold = shadow;
    let replacedStr = shadow.replace(" ", "_");
    temp.push({
      name: "#" + i,
      shadow: replacedStr,
      vanillaCSS: "box-shadow:" + hold,
    });
  }
  i += 1;
}
