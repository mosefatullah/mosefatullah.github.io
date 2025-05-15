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
      <div className="mt-12 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl">
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">This page is under construction...</p>
      </div>
    </div>
  );
}

export default Projects;
