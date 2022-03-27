module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "hue-rotate": {
          "0%": {
            filter: "hue-rotate(0deg)",
          },
          "50%": {
            filter: "hue-rotate(180deg)",
          },
          "100%": {
            filter: "hue-rotate(0deg)",
          },
        },
      },
      animation: {
        "hue-rotate": "hue-rotate 20s ease infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "Inter",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
