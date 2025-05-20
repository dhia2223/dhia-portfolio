import { useEffect, useRef } from 'react';

export const useAnimateOnScroll = (options = {}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);
  
  return ref;
};