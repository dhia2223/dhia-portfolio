import { Icon } from '@iconify/react';
import { personalData } from '../constants/data';
import { AnimatedSection } from '../hooks/useScrollAnimation';

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-dark dark:text-light">
          <span className="text-primary dark:text-primary-dark">Get</span> In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-dark dark:text-light">Contact Information</h3>
            <p className="text-lg mb-8 text-dark-lighter dark:text-light-darker">
              Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Icon icon="ph:envelope-bold" className="w-6 h-6 mr-4 text-primary dark:text-primary-dark" />
                <a
                  href={personalData.socialLinks.email}
                  className="text-lg text-dark dark:text-light hover:text-primary dark:hover:text-primary-dark transition-colors"
                >
                  {personalData.socialLinks.email.replace('mailto:', '')}
                </a>
              </div>
              
              <div className="flex items-center">
                <Icon icon="ph:github-logo-bold" className="w-6 h-6 mr-4 text-primary dark:text-primary-dark" />
                <a
                  href={personalData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-dark dark:text-light hover:text-primary dark:hover:text-primary-dark transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
              
              <div className="flex items-center">
                <Icon icon="ph:linkedin-logo-bold" className="w-6 h-6 mr-4 text-primary dark:text-primary-dark" />
                <a
                  href={personalData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-dark dark:text-light hover:text-primary dark:hover:text-primary-dark transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-dark dark:text-light">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-light dark:bg-dark-light border border-light-darker dark:border-dark-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-dark dark:text-light"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-dark dark:text-light">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-light dark:bg-dark-light border border-light-darker dark:border-dark-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-dark dark:text-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-dark dark:text-light">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-light dark:bg-dark-light border border-light-darker dark:border-dark-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-dark dark:text-light"
                  placeholder="Let me know how I can help you"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-dark dark:text-light">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-light dark:bg-dark-light border border-light-darker dark:border-dark-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-dark dark:text-light"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-md hover:bg-primary-dark dark:hover:bg-primary transition-colors w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}