import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/mohammadsefatullah.png";

export default function Navbar({ theme, setTheme }) {
  const [openNav, setOpenNav] = React.useState(false);
  const navMenu = [
    ["Home", "/"],
    ["About", "/about"],
    ["Projects", "/projects"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];

  React.useEffect(() => {
    const items = document.querySelectorAll(".nav-menu-items a");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        window.scrollTo(0, 0);
      });
    });
  }, []);

  const navActive = () => {
    document.getElementById("navbar").classList.add("bg-slate-100", "dark:bg-gray-800", "shadow-md");
    document.getElementById("navbar").classList.remove("bg-transparent");
  }

  const navInactive = () => {
    document.getElementById("navbar").classList.add("bg-transparent");
    document.getElementById("navbar").classList.remove("bg-slate-100", "dark:bg-gray-800", "shadow-md");
  }

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.getElementById("mobile-menu").hidden == true) {
        if (window.scrollY > 50) {
          navActive();
        } else {
          navInactive();
        }
      } else {
        navActive();
      }
    });
  }, []);
  return (
    <>
      <nav className="bg-transparent pb-4 pt-5 sticky top-0 z-50 transition-all duration-300" id="navbar">
        <div className="mx-auto max-w-7xl px-1.5 sm:px-3 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  setOpenNav(!openNav)
                  if (openNav == false) {
                    navActive();
                  } else {
                    navInactive();
                  }
                }}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center lg:justify-start">
              <Link className="flex space-x-3" to="/"
                onClick={() => {
                  setOpenNav(false)
                  navInactive();
                }}>
                <img
                  src={logo}
                  alt=""
                  width="35"
                  height="35"
                  className="w-auto rounded h-8 bg-gray-300 dark:bg-gray-700"
                />
                <p className="text-xl text-gray-900 dark:text-white flex items-center">Sefatullah</p>
              </Link>
            </div>
            <div className="dark:text-white hidden lg:ml-6 lg:block">
              <div className="flex space-x-6 items-center nav-menu-items">
                {navMenu.map((item, index) => (
                  <NavLink
                    to={item[1]}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-300 dark:bg-gray-700 rounded-md px-3 py-1 text-sm font-medium"
                        : "hover:bg-gray-700 hover:text-white rounded-md px-3 py-1 text-sm font-medium"
                    }
                    aria-current="page"
                    key={index}
                  >
                    {item[0]}
                  </NavLink>
                ))}
                <div className="border-l border-gray-300 dark:border-gray-500 h-6"></div>
                <button
                  className="hover:bg-gray-300 rounded-full p-2 text-sm font-medium dark:hover:bg-gray-600"
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                  }}
                >
                  {theme === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  )}
                </button>
                <Link
                  to="/portfolio"
                  className="bg-green-600 dark:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-green-700 dark:hover:bg-blue-800"
                >
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden" id="mobile-menu" hidden={openNav == false}>
          <div className="dark:text-white space-y-1 px-2 pt-8 nav-menu-items overflow-x-auto overflow-y-hidden pb-3">
            {navMenu.map((item, index) => (
              <NavLink
                to={item[1]}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-300 dark:bg-gray-700 rounded-md mr-2 px-3 py-1 text-sm font-medium"
                    : "hover:bg-gray-700 hover:text-white rounded-md mr-2 px-3 py-1 text-sm font-medium"
                }
                aria-current="page"
                key={index}
                onClick={() => {
                  setOpenNav(false)
                  navInactive();
                }}
              >
                {item[0]}
              </NavLink>
            ))}
          </div>
          <hr className="border-gray-300 dark:border-gray-700 my-4" />
          <div className="dark:text-white space-y-1 px-2 flex items-center justify-between">
            <div className="flex items-center md:space-x-3"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                }}>
              <button
                className="hover:bg-gray-300 rounded-full p-2 text-sm font-medium dark:hover:bg-gray-600"
              >
                {theme === "dark" ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  </>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                )}
              </button>
              <p className="text-sm font-medium cursor-pointer hover:bg-gray-300 rounded-md px-3 py-1 dark:hover:bg-gray-600">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </p>
            </div>
            <div className="border-l border-gray-300 dark:border-gray-700 h-7"></div>
            <Link
              to="/portfolio"
              className="bg-green-600 dark:bg-blue-700 text-white rounded-md px-3 py-1 text-sm font-medium hover:bg-green-700 dark:hover:bg-blue-800"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </nav>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" hidden={openNav == false} onClick={
        () => {
          setOpenNav(false)
          navInactive();
        }
      }></div></>
  );
}
