import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/mohammadsefatullah.png";
import lightpattern from "../assets/images/pattern_light.svg";
import darkpattern from "../assets/images/pattern_dark.svg";

import skills from "../assets/images/programming.png";
import services from "../assets/images/services.png";
import webdesign from "../assets/images/web-design.png";
import webdevelop1 from "../assets/images/webdevelop-1.png";
import webdevelop2 from "../assets/images/webdevelop-2.png";
import webdevelop3 from "../assets/images/webdevelop-3.png";

const TickIcon = () => (
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
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
 </svg>
);

export default function Home({ theme }) {
 const homeRef = React.useRef(null);
 React.useEffect(() => {
  homeRef.current.style.backgroundImage = `url(${
   theme === "dark" ? darkpattern : lightpattern
  })`;
 }, [theme]);
 return (
  <>
   <div className="__home" ref={homeRef}>
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
       Passionate Web Developer!
      </h1>
      <p className="mt-6 text-gray-600 dark:text-gray-400">
       Sefatullah is a Bangladeshi web developer and programmer born in 2006. He
       dreams of becoming a software engineer and passionate programming leader.
       He is currently studying in intermediate level and continuing his
       programming studying as a self learner.
      </p>
      <div className="mt-11">
       <Link
        to="about"
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
       </Link>
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
    <div className="__skills-section w-full border-t border-gray-200 dark:border-gray-800 bg-pattern dark:bg-dpattern lg:flex lg:h-full lg:items-center lg:py-0 dark:from-gray-900  bg-gradient-to-r from-white">
     <div className="w-full mx-auto p-4 md:px-0 py-14 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
      <div className="flex flex-col items-center justify-center mt-7">
       <img src={skills} className="w-16 h-16" />
       <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
        Skills
       </h1>
       <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl text-center">
        Sefatullah have learned many programming languages and frameworks. He is
        still learning and practicing programming.
       </p>
      </div>
      <div className="w-full my-14 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl">
       <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center items-center py-7 space-x-3">
         <div className="flex flex-col items-center justify-center p-4">
          <img
           src="https://img.icons8.com/color/96/000000/html-5.png"
           className="w-16 h-16"
          />
          <p className="mt-2 text-gray-600 dark:text-gray-400">HTML</p>
         </div>
         <div className="flex flex-col items-center justify-center p-4">
          <img
           src="https://img.icons8.com/color/96/000000/css3.png"
           className="w-16 h-16"
          />
          <p className="mt-2 text-gray-600 dark:text-gray-400">CSS</p>
         </div>
         <div className="flex flex-col items-center justify-center p-4">
          <img
           src="https://img.icons8.com/color/96/000000/javascript.png"
           className="w-16 h-16"
          />
          <p className="mt-2 text-gray-600 dark:text-gray-400">JavaScript</p>
         </div>
         <div className="flex flex-col items-center justify-center p-4">
          <img
           src="https://img.icons8.com/color/96/000000/bootstrap.png"
           className="w-16 h-16"
          />
          <p className="mt-2 text-gray-600 dark:text-gray-400">Bootstrap</p>
         </div>
         <div className="flex flex-col items-center justify-center p-4">
          <img
           src="https://img.icons8.com/color/96/000000/firebase.png"
           className="w-16 h-16"
          />
          <p className="mt-2 text-gray-600 dark:text-gray-400">Firebase</p>
         </div>
         <div className="flex flex-col items-center justify-center p-4">
          <img
           src="https://img.icons8.com/color/96/000000/react-native.png"
           className="w-16 h-16"
          />
          <p className="mt-2 text-gray-600 dark:text-gray-400">React</p>
         </div>
         <div className="flex flex-col items-center justify-center p-4">
          <img
           src="https://img.icons8.com/color/96/000000/nodejs.png"
           className="w-16 h-16"
          />
          <p className="mt-2 text-gray-600 dark:text-gray-400">Nodejs</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>

    {/* ____ SERVICES SECTION */}
    <div className="__skills-section w-full border-t border-gray-200 dark:border-gray-800 bg-pattern dark:bg-dpattern lg:flex lg:h-full lg:items-center lg:py-0 dark:bg-gray-900 bg-white">
     <div className="w-full mx-auto p-4 md:px-0 py-14 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
      <div className="flex flex-col items-center justify-center mt-7">
       <img src={services} className="w-16 h-16" />
       <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mt-2">
        Services
       </h1>
       <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl text-center">
        Sefatullah is a web developer and programmer. he is providing some
        services to his clients.
       </p>
      </div>
      <div className="w-full sm:p-1 lg:p-5 my-14 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl">
       <div className="flex flex-wrap -mx-4 space-y-2">
        <div className="w-full md:w-1/2 p-4 px-8 flex items-center justify-center">
         <img
          src={webdesign}
          className="w-full aspect-video object-cover rounded-md"
         />
        </div>
        <div className="w-full md:w-1/2 px-8 flex flex-col justify-center">
         <h1 className="text-gray-900 dark:text-white text-3xl font-semibold mt-2">
          Web Design
         </h1>
         <p className="mt-4 text-gray-600 dark:text-gray-400">
          I can design your website with modern design and user friendly
          interface.
         </p>
         <ul className="mt-4 text-gray-600 dark:text-gray-400">
          <li className="flex items-center">
           <TickIcon />
           Modern Design
          </li>
          <li className="flex items-center">
           <TickIcon />
           User Friendly
          </li>
          <li className="flex items-center">
           <TickIcon />
           Responsive
          </li>
         </ul>
         <div className="mt-6">
          <span className="text-gray-600 dark:text-gray-400">
           Starting at
           <span className="text-green-500 dark:text-green-400 font-semibold ml-2">
            $100
           </span>
          </span>
         </div>
        </div>
       </div>
      </div>
      <div className="w-full sm:p-1 lg:p-5 my-14 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl">
       <div className="flex flex-wrap -mx-4 space-y-5">
        <div className="w-full md:w-1/2 px-8 flex flex-col justify-center">
         <h1 className="text-gray-900 dark:text-white text-3xl font-semibold mt-2">
          Web Development
         </h1>
         <p className="mt-4 text-gray-600 dark:text-gray-400">
          I can develop your website with modern design.
         </p>
         <ul className="mt-4 text-gray-600 dark:text-gray-400">
          <li className="flex items-center">
           <TickIcon />
           Modern Design
          </li>
          <li className="flex items-center">
           <TickIcon />
           User Friendly
          </li>
          <li className="flex items-center">
           <TickIcon />
           Responsive
          </li>
         </ul>
         <div className="mt-6">
          <span className="text-gray-600 dark:text-gray-400">
           Starting at
           <span className="text-green-500 dark:text-green-400 font-semibold ml-2">
            $100
           </span>
          </span>
         </div>
        </div>
        <div className="w-full md:w-1/2 p-4 px-8 flex items-center justify-center relative">
         <img
          src={webdevelop3}
          className="object-cover w-full mb-9 rounded-md"
         />
         <img
          src={webdevelop1}
          className="absolute top-[50px] left-[100px] h-[80%] rounded-md"
         />
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
