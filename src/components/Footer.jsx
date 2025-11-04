import { motion } from 'framer-motion';
import { personalData } from '../constants/data';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: personalData.socialLinks.github,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: personalData.socialLinks.linkedin,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: personalData.socialLinks.twitter,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      )
    },
    {
      name: 'Email',
      url: personalData.socialLinks.email,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    }
  ];

  return (
    <motion.footer 
      className="bg-light dark:bg-dark-light py-12 border-t border-light-darker/20 dark:border-dark-lighter/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <motion.div 
            className="flex space-x-6 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark dark:text-light hover:text-primary dark:hover:text-primary-dark transition-colors"
                aria-label={social.name}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="p-2 rounded-full bg-light-darker/10 dark:bg-dark-lighter/10 hover:bg-light-darker/20 dark:hover:bg-dark-lighter/20 transition-colors">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <p className="text-sm text-dark-lighter dark:text-light-darker mb-4">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>

          {/* Built with love */}
          <motion.div
            className="text-xs text-dark-lighter/70 dark:text-light-darker/70"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p>
              Crafted with <span className="text-primary dark:text-primary-dark">♥</span> using React & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}