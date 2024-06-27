import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { assets, ed_list, experience_list } from '../../assets/assets';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
import './Resume.css';

const Resume = () => {

    const [skills, setSkills] = useState([
        { name: 'Python', percentage: 80 },
        { name: 'Java', percentage: 80 },
        { name: 'React js', percentage: 75 },
        { name: 'HTML CSS', percentage: 90 },
        { name: 'Figma', percentage: 90 },
        { name: 'C++', percentage: 60 }
      ]);
    
      useEffect(() => {
        AOS.init({ duration: 1000 });
    
        // Function to animate progress bars when scrolling
        const handleScroll = () => {
          const progressBarElements = document.querySelectorAll('.item_progress');
          progressBarElements.forEach((progressBar, index) => {
            const position = progressBar.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (position < screenHeight) {
              progressBar.style.width = `${skills[index].percentage}%`;
            }
          });
        };
    
        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup function to remove event listener
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [skills]); // Dependency array ensures useEffect runs when skills state changes
    

  

  return (
    <div className="information">
      <div className="header_information">
        <div className="infor_heading" data-aos="fade-down" data-aos-duration="2000">
          <p>Resume</p>
          <hr />
        </div>
        <div className="navbar">
          <Navbar />
        </div>
      </div>
      <div className="body_information">
        <div className="resume_education" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
          <div className="ed_heading">
            <div className="ed_heading_img">
              <img src={assets.reading} alt="" />
            </div>
            <div className="ed_heading_para">
              <p>Education</p>
            </div>
          </div>
          <hr />
          <div className="ed_list">
            {ed_list.map((item, index) => (
              <div key={index} className="ed_item" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <p className="ed_item_title">{item.ed_name}</p>
                <span>{item.ed_year}</span>
                <p className="ed_item_para">{item.ed_qualification}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="experience"  >
          <div className="ex_heading" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
            <div className="ex_heading_img">
              <img src={assets.reading} alt="" />
            </div>
            <div className="ex_heading_para">
              <p>Experience</p>
            </div>
          </div>
          <hr />
          <div className="ex_list">
            {experience_list.map((item, index) => (
              <div key={index} className="ex_item" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <p className="ex_item_title">{item.ex_name}</p>
                <span>{item.ex_year}</span>
                <p className="ex_item_para">{item.ex_qualification}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="my_skills" data-aos="fade-up">
          <div className="my_skills_heading">
            <p>My Skills</p>
          </div>
          <div className="my_skills_body">
            {skills.map((skill, index) => (
              <div className={`my_skill_item_${index + 1}`} key={index}>
                <div className="myskill_item_title">
                  <p>{skill.name}</p>
                  <p>{skill.percentage}%</p>
                </div>
                <div className="myskilitem_progressbar">
                  <div
                    className="item_progress"
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
