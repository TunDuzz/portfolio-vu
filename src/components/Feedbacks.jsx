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
          <span className="blue-text-gradient">@</span> {name}
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
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Những câu nói truyền cảm hứng cho tôi</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
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

export default SectionWrapper(Inspirations, "");
