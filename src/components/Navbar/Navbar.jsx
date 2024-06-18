import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li><a href="#">About me</a></li>
        <li><a href="#">Resume</a></li>
        <li><a href="#">Achivements</a></li>
        <li><a href="#">Contact me</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
