import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#about">About</a></li>


      </ul>
      <a href="#contact" className="contact-link">Contact</a>
    </nav>
  );
}

export default Navbar;
