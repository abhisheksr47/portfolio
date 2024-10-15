import React from 'react'
import { motion } from "framer-motion"

const education = [
    {
        year: "2023-2025",
        course: "Master of Computer Applications (MCA)",
        college: "TKM College of Engineering, Kollam, Kerala, India",
        subjects: ["Machine Learning", "Deep Learning", "Cloud Computing", "Cyber Security","DBMS","Functional Programming"]
    },
    {
        year: "2019-2022",
        course: "Bachelor of Science in Computer Science",
        college: "Kannur University, Kannur, Kerala, India",
        subjects: ["Data Structures & Algorithms", "Computer Networks", "Web Technology", "Operating Systems","Software Engineering"]
    }
];




function Education() {
    return (
      <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        
        
        className='my-20 text-center text-4xl'>Education</motion.h1>
        <div>
          {education.map((edu, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <motion.div 
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:1}}
              
              className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400'>{edu.year}</p>
              </motion.div>
              <motion.div 
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1}}
              
              className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>{edu.course}</h6>
                <p className='text-sm text-purple-100'>{edu.college}</p>
                <div className='inline-flex flex-wrap gap-2 mt-2'>
                  {edu.subjects.map((sub, index) => (
                    <span 
                      className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400' 
                      key={index}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  

export default Education
