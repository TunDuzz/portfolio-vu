import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Modal from "./Modal";

const CertificateCard = ({
  index,
  name,
  issuer,
  date,
  description,
  tags,
  image,
  detail_image,
  verification_link,
}) => {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      {/* --- CARD --- */}
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-[0_0_25px_rgba(145,94,255,0.4)] transition-all duration-300"
        >
          {/* --- IMAGE --- */}
          <div
            className="relative w-full h-[230px] cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <img
              src={image}
              alt="certificate_image"
              className="w-full h-full object-contain rounded-2xl bg-white/5 p-4"
            />

            {/* --- LINK ICON --- */}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(verification_link, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* --- INFO --- */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[20px] leading-tight">
              {name}
            </h3>
            <p className="mt-1 text-[#915EFF] text-[14px] font-medium">
              {issuer}
            </p>
            <p className="mt-2 text-secondary text-[12px]">{date}</p>
            <p className="mt-3 text-secondary text-[14px] leading-relaxed">
              {description}
            </p>
          </div>

          {/* --- TAGS --- */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[12px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>

      {/* --- MODAL HIỂN THỊ ẢNH CHỨNG CHỈ CHI TIẾT --- */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="relative">
          <img
            src={detail_image || image}
            alt="certificate_full"
            className="rounded-xl max-h-[85vh] w-auto mx-auto object-contain"
          />
        </div>
      </Modal>
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Chứng chỉ chuyên nghiệp</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
        Mỗi chứng chỉ là một cột mốc trong hành trình học hỏi 
        và hoàn thiện kỹ năng của tôi trong lĩnh vực công nghệ thông tin.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((certificate, index) => (
          <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
