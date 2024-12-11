import React from 'react';
import logo from '../Assets/Logo.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center'>
        {/* Logo visible only on medium and larger screens */}
        <img className='hidden md:block mx-2 w-10' src={logo} alt="Logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/abhishek-s-r-56a305257/' target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href='https://github.com/abhisheksr47' target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* Cooler Download CV button */}
        <a
          href='https://drive.google.com/uc?export=download&id=1cOWB-Lc5N1VvoTQhq0fFRYtd-891QfQM'
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-2 text-sm text-purple-400 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-purple-300 transform hover:-translate-y-0.5"
        >
          {/* <ExternalLink size={16} /> */}
          Download CV
        </a>


        {/* <a href="https://drive.google.com/uc?export=download&id=1cOWB-Lc5N1VvoTQhq0fFRYtd-891QfQM">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                
            </span>
          </button>
        </a> */}
      </div>
    </nav>
  );
}

export default Navbar;
