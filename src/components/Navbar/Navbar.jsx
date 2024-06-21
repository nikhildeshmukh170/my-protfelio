import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li><Link to="/">About me</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/contact">Contact me</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
