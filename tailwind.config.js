const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      backgroundImage: {
        noise: "url('/noise.png')",
        "aside-right":
          "radial-gradient(rgba(133,150,193,0.1),rgba(255,255,255,0.2) 1px,transparent 1px)",
      },
    },
  },
  plugins: [],
};
