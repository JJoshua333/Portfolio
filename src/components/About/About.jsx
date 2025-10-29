import React from "react";
import "./About.css";
import { FaGraduationCap, FaGlobe, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import skibg from '../../assets/about-bg.jpg'
import profile from '../../assets/profile.jpg'

function About() {
  return (
    <section
      id="skills"
      className="skills-section"
      style={{ backgroundImage: `url(${skibg})` }}
    >
    <section id="about" className="about-section">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-text">
          <h2>About Me</h2>
          <p className="intro-text">
            I am a passionate and dedicated individual with a strong interest in
            technology, programming, and problem-solving. With hands-on experience
            in web development, data science, and cloud technologies, I strive to
            build innovative solutions that make a difference. I enjoy continuous
            learning and thrive on challenges that help me grow personally and
            professionally.
          </p>

          <div className="about-details">

            <div className="about-card">
              <h3><FaGraduationCap /> Education</h3>
              <ul>
                <li>
                  <b>St.Joseph’s University</b> <br />
                  Bachelor of Computer Application(Data Sciene)
                </li>
                <li>
                  <b>St.Joseph’s Pre-University College</b> <br />
                  Science(PCMC)
                </li>
                <li>
                  <b>Standard English School</b> <br />
                  SSLC
                </li>
              </ul>
            </div>

            <div className="about-card languages-card">
              <h3><FaGlobe /> Languages</h3>
              <ul>
                <li>English</li>
                <li>Hindi</li>
                <li>Tamil</li>
                <li>Kannada</li>
                <li>Telugu</li>
              </ul>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - IMAGE + CONTACT */}
        <div className="about-right">
          <div className="about-image">
            <img
              src={profile}
              alt="Profile"
            />
          </div>

          <div className="contact-box">
            <h3>📞 Contact</h3>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p><b>Email:</b> josephjoshua743@gmail.com</p>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <p><b>Phone:</b> +91 8431717332</p>
            </div>
          </div>
        </div>

      </div>
    </section></section>
  );
}

export default About;
