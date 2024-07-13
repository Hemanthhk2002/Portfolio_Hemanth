/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./images/bg-secondary.jpg')",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
    fontFamily: {
      "hero-font": "Sriracha",
    },
  },
  plugins: [require("flowbite/plugin")],
};
