import React from "react";
import "./Information.css";
import Navbar from "../Navbar/Navbar";
import { assets, tat_list } from "../../assets/assets";
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

const Information = () => {
  return (
    <div className="information">
      <div className="header_information">
        <div className="infor_heading">
          <p>About Me</p>
          <hr />
        </div>
        <div className="navbar">
          <Navbar />
        </div>
      </div>
      <div className="body_information">
        <Fade direction="up">
          <div className="about_me">
            <p>Hey there,<br />I'm Nikhil, a third-year B.Tech CSE student specializing in Data Science at Bennett University in Greater Noida. Coming from a middle-class family, I've always been highly motivated to excel academically and professionally. Throughout my studies, I've successfully completed 10-12 projects, demonstrating my proficiency in Java, Python, C++, DSA, and more. Despite having limited prior knowledge of computer science, my rapid learning abilities have enabled me to achieve an impressive CGPA of 9. In addition, I hold leadership positions in two prominent college clubs, GDSC and DSS. My commitment to meeting deadlines and ensuring the completion of tasks with precision is among my strongest qualities. In my leisure time, I indulge in listening to music and expressing my creativity through drawing.</p>
          </div>
        </Fade>

        <div className="what_iam_doing">
          <div className="what_iam_doing_heading">
            <p>What I am <span>doing...</span></p>
          </div>
          <div className="what_iam_doing_content">
            <Fade direction="up">
              <div className="datascientist">
                <div className="datascientist_img">
                  <img src={assets.datascience} alt="" />
                </div>
                <div className="datascientist_content">              
                  <p className="heading">Data Scientist</p>
                  <p className="para">Exploring data to uncover insights and drive decision-making through advanced analytics and machine learning</p>
                </div>
              </div>
            </Fade>

            <Fade direction="up">
              <div className="webdeveloper">
                <div className="webdeveloper_img">
                  <img src={assets.webdeveloper} alt="" />
                </div>
                <div className="webdeveloper_content">
                  <p className="heading">Web Developer</p>
                  <p className="para">Exploring web to design intricate websites.</p>
                </div>
              </div>
            </Fade>

            <Fade direction="up">
              <div className="webdesign">
                <div className="webdesign_img">
                  <img src={assets.webdesign} alt="" />
                </div>
                <div className="webdesign_content">
                  <p className="heading">Web Design</p>
                  <p className="para">Exploring the web to create intricate and user-friendly websites that combine aesthetics with functionality.</p>
                </div>
              </div>
            </Fade>

            <Fade direction="up">
              <div className="androiddeveloper">
                <div className="androiddeveloper_img">
                  <img src={assets.androiddeveloper} alt="" />
                </div>
                <div className="androiddeveloper_content">
                  <p className="heading">Android Developer</p>
                  <p className="para">Exploring mobile platforms to create innovative and user-centric Android applications that enhance user experiences and meet diverse needs.</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="achivements">
          <div className="achivements_heading">
            <p>Achivements :)</p>
          </div>
          
          <div className="achivements_details">
            <Slide direction="up">
              <div className="achivements_img_content">
                <div className="achivement_indual">
                  <div className="achivement_img">
                    <img src={assets.informatica} alt="" />
                    <p className="heading">Top 20 in Infromatica Data Engineer Hackathon</p>
                  </div>
                  <div className="achivement_content">
                    <p className="para"> powered 
by hack2skill and this is my first hackathon 
in data science.</p>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide direction="up">
              <div className="achivements_img_content">
                <div className="achivement_indual">
                  <div className="achivement_img">
                    <img src={assets.gssoc} alt="" />
                    <p className="heading">GSSoC'24 & SSoC 2.0 </p>
                  </div>
                  <div className="achivement_content">
                    <p className="para"> powered 
by hack2skill and this is my first hackathon 
in data science.</p>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide direction="up">
              <div className="achivements_img_content">
                <div className="achivement_indual">
                  <div className="achivement_img">
                    <img src={assets.guru} alt="" />
                    <p className="heading">First big project completed from start to finish!</p>
                  </div>
                  <div className="achivement_content">
                    <p className="para"> Developed a comprehensive e-commerce system that facilitates seamless product purchases 
for customers and streamlines order management for administrators, resulting in a 25% 
increase in overall sales and a 10% reduction in operational costs.</p>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide direction="up">
              <div className="achivements_img_content">
                <div className="achivement_indual">
                  <div className="achivement_img">
                    <img src={assets.gdsc} alt="" />
                    <p className="heading">Google Developer Student Club</p>
                  </div>
                  <div className="achivement_content">
                    <p className="para">Secured the position of Design Co-Lead for 
the 2023-24 tenure and leveraged this role 
to build more connections and knowledge.</p>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide direction="up">
              <div className="achivements_img_content">
                <div className="achivement_indual">
                  <div className="achivement_img">
                    <img src={assets.Dss} alt="" />
                    <p className="heading">Data Science Society</p>
                  </div>
                  <div className="achivement_content">
                    <p className="para"> Appointed as 
Design Lead for the 2023-24 term, and I 
also received recognition as the most active 
person for excellent work in the club.</p>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>

        <div className="toolsandtechnologies">
          <div className="tat_heading">
            <p>Tools And Technologies</p>
          </div>
          <div className="tat_content">
            {tat_list.map((item, index) => (
              <Zoom key={index}>
                <div className="tat_imgs">
                  <img src={item.imgUrl} alt="" />
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
