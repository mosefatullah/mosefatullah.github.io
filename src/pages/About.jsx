import { Helmet } from "react-helmet";

function About() {
 return (
  <div className="__about min-h-[70vh]">
   <Helmet>
    <title>About | Mohammad Sefatullah</title>
    <meta
     name="keywords"
     content="Mohammad Sefatullah, Sefatullah, Full Stack Web Developer, Coder, Programmer, MERN Stack Developer, Web Designer, Web Developer, Mohammad Sefatullah Official Website"
     data-react-helmet="true"
    />
   </Helmet>
   {/* ____ HERO SECTION */}
   <div
    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center"
    style={{
     minHeight: "calc(100vh - 74px)",
    }}
   >
    <div className="max-w-3xl mx-auto">
     <h1 className="text-4xl lg:text-5xl text-center font-semibold text-gray-900 dark:text-white">
      About
     </h1>
    <div className="flex flex-col gap-6 mt-8">
     <p className="mt-9 text-gray-600 dark:text-gray-400 xl:text-lg">
      Mohammad Sefatullah, a young and promising web designer, developer, and
      programmer, hails from Bangladesh. Born in the early 2000s, his passion
      for ilm and the right skills ignited while he was in seventh grade. This early spark ignited
      a dream – to become and doing something.
     </p>
     <p className="text-gray-600 dark:text-gray-400 xl:text-lg">
      Sefatullah completed his Dakhil (SSC) at Darunnazat Siddikia Kamil
      Madrasah and Alim (HSC) at Tamirul Millat Kamil Madrasah. Despite his
      academic commitments, his dedication to coding hasn't wavered. He actively
      tries to think about his life and goals to do something. This experience
      not only hones his technical abilities but also allows him to give back to
      his community in a meaningful way.
     </p>
    </div>
    </div>
   </div>
  </div>
 );
}

export default About;
