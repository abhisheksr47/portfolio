import React from 'react';
import aboutImage from '../Assets/about_image.jpg';
import { motion } from "framer-motion"


const about = {
    text: "I'm a second-year MCA student at TKM College of Engineering, deeply passionate about technology and creativity. Over the past few years, I've taken courses spanning DevOps, Cloud Computing, Machine Learning, and UI/UX design. These experiences have not only sharpened my technical skills but also sparked my curiosity to dive deeper into the world of emerging technologies. My freelancing journey has been a highlight, where I've tackled diverse projects in both graphic design and software development. This hands-on experience has given me the chance to solve real-world problems, enhance my creative side, and push my boundaries. When it comes to creativity, I’m particularly drawn to tools like Photoshop, Illustrator, Blender, and SketchUp, which allow me to bring my ideas to life. Whether it's designing sleek user interfaces or creating detailed 3D models, these tools are my playground for innovation. I see learning as a never-ending process, and every new skill I acquire feels like unlocking a new level in a game. I'm always on the lookout for what's next—whether it's mastering a new technology, contributing to open-source projects, or finding ways to innovate in my work. Overall, I'm someone who's driven by a passion for continuous learning and growth, both professionally and personally. I’m excited about the future and eager to see how I can contribute to the tech world with my blend of technical and creative skills."
  };
  
  
  

function About() {
    return (
        <div className='border-b border-neutral-900 pb-4 '>
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl '>
                About
                <span className='text-neutral-500'> Me</span>
            </motion.h1>
            <div className='flex flex-wrap'>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:0.5}}
                
                className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img src={aboutImage} alt="About Me" className='rounded-2xl ' />
                    </div>
                    
                </motion.div>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                
                className='w-full lg:w-1/2'>
                        <div className='flex justify-center lg:justify-start'>
                            <p className='my-2 max-w-xl py-6 font-light tracking-tighter '>{about.text}</p>
                        </div>

                    </motion.div>
            </div>
        </div>
    );
}

export default About;
