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
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Resume from "./pages/Resume";

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

      <div
       className="fixed bottom-8 right-8 z-50 hover:scale-110 transition-all duration-300 cursor-pointer animate-bounce"
       style={{ borderRadius: "50%", overflow: "hidden" }}
      >
       <a href="https://m.me/sefatullahpage" target="_blank" rel="noreferrer">
        <img
         src="/images/msngr.png"
         alt="Messenger"
         className="w-14 h-14 md:w-16 md:h-16 hover:scale-110 transition-all duration-300"
        />
       </a>
      </div>
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
       path="/contact"
       element={
        <Layout>
         <Contact theme={theme} />
        </Layout>
       }
      />
      <Route
       path="/resume"
       element={
        <Layout>
         <Resume theme={theme} />
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
