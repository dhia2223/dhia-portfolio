import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { personalData, education, associations, languages } from '../constants/data';
import { AnimatedSection } from '../hooks/useScrollAnimation';

export default function About() {
  return (
    <AnimatedSection id="about" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-dark dark:text-light">
            <span className="text-primary dark:text-primary-dark">About</span> Me
          </h2>
          <p className="text-lg text-dark-lighter dark:text-light-darker max-w-2xl mx-auto">
            Learn more about who I am and what I do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 space-y-8"
          >
            {/* Bio Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-dark dark:text-light">Who am I?</h3>
              <div className="space-y-4 text-dark-lighter dark:text-light-darker">
                <p>{personalData.description}</p>
                <p>I'm passionate about creating innovative solutions and constantly learning new technologies to improve my skills.</p>
              </div>
            </div>

            {/* Skills Highlights */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 dark:bg-primary-dark/10 rounded-lg mr-4">
                  <Icon icon="ph:code-bold" className="w-5 h-5 text-primary dark:text-primary-dark" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark dark:text-light">Software Engineering</h4>
                  <p className="text-dark-lighter dark:text-light-darker">
                    Passionate about building innovative solutions and solving complex problems through code.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 dark:bg-primary-dark/10 rounded-lg mr-4">
                  <Icon icon="ph:stack-bold" className="w-5 h-5 text-primary dark:text-primary-dark" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark dark:text-light">Full-Stack Development</h4>
                  <p className="text-dark-lighter dark:text-light-darker">
                    Experience with both frontend and backend technologies to create complete web applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Languages & Associations */}
            <div className="space-y-8">
              {/* Languages */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center text-dark dark:text-light">
                  <Icon icon="ph:globe-stand-bold" className="mr-2 text-primary dark:text-primary-dark" />
                  Languages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="bg-light dark:bg-dark-light p-4 rounded-lg">
                      <span className="font-medium text-dark dark:text-light">{lang.name}</span>
                      <div className="w-full bg-light-darker dark:bg-dark-lighter rounded-full h-2 mt-2">
                        <div 
                          className="bg-primary dark:bg-primary-dark h-2 rounded-full" 
                          style={{ width: lang.level === 'Proficient' ? '90%' : lang.level === 'Intermediate' ? '70%' : '40%' }}
                        ></div>
                      </div>
                      <span className="text-sm text-dark-lighter dark:text-light-darker mt-1 block">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Associations */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center text-dark dark:text-light">
                  <Icon icon="ph:users-three-bold" className="mr-2 text-primary dark:text-primary-dark" />
                  Associations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                  {associations.map((assoc, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2 }}
                      className="bg-light dark:bg-dark-light p-4 rounded-lg shadow-sm flex items-center"
                    >
                      <Icon icon="ph:users-three-bold" className="w-5 h-5 mr-3 text-primary dark:text-primary-dark" />
                      <div>
                        <h4 className="font-medium text-dark dark:text-light">{assoc.name}</h4>
                        <p className="text-sm text-dark-lighter dark:text-light-darker">{assoc.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            {/* Education */}
            <div className="bg-light dark:bg-dark-light rounded-xl shadow-lg p-6">
              <h4 className="text-xl font-bold mb-6 flex items-center text-dark dark:text-light">
                <Icon icon="ph:graduation-cap-bold" className="mr-2 text-primary dark:text-primary-dark" />
                Education
              </h4>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary dark:border-primary-dark pl-4 relative">
                    <div className="absolute -left-2 w-4 h-4 rounded-full bg-primary dark:bg-primary-dark"></div>
                    <h5 className="font-bold text-lg text-dark dark:text-light">{edu.degree}</h5>
                    <p className="text-primary dark:text-primary-dark">{edu.institution}</p>
                    <p className="text-sm text-dark-lighter dark:text-light-darker">{edu.year}</p>
                    {edu.description && (
                      <p className="mt-2 text-dark-lighter dark:text-light-darker">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="bg-light dark:bg-dark-light rounded-xl shadow-lg p-6">
              <h4 className="text-xl font-bold mb-6 flex items-center text-dark dark:text-light">
                <Icon icon="ph:briefcase-bold" className="mr-2 text-primary dark:text-primary-dark" />
                Experience Highlights
              </h4>
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 text-primary dark:text-primary-dark font-bold">2+</div>
                  <div>
                    <h5 className="font-medium text-dark dark:text-light">Years of Experience</h5>
                    <p className="text-sm text-dark-lighter dark:text-light-darker">Building web applications</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 text-primary dark:text-primary-dark font-bold">10+</div>
                  <div>
                    <h5 className="font-medium text-dark dark:text-light">Projects Completed</h5>
                    <p className="text-sm text-dark-lighter dark:text-light-darker">Across various domains</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 text-primary dark:text-primary-dark font-bold">5+</div>
                  <div>
                    <h5 className="font-medium text-dark dark:text-light">Technologies</h5>
                    <p className="text-sm text-dark-lighter dark:text-light-darker">In my primary stack</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}