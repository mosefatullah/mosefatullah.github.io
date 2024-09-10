import { Helmet } from "react-helmet";

// Assets
import me from "../assets/images/sefatullah.jpg";

import { Description } from "../data/meta";

function About() {
  return (
    <div className="__about min-h-[70vh]">
      <Helmet>
        <title>About | Mohammad Sefatullah</title>
        <meta
          name="description"
          content={Description}
          data-react-helmet="true"
        />
        <meta
          name="keywords"
          content="Mohammad Sefatullah, Sefatullah, Full Stack Web Developer, Coder, Programmer, MERN Stack Developer, Web Designer, Web Developer, Mohammad Sefatullah Official Website"
          data-react-helmet="true"
        />
        <link rel="canonical" href="https://sefatullah.com/about" data-react-helmet="true" />
      </Helmet>
      {/* ____ HERO SECTION */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-9 p-4 pt-14 lg:pb-20 justify-items-center items-center relative md:px-16 lg:gap-y-12"
        style={{
          minHeight: "calc(100vh - 74px)",
        }}
      >
        <div className="max-w-xl lg:mb-0">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold text-gray-900 dark:text-white">
            About
          </h1>
          <p className="mt-9 text-gray-600 dark:text-gray-400">
            Mohammad Sefatullah, a young and promising web designer, developer, and programmer, hails from the Barishal District of Bangladesh. Born on 2006, his passion for coding ignited while he was still in seventh grade. This early spark ignited a dream – to become a software engineer and make a positive impact on his community.
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
            Sefatullah completed his 10th grade at Darunnazat Siddikia Kamil Madrasah (religious school). He is currently furthering his studies at Tamirul Millat Kamil Madrasah (religious high school). Despite his academic commitments, his dedication to coding hasn't wavered. He actively volunteers with an organization, contributing his coding skills to ongoing projects. This experience not only hones his technical abilities but also allows him to give back to his community in a meaningful way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
