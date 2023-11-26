import React from "react";
import logo from "../images/sefatullah.png";
import menuIcon from "../images/menu.png";

export default function Navbar() {
 return (
  <nav className="navbar">
   <div className="container">
    <a className="navbar-brand" href="/">
     <img src={logo} alt="Saad Al Amin" width="35" height="35" />
    </a>
    <div className="d-lg-none dropdown">
     <button className="nav-link mx-2" data-bs-toggle="dropdown">
      <img
       src={menuIcon}
       alt="Menu"
       width="17"
       height="17"
      />
     </button>
     <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
      <li>
       <a className="dropdown-item active" href="/">
        Home
       </a>
      </li>
      <li>
       <a className="dropdown-item" href="works.html">
        Works
       </a>
      </li>
      <li>
       <a className="dropdown-item" href="blog.html">
        Blog
       </a>
      </li>
      <li>
       <a className="dropdown-item" href="about.html">
        About
       </a>
      </li>
     </ul>
    </div>
    <ul className="desktop d-none d-lg-flex list-unstyled gap-5 m-0 text-uppercase">
     <li>
      <a className="active" href="/">
       Home
      </a>
     </li>
     <li>
      <a href="works.html">Works</a>
     </li>
     <li>
      <a href="blog.html">Blog</a>
     </li>
     <li>
      <a href="about.html">About</a>
     </li>
     <li>
      <a href="https://www.google.com/search?q=saad+al+amin" target="_blank">
       <svg
        viewBox="0 0 24 24"
        focusable="false"
        width="24"
        height="24"
        style={{ fill: "white", marginTop: "-5px" }}
       >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
       </svg>
      </a>
     </li>
    </ul>
   </div>
  </nav>
 );
}
