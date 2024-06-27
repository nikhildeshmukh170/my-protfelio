import React from 'react'
import "./Achivements.css"
import Navbar from '../Navbar/Navbar'
import { Certificate_list, Hackathon_list, project_list } from '../../assets/assets'

const Achivements = () => {
  return (
    <div className="information">
      <div className="header_information">
        <div className="infor_heading">
          <p>Achivements</p>
          <hr />
        </div>
        <div className="navbar">
          <Navbar />
        </div>
      </div>
      <div className="body_information">
        <div className="projects_section">
            <div className="projects_section_heading">
                <p>Projects</p>
            </div>
            <div className="project_content">
              {project_list.map((item,index)=>(
                <div key={index} className="project_item">
                  <li>{item.Project_Name}</li>
                </div>
              ))}
            </div>
        </div>
        <div className="certificates_section">
        <div className="certificates_section_heading">
                <p>Certificates</p>
            </div>
            <div className="certificate_content">
              {Certificate_list.map((item,index)=>(
                <div key={index} className="certificate_item">
                  <li>{item.certificate_name}</li>
                </div>
              ))}
            </div>
        </div>
        <div className="hackathon_section">
        <div className="hackathon_section_heading">
                <p>Hackathon</p>
            </div>
            <div className="Hackathon_content">
              {Hackathon_list.map((item,index)=>(
                <div key={index} className="hackathon_item">
                  <li>{item.Hackathon_name}</li>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Achivements