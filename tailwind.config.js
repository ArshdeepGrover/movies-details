/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "com-",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e0f1f1",
          200: "#c1e2e2",
          300: "#a1d4d4",
          400: "#82c5c5",
          500: "#63b7b7",
          600: "#4f9292",
          700: "#3b6e6e",
          800: "#284949",
          900: "#142525",
        },
        secondary: {
          100: "#ebdada",
          200: "#d7b6b6",
          300: "#c49191",
          400: "#b06d6d",
          500: "#9c4848",
          600: "#7d3a3a",
          700: "#5e2b2b",
          800: "#3e1d1d",
          900: "#1f0e0e",
        },
      },
    },
  },
  plugins: [],
};
