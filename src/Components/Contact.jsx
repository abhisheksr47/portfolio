import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';

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
      
      <p className='text-center mb-8'>
        Feel free to contact Me! Submit your queries here, and I will get back to you as soon as possible.
      </p>

      <div className='flex flex-wrap justify-center gap-5 md:gap-10'>
        {/* Phone Section - Whole div is clickable */}
        <a 
          href="tel:+917034434303"
          className='w-full sm:w-1/2 md:w-1/3'
        >
          <motion.div
            className='bg-neutral-900 rounded-lg p-8 text-center flex flex-col items-center'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FiPhone className='text-3xl text-purple-400 mb-4' />
            <p className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400'>
              +91 7034434303
            </p>
          </motion.div>
        </a>

        {/* Email Section - Whole div is clickable */}
        <a 
          href="mailto:abhisheksr47@gmail.com"
          className='w-full sm:w-1/2 md:w-1/3'
        >
          <motion.div
            className='bg-neutral-900 rounded-lg p-8 text-center flex flex-col items-center'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FiMail className='text-3xl text-purple-400 mb-4' />
            <p className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400'>
              abhisheksr47@gmail.com
            </p>
          </motion.div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
