import React from "react";
import sbig from "../../assets/about-bg.jpg";
import { FaCertificate } from "react-icons/fa";
import "./Certificates.css";

function Certificates() {
  const certificates = [
    { title: "Introduction to Artificial Intelligence", file: "AI_Certificate.pdf" },
    { title: "Artificial Intelligence: Types of Artificial Intelligence", file: "AI_and_types.pdf" },
    { title: "International Conference On Recent Trends in Advanced Computing (ICRAC-2023)", file: "ICRAC-2023.pdf" },
    { title: "Volunteering in Qruizbeez", file: "Qruizbeez.pdf" },
    { title: "Introduction to Psychology (NPTEL)", file: "Introduction_to_Psychology.pdf" },
    { title: "Hands-on Artificial Intelligence with TensorFlow", file: "Hands-on_AI.pdf" },
  ];

  const handleDownload = (file) => {
    const baseUrl = window.location.origin + '/Portfolio';
    const fileUrl = `${baseUrl}/assets/Certificates/${file}`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', file);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="certificates-section" style={{ backgroundImage: `url(${sbig})` }}>
      <h2 className="section-title">
        <FaCertificate /> Certificates
      </h2>
      <div className="certificates-list">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3>{cert.title}</h3>
            <button onClick={() => handleDownload(cert.file)}>Download</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
