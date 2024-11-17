import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiGoogle, SiFlutter, SiIbm } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      certification: "DevOps on AWS",
      provider: "Coursera, Amazon Web Services",
      issued: "May 2024",
      link: "https://coursera.org/verify/specialization/Q2P22P66ZBP4",
      icon: <FaAws size={40} color="#FF9900" />,
    },
    {
      certification: "IBM Full Stack Software Developer Professional Certificate",
      provider: "Coursera, IBM",
      issued: "March 2024",
      link: "https://coursera.org/verify/YS42Z8F338ZW",
      icon: <SiIbm size={40} color="#054ADA" />,
    },
    {
      certification: "IBM Front-End Developer Professional Certificate",
      provider: "Coursera, IBM",
      issued: "February 2024",
      link: "https://coursera.org/verify/BPSEZLJB2SD8",
      icon: <SiIbm size={40} color="#054ADA" />,
    },
    {
      certification: "JavaScript Programming with React, Node & MongoDB Specialization",
      provider: "Coursera, IBM",
      issued: "January 2024",
      link: "/account/accomplishments/?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_hddeader_button",
      icon: <RiReactjsLine size={40} color="#61DAFB" />,
    },
    {
      certification: "Google UX Design Professional Certificate",
      provider: "Coursera, Google",
      issued: "August 2022",
      link: "https://coursera.org/verify/H5NRRYRACZJN",
      icon: <SiGoogle size={40} color="#4285F4" />,
    },
    {
      certification: "Flutter Developer",
      provider: "Udemy",
      issued: "May 2022",
      link: "https://www.udemy.com/certificate/UC-f8060e06-3a36-417c-87d7-6153d1cf1455/",
      icon: <SiFlutter size={40} color="#02569B" />,
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Licenses and Certifications
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mx-auto lg:max-w-5xl px-4">
        {certifications.map((cert, index) => (
          <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}}
            key={index}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg transform transition-transform duration-300 group-hover:scale-105" />
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative p-6 rounded-lg border border-neutral-800/50 backdrop-blur-sm transition-all duration-300"
            >
              <div className="flex items-stretch gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-lg bg-neutral-900/50 border border-neutral-800 transition-all duration-300 group-hover:border-neutral-600 group-hover:bg-neutral-800/50">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2">
                    {cert.certification}
                  </h3>
                  <div className="space-y-2">
                    <span className="inline-block rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-sm text-purple-400">
                      {cert.provider}
                    </span>
                    <p className="text-sm text-neutral-400">
                      Issued: {cert.issued}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;