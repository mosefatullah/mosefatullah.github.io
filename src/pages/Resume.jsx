import { Helmet } from "react-helmet";
import ResumePDF from "../assets/Resume.pdf";

function Resume() {
 return (
  <div className="__resume min-h-[70vh] mb-9 lg:mb-16">
   <Helmet>
    <title>Resume - Mohammad Sefatullah</title>
    <meta
     name="description"
     content="Resume of Mohammad Sefatullah, a web developer from Bangladesh."
     data-react-helmet="true"
    />
    <meta
     name="keywords"
     content="Resume, Mohammad Sefatullah, web developer, Bangladesh, frontend developer, coder"
     data-react-helmet="true"
    />
   </Helmet>
   <div className="flex flex-col items-center justify-center mt-7">
    <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-white">
     Resume
    </h1>
   </div>
   <div className="mt-12 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl max-w-3xl mx-auto">
    <object
     data={ResumePDF}
     type="application/pdf"
     width="100%"
     height="800px"
    ></object>
   </div>
  </div>
 );
}

export default Resume;
