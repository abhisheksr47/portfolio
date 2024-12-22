import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink, Store, Cloud, Calendar, Layout, Palette, View,MessageCircleWarning} from 'lucide-react';

const projects = [
  {
    project: "Full-fledged eCommerce platform",
    tech_stack: ["MongoDB", "Express.js", "React", "Node.js"],
    description: " Developed a full-scale e-commerce platform with features like product catalog management, user profiles, shopping cart, order processing, and secure payment integration.",
    source_code: "https://github.com/abhishek123-asr/eshop",
    icon: <Store size={40} className="text-purple-400" />
  },
  {
    project: "Enhanced Iris Authentication via Deep Learning and Homomorphic Encryption",
    tech_stack: ["Python", "TensorFlow", "Keras", "TransUNet", "UNet", "Attention UNet", "Label Studio",],
    description: "Developed an advanced iris authentication system using deep learning models for segmentation (TransUNet, UNet, Attention UNet) and homomorphic encryption to ensure secure and privacy-preserving biometric authentication.",
    source_code: "https://github.com/abhisheksr47/enhanced-iris-authentication.git",
    icon: <View size={40} className="text-purple-400" />
  },
  {
    project: "DevOps Project: AWS Infrastructure Automation",
    tech_stack: ["AWS (EC2, IAM, RDS, VPC)"],
    description: "Automated AWS infrastructure provisioning with Terraform. Managed EC2 instances, RDS databases, and VPC configurations for optimal performance and security.",
    icon: <Cloud size={40} className="text-purple-400" />
  },
  ,
  {
    project: "Offensive Comment Filtering Using Deep Learning",
    tech_stack: ["Python", "TensorFlow", "Keras", "LSTM", "Word2Vec", "GloVe", "Flask"],
    description: "Developed a system to classify and filter offensive comments using LSTM models with word embeddings (GloVe, Word2Vec), ensuring a safer online environment by detecting harmful text.",
    source_code: "https://github.com/abhisheksr47/offensive_comment_filtering",
    icon: <MessageCircleWarning size={40} className="text-purple-400" />
  },
  {
    project: "Advanced Event Handling Platform",
    tech_stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Ajax", "Docker"],
    description: "Developed PHP server-side logic and Ajax for real-time updates. Deployed with Docker for consistent performance across environments.",
    source_code: "https://github.com/abhishek123-asr/eventsconnect",
    icon: <Calendar size={40} className="text-purple-400" />
  },
  {
    project: "Advanced Marklist Management Desktop App",
    tech_stack: ["Python", "Tkinter", "MySQL"],
    description: "Designed and developed Tkinter-based UI for seamless user experience. Implemented MySQL backend for data storage and management.",
    source_code: "https://github.com/abhishek123-asr/MarkApp",
    icon: <Layout size={40} className="text-purple-400" />
  },
  {
    project: "UI/UX Research and Design",
    tech_stack: ["Figma", "User Interviews", "Usability Testing", "Wireframing", "Prototyping"],
    description: "Conducted user research and designed wireframes and prototypes in Figma. Created intuitive UI/UX designs to enhance user experience.",
    icon: <Palette size={40} className="text-purple-400" />
  }
];

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div

        className="grid grid-cols-1 gap-8 lg:mx-auto lg:max-w-5xl px-4">
        {projects.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 1, x: 100 }}
            transition={{ duration: 1 }}
            key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg transform transition-transform duration-300 group-hover:scale-105" />
            <div className="block relative p-6 rounded-lg border border-neutral-800/50 backdrop-blur-sm transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-lg bg-neutral-900/50 transition-all duration-300">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2">
                    {project.project}
                  </h3>
                  <p className="mb-4 text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech_stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-sm text-purple-400 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.source_code && (
                    <a
                      href={project.source_code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-2 text-sm text-purple-400 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-purple-300 transform hover:-translate-y-0.5"
                    >
                      <ExternalLink size={16} />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;