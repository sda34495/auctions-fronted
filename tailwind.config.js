/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      colors: {
        "light-blue": "#ADD8E6",
      },
      fontFamily: {
        custom: ["Times New Roman"], // Add your custom font family
      },
    },
  },
  plugins: [],
};
