import React from "react";
import { Helmet } from "react-helmet";

// Assets
import me from "../assets/images/sefatullah.jpg";

function About() {
 return (
  <div className="__about min-h-[70vh]">
   <Helmet>
    <title>About | Mohammad Sefatullah</title>
    <meta
     name="description"
     content="About Mohammad Sefatullah, a web designer, developer, and programmer."
    />
    <meta
     name="keywords"
     content="About Mohammad Sefatullah, About Sefatullah, web developer, coder, bangladesh, web designer, frontend developer"
    />
    <link rel="canonical" href="https://sefatullah.com/?/about" />
   </Helmet>
   {/* ____ HERO SECTION */}
   <div
    className="grid grid-cols-1 lg:grid-cols-2 gap-9 p-4 pt-14 lg:pb-20 justify-items-center items-center relative md:px-16 lg:gap-y-12"
    style={{
     minHeight: "calc(100vh - 74px)",
    }}
   >
    <div className="max-w-xl lg:mb-0">
     <h1 className="text-4xl text-center font-semibold text-gray-900 dark:text-white">
      About
     </h1>
     <p className="mt-9 text-gray-600 dark:text-gray-400">
      Mohammad Sefatullah, a young and promising web designer, developer, and
      programmer, hails from the Shariatpur District of Bangladesh. Born on
      September 13th, his passion for coding ignited while he was still in
      seventh grade. This early spark ignited a dream – to become a software
      engineer and make a positive impact on his community.
     </p>
    </div>
    <div className=" bg-white dark:bg-gray-800 rounded-xl shadow-xl min-w-[300px] hidden lg:block">
     <img
      src="/android-chrome-512x512.png"
      alt="Mohammad Sefatullah"
      className="h-full rounded-xl object-cover min-h-[300px] max-h-[400px]"
     />
    </div>
    <div className=" bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-xl min-w-[300px]">
     <img
      src={me}
      alt="Mohammad Sefatullah: Bangladeshi Web Designer, Developer, and Programmer"
      className="w-full h-full rounded-xl object-cover min-h-[300px] max-h-[350px]"
     />
    </div>
    <div className="max-w-xl mb-[5rem] lg:mb-0">
     <p className="text-gray-600 dark:text-gray-400">
      Sefatullah completed his 10th grade at Darunnazat Siddikia Kamil Madrasah.
      He is currently furthering his studies at Tamirul Millat Kamil Madrasah
      College. Despite his academic commitments, his dedication to programming
      hasn't wavered. He actively volunteers with an organization, contributing
      his coding skills to ongoing projects. This experience not only hones his
      technical abilities but also allows him to give back to his community in a
      meaningful way.
     </p>
    </div>
   </div>
  </div>
 );
}

export default About;
