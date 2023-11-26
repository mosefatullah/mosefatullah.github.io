import React from "react";
import "./App.css";
import Sefatullah from "./assets/images/sefatullah-nobg.png";

import Navbar from "./assets/components/Navbar";

function App() {
 return (
  <>
   <div className="App">
    {/* __NAVBAR */}
    <Navbar />
    <div className="__home">
     <div className="__hero-section w-100 pb-0">
      <div className="intro container pb-0">
       <h2 className="fw-bolder mt-4">Mohammad Sefatullah</h2>
       <span className="badge fw-normal p-2" style={{ width: "fit-content" }}>
        Web Developer | Programmer | Coder
       </span>
       <p className="mt-4">
        Mohammad Sefatullah is a Bangladeshi web developer born September 2006
        in Bangladesh. He is now a student of higher secondary school.
        Sefatullah loves to code and make websites, and wants to be a software
        engineer in future.
       </p>
       <a
        href="about.html"
        className="btn btn-light p-2 px-4"
        style={{ width: "fit-content" }}
       >
        Learn More{" "}
        <svg
         xmlns="http://www.w3.org/2000/svg"
         width="16"
         height="16"
         fill="currentColor"
         className="bi bi-info-circle mb-1 ms-1"
         viewBox="0 0 16 16"
        >
         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
         <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
        </svg>
       </a>
      </div>
     </div>
     <div
      className="__new-section w-100 bg-dark"
      style={{
       minHeight: "20vh",
      }}
     ></div>
    </div>
   </div>
  </>
 );
}

export default App;
