import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
 darkMode: "class",
 content: ["./index.html", "./src/**/*.{js,jsx}"],
 theme: {
  extend: {
   fontFamily: {
    sans: ["Inter", ...defaultTheme.fontFamily.sans],
   },
  },
 },
 plugins: [],
};
