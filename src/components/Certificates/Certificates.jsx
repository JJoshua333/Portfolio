import React from "react";
import "./Certificates.css";
import skibg from "../../assets/about-bg.jpg";
import { FaCertificate } from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      title: "Introduction to Artificial Intelligence",
      file: "AI_Certificate.pdf",
    },
    {
      title: "Artificial Intelligence: Types of Artificial Intelligence",
      file: "AI_and_types.pdf",
    },
    {
      title:
        "International Conference On Recent Trends in Advanced Computing(ICRAC-2023)",
      file: "ICRAC-2023.pdf",
    },
    {
      title: "Volunteering in QRIUZBEEZ",
      file: "Qruizbeez.pdf",
    },
    {
      title: "Introduction to Psychology (NPTEL)",
      file: "Introduction_to_Psychology.pdf",
    },
    {
      title: "Hands-on Artificial Intelligence with TensorFlow",
      file: "Hands-on_AI.pdf"
    }
  ];
    const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/assets/Certificates/${file}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="certificates"
      className="certificates-section"
      style={{ backgroundImage: `url(${skibg})` }}
    >
      <div className="overlay"></div>

      <div className="certificates-content">
        <h2 className="certificates-title"><FaCertificate className="cert-icon"/> CERTIFICATES</h2>
    
        <div className="cert-list">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>Issued by: Authorized Institute</p>
              </div>
                 <button onClick={() => handleDownload(cert.file)}>Download</button>
                </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
