import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #2a1f3d 50%, #1d1836 100%)",
        color: "#fff",
        border: "1px solid rgba(145, 94, 255, 0.2)",
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(145, 94, 255, 0.1)",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid #915EFF",
        filter: "drop-shadow(0 0 8px rgba(145, 94, 255, 0.3))"
      }}
      date={project.date}
      iconStyle={{ 
        background: `linear-gradient(135deg, ${project.iconBg} 0%, #915EFF 100%)`,
        boxShadow: "0 0 20px rgba(145, 94, 255, 0.4)",
        border: "2px solid rgba(255, 255, 255, 0.1)"
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full relative'>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
          <img
            src={project.icon}
            alt={project.company_name}
            className='w-[60%] h-[60%] object-contain relative z-10'
          />
        </div>
      }
    >
      <div className="relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/5 to-transparent rounded-xl" />
        
        <div className="relative z-10">
          <h3 className='text-white text-[24px] font-bold mb-2 bg-gradient-to-r from-white to-[#CBB6FF] bg-clip-text text-transparent'>
            {project.title}
          </h3>
          <p
            className='text-[#915EFF] text-[16px] font-semibold flex items-center gap-2'
            style={{ margin: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#915EFF]"></span>
            {project.company_name}
          </p>
        </div>
      </div>

      <ul className='mt-6 list-none space-y-3 relative z-10'>
        {project.points.map((point, index) => (
          <li
            key={`project-point-${index}`}
            className='text-white/90 text-[14px] pl-6 tracking-wider relative
              before:absolute before:left-0 before:top-2 before:w-2 before:h-2 
              before:bg-gradient-to-r before:from-[#915EFF] before:to-[#7c3aed] 
              before:rounded-full before:shadow-sm
              hover:text-white transition-colors duration-300'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
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
              🚀 Các dự án đã thực hiện
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
            My Projects
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full"
          />
        </div>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
