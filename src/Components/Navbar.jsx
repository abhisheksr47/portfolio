import React from 'react';
import logo from '../Assets/AsrLogo.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center'>
        {/* Logo visible only on medium and larger screens */}
        <img className='hidden md:block mx-2 w-15' src={logo} alt="Logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/abhishek-s-r-56a305257/' target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href='https://github.com/abhishek123-asr' target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* Cooler Download CV button */}
        <a href="https://drive.google.com/uc?export=download&id=1cOWB-Lc5N1VvoTQhq0fFRYtd-891QfQM">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xs md:px-5 md:py-2.5 md:text-sm">
              Download CV
            </span>
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
