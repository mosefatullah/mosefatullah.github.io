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
      title: "Personal Portfolio of Saad Al Amin",
      image: "/images/works/p1.png",
      live: "https://saadalamin.com",
     },
     {
      title: "Website of Millat Science Club",
      image: "/images/works/p4.png",
      live: "https://mscbd.org",
     },
     {
      title: "Inventory Management System",
      image: "/images/works/p3.png",
      live: "https://imt.thebloodproject.com/",
      source: "https://github.com/mosefatullah/The-Blood-Project",
     },
     {
      title: "Agency Website of Videophics",
      image: "/images/works/p8.png",
      live: "https://videophics.com/",
      source: "https://github.com/videophics/videophics.github.io",
     },
     {
      title: "Band Qaseeda Website",
      image: "/images/works/p5.png",
      live: "https://www.qaseeda.org/",
     },
     {
      title: "School Website",
      image: "/images/works/p2.png",
      live: "https://mumodel.info/",
     },
     {
      title: "Special Organization Website",
      image: "/images/works/p6.png",
      live: "https://specialstars.github.io/",
      source: "https://github.com/specialstars/specialstars.github.io",
     },
     {
      title: "Youth Organization Website",
      image: "/images/works/p7.png",
      live: "https://www.muktirghonta.com/",
      source: "https://github.com/saadalamin/muktirghonta.com",
     },
    ].map((d) => (
     <>
      <div className="mt-12 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl">
       <img src={d.image} alt="Project" className="w-full rounded-t-md" />
       <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
         {d.title}
        </h2>
        <a
         href={d.live || ""}
         target="_blank"
         rel="noreferrer"
         className={
          "inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition me-2 cursor-pointer " +
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
          "inline-block px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900 transition cursor-pointer " +
          (d.source ? "" : "hidden")
         }
        >
         Project Link
        </a>
       </div>
      </div>
     </>
    ))}
   </section>
  </div>
 );
}

export default Projects;
