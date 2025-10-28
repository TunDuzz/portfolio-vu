import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const AnimatedTitle = ({ 
  subtitle, 
  title, 
  icon = null,
  className = "",
  subtitleClassName = "",
  titleClassName = "",
  glowSize = "w-[600px] h-[200px]"
}) => {
  return (
    <motion.div 
      variants={{}} 
      className={`text-center relative ${className}`}
    >
      {/* Background glow effect */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${glowSize}
        bg-gradient-to-r from-[#915EFF]/20 via-[#7c3aed]/20 to-[#00BFFF]/20 
        blur-3xl rounded-full opacity-50`} />
      
      <div className="relative z-10">
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className={`${styles.sectionSubText} text-[#915EFF] font-medium tracking-wider ${subtitleClassName}`}>
              {icon && <span className="mr-2">{icon}</span>}
              {subtitle}
            </span>
          </motion.div>
        )}
        
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-[40px] sm:text-[50px] lg:text-[60px] font-black leading-tight mt-2
              bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] 
              bg-clip-text text-transparent ${titleClassName}`}
          >
            {title}
          </motion.h2>
        )}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default AnimatedTitle;
