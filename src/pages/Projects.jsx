import React from "react";
import { Helmet } from "react-helmet";

function Projects() {
 React.useEffect(() => {
  async function getRepos() {
   fetch("https://api.github.com/users/mosefatullah/repos")
    .then((response) => response.json())
    .then((data) => {
     let dataSnippets1 = "";
     let dataSnippets2 = "";
     const nProjectsContainer = document.getElementById("notable-projects");
     const projectsContainer = document.getElementById("projects");

     if (data.length === 0)
      return (
       (dataSnippets1 = `<div class="w-full text-center text-xl text-gray-900 dark:text-gray-100">No projects found</div>`),
       (dataSnippets2 = `<div class="w-full text-center text-xl text-gray-900 dark:text-gray-100">No projects found</div>`)
      );
     data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .filter(
       (repo) => repo.description && repo.description.includes("Project")
      )
      .map((repo) => {
       dataSnippets1 += `
         <div class="flex flex-col items-center justify-center p-4">
         <img
         src="https://img.icons8.com/color/96/000000/project.png"
         className="w-15 h-15"
         />
         <p className="mt-2 text-gray-600 dark:text-gray-400">${repo.name}</p>
         <a href="${repo.html_url}" target="_blank" rel="noreferrer" class="mt-2 text-gray-600 dark:text-gray-400 hover:underline hover:text-blue-500 text-sm">View on GitHub</a>
       </div>
         `;
      });
     data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .filter(
       (repo) => !repo.description || !repo.description.includes("Project")
      )
      .map((repo) => {
       dataSnippets2 += `
        <div class="flex flex-col items-center justify-center p-4">
        <img
        src="https://img.icons8.com/color/96/000000/${
         repo.language
          ? repo.language
             .toLowerCase()
             .replace("html", "html-5")
             .replace("scss", "sass")
             .replace("css", "css3")
          : "markdown"
        }.png"
        className="w-15 h-15"
        />
        <p className="mt-2 text-gray-600 dark:text-gray-400">${repo.name}</p>
        <a href="${
         repo.html_url
        }" target="_blank" rel="noreferrer" class="mt-2 text-gray-600 dark:text-gray-400 hover:underline hover:text-blue-500 text-sm">View on GitHub</a>
      </div>
        `;
      });
     nProjectsContainer.innerHTML = dataSnippets1;
     projectsContainer.innerHTML = dataSnippets2;
    });
  }
  getRepos();
 }, []);
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
    <div
     className="grid grid-cols-2 md:grid-cols-4 items-center my-7 space-x-3 min-h-[200px]"
     id="notable-projects"
    ></div>
   </div>
   <div className="bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl mt-12">
    <h1 className="text-2xl font-medium text-center border-b border-gray-200 dark:border-slate-700 py-6 bg-slate-50 dark:bg-transparent rounded-t-md">
     Projects
    </h1>
    <div
     className="grid grid-cols-2 md:grid-cols-4 items-center my-7 space-x-3 min-h-[200px]"
     id="projects"
    ></div>
   </div>
  </div>
 );
}

export default Projects;
