import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { experience, education } from '../constants/data';
import { AnimatedSection } from '../hooks/useScrollAnimation';

export default function Journey() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <AnimatedSection id="journey" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-dark dark:text-light">
            <span className="text-primary dark:text-primary-dark">My</span> Journey
          </h2>
          <p className="text-lg text-dark-lighter dark:text-light-darker max-w-2xl mx-auto">
            My professional experience and educational background.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-light-darker dark:border-dark-lighter mb-8">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 font-medium flex items-center ${
                activeTab === 'experience'
                  ? 'text-primary dark:text-primary-dark border-b-2 border-primary dark:border-primary-dark'
                  : 'text-dark dark:text-light hover:text-primary dark:hover:text-primary-dark'
              }`}
            >
              <Icon icon="ph:briefcase-bold" className="mr-2" /> Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 font-medium flex items-center ${
                activeTab === 'education'
                  ? 'text-primary dark:text-primary-dark border-b-2 border-primary dark:border-primary-dark'
                  : 'text-dark dark:text-light hover:text-primary dark:hover:text-primary-dark'
              }`}
            >
              <Icon icon="ph:graduation-cap-bold" className="mr-2" /> Education
            </button>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-light-darker dark:bg-dark-lighter"></div>

            {activeTab === 'experience' ? (
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary dark:bg-primary-dark flex items-center justify-center text-white">
                      <Icon icon="ph:briefcase-bold" className="w-4 h-4" />
                    </div>
                    <div className="bg-light dark:bg-dark-light rounded-lg shadow-md p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <h3 className="text-xl font-bold text-dark dark:text-light">{exp.role}</h3>
                        <span className="text-sm bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark px-3 py-1 rounded-full mt-2 sm:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-secondary dark:text-secondary-dark mb-3">
                        {exp.company}
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start text-dark-lighter dark:text-light-darker">
                            <Icon icon="ph:dot-outline-fill" className="w-4 h-4 mt-1 mr-2 text-primary dark:text-primary-dark" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-secondary dark:bg-secondary-dark flex items-center justify-center text-white">
                      <Icon icon="ph:graduation-cap-bold" className="w-4 h-4" />
                    </div>
                    <div className="bg-light dark:bg-dark-light rounded-lg shadow-md p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <h3 className="text-xl font-bold text-dark dark:text-light">{edu.degree}</h3>
                        <span className="text-sm bg-secondary/10 dark:bg-secondary-dark/10 text-secondary dark:text-secondary-dark px-3 py-1 rounded-full mt-2 sm:mt-0">
                          {edu.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-primary dark:text-primary-dark mb-3">
                        {edu.institution}
                      </h4>
                      {edu.description && (
                        <p className="text-dark-lighter dark:text-light-darker mb-4">
                          {edu.description}
                        </p>
                      )}
                      {edu.courses && (
                        <div className="mt-4">
                          <h4 className="font-medium text-dark dark:text-light mb-2">Key Courses:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark rounded-full text-sm"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}