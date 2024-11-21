import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  const contactMethods = [
    {
      type: "Phone",
      value: "+91 7034434303",
      href: "tel:+917034434303",
      icon: <FiPhone size={40} className="text-purple-400" />
    },
    {
      type: "Email",
      value: "abhisheksr47@gmail.com",
      href:  "mailto:abhisheksr47@gmail.com?subject=I'd%20love%20to%20hire%20you%20for%20a%20role!&body=Hey%20Abhishek,%0A%0AWe%20are%20engaging%20you%20for%20a%20role%20_____.%20Please%20let%20us%20know%20your%20availability%20and%20share%20your%20thoughts.%0A%0AThank%20you!",
      icon: <FiMail size={40} className="text-purple-400" />
    }
  ];

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      
      <p className="text-center mb-12 text-neutral-400 lg:max-w-2xl mx-auto px-4">
        Feel free to contact Me! Submit your queries here, and I will get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mx-auto lg:max-w-5xl px-4">
        {contactMethods.map((method, index) => (
          <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:1, x:100}}
            transition={{duration:1}}
            key={index}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg transform transition-transform duration-300 group-hover:scale-105" />
            <a
              href={method.href}
              className="block relative p-6 rounded-lg border border-neutral-800/50 backdrop-blur-sm transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-lg bg-neutral-900/50 transition-all duration-300">
                  {method.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-white mb-2">
                    {method.type}
                  </h3>
                  <div className="max-w-full overflow-hidden">
                    <span className="inline-block max-w-full overflow-hidden text-ellipsis rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-sm text-purple-400 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-purple-300 transform hover:-translate-y-0.5">
                      {method.value}
                    </span>
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

export default Contact;