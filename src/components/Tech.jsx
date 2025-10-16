import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const displayedTech = technologies.slice(0, 9);
  return (
    <>
      <motion.div variants={textVariant()} className='w-full flex flex-col items-center text-center'>        
        <p className={`${styles.sectionSubText}`}>CÁC CÔNG NGHỆ TÔI SỬ DỤNG</p>
        <h2 className={`${styles.sectionHeadText}`}>Tech Stack.</h2>
      </motion.div>

      <div className='mt-10 flex flex-row flex-wrap justify-center gap-6 sm:gap-8'>
      {displayedTech.map((technology) => (
        <Tilt
          key={technology.name}
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          scale={1.04}
          transitionSpeed={350}
          glareEnable
          glareMaxOpacity={0.2}
          glareColor="#ffffff"
          glareBorderRadius="28px"
          className='w-32 h-40 sm:w-40 sm:h-48'
        >
          <div className='group w-full h-full rounded-[28px] bg-[#0e0f12] border border-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.55)] hover:border-white/10 transition-all duration-300 ease-out flex flex-col items-center justify-center gap-3 hover:-translate-y-1.5'>
            <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center shadow-inner'>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-[0_2px_6px_rgba(255,255,255,0.15)]'
              />
            </div>
            <p className='text-center text-[12px] sm:text-sm font-semibold text-white/90 tracking-wide'>
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
