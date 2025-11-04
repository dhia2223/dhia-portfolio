import { Icon } from '@iconify/react';
import { personalData } from '../constants/data';
import { motion } from 'framer-motion';
import { useCallback } from 'react';

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Social icons data
  const socialIcons = [
    { icon: "mdi:github", link: personalData.socialLinks.github, label: "GitHub" },
    { icon: "mdi:linkedin", link: personalData.socialLinks.linkedin, label: "LinkedIn" },
    { icon: "mdi:email", link: personalData.socialLinks.email, label: "Email" }
  ];

  // Tech icons for floating background
  const techIcons = [
    'vscode-icons:file-type-reactjs',
    'logos:javascript',
    'logos:typescript-icon',
    'logos:nodejs-icon',
    'logos:python',
    'logos:html-5',
    'logos:css-3',
    'logos:git-icon',
    'logos:docker-icon',
    'logos:graphql',
    'logos:redux',
    'logos:tailwindcss-icon',
    'logos:nextjs-icon',
    'logos:mongodb-icon',
    'logos:postgresql'
  ];

  return (
    <section id="home" className="min-h-[100vh] flex items-center relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-10"></div>
      </div>

      {/* Floating Tech Icons - Background */}
      {techIcons.map((tech, i) => {
        // Random positions and timing
        const duration = 40 + Math.random() * 30;
        const delay = Math.random() * 10;
        const size = 40 + Math.random() * 30;
        const opacity = 0.2 + Math.random() * 0.3;
        
        return (
          <motion.div
            key={`${tech}-${i}`}
            className="absolute text-dark/30 dark:text-light/30 z-0"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
              rotate: [0, Math.random() * 360],
              opacity: [0, opacity, opacity, 0]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: delay
            }}
          >
            <Icon icon={tech} className="w-full h-full" />
          </motion.div>
        );
      })}
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Text content */}
        <motion.div 
          variants={itemVariants}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-dark dark:text-light"
            whileHover={{ x: 5 }}
          >
            Hi, I'm <span className="text-primary dark:text-primary-dark">{personalData.name}</span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl mb-6 text-dark dark:text-light flex items-center"
          >
            <motion.span
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              👋
            </motion.span>
            <span className="ml-2">{personalData.title}</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg mb-8 text-dark-lighter dark:text-light-darker max-w-lg relative"
          >
            {personalData.description}
            <motion.span 
              className="absolute -left-6 top-0 text-primary dark:text-primary-dark"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❯
            </motion.span>
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-md hover:bg-primary-dark dark:hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-dark/30 text-center flex items-center justify-center"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Me</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                ✉️
              </motion.span>
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark rounded-md hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition-all duration-300 text-center flex items-center justify-center"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Projects</span>
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-2"
              >
                🚀
              </motion.span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex gap-6"
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon relative"
                aria-label={social.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Icon 
                  icon={social.icon} 
                  className="w-7 h-7 text-dark dark:text-light hover:text-primary dark:hover:text-primary-dark transition-colors" 
                />
                <motion.span
                  className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary dark:bg-primary-dark rounded-full"
                  animate={{ scale: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div 
          variants={itemVariants}
          className="md:w-1/2 flex justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary dark:border-primary-dark relative z-10">
              <img
                src={personalData.image}
                alt={personalData.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 dark:bg-primary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-primary dark:bg-primary-dark text-white p-4 rounded-lg shadow-lg z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              whileHover={{ rotate: 2, scale: 1.05 }}
            >
              <div className="flex items-center">
                <Icon icon="ic:round-code" className="w-6 h-6 mr-2" />
                <span className="font-mono">const dev = true;</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}