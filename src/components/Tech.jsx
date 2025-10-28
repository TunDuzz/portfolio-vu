import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='w-full flex flex-col items-center text-center'>        
        <p className={`${styles.sectionSubText}`}>CÁC CÔNG NGHỆ TÔI SỬ DỤNG</p>
        <h2 className={`${styles.sectionHeadText}`}>Tech Stack.</h2>
      </motion.div>

      <div className='mt-10 flex flex-row flex-wrap justify-center gap-6 sm:gap-8'>
      {technologies.map((technology) => (
        <Tilt
          key={technology.name}
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          scale={1.08}
          transitionSpeed={450}
          glareEnable
          glareMaxOpacity={0.3}
          glareColor="#915EFF"
          glareBorderRadius="28px"
          className='w-32 h-40 sm:w-40 sm:h-48'
        >
          <div className='group relative w-full h-full rounded-[28px] bg-[#0e0f12] border border-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_35px_rgba(145,94,255,0.4)] hover:border-[#915EFF]/40 transition-all duration-500 ease-out flex flex-col items-center justify-center gap-3 hover:-translate-y-2 overflow-hidden'>
            {/* Animated gradient background on hover */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#915EFF]/10 via-[#00BFFF]/5 to-transparent transition-opacity duration-500' />
            
            {/* Glowing effect */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-tr from-[#915EFF] to-[#00BFFF] blur-xl transition-opacity duration-500' />
            
            <div className='relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 group-hover:border-[#915EFF]/40 flex items-center justify-center shadow-inner transition-all duration-500 group-hover:scale-110'>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-[0_2px_8px_rgba(145,94,255,0.3)] group-hover:drop-shadow-[0_4px_12px_rgba(145,94,255,0.5)] transition-all duration-500'
              />
            </div>
            <p className='relative z-10 text-center text-[12px] sm:text-sm font-semibold text-white/90 group-hover:text-[#CBB6FF] tracking-wide transition-colors duration-500'>
              {technology.name}
            </p>
          </div>
        </Tilt>
      ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
