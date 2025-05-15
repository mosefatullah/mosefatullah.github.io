import { Helmet } from "react-helmet";

function Contact() {
    return (
     <div className="__about min-h-[70vh]">
      <Helmet>
       <title>Contact - Mohammad Sefatullah</title>
       <meta
        name="description"
        content="If you want to contact him, visit this page to get information."
        data-react-helmet="true"
       />
       <meta
        name="keywords"
        content="Contact Mohammad Sefatullah, Contact Sefatullah, web developer, coder, bangladesh, web designer, frontend developer"
        data-react-helmet="true"
       />
       <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
       ></script>
      </Helmet>
      {/* ____ HERO SECTION */}
      <div
       className="p-4 pt-14 lg:pb-20 relative lg:gap-y-12 gap-8 lg:flex justify-center items-center"
       style={{
        minHeight: "calc(100vh - 74px)",
       }}
      >
       <section className="bg-white dark:bg-gray-800 p-8 lg:py-14 lg:px-12 rounded max-w-[500px] mx-auto lg:mx-0">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
         Contact
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-lg">
         If you want to contact him, please fill up this form:
        </p>
        <form action="#" className="space-y-8">
         <div>
          <label
           htmlFor="email"
           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
           Your email
          </label>
          <input
           type="email"
           id="email"
           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
           placeholder="name@company.com"
           required
          />
         </div>
         <div>
          <label
           htmlFor="subject"
           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
           Subject
          </label>
          <input
           type="text"
           id="subject"
           className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
           placeholder="eg. Services"
           required
          />
         </div>
         <div className="sm:col-span-2">
          <label
           htmlFor="message"
           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
           Your message
          </label>
          <textarea
           id="message"
           rows="6"
           className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
           placeholder="Leave a comment..."
          ></textarea>
         </div>
         <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
         >
          Send message
         </button>
        </form>
       </section>
       <section className="py-8 lg:py-0">
        <p className="text-gray-500 dark:text-gray-400 text-center text-lg">
         Or
        </p>
       </section>
       <section className="p-8 lg:px-12">
        <h2 className="mb-8 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
         Schedule Meeting
        </h2>
        <div
         className="calendly-inline-widget"
         data-url="https://calendly.com/mosefatullah?hide_gdpr_banner=1"
         style={{ minWidth: "400px", height: "400px" }}
        ></div>
       </section>
      </div>
     </div>
    );
}

export default Contact;
