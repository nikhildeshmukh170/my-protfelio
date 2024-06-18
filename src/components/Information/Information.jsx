import React from "react";
import "./Information.css";
import Navbar from "../Navbar/Navbar";

const Information = () => {
  return (
    <div className="information">
      <div className="infor_heading">
        <p>About us</p>
        <hr />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
    </div>
  );
};

export default Information;
