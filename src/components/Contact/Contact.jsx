import React, { useRef, useState } from 'react';
import Navbar from "../Navbar/Navbar";
import emailjs from '@emailjs/browser';
import "./Contact.css"

const Contact = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_izg22ys', 'template_zadne8p', form.current, {
        publicKey: '4ahfuuqoqXX83g7GY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="information">
      <div className="header_information">
        <div className="infor_heading">
          <p>Contact Me</p>
          <hr />
        </div>
        <div className="navbar">
          <Navbar />
        </div>
      </div>
      <div className="body_information">
        <div className="contact_form_section">
          <div className="contact_form_heading">
            <p> Contact Form </p>
          </div>
          <div className="contact_form">
            {!formSubmitted ? (
              <form ref={form} onSubmit={sendEmail}>
                <div className="form_first_section">
                  <div className="name_section">
                    <label>Name </label>
                    <input type="text" name="from_name" placeholder="Name" required/>
                  </div>
                  <div className="email_section">
                    <label>Email</label>
                    <input type="email" name="from_email" placeholder="Email" required/>
                  </div>
                </div>
                <div className="form_second_section">
                  <div className="message_section">
                    <label>Message</label>
                    <textarea name="message" placeholder="Write here something..." required/>
                  </div>
                </div>
                <div className="submitbutton">
                  <input type="submit" value="Send" />
                </div>
                <div className="thanks_message">
                  <p className="main_line">Thank you for visiting my portfolio! I'm delighted to connect with you.</p>
                  <p className="subline">Feel free to connect with me on social media or contact me directly. Let's create something amazing together— <span> just don't ask me to fix your WiFi!</span></p>
                </div>
              </form>
            ) : (
              <div className="form_submitted_message">
                <div className="submit_message">
                    <p>Your message has been sent successfully👍.</p>
                </div>
                <div className="thanks_message">
                  <p className="main_line">Thank you for visiting my portfolio! I'm delighted to connect with you.</p>
                  <p className="subline">Feel free to connect with me on social media or contact me directly. Let's create something amazing together— <span> just don't ask me to fix your WiFi!</span></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
