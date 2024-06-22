import React, { useEffect } from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS

const Header = () => {

  useEffect(() => {
    AOS.init({  // initialize AOS
      duration: 1000,  // animation duration
      once: true,      // animate only once
      easing: 'ease-out', // easing function
    });
  }, []);

  return (
    <div className="header">
      <div className="profile_section" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="150" data-aos-offset="0">
        <div className="picture" >
          <div className="profileimg">
            <img src={assets.profile} alt="" />
          </div>
          <div className="groupimg">
            <video src={assets.developer_bg_video} alt="" className="profile-video" autoPlay muted loop/>
          </div>
        </div>
        <div className="inform">
          <div className="myname">
            <h2>Nikhil Deshmukh</h2>
          </div>
          <div className="para">
            <p>
              Data Scientist | Software Engineer | web Developer | Ui/Ux
              Designer | android Developer
            </p>
          </div>
        </div>
        <hr />

        <div className="connect_infrom">
          <div className="mail">
            <img src={assets.mail} alt="" />
            <div className="mail_content">
              <h5>EMAIL</h5>
              <a href="mailto:nikhildeshmukh170@gmail.com">
                <p>nikhildeshmukh170@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="education">
            <img src={assets.education} alt="" />
            <div className="education_content">
              <h5>EDUCATION</h5>
              <p>B Tech CSE with Specialization in Data Science</p>
            </div>
          </div>
          <div className="contact">
            <img src={assets.contact} alt="" />
            <div className="contact_content">
              <h5>Contact</h5>
              <a href="tel:+919022671564">
                <p>+919022671564</p>
              </a>
            </div>
          </div>
        </div>

        <div className="bottom_content">
          <div className="download_cv">
            <a href={assets.NikhilDeshmukhResume} download="Nikhil Deshmukh CV.pdf">
              <p>Download CV</p>
            </a>
          </div>
          <div className="social_media">
            <a
              href="https://www.linkedin.com/in/nikhil-d-deshmukh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/nikhildeshmukh170"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.github} alt="GitHub" />
            </a>
            <a
              href="https://twitter.com/nikhil_desh1938"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/nikhil.d.01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="inform_section" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0">
      </div>
    </div>
  );
};

export default Header;
