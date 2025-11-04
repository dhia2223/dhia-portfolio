import { Icon } from '@iconify/react';
import { personalData } from '../constants/data';
import { AnimatedSection } from '../hooks/useScrollAnimation';
import { useState, useRef } from 'react';

export default function Contact() {
  const [submissionState, setSubmissionState] = useState({
    loading: false,
    success: false,
    error: false
  });
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionState({ loading: true, success: false, error: false });

    try {
      const response = await fetch('https://formspree.io/f/mzzrqgdk', {
        method: 'POST',
        body: new FormData(formRef.current),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionState({ loading: false, success: true, error: false });
        formRef.current.reset();
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmissionState(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmissionState({ loading: false, success: false, error: true });
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmissionState(prev => ({ ...prev, error: false }));
      }, 5000);
    }
  };

  return (
    <AnimatedSection id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-dark dark:text-light">
          <span className="text-primary dark:text-primary-dark">Get</span> In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact Information (unchanged) */}
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
          
          {/* Right side - Contact Form */}
          <div>
            {/* Success Notification */}
            {submissionState.success && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                <p>Thank you! Your message has been sent successfully.</p>
              </div>
            )}
            
            {/* Error Notification */}
            {submissionState.error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                <p>Oops! Something went wrong. Please try again later.</p>
              </div>
            )}
            
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-dark dark:text-light">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-light dark:bg-dark-light border border-light-darker dark:border-dark-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-dark dark:text-light"
                    placeholder="John Doe"
                    required
                    disabled={submissionState.loading}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-dark dark:text-light">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-light dark:bg-dark-light border border-light-darker dark:border-dark-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-dark dark:text-light"
                    placeholder="john@example.com"
                    required
                    disabled={submissionState.loading}
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
                  name="subject"
                  className="w-full px-4 py-3 bg-light dark:bg-dark-light border border-light-darker dark:border-dark-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-dark dark:text-light"
                  placeholder="Let me know how I can help you"
                  required
                  disabled={submissionState.loading}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-dark dark:text-light">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-light dark:bg-dark-light border border-light-darker dark:border-dark-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-dark dark:text-light"
                  placeholder="Your message here..."
                  required
                  disabled={submissionState.loading}
                ></textarea>
              </div>
              
              {/* Hidden field for reply-to */}
              <input 
                type="hidden" 
                name="_replyto" 
                value={personalData.socialLinks.email.replace('mailto:', '')} 
              />
              
              <button
                type="submit"
                className="px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-md hover:bg-primary-dark dark:hover:bg-primary transition-colors w-full md:w-auto flex items-center justify-center"
                disabled={submissionState.loading}
              >
                {submissionState.loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
