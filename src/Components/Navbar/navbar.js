import React, { useState } from "react";
import "./navbar.css";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>ARDOCK</h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About us</NavLink>
            </li>
            <li>
              <NavLink to="/ourteam">Our team</NavLink>
            </li>
            <li>
              <NavLink to="/Courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/Contactus">contact</NavLink>
            </li>
            {/* <li>
              <NavLink to="/Guitar">Guitar</NavLink>
            </li>
            <li>
              <NavLink to="/Singing">Singing</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/contact">Sign In </NavLink>
            </li>
            <li>
              <NavLink to="/contact">Signup</NavLink>
            </li> */}
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu size={40} />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
