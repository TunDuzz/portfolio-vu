import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Trương Tuấn Vũ",
          from_email: form.email,
          to_email: "truongtuanvu2304@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Cảm ơn bạn. Tôi sẽ phản hồi sớm nhất có thể.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Rất tiếc, đã xảy ra lỗi. Vui lòng thử lại.");
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <div className="text-center mb-8 relative">
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
                  📬 Kết nối với tôi
                </span>
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[40px] sm:text-[50px] lg:text-[60px] font-black leading-tight mt-2
                  bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] 
                  bg-clip-text text-transparent"
              >
                Contact
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-2 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full"
              />
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Họ và tên của bạn</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Tên của bạn là gì?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Email của bạn</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Địa chỉ email của bạn là gì?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Lời nhắn của bạn</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Bạn muốn gửi lời nhắn gì?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Đang gửi..." : "Gửi"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="mt-20 max-w-5xl mx-auto relative"
>
  {/* Background decorative elements */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] 
    bg-gradient-to-r from-[#915EFF]/10 via-[#7c3aed]/10 to-[#00BFFF]/10 
    blur-3xl rounded-full opacity-50 pointer-events-none" />
  
  <div className="relative z-10">
    {/* Header */}
    <div className="text-center mb-12">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h4 className="text-white text-[32px] sm:text-[36px] font-bold mb-3
          bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] 
          bg-clip-text text-transparent">
          Kết nối với tôi
        </h4>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full mb-4" />
        <p className="text-secondary/90 text-[17px] max-w-xl mx-auto">
          Hãy theo dõi và kết nối với tôi trên các nền tảng mạng xã hội
        </p>
      </motion.div>
    </div>
    
    {/* Social Links Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
      {/* GitHub */}
      <motion.a
        href="https://github.com/truongtuanvu2304"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.05, y: -8 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex flex-col items-center gap-4 p-6 sm:p-7 rounded-3xl 
          bg-gradient-to-br from-[#24292e]/40 to-[#1a1e22]/40
          border border-gray-600/20 hover:border-gray-500/60
          shadow-xl hover:shadow-2xl hover:shadow-gray-700/50
          transition-all duration-500 group overflow-hidden
          backdrop-blur-sm"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-gray-900/20" />
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r 
            from-transparent via-white/10 to-transparent skew-x-12 
            group-hover:left-full transition-all duration-1000" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3">
          {/* Icon container */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 
              blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl 
              bg-gradient-to-br from-gray-700 to-gray-800 
              flex items-center justify-center 
              group-hover:from-gray-600 group-hover:to-gray-700 
              group-hover:scale-110 group-hover:rotate-3
              transition-all duration-500 shadow-lg">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-gray-100 transition-colors" 
                fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </div>
          
          {/* Label */}
          <span className="text-white font-bold text-[15px] sm:text-[16px] 
            group-hover:text-gray-200 transition-colors">
            GitHub
          </span>
          
          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 
            bg-gradient-to-r from-transparent via-gray-500 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl" />
        </div>
      </motion.a>

      {/* Gmail */}
      <motion.a
        href="mailto:truongtuanvu2304@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05, y: -8 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex flex-col items-center gap-4 p-6 sm:p-7 rounded-3xl 
          bg-gradient-to-br from-red-600/30 to-red-700/30
          border border-red-500/20 hover:border-red-400/60
          shadow-xl hover:shadow-2xl hover:shadow-red-600/50
          transition-all duration-500 group overflow-hidden
          backdrop-blur-sm"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-700/20" />
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r 
            from-transparent via-white/10 to-transparent skew-x-12 
            group-hover:left-full transition-all duration-1000" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-700 
              blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl 
              bg-gradient-to-br from-red-600 to-red-700 
              flex items-center justify-center 
              group-hover:from-red-500 group-hover:to-red-600 
              group-hover:scale-110 group-hover:rotate-3
              transition-all duration-500 shadow-lg">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-red-50 transition-colors" 
                fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819L12 8.73l6.545-4.909h3.819c.904 0 1.636.732 1.636 1.636z"/>
              </svg>
            </div>
          </div>
          
          <span className="text-white font-bold text-[15px] sm:text-[16px] 
            group-hover:text-red-50 transition-colors">
            Gmail
          </span>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 
            bg-gradient-to-r from-transparent via-red-500 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl" />
        </div>
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://linkedin.com/in/truongtuanvu2304"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileHover={{ scale: 1.05, y: -8 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex flex-col items-center gap-4 p-6 sm:p-7 rounded-3xl 
          bg-gradient-to-br from-blue-600/30 to-blue-700/30
          border border-blue-500/20 hover:border-blue-400/60
          shadow-xl hover:shadow-2xl hover:shadow-blue-600/50
          transition-all duration-500 group overflow-hidden
          backdrop-blur-sm"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20" />
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r 
            from-transparent via-white/10 to-transparent skew-x-12 
            group-hover:left-full transition-all duration-1000" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 
              blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl 
              bg-gradient-to-br from-blue-600 to-blue-700 
              flex items-center justify-center 
              group-hover:from-blue-500 group-hover:to-blue-600 
              group-hover:scale-110 group-hover:rotate-3
              transition-all duration-500 shadow-lg">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-blue-50 transition-colors" 
                fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
          </div>
          
          <span className="text-white font-bold text-[15px] sm:text-[16px] 
            group-hover:text-blue-50 transition-colors">
            LinkedIn
          </span>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 
            bg-gradient-to-r from-transparent via-blue-500 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl" />
        </div>
      </motion.a>

      {/* Facebook */}
      <motion.a
        href="https://facebook.com/truongtuanvu2304"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05, y: -8 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex flex-col items-center gap-4 p-6 sm:p-7 rounded-3xl 
          bg-gradient-to-br from-[#1877F2]/30 to-[#0D65D9]/30
          border border-[#1877F2]/20 hover:border-[#1877F2]/60
          shadow-xl hover:shadow-2xl hover:shadow-[#1877F2]/50
          transition-all duration-500 group overflow-hidden
          backdrop-blur-sm"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1877F2]/20 to-[#0D65D9]/20" />
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r 
            from-transparent via-white/10 to-transparent skew-x-12 
            group-hover:left-full transition-all duration-1000" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1877F2] to-[#0D65D9] 
              blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl 
              bg-gradient-to-br from-[#1877F2] to-[#0D65D9] 
              flex items-center justify-center 
              group-hover:from-[#4A9FF5] group-hover:to-[#1877F2] 
              group-hover:scale-110 group-hover:rotate-3
              transition-all duration-500 shadow-lg">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-blue-50 transition-colors" 
                fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
          </div>
          
          <span className="text-white font-bold text-[15px] sm:text-[16px] 
            group-hover:text-blue-50 transition-colors">
            Facebook
          </span>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 
            bg-gradient-to-r from-transparent via-[#1877F2] to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl" />
        </div>
      </motion.a>
     </div>
   </div>
 </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
