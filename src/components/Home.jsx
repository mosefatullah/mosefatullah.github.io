import React from "react";

export default function Home() {
 return (
  <>
   <div className="_sketch h-[150px] w-[200px] absolute dark:left-[18%] top-8 rotate-12 rounded-3xl bg-gradient-to-l dark:from-green-600 dark:to-blue-500 blur-3xl filter dark:block dark:opacity-20 lg:top-44 lg:-left-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[700px]"></div>
   <div
    className="grid grid-cols-1 lg:grid-cols-2 gap-9 p-4 py-7 justify-items-center items-center gap-y-14 relative md:px-16"
    style={{
     minHeight: "calc(100vh - 64px)",
    }}
   >
    <div className="max-w-xl text-center">
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
       Learn More
      </a>
     </div>
    </div>
    <div className="boardOfMe bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-xl w-full h-full">
     <div className="bg-slate-500 p-4 py-3 rounded-t-xl">
      <div className="flex gap-2">
       <div className="w-3 h-3 bg-red-600 rounded-full"></div>
       <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
       <div className="w-3 h-3 bg-green-600 rounded-full"></div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
