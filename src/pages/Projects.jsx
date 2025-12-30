import { Helmet } from "react-helmet";

function Projects() {
 return (
  <div className="min-h-[70vh] max-w-5xl mx-auto my-9 lg:my-16">
   <Helmet>
    <title>Projects | Mohammad Sefatullah</title>
    <meta
     name="description"
     content="Mohammad Sefatullah's projects."
     data-react-helmet="true"
    />
    <meta
     name="keywords"
     content="Mohammad Sefatullah, projects, web developer"
     data-react-helmet="true"
    />
   </Helmet>
   <div className="flex flex-col items-center justify-center mt-7">
    <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-white">
     Projects
    </h1>
   </div>
   <section className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 px-4 lg:px-0 mt-12">
    {[
     {
      title: "Millat Science Club",
      image: "/images/works/p4.png",
      live: "https://mscbd.org",
      description:
       "A user-friendly club website. Made with React.js + Tailwind CSS and Node.js + PostgreSQL.",
     },
     {
      title: "Inventory Management System",
      image: "/images/works/p3.png",
      source: "https://github.com/mosefatullah/The-Blood-Project",
      description:
       " My first MERN-stack voluntary project. Developed in 2 days - voluntary work for Tamzid Rahman.",
     },
     {
      title: "Reacto Calculator",
      image: "/images/works/p9.png",
      live: "https://mosefatullah.github.io/react-calculator",
      source: "https://github.com/mosefatullah/react-calculator",
      description:
       "A simple scientific calculator built with React + Mathjs. It performs basic arithmetic operations.",
     },
    ].map((d) => (
     <>
      <div className="mt-12 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl h-fit">
       <img src={d.image} alt="Project" className="w-full rounded-t-md" />
       <div className="p-6 space-y-4">
        <div>
         <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {d.title}
         </h2>
         <p className="text-sm text-gray-600 dark:text-gray-400 pb-2 pt-1.5">
          {d.description}
         </p>
        </div>
        <div>
         <a
          href={d.live || ""}
          target="_blank"
          rel="noreferrer"
          className={
           "inline-block px-4 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition me-2 cursor-pointer " +
           (d.live ? "" : "hidden")
          }
         >
          Live Website
         </a>
         <a
          href={d.source || ""}
          target="_blank"
          rel="noreferrer"
          className={
           "inline-block px-4 py-2 bg-gray-700 text-white text-sm rounded-md hover:bg-gray-900 transition cursor-pointer " +
           (d.source ? "" : "hidden")
          }
         >
          Project Link
         </a>
        </div>
       </div>
      </div>
     </>
    ))}
   </section>
  </div>
 );
}

export default Projects;
