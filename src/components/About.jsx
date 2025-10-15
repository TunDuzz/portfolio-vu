import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import myPhoto from "../assets/myPhoto.png"; // 👉 đổi đường dẫn tới ảnh của bạn

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Giới thiệu</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* 🔹 Chia bố cục 2 cột: chữ bên trái, ảnh bên phải */}
      <div className='mt-4 flex flex-col md:flex-row items-center gap-10'>
        {/* --- Bên trái: phần mô tả --- */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Tôi là <b>Frontend & Backend Developer</b>, có kinh nghiệm phát triển các ứng dụng web hiện đại
          bằng những công nghệ như <b>React</b>, <b>Tailwind CSS</b>, <b>ASP.NET Core</b> và <b>SQL Server</b>.
          <br /><br />
          Tôi luôn chú trọng việc <b>kết hợp giữa thiết kế giao diện tinh gọn</b> và <b>kiến trúc hệ thống ổn định</b>,
          nhằm tạo ra những sản phẩm có <b>hiệu năng cao</b> và mang đến <b>trải nghiệm người dùng mượt mà</b>.
        </motion.p>

        {/* --- Bên phải: hình của bạn có hiệu ứng --- */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 1)}
          className='flex justify-center'
        >
          <Tilt
            className="w-[320px] h-[320px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden shadow-xl hover:shadow-[#915EFF]/50 transition-all duration-500"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.07}
            transitionSpeed={400}
          >
            <img
              src={myPhoto}
              alt="Truong Tuan Vu"
              className="w-full h-full object-cover"
            />
          </Tilt>
        </motion.div>
      </div>

      {/* --- Card dịch vụ bên dưới --- */}
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
