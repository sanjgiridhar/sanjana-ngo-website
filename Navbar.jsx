import React, { useState } from "react";
import "./Navbar.css";
import "../index.css";
import { Link } from "react-scroll";
import LoginModal from "./LoginModal"; // Import the LoginModal component

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <>
      <nav className="container">
        <div className="nav-links">
          <ul>
            <li>
              <Link to="hero" smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>About Us</Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li>
              <Link to="events" smooth={true} duration={500}>Events</Link>
            </li>
            <li>
              <Link to="blogs" smooth={true} duration={500}>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="nav-buttons">
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn">Contact Us</button>
          </Link>
          <button className="btn login-btn" onClick={toggleModal}>Login</button> {/* Open modal on click */}
        </div>
      </nav>

      {isModalOpen && <LoginModal onClose={toggleModal} />} {/* Render modal if open */}
    </>
  );
};

export default Navbar;
