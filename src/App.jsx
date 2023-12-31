import React from "react";

// components
import Navbar from "./components/Navbar";
import ThemeInitialization from "./components/Theme";

function App() {
 const [theme, setTheme] = React.useState(
  localStorage.getItem("theme") || "dark"
 );

 React.useEffect(() => {
  if (theme === "dark") {
   document.documentElement.classList.add("dark");
   localStorage.setItem("theme", "dark");
  } else {
   document.documentElement.classList.remove("dark");
   localStorage.setItem("theme", "light");
  }
  return () => {};
 }, [theme]);
 return (
  <>
   <ThemeInitialization />
   <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <Navbar theme={theme} setTheme={setTheme} />
    <div className="flex flex-col items-center justify-center min-h-screen">
     <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
   </div>
  </>
 );
}

export default App;
