import React from "react";
import logo from "../assets/images/mohammadsefatullah.png";
import lightpattern from "../assets/images/pattern_light.svg";
import darkpattern from "../assets/images/pattern_dark.svg";

export default function Home() {
 return (
  <>
   <div
    className="__home"
    style={{
     backgroundImage: `url(${
      window.localStorage.getItem("theme") === "dark"
       ? darkpattern
       : lightpattern
     })`,
    }}
   >
    <div className="_sketch h-[150px] w-[200px] absolute dark:left-[18%] top-8 rotate-12 rounded-3xl bg-gradient-to-l dark:from-green-600 dark:to-blue-500 blur-3xl filter dark:block dark:opacity-20 lg:top-44 lg:-left-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[700px]"></div>

    {/* ____ HERO SECTION */}
    <div
     className="grid grid-cols-1 lg:grid-cols-2 gap-9 p-4 py-7 justify-items-center items-center relative md:px-16"
     style={{
      minHeight: "calc(100vh - 74px)",
     }}
    >
     <div className="max-w-xl text-center mb-[5rem] lg:mb-0">
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
       &lt;Web Developer & Programmer/&gt;
      </h1>
      <p className="mt-6 text-gray-600 dark:text-gray-400">
       Sefatullah is a Bangladeshi web developer and programmer born in 2006. He
       dreams of becoming a software engineer and passionate programming leader.
       He is currently studying in intermediate level and continuing his
       programming studying as a self learner.
      </p>
      <div className="mt-11">
       <a
        href="about"
        className="px-4 py-3 ml-4 border-2 dark:border-green-500 dark:text-green-500 rounded-md dark:hover:bg-green-600 dark:hover:text-white dark:hover:border-green-600 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 font-semibold transition duration-300 ease-in-out"
       >
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         width="24px"
         height="24px"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className="mr-2 mt-[-2px] inline-block dark:text-white"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
         />
        </svg>
        Learn More
       </a>
      </div>
     </div>
     <div className="boardOfMe bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-xl w-full">
      <div className="bg-slate-500 p-4 py-3 rounded-t-xl">
       <div className="flex gap-2">
        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
       </div>
      </div>
      <img
       src={logo}
       alt="Sefatullah"
       className="rounded-full w-40 h-40 mx-auto -mt-20 border-4 border-white shadow-xl"
      />
      <div className="text-center mt-4 mb-7">
       <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Mohammad Sefatullah
       </h1>
       <p className="mt-1 text-gray-600 dark:text-gray-400">
        Web Developer & Programmer
       </p>
      </div>
     </div>
    </div>

    {/* ____ SKILLS SECTION */}
    <div className="__skills-section w-full border-t border-gray-200 dark:border-gray-800 bg-pattern dark:bg-dpattern lg:flex lg:h-full lg:items-center lg:py-0 from-slate-900  bg-gradient-to-r">
     <div className="w-full mx-auto p-4 md:px-0 py-14 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
      <div className="w-full min-h-96 bg-white dark:bg-gray-800 rounded-md shadow"></div>
     </div>
    </div>
   </div>
  </>
 );
}
