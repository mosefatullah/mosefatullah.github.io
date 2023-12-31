import React from "react";
import logo from "../assets/images/sefatullah.png";

export default function Navbar({ theme, setTheme }) {
 const [openNav, setOpenNav] = React.useState(false);
 return (
  <nav className="bg-slate-100 shadow-md p-4 dark:bg-gray-800">
   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between">
     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button
       type="button"
       className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 dark:focus:ring-white"
       aria-controls="mobile-menu"
       aria-expanded="false"
       onClick={() => setOpenNav(!openNav)}
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
     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <a className="flex space-x-3" href="/">
       <img
        src={logo}
        alt=""
        width="35"
        height="35"
        className="w-auto rounded h-8 bg-gray-300 dark:bg-gray-700"
       />
       <p className="text-xl text-gray-900 dark:text-white">Sefatullah</p>
      </a>
     </div>
     <div className="dark:text-white hidden sm:ml-6 sm:block">
      <div className="flex space-x-4 items-center">
       <a
        href="#"
        className="bg-gray-700 text-white rounded-md px-3 py-1 text-sm font-medium"
        aria-current="page"
       >
        Home
       </a>
       <a
        href="#"
        className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-1 text-sm font-medium"
       >
        About
       </a>
       <a
        href="#"
        className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-1 text-sm font-medium"
       >
        Projects
       </a>
       <a
        href="#"
        className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-1 text-sm font-medium"
       >
        Blog
       </a>
       <div className="border-l border-gray-300 dark:border-gray-500 h-6"></div>
       <a
        href="#"
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
       </a>
       <a
        href="#"
        className="bg-green-600 dark:bg-blue-700 text-white rounded-md px-3 py-1 text-sm font-medium hover:bg-green-700 dark:hover:bg-blue-800"
       >
        Subscribe
       </a>
      </div>
     </div>
    </div>
   </div>

   <div className="sm:hidden" id="mobile-menu">
    <div className="dark:text-white space-y-1 px-2 pb-3 pt-4" hidden={openNav}>
     <a
      href="#"
      className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
      aria-current="page"
     >
      Home
     </a>
     <a
      href="#"
      className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
     >
      About
     </a>
     <a
      href="#"
      className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
     >
      Projects
     </a>
     <a
      href="#"
      className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
     >
      Blog
     </a>
    </div>
   </div>
  </nav>
 );
}
