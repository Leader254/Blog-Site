/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBookmark } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { TiContacts } from 'react-icons/ti';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            <FaHome className="nav-icon" />
            <span className="nav-text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="nav-link">
            <FaBookmark className="nav-icon" />
            <span className="nav-text">Blogs</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <FcAbout className="nav-icon" />
            <span className="nav-text">About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            <TiContacts className="nav-icon" />
            <span className="nav-text">Contact Us</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
