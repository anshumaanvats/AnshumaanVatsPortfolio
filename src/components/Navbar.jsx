import React, { useState } from "react";
import logo from "../assets/AnshumaanVatsLogo.png";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { LuWallpaper } from "react-icons/lu";

const Navbar = ({ onChangeWallpaper }) => {
  const [showLinks, setShowLinks] = useState(false);

  const handleGearClick = () => {
    setShowLinks((prev) => !prev);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/anshumaanvats"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors duration-300 ease-in-out"
          >
            <FaLinkedinIn className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          </a>
          <a
            href="https://www.instagram.com/anshumaanvats/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 transition-colors duration-300 ease-in-out"
          >
            <FaInstagram className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          </a>
          <FontAwesomeIcon
            icon={faCog}
            className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer hover:text-purple-300"
            onClick={handleGearClick}
            spin={showLinks}
          />
          <LuWallpaper
            className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer hover:text-green-300"
            onClick={onChangeWallpaper}
          />
        </div>
        <div className={`nav-links ${showLinks ? 'show' : ''}`}>
          {showLinks && (
            <div className="flex gap-6 text-lg font-medium text-white">
              <a href="#about" className="hover:text-purple-300 transition-colors duration-300 ease-in-out">About</a>
              <a href="#technologies" className="hover:text-purple-300 transition-colors duration-300 ease-in-out">Technologies</a> 
              <a href="#internships" className="hover:text-purple-300 transition-colors duration-300 ease-in-out">Internships</a>
              <a href="#software-projects" className="hover:text-purple-300 transition-colors duration-300 ease-in-out">Software Projects</a>
              <a href="#hardware-projects" className="hover:text-purple-300 transition-colors duration-300 ease-in-out">Hardware Projects</a>
              <a href="#patents" className="hover:text-purple-300 transition-colors duration-300 ease-in-out">Patents</a>
              <a href="#contact" className="hover:text-purple-300 transition-colors duration-300 ease-in-out">Contact</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;