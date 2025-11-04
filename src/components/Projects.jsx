import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { projects } from '../constants/data';
import { AnimatedSection } from '../hooks/useScrollAnimation';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Get all unique tags from projects
  const allTags = ['All', ...new Set(projects.flatMap(project => project.technologies))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  return (
    <AnimatedSection id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-dark dark:text-light">
            <span className="text-primary dark:text-primary-dark">My</span> Projects
          </h2>
          <p className="text-lg text-dark-lighter dark:text-light-darker max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and experience.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTags.map(tag => (
            <motion.button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === tag 
                  ? 'bg-primary dark:bg-primary-dark text-white' 
                  : 'bg-light-darker dark:bg-dark-lighter text-dark dark:text-light hover:bg-light-darker/50 dark:hover:bg-dark-lighter/50'
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-light dark:bg-dark-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-light/90 dark:bg-dark/90 text-dark dark:text-light rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">{project.title}</h3>
                  <p className="text-dark-lighter dark:text-light-darker mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary dark:text-primary-dark hover:underline font-medium"
                    >
                      View Project
                      <Icon icon="heroicons:arrow-right" className="ml-1 w-4 h-4" />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark dark:text-light hover:text-primary dark:hover:text-primary-dark"
                        aria-label="GitHub repository"
                      >
                        <Icon icon="mdi:github" className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}