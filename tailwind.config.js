const { join } = require("path");

module.exports = {
  content: [
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#F5F3DF",
      pink: "#C0038D",
      blue: "#009FD3",
      green: "#028F3D",
      yellow: "#F3A916",
      orange: "#E98020",
      red: "#DE2E2E",
      black: "#1E1E1E",
      gray: {
        default: "#ACACAC",
        light: "#D8D8D8",
        dark: "#737373",
      },
    },
    fontFamily: {
      title: ["Berkshire Swash"],
      body: ["Hubballi"],
    },
    extend: {},
  },
  plugins: [],
};
