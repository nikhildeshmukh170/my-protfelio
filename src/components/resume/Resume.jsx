import React from 'react'
import Navbar from '../Navbar/Navbar'
import { assets, ed_list, experience_list } from '../../assets/assets'
import "./Resume.css"

const Resume = () => {
  return (
    <div className="information">
      <div className="header_information">
        <div className="infor_heading">
          <p>Resume</p>
          <hr />
        </div>
        <div className="navbar">
            <Navbar />
        </div>
      </div>
      <div className="body_information">
        <div className="eduction">
            <div className="ed_heading">
                <div className="ed_heading_img">
                    <img src={assets.reading} alt="" />
                </div>
                <div className="ed_heading_para">
                    <p>Education</p>
                </div>
            </div>
            <hr />
            <div className='ed_list'>
                {ed_list.map((item,index)=>(
                    <div key={index} className='ed_item'>
                        <p className="ed_item_title">{item.ed_name}</p>
                        <span>{item.ed_year}</span>
                        <p className="ed_item_para">{item.ed_qualification}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="experience">
            <div className="ex_heading">
                <div className="ex_heading_img">
                    <img src={assets.reading} alt="" />
                </div>
                <div className="ex_heading_para">
                    <p>Experience</p>
                </div>
            </div>
            <hr />
            <div className='ex_list'>
                {experience_list.map((item,index)=>(
                    <div key={index} className='ex_item'>
                        <p className="ex_item_title">{item.ex_name}</p>
                        <span>{item.ex_year}</span>
                        <p className="ex_item_para">{item.ex_qualification}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="my_skills">
            <h1>My Skills</h1>
        </div>
      </div>
    </div>
  )
}

export default Resume