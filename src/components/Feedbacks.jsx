import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const InspirationCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex flex-col justify-between"
  >
    {/* Dấu ngoặc kép */}
    <p className="text-white font-black text-[48px] leading-none mb-4">"</p>

    {/* Nội dung câu nói */}
    <div className="flex-1">
      <p className="text-white tracking-wider text-[18px] leading-relaxed min-h-[100px]">
        {testimonial}
      </p>
    </div>

    {/* Thông tin người nói */}
    <div className="mt-6 flex items-center gap-3">
      <img
        src={image}
        alt={`inspiration_by-${name}`}
        className="w-12 h-12 rounded-full object-cover border border-blue-500 shadow-sm flex-shrink-0"
      />
      <div className="flex flex-col justify-center leading-tight h-[50px]">
        <p className="text-white font-semibold text-[15px] mb-[2px] whitespace-nowrap hover:text-blue-400 transition-colors duration-200">
          <span className="text-[#56ccf2]">@</span> {name}
        </p>
        <p className="text-secondary text-[13px] line-clamp-1 leading-snug max-w-[180px]">
          {designation} — {company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Inspirations = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()} className="text-center relative">
          {/* Background glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] 
            bg-gradient-to-r from-[#915EFF]/20 via-[#7c3aed]/20 to-[#00BFFF]/20 
            blur-3xl rounded-full opacity-50" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className={`${styles.sectionSubText} text-[#915EFF] font-medium tracking-wider`}>
                💬 Những câu nói truyền cảm hứng
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[40px] sm:text-[50px] lg:text-[60px] font-black leading-tight mt-2
                bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] 
                bg-clip-text text-transparent"
            >
              Testimonials
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-2 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full"
            />
          </div>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-7`}>
        {testimonials.map((testimonial, index) => (
          <InspirationCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Inspirations, "testimonials");
