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

 const Layout = function ({ children }) {
  React.useEffect(() => {
   window.scrollTo(0, 0);
  }, [children]);
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
        <Layout>
         <Home theme={theme} />
        </Layout>
       }
      />
      <Route
       path="/about"
       element={
        <Layout>
         <About theme={theme} />
        </Layout>
       }
      />
      <Route
       path="/projects"
       element={
        <Layout>
         <Projects theme={theme} />
        </Layout>
       }
      />
      <Route
       path="/blog"
       element={
        <Layout>
         <Blog theme={theme} />
        </Layout>
       }
      />
      <Route
       path="/packages"
       element={
        <Layout>
         <Error theme={theme} />
        </Layout>
       }
      />
      <Route
       path="*"
       element={
        <Layout>
         <Error theme={theme} />
        </Layout>
       }
      />
     </Routes>
    </Router>
   </div>
  </>
 );
}

export default App;
