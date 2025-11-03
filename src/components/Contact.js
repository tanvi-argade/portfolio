// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_328it7f",
        "template_0roggzu",
        form.current,
        "YJbMI6eG9ArIsiltU"
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Let’s Connect ✨
        </h2>
        <p className="contact-intro" data-aos="fade-up" data-aos-delay="100">
          Have a project, question, or collaboration idea? I’d love to hear from you!
        </p>

        <div className="contact-content">
          {/* Left Side — Socials */}
          <div
            className="contact-socials"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3>Find Me On</h3>
            <div className="social-icons">
              <a
                href="https://github.com/tanvi-argade"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/tanvi-argade"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:tanviargade1@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Right Side — Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div className="input-group">
              <input type="text" name="from_name" required />
              <label>Name</label>
            </div>
            <div className="input-group">
              <input type="email" name="from_email" required />
              <label>Email</label>
            </div>
            <div className="input-group">
              <textarea name="message" required></textarea>
              <label>Message</label>
            </div>
            <button type="submit" className="send-btn">
              Send Message 💌
            </button>
            {sent && <p className="sent-msg">✨ Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
