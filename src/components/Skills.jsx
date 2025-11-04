import { Icon } from '@iconify/react';
import { skills, languages } from '../constants/data';
import { AnimatedSection } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

// Define skill categories with matching icons
const skillCategories = [
  {
    title: "Programming Languages",
    icon: "ph:code-bold",
    items: skills.filter(skill => 
      ['Python', 'C', 'Java'].includes(skill.name)
    )
  },
  {
    title: "Web Development",
    icon: "ph:globe-stand-bold",
    items: skills.filter(skill => 
      ['ReactJS', 'NestJS', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'].includes(skill.name)
    )
  },
  {
    title: "AI & Computer Vision",
    icon: "ph:brain-bold",
    items: skills.filter(skill => 
      ['TensorFlow', 'Computer Vision'].includes(skill.name)
    )
  },
  {
    title: "Systems & Tools",
    icon: "ph:terminal-window-bold",
    items: skills.filter(skill => 
      ['Linux'].includes(skill.name)
    )
  },
  {
    title: "Design",
    icon: "ph:paint-brush-bold",
    items: skills.filter(skill => 
      ['UI/UX Design'].includes(skill.name)
    )
  }
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-dark dark:text-light">
            <span className="text-primary dark:text-primary-dark">My</span> Skills
          </h2>
          <p className="text-lg text-dark-lighter dark:text-light-darker max-w-2xl mx-auto">
            Technologies and tools I've worked with and continue to develop expertise in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-light dark:bg-dark-light rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-light-darker dark:bg-dark-lighter rounded-lg mr-4">
                  <Icon icon={category.icon} className="w-6 h-6 text-primary dark:text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-light">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ y: -2 }}
                    className="px-3 py-2 bg-light-darker dark:bg-dark-lighter text-dark dark:text-light rounded-lg text-sm flex items-center gap-2"
                  >
                    <Icon icon={skill.icon} className="w-4 h-4" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-dark dark:text-light">
            <span className="text-primary dark:text-primary-dark">Languages</span> I Speak
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light dark:bg-dark-light p-4 rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-dark dark:text-light">{lang.name}</span>
                  <span className="text-sm text-primary dark:text-primary-dark">{lang.level}</span>
                </div>
                <div className="w-full bg-light-darker dark:bg-dark-lighter rounded-full h-2">
                  <div
                    className="bg-primary dark:bg-primary-dark h-2 rounded-full"
                    style={{
                      width: lang.level === 'Proficient' ? '90%' : lang.level === 'Beginner' ? '30%' : '60%',
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </AnimatedSection>
  );
}