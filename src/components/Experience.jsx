import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import StarField from "./StarField";

const textVariant = () => ({
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.25 } }
});

// Mock VerticalTimeline components
const VerticalTimeline = ({ children }) => (
  <div className="relative">
    {/* Timeline line */}
    <div className="absolute left-[50px] top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#915EFF] via-[#7c3aed] to-[#00BFFF] rounded-full" />
    <div className="space-y-12">{children}</div>
  </div>
);

const VerticalTimelineElement = ({ 
  contentStyle, 
  contentArrowStyle, 
  date, 
  iconStyle, 
  icon, 
  children 
}) => (
  <div className="relative flex gap-8 group">
    {/* Icon */}
    <div 
      className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center flex-shrink-0 z-10"
      style={iconStyle}
    >
      {icon}
      {/* Pulse animation */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full bg-[#915EFF]"
      />
    </div>

    {/* Content */}
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex-1 relative"
    >
      {/* Date */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute -top-8 left-0 inline-flex items-center gap-2 px-4 py-2 rounded-full
          bg-gradient-to-r from-[#915EFF]/20 to-[#7c3aed]/20 
          border border-[#915EFF]/30 backdrop-blur-sm"
      >
        <svg className="w-4 h-4 text-[#915EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-[#CBB6FF] text-sm font-semibold">{date}</span>
      </motion.div>

      {/* Arrow */}
      <div 
        className="absolute left-0 top-12 w-0 h-0"
        style={{
          borderTop: '7px solid transparent',
          borderBottom: '7px solid transparent',
          borderRight: '7px solid #915EFF',
          filter: 'drop-shadow(0 0 8px rgba(145, 94, 255, 0.3))'
        }}
      />

      {/* Card */}
      <div 
        className="relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl"
        style={contentStyle}
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/5 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shine effect */}
        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r 
          from-transparent via-white/10 to-transparent skew-x-12 
          group-hover:left-full transition-all duration-1000" />

        {/* Top corner decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#915EFF]/20 to-transparent rounded-bl-full" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Bottom corner decoration */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#00BFFF]/20 to-transparent rounded-tr-full
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  </div>
);


const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #2a1f3d 50%, #1d1836 100%)",
        color: "#fff",
        border: "1px solid rgba(145, 94, 255, 0.2)",
        borderRadius: "24px",
        padding: "2rem",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(145, 94, 255, 0.1)",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid #915EFF",
        filter: "drop-shadow(0 0 8px rgba(145, 94, 255, 0.3))"
      }}
      date={project.date}
      iconStyle={{ 
        background: `linear-gradient(135deg, ${project.iconBg} 0%, #915EFF 100%)`,
        boxShadow: "0 0 20px rgba(145, 94, 255, 0.5)",
        border: "3px solid rgba(255, 255, 255, 0.1)"
      }}
      icon={
        <motion.div 
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className='flex justify-center items-center w-full h-full relative'
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
          <img
            src={typeof project.icon === 'string' ? project.icon : project.icon.src || project.icon}
            alt={project.company_name}
            className='w-[60%] h-[60%] object-contain relative z-10 drop-shadow-lg'
          />
        </motion.div>
      }
    >
      <div className="relative">
        {/* Title */}
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='text-white text-[26px] font-bold mb-3 leading-tight
            hover:text-transparent hover:bg-clip-text 
            hover:bg-gradient-to-r hover:from-[#CBB6FF] hover:to-[#915EFF]
            transition-all duration-300 cursor-default'
        >
          {project.title}
        </motion.h3>

        {/* Company */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className='flex items-center gap-2 mb-6'
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7c3aed] animate-pulse" />
          <p className='text-[#915EFF] text-[17px] font-semibold'>
            {project.company_name}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#915EFF]/60 via-white/20 to-transparent rounded-full mb-6" />

        {/* Points */}
        <ul className='list-none space-y-4'>
          {project.points.map((point, index) => (
            <motion.li
              key={`project-point-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ x: 4 }}
              className='flex items-start gap-3 group/item'
            >
              <div className="mt-1.5 relative flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7c3aed]
                  group-hover/item:scale-150 transition-transform duration-300" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#915EFF] 
                  opacity-0 group-hover/item:opacity-50 blur-sm 
                  group-hover/item:scale-[3] transition-all duration-300" />
              </div>
              <span className='text-white/90 text-[15px] leading-relaxed
                group-hover/item:text-white transition-colors duration-300'>
                {point}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="w-full min-h-screen bg-primary py-20 px-6 sm:px-16">
      {/* Header */}
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="text-center relative mb-20"
      >
        {/* Background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] 
          bg-gradient-to-r from-[#915EFF]/30 via-[#7c3aed]/30 to-[#00BFFF]/30 
          blur-3xl rounded-full opacity-60" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 px-6 py-3 rounded-full
              bg-gradient-to-r from-[#915EFF]/20 to-[#00BFFF]/20 
              border border-[#915EFF]/30 backdrop-blur-sm"
          >
            <span className="text-3xl">🚀</span>
            <span className="text-[#CBB6FF] font-semibold text-sm uppercase tracking-wider">
              Các dự án đã thực hiện
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] sm:text-[50px] lg:text-[70px] font-black leading-tight
              bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] 
              bg-clip-text text-transparent mb-4"
          >
            My Projects
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 w-40 mx-auto bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-secondary/90 text-[17px] max-w-3xl mx-auto leading-relaxed"
          >
            Hành trình phát triển qua các dự án thực tế, từ ý tưởng đến triển khai thành công
          </motion.p>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className='max-w-7xl mx-auto'>
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto mt-20 text-center"
      >
        <div className="relative bg-gradient-to-br from-tertiary via-black-200 to-black-200/50 
          rounded-3xl p-12 border border-white/10 overflow-hidden group">
          
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/10 to-[#00BFFF]/10 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Shine effect */}
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r 
            from-transparent via-white/10 to-transparent skew-x-12 
            group-hover:left-full transition-all duration-1000" />
          
          <div className="relative z-10">
            <h3 className="text-white text-[32px] font-bold mb-4
              bg-gradient-to-r from-white to-[#CBB6FF] bg-clip-text">
              Có ý tưởng dự án mới?
            </h3>
            <p className="text-secondary/90 text-[17px] mb-8 leading-relaxed">
              Hãy cùng nhau biến ý tưởng của bạn thành hiện thực!
            </p>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-2xl font-bold text-white
                bg-gradient-to-r from-[#915EFF] to-[#7c3aed]
                shadow-lg shadow-[#915EFF]/50 hover:shadow-xl hover:shadow-[#915EFF]/60
                transition-all duration-300 inline-flex items-center gap-3 group/btn cursor-pointer"
            >
              <span>Liên hệ với tôi</span>
              <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#915EFF]/20 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#00BFFF]/20 to-transparent rounded-tr-full" />
        </div>
      </motion.div>
      
      {/* StarField background */}
      <StarField />
    </div>
  );
};

export default Experience;