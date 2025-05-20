import { useEffect, useRef, forwardRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return {
    ref,
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6 }
  };
};

export const AnimatedSection = forwardRef(({ children, className, id }, ref) => {
  const animationProps = useScrollAnimation();

  return (
    <motion.section
      ref={ref || animationProps.ref}
      initial={animationProps.initial}
      animate={animationProps.animate}
      transition={animationProps.transition}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
});

AnimatedSection.displayName = 'AnimatedSection';