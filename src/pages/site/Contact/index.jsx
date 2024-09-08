import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import './index.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g67iv7p', 'template_u57nqln', form.current, {
        publicKey: 'rbUZ45hOyEw1Jymib',
      })
      .then(
        () => {
          setStatus("SUCCESS");
        },
        (error) => {
          setStatus("FAILED");
        },
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required />
        </div>
        <button type="submit" className="submit-button">Send</button>
        {status === "SUCCESS" && <p className="success-message">Message sent successfully!</p>}
        {status === "FAILED" && <p className="error-message">Message failed to send. Please try again.</p>}
      </form>
    </div>
  );
};

export default Contact;
