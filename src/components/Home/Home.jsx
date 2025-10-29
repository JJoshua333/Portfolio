import React from "react";
import "./Home.css";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import profile from "../../assets/profile.jpg"
import bgImage from "../../assets/bg-img3.jpg";  

const resume = process.env.PUBLIC_URL + "/assets/joshua_resume.pdf";
 

function Home() {
  return (
    <section
      id="home"
      className="home-section"
      style={{ backgroundImage: `url(${bgImage})` }}>

      <div className="overlay"></div>

      <div className="home-content">
        {/* LEFT INFO BOX */}
        <div className="info-box">
          <h2>Hello,</h2>
          <h1>
            I'm <span>Joseph Joshua</span>
          </h1>
          <h3>Website Designer & Frontend Developer</h3>
          <p>
            I craft interactive, responsive, and performance-driven web
            experiences using React, JavaScript, and modern UI design principles.
          </p>

          <div className="button-group">
            <a href={resume} download className="btn resume-btn">
              Download Resume
            </a>

            <a
              href="https://www.instagram.com/joseph_joshua_3"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-joshua-09761528b "
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:josephjoshua743@gmail.com" className="icon-btn">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="photo-box">
          <a href="#about">
          <img src={profile} alt="Joseph Joshua" className="profile-photo" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
