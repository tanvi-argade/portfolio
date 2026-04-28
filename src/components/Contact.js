import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        "service_328it7f",
        "template_0roggzu",
        form.current,
        "YJbMI6eG9ArIsiltU"
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          setStatus({ type: "error", message: "Something went wrong. Please try again." });
          setLoading(false);
          console.error("FAILED...", error);
        }
      );
  };

  const openResume = () => {
    window.open(`${process.env.PUBLIC_URL}/Tanvi_Argade_Resume.pdf`, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <p className="section-subtitle">Open to internships and full-time opportunities.</p>

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <p className="info-label">Email</p>
                <a href="mailto:tanviargade1@gmail.com" className="info-link">tanviargade1@gmail.com</a>
              </div>
            </div>
            <div className="info-item">
              <FaLinkedin className="info-icon" />
              <div>
                <p className="info-label">LinkedIn</p>
                <a href="https://linkedin.com/in/tanvi-argade" target="_blank" rel="noreferrer" className="info-link">tanvi-argade</a>
              </div>
            </div>
            <div className="info-item">
              <FaGithub className="info-icon" />
              <div>
                <p className="info-label">GitHub</p>
                <a href="https://github.com/tanvi-argade" target="_blank" rel="noreferrer" className="info-link">tanvi-argade</a>
              </div>
            </div>
            <button className="btn-primary resume-dl-btn" onClick={openResume}>
              Download Resume
            </button>
          </div>

          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="contact-form" 
            data-aos="fade-left"
          >
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="from_name" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="from_email" required placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" required placeholder="How can I help you?" rows="5"></textarea>
            </div>

            {/* Hidden fields for EmailJS placeholders */}
            <input type="hidden" name="subject" value="New Portfolio Contact Message" />
            <input 
              type="hidden" 
              name="date" 
              value={new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                dateStyle: 'full',
                timeStyle: 'short'
              })} 
            />
            <button type="submit" className="btn-primary send-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status.message && (
              <p className={`form-status ${status.type}`}>
                {status.type === "success" ? "✨ " : "❌ "}
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
