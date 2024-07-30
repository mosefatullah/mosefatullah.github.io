import { Link } from "react-router-dom";

export default function Footer() {
 return (
  <div className="bg-slate-200 dark:bg-gray-800">
   <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="xl:grid xl:grid-cols-2 xl:gap-8">
     <div className="md:grid md:grid-cols-2 md:gap-8 xl:col-span-2">
      <div className="grid grid-cols-2 gap-8">
       <div>
        <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-600 dark:text-white uppercase">
         Website
        </h4>
        <ul className="mt-6 space-y-4">
         <li>
          <Link
           to="/"
           className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
           Home
          </Link>
         </li>
         <li>
          <Link
           to="/about"
           className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
           About
          </Link>
         </li>
         <li>
          <Link
           to="/projects"
           className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
           Projects
          </Link>
         </li>
         <li>
          <Link
           to="/blog"
           className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
           Blog
          </Link>
         </li>
        </ul>
       </div>
       <div>
        <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-600 dark:text-white uppercase">
         Social Media
        </h4>
        <ul className="mt-6 space-y-4">
         <li>
          <a
           href="https://www.facebook.com/sefatullahpage/"
           target="_blank"
           rel="noopener noreferrer"
           className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
           Facebook
          </a>
         </li>
         <li>
          <a
           href="https://linkedin.com/in/mosefatullah/"
           target="_blank"
           rel="noopener noreferrer"
           className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
           LinkedIn
          </a>
         </li>
         <li>
          <a
           href="https://github.com/mosefatullah/"
           target="_blank"
           rel="noopener noreferrer"
           className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
           Github
          </a>
         </li>
         <li>
          <a
           href="https://twitter.com/mosefatullah/"
           target="_blank"
           rel="noopener noreferrer"
           className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
           Twitter
          </a>
         </li>
        </ul>
       </div>
      </div>
     </div>
    </div>
    <div className="mt-12 border-t border-gray-300 pt-8 dark:border-gray-600">
     <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
      &copy; <span>{new Date().getFullYear() || "2024"}</span> Sefatullah. All
      rights reserved.
     </p>
    </div>
   </div>
  </div>
 );
}
