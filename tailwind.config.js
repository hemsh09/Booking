/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueGradient:
          "linear-gradient(96.25deg, #0037C5 8.58%, #08005F 102.54%)",
      },
      backgroundImage: {
        blueGradient:
          "linear-gradient(96.25deg, #0037C5 8.58%, #08005F 102.54%)",
        orangeGradient:
          "linear-gradient(83.18deg, #FF8412 -30.08%, #D23758 60.11%, #B1008A 97.49%)",
        purpleGradient:
          "linear-gradient(93.12deg, #B1008A -19.35%, #060D67 122.43%)",
        greyGradient:
          "linear-gradient(94.33deg, #F1F1F1 22.44%, #F1F1F1 124.46%)",
      },
      boxShadow: {
        CustomShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
