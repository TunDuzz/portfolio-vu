import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, StarsCanvas } from "./canvas";
import StarField from "./StarField";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-x-hidden`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        style={{ zIndex: 10 }}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent' />
        </div>

        <div className="relative z-10">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#915EFF]/20 to-[#7c3aed]/20 blur-xl" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#00BFFF]/20 to-[#915EFF]/20 blur-xl" />
          
          {/* Main heading with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Background glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] 
              bg-gradient-to-r from-[#915EFF]/20 via-[#7c3aed]/20 to-[#00BFFF]/20 
              blur-3xl rounded-full opacity-50" />
            
            <div className="relative z-10 w-full">
              <h1 className={`${styles.heroHeadText} relative z-10`}>
                <span className="block text-[#915EFF] mb-2 text-[20px] sm:text-[28px] font-medium tracking-wider">
                  ✨ Chào mừng đến với
                </span>
                <span className="block text-[32px] sm:text-[50px] lg:text-[60px] font-black leading-tight
                  bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] 
                  bg-clip-text text-transparent break-words">
                  Thế giới Code của tôi
                </span>
              </h1>
              <div className="mt-2 h-1 w-32 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full" />
            </div>
          </motion.div>
          
          {/* Enhanced subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 space-y-3 w-full relative z-10"
          >
            <p className={`${styles.heroSubText} text-white/90 leading-relaxed break-words`}>
              Chào mừng bạn đến với <span className="text-[#61DAFB] font-semibold">thế giới lập trình</span> của tôi
              <br className='sm:block hidden' />
              Nơi <span className="text-[#915EFF] font-semibold">ý tưởng</span> trở thành <span className="text-[#915EFF] font-semibold">hiện thực</span>
            </p>
            
            {/* Call to action */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-6 w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-[#915EFF]/20 to-[#7c3aed]/20 
                  border border-[#915EFF]/40 text-[#CBB6FF] text-xs sm:text-sm font-medium flex-shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-[#915EFF] animate-pulse"></span>
                <span className="whitespace-nowrap">Sẵn sàng cho dự án mới</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-[#00BFFF]/20 to-[#915EFF]/20 
                  border border-[#00BFFF]/40 text-[#CBB6FF] text-xs sm:text-sm font-medium flex-shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse"></span>
                <span className="whitespace-nowrap">Luôn học hỏi & phát triển</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />
      <StarsCanvas />
      <StarField />

      {/* Scroll button with highest z-index */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center' style={{ zIndex: 20 }}>
        <button 
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
          className='pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-300'
        >
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 pointer-events-auto hover:border-[#915EFF] transition-colors duration-300'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
