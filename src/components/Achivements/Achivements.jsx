import React from 'react'
import "./Achivements.css"
import Navbar from '../Navbar/Navbar'

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
        </div>
        <div className="certificates_section">
        <div className="certificates_section_heading">
                <p>certificates</p>
            </div>
        </div>
        <div className="hackathon_section">
        <div className="hackathon_section_heading">
                <p>hackathon</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Achivements