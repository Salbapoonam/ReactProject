import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
          <div className="dropdown">
            <a href="#our-mission">Our Mission</a>
            <a href="#team">Team</a>
            <a href="#history">History</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#calendars">Temple Calendars</a>
          <div className="dropdown">
            <a href="#events">Events</a>
            <a href="#festivals">Festivals</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#temple">About Temple</a>
          <div className="dropdown">
            <a href="#architecture">Architecture</a>
            <a href="#location">Location</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sevas">Sevas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#ehundi">E-hundi</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
