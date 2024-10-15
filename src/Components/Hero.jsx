import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const hero_content = {
  text: "Innovator at the intersection of technology and design, with a passion for pushing creative boundaries. My journey has led me through the realms of DevOps, cloud architecture, machine learning, and user experience design. As a freelance professional, I've honed my skills in both graphic design and software development, crafting bespoke solutions for diverse clients."
};

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const titles = [
  "Fullstack Developer", 
  "Backend Developer", 
  "UI/UX Designer", 
  "Cloud Specialist", 
  "Graphic Designer", 
  "3D Modeler"
];

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change title every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='pb-16 text-6xl font-thin tracking-tighter lg:tracking-tight lg:mt-16 lg:text-8xl'
            >
              Abhishek S R
            </motion.h1>

            {/* Dynamic Title Change */}
            <motion.span
              key={titleIndex} // Ensure re-render when title changes
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'
            >
              {titles[titleIndex]}
            </motion.span>

            <motion.p
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className='my-2 max-w-xl py-6 font-light tracking-tighter'
            >
              {hero_content.text}
            </motion.p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            {/* <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className='rounded-3xl' 
              src="https://i.pinimg.com/originals/b7/aa/e5/b7aae5305b1850ec121304b5077eaf01.gif" 
              alt="Animated GIF"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


