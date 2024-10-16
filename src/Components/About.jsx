import React from 'react';
import aboutImage from '../Assets/about_image.jpg';
import { motion } from 'framer-motion';

const about = {
  text: "I'm a second-year MCA student at TKM College of Engineering, deeply passionate about technology and creativity. I've taken courses spanning DevOps, Cloud Computing, Machine Learning, and UI/UX design. My freelancing journey has been a highlight, tackling diverse projects in both graphic design and software development. Tools like Photoshop, Illustrator, Blender, and SketchUp allow me to bring my creative ideas to life. I'm driven by a passion for continuous learning and growth, and I'm excited to contribute to the tech world with my blend of technical and creative skills."
};

function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        About
        <span className='text-neutral-500'> Me</span>
      </motion.h1>
      
      <div className='flex flex-wrap'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 lg:p-8'
        >
          <div className='flex items-center justify-center'>
            <img 
              src={aboutImage} 
              alt="About Me" 
              className='rounded-2xl' 
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 flex justify-center lg:justify-start items-center'
        >
          <p className='my-2 max-w-xl py-6 font-light tracking-tighter text-justify'>
            {about.text}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
