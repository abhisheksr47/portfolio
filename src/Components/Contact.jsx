import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'
      >
        Get in Touch
      </motion.h1>
      
      <div className='text-center tracking-tighter'>
        <motion.p
          // whileInView={{ opacity: 1, x: 0 }}
          // initial={{ opacity: 0, x: -100 }}
          // transition={{ duration: 1 }}
          // className='my-4'
        >
          +91 7034434303
        </motion.p>
        
        <motion.a
          // whileInView={{ opacity: 1, x: 0 }}
          // initial={{ opacity: 0, x: 100 }}  // Starts off shifted to the right
          // transition={{ duration: 1 }}      // Moves over 1 second
          // href="mailto:abhisheksr47@gmail.com"
          // className='border-b'
        >
          abhisheksr47@gmail.com
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;
