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
        <link
          rel="canonical"
          href="https://sefatullah.com/?/projects"
          data-react-helmet="true"
        />
      </Helmet>
      <div className="bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl">
        <h1 className="text-2xl font-medium text-center border-b border-gray-200 dark:border-slate-700 py-6 bg-slate-50 dark:bg-transparent rounded-t-md">
          Notable Projects
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">This page is under construction...</p>
      </div>
    </div>
  );
}

export default Projects;
