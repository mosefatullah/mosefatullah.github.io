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
    <section>
     <h2 className="mb-8 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
      Contact Information
     </h2>
     <div className="bg-white dark:bg-gray-800 p-8 lg:py-12 lg:pb-[15rem] lg:px-16 rounded-2xl max-w-[500px] mx-auto lg:mx-0">
      <p className="mb-2">
       <b>Email:</b>{" "}
       <a
        href="mailto:mosefatullah@gmail.com"
        className="text-gray-500 dark:text-gray-400"
       >
        mosefatullah@gmail.com
       </a>
      </p>
      <p className="mb-2">
       <b>Facebook:</b>{" "}
       <a
        href="https://m.me/mosefatullah"
        className="text-gray-500 dark:text-gray-400"
       >
        m.me/mosefatullah
       </a>
      </p>
     </div>
    </section>
    <section className="p-8 lg:py-0">
     <p className="text-gray-500 dark:text-gray-400 text-center text-lg">Or</p>
    </section>
    <section className="p-8 pb-0">
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
