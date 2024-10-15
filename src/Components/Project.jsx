import React from 'react';
import { ExternalLink } from 'lucide-react';

import { motion } from "framer-motion"
import project1 from "../Assets/project-1.jpg"
import project2 from "../Assets/project-2.jpg"
import project3 from "../Assets/project-3.jpg"
import project4 from "../Assets/project-4.jpg"
import project5 from "../Assets/project-5.jpg"

const projects = [
  {
    project: "Full-fledged eCommerce platform",
    tech_stack: ["MongoDB", "Express.js", "React", "Node.js"],
    description: "Built scalable architecture with MERN stack for efficient data handling. Managed MongoDB for robust storage.",
    source_code: "https://github.com/abhishek123-asr/eshop",
    img:project1
  },
  {
    project: "DevOps Project: AWS Infrastructure Automation",
    tech_stack: ["AWS (EC2, IAM, RDS, VPC)"],
    description: "Automated AWS infrastructure provisioning with Terraform. Managed EC2 instances, RDS databases, and VPC configurations for optimal performance and security."
    ,img:project2
  },
  {
    project: "Advanced Event Handling Platform",
    tech_stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Ajax", "Docker"],
    description: "Developed PHP server-side logic and Ajax for real-time updates. Deployed with Docker for consistent performance across environments.",
    source_code: "https://github.com/abhishek123-asr/eventsconnect"
    ,img:project3
  },
  {
    project: "Advanced Marklist Management Desktop App",
    tech_stack: ["Python", "Tkinter", "MySQL"],
    description: "Designed and developed Tkinter-based UI for seamless user experience. Implemented MySQL backend for data storage and management.",
    source_code: "https://github.com/abhishek123-asr/MarkApp",
    img:project4
  },
  {
    project: "UI/UX Research and Design",
    tech_stack: ["Figma", "User Interviews", "Usability Testing", "Wireframing", "Prototyping"],
    description: "Conducted user research and designed wireframes and prototypes in Figma. Created intuitive UI/UX designs to enhance user experience."
    ,
    img:project5
  }
];

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      
      
      className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="w-full lg:w-1/4">
              <img src={project.img} width={150} height={150} alt="Project" className="mb-6 rounded" />
            </motion.div>
            <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1}}
            
            
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.project}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mb-4">
                {project.tech_stack.map((tech, index) => (
                  <span key={index} className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
                    {tech}
                  </span>
                ))}
              </div>
              {project.source_code && (
                <a
                  href={project.source_code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <ExternalLink size={16} className="inline-block mr-2" />
                    View Source Code
                  </span>
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;