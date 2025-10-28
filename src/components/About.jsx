import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
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
              🚀 Hành trình của tôi
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
            Từ ý tưởng đến hiện thực
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full"
          />
        </div>
      </motion.div>

      {/* Main Content: Text + Image */}
      <div className="mt-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Description with enhanced styling */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 1)}
          className="flex-1 relative"
        >
          {/* Decorative element */}
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#915EFF] via-[#7c3aed] to-transparent rounded-full" />
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-6">
              <p className="text-white/95 text-[20px] leading-[36px] font-poppins font-medium">
                Với hơn <span className="text-[#915EFF] font-bold">4 năm học tập</span> và nghiên cứu trong lĩnh vực 
                <span className="text-[#61DAFB] font-semibold"> Công nghệ thông tin</span>, tôi đã tích lũy được 
                kinh nghiệm thực tế trong việc phát triển các dự án từ ý tưởng đến triển khai.
              </p>
              
              <div className="h-[2px] bg-gradient-to-r from-[#915EFF]/60 via-white/30 to-transparent rounded-full" />
              
              <p className="text-white/95 text-[20px] leading-[36px] font-poppins font-medium">
                Tôi đặc biệt quan tâm đến việc tạo ra những 
                <span className="text-[#CBB6FF] font-bold"> giải pháp sáng tạo</span> và 
                <span className="text-[#CBB6FF] font-bold"> tối ưu hóa trải nghiệm người dùng</span>, 
                luôn cập nhật và học hỏi những công nghệ mới nhất để mang đến giá trị thực tế.
              </p>
            </div>

            {/* Skills & Approach */}
            <div className="space-y-6">
              <h3 className="text-[#915EFF] text-[18px] font-bold font-poppins tracking-wide">
                Phương pháp làm việc của tôi:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-[#915EFF]/10 to-transparent border border-[#915EFF]/20">
                  <div className="w-2 h-2 rounded-full bg-[#915EFF] mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-[16px] leading-[28px] font-poppins">
                    <span className="font-semibold text-[#CBB6FF]">Thiết kế UX/UI</span> tập trung vào trải nghiệm người dùng
                  </p>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-[#915EFF]/10 to-transparent border border-[#915EFF]/20">
                  <div className="w-2 h-2 rounded-full bg-[#915EFF] mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-[16px] leading-[28px] font-poppins">
                    <span className="font-semibold text-[#CBB6FF]">Code sạch</span> và kiến trúc có thể mở rộng
                  </p>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-[#915EFF]/10 to-transparent border border-[#915EFF]/20">
                  <div className="w-2 h-2 rounded-full bg-[#915EFF] mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-[16px] leading-[28px] font-poppins">
                    <span className="font-semibold text-[#CBB6FF]">Testing & Debugging</span> kỹ lưỡng trước khi deploy
                  </p>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-[#915EFF]/10 to-transparent border border-[#915EFF]/20">
                  <div className="w-2 h-2 rounded-full bg-[#915EFF] mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-[16px] leading-[28px] font-poppins">
                    <span className="font-semibold text-[#CBB6FF]">Học hỏi liên tục</span> và cập nhật công nghệ mới
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Profile Image with enhanced effects */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="relative group"
        >
          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] 
            opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 animate-pulse" />
          
          {/* Outer ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] 
            opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
          
          <Tilt
            className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] 
              rounded-full overflow-hidden shadow-2xl shadow-[#915EFF]/50
              group-hover:shadow-[#915EFF]/80 transition-all duration-500
              border-4 border-tertiary"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={400}
          >
            <img
              src="/myPhoto.png"
              alt="Truong Tuan Vu"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#915EFF]/20 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Tilt>

          {/* Floating decorative elements */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-4 -right-4 w-16 h-16 rounded-full 
              bg-gradient-to-br from-[#915EFF]/30 to-[#7c3aed]/30 
              backdrop-blur-sm border border-[#915EFF]/50 shadow-lg"
          />
          
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 3.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full 
              bg-gradient-to-br from-[#00BFFF]/30 to-[#915EFF]/30 
              backdrop-blur-sm border border-[#00BFFF]/50 shadow-lg"
          />
        </motion.div>
      </div>

      {/* Statistics Section with enhanced design */}
      <div className="mt-24 relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/5 via-transparent to-[#915EFF]/5 rounded-3xl blur-3xl" />
        
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "4+", label: "Năm đại học", icon: "🎓", delay: 0.5 },
            { number: "10+", label: "Dự án học tập & cá nhân", icon: "💻", delay: 0.6 },
            { number: "5+", label: "Dự án nhóm thực hiện", icon: "🚀", delay: 0.7 },
            { number: "100%", label: "Tinh thần học hỏi & phát triển", icon: "⚡", delay: 0.8 }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", stat.delay, 0.75)}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-gradient-to-br from-tertiary via-tertiary to-black-200/50 
                px-6 py-8 rounded-2xl 
                border border-white/10 hover:border-[#915EFF]/60
                shadow-xl hover:shadow-2xl hover:shadow-[#915EFF]/30
                transition-all duration-500 overflow-hidden group cursor-default"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/0 to-[#915EFF]/10 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine effect */}
              <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r 
                from-transparent via-white/10 to-transparent skew-x-12 
                group-hover:left-full transition-all duration-1000" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 
                  transition-all duration-300">
                  {stat.icon}
                </div>
                
                {/* Number with gradient */}
                <div className="text-[48px] font-bold leading-none mb-3
                  bg-gradient-to-r from-white via-[#CBB6FF] to-[#915EFF] 
                  bg-clip-text text-transparent
                  group-hover:from-[#CBB6FF] group-hover:to-[#915EFF]
                  transition-all duration-500">
                  {stat.number}
                </div>
                
                {/* Divider */}
                <div className="h-[2px] w-12 bg-gradient-to-r from-[#915EFF] to-transparent mb-3
                  group-hover:w-full transition-all duration-500" />
                
                {/* Label */}
                <div className="text-secondary/80 group-hover:text-secondary text-[15px] leading-snug
                  transition-colors duration-300">
                  {stat.label}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 
                bg-gradient-to-bl from-[#915EFF]/20 to-transparent rounded-bl-full
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");