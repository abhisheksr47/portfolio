import React from 'react';
// Import icons from react-icons
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiNodedotjs, SiExpress, SiDocker } from "react-icons/si";
import { FaAws } from "react-icons/fa"; // Correct AWS icon import
import { motion } from "framer-motion"


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType:"reverse"
    }
  },
});


function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      
      
      className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}

      
      
      className='flex flex-wrap items-center justify-center gap-4'>
        {/* React */}
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>


        {/* Node.js */}
        <motion.div
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiNodedotjs className='text-7xl text-green-400' />
        </motion.div>
         {/* Express */}
         <motion.div
           variants={iconVariants(5)}
           initial="initial"
           animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-7xl text-gray-400' />
        </motion.div>
        {/* MongoDB */}
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-7xl text-green-500' />
        </motion.div>
        {/* Docker */}
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
        
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiDocker className='text-7xl text-blue-400' />
        </motion.div>
       
        {/* AWS */}
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        
        
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaAws className='text-7xl text-orange-400' />
        </motion.div>
        
      </motion.div>
    </div>
  );
}

export default Technologies;
