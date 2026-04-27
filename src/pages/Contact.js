import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs.sendForm(
      "service_9ofnyhj",     // from EmailJS
      "template_2u1whku",    // from EmailJS
      form.current,
      "oGzN4kFDYlm0JXDzR"      // from EmailJS
    ).then(
      () => {
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error);
        alert("Failed to send message.");
      }
    );
  };

  return (
    <motion.div
      className="page contact"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="contact-card">
            <h3>Email</h3>
            <p>saidaliansar123@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <p>9961331658</p>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <p>Umayanalloor, Kollam</p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          />

          <button type="submit" className="btn">
            Send Message
          </button>

        </form>

      </div>
    </motion.div>
  );
}

export default Contact;