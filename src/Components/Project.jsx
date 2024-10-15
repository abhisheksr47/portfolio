import React from 'react';
import { ExternalLink } from 'lucide-react';
import projectimg from '../Assets/project-3.jpg';
import { motion } from "framer-motion"

const projects = [
  {
    project: "Full-fledged eCommerce platform",
    tech_stack: ["MongoDB", "Express.js", "React", "Node.js"],
    description: "Built scalable architecture with MERN stack for efficient data handling. Managed MongoDB for robust storage.",
    source_code: "https://github.com/abhishek123-asr/eshop"
  },
  {
    project: "DevOps Project: AWS Infrastructure Automation",
    tech_stack: ["AWS (EC2, IAM, RDS, VPC)"],
    description: "Automated AWS infrastructure provisioning with Terraform. Managed EC2 instances, RDS databases, and VPC configurations for optimal performance and security."
  },
  {
    project: "Advanced Event Handling Platform",
    tech_stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Ajax", "Docker"],
    description: "Developed PHP server-side logic and Ajax for real-time updates. Deployed with Docker for consistent performance across environments.",
    source_code: "https://github.com/abhishek123-asr/eventsconnect"
  },
  {
    project: "Advanced Marklist Management Desktop App",
    tech_stack: ["Python", "Tkinter", "MySQL"],
    description: "Designed and developed Tkinter-based UI for seamless user experience. Implemented MySQL backend for data storage and management.",
    source_code: "https://github.com/abhishek123-asr/MarkApp"
  },
  {
    project: "UI/UX Research and Design",
    tech_stack: ["Figma", "User Interviews", "Usability Testing", "Wireframing", "Prototyping"],
    description: "Conducted user research and designed wireframes and prototypes in Figma. Created intuitive UI/UX designs to enhance user experience."
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
              <img src={projectimg} width={150} height={150} alt="Project" className="mb-6 rounded" />
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
                  <span key={index} className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                    {tech}
                  </span>
                ))}
              </div>
              {project.source_code && (
                <a
                  href={project.source_code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-950 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 hover:from-pink-400 hover:via-slate-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 rounded-md transition-all duration-500 ease-in-out"
                  style={{ padding: '12px 16px', margin: '10px 0' }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Source Code
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
