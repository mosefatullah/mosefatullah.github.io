import React from "react";

function ThemeInitialization() {
 React.useEffect(() => {
  if (
   localStorage.getItem("theme") === "dark" ||
   (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
   document.documentElement.classList.add("dark");
   localStorage.setItem("theme", "dark");
  } else {
   document.documentElement.classList.remove("dark");
   localStorage.setItem("theme", "light");
  }
 }, []);
 return;
}

export default ThemeInitialization;
