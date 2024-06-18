import React from "react";
import "./Information.css";
import Navbar from "../Navbar/Navbar";
import { assets } from "../../assets/assets";

const Information = () => {
  return (
    <div className="information">
      <div className="header_information">
        <div className="infor_heading">
          <p>About us</p>
          <hr />
        </div>
        <div className="navbar">
          <Navbar />
        </div>
      </div>
      <div className="body_information">
        <div className="about_me">
          <p>Hey there,<br />I'm Nikhil, a third-year B.Tech CSE student specializing in Data Science at Bennett University in Greater Noida. Coming from a middle-class family, I've always been highly motivated to excel academically and professionally. Throughout my studies, I've successfully completed 10-12 projects, demonstrating my proficiency in Java, Python, C++, DSA, and more. Despite having limited prior knowledge of computer science, my rapid learning abilities have enabled me to achieve an impressive CGPA of 9. In addition, I hold leadership positions in two prominent college clubs, GDSC and DSS. My commitment to meeting deadlines and ensuring the completion of tasks with precision is among my strongest qualities. In my leisure time, I indulge in listening to music and expressing my creativity through drawing.</p>
        </div>
        <div className="what_iam_doing">
          <div className="what_iam_doing_heading">
            <p>What I am doing...</p>
          </div>
          <div className="what_iam_doing_content">
            <div className="datascientist">
              <div className="datascientist_img">
                <img src={assets.datascience} alt="" />
              </div>
              <div className="datascientist_content">              
                <p className="heading">Data Scientist</p>
                <p className="para">Exploring data to uncover insights and drive decision-making through advanced analytics and machine learning</p>
              </div>
            </div>
            <div className="webdeveloper">
              <div className="webdeveloper_img">
                <img src={assets.webdeveloper} alt="" />
              </div>
              <div className="webdeveloper_content">
                <p className="heading">Web Developer</p>
                <p className="para">Exploring web to design intricate websites.</p>
              </div>
            </div>
            <div className="webdesign">
              <div className="webdesign_img">
                <img src={assets.webdesign} alt="" />
              </div>
              <div className="webdesign_content">
                <p className="heading">Web Design</p>
                <p className="para">Exploring the web to create intricate and user-friendly websites that combine aesthetics with functionality.</p>
              </div>
            </div>
            <div className="androiddeveloper">
              <div className="androiddeveloper_img">
                <img src={assets.androiddeveloper} alt="" />
              </div>
              <div className="androiddeveloper_content">
                <p className="heading">Android Developer</p>
                <p className="para">Exploring mobile platforms to create innovative and user-centric Android applications that enhance user experiences and meet diverse needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
