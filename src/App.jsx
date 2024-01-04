import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeInitialization from "./components/Theme";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Error from "./pages/Error";

function App() {
 const [theme, setTheme] = React.useState(
  localStorage.getItem("theme") || "dark"
 );

 const WithNavbar = function ({ children }) {
  return (
   <>
    <Navbar theme={theme} setTheme={setTheme} />
    {children}
    <Footer />
   </>
  );
 };

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
    {/* ____ ROUTES */}
    <Router>
     <Routes>
      <Route
       path="/"
       element={
        <WithNavbar>
         <Home theme={theme} />
        </WithNavbar>
       }
      />
      <Route
       path="/about"
       element={
        <WithNavbar>
         <About theme={theme} />
        </WithNavbar>
       }
      />
      <Route
       path="/projects"
       element={
        <WithNavbar>
         <Projects theme={theme} />
        </WithNavbar>
       }
      />
      <Route
       path="/blog"
       element={
        <WithNavbar>
         <Blog theme={theme} />
        </WithNavbar>
       }
      />
      <Route
       path="*"
       element={
        <WithNavbar>
         <Error theme={theme} />
        </WithNavbar>
       }
      />
     </Routes>
    </Router>
   </div>
  </>
 );
}

export default App;
