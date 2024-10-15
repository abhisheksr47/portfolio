import React from 'react'
import logo from '../Assets/AsrLogo.png'
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-15' src={logo} alt="" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
           
        </div>

    </nav>
  )
}

export default Navbar
