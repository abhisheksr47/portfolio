import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiNodedotjs, SiExpress, SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
});

const popupVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const TechIcon = ({ Icon, name, color, duration }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      variants={iconVariants(duration)}
      initial="initial"
      animate="animate"
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-all duration-300 hover:border-neutral-600">
        <Icon className={`text-7xl ${color}`} />
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute left-1/2 -top-12 transform -translate-x-1/2"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
          >
            <div className="bg-neutral-800 text-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
              {name}
            </div>
            <div className="w-3 h-3 bg-neutral-800 rotate-45 absolute left-1/2 -bottom-1.5 transform -translate-x-1/2"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function Technologies() {
  const techs = [
    { Icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 2.5 },
    { Icon: SiNodedotjs, name: "Node.js", color: "text-green-400", duration: 3 },
    { Icon: SiExpress, name: "Express", color: "text-gray-400", duration: 5 },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-500", duration: 2 },
    { Icon: SiMysql, name: "MySql", color: "text-blue-400", duration: 6 },
    { Icon: FaAws, name: "AWS", color: "text-orange-400", duration: 4 },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {techs.map((tech, index) => (
          <TechIcon key={index} {...tech} />
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;