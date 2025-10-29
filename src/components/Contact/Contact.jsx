import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  const fileData = JSON.stringify(formData, null, 2);
  const blob = new Blob([fileData], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "message.json"; 
  link.click();

  URL.revokeObjectURL(url);
  setSubmitted(true);
  setFormData({ name: "", email: "", message: "" });
};

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <p className="thankYou"> Thank you!</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Message..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
