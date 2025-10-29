import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates, technologies, blogs } from "../constants";
import { textVariant } from "../utils/motion";
import Modal from "./Modal";
import StarField from "./StarField";

// Certificate Card Component
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: -8 }}
      >
        <Tilt
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          scale={1.03}
          transitionSpeed={400}
          className="bg-gradient-to-br from-tertiary via-tertiary to-black-200/50 p-6 rounded-3xl 
            sm:w-[360px] w-full shadow-xl hover:shadow-2xl hover:shadow-[#915EFF]/40
            border border-white/5 hover:border-[#915EFF]/40 
            transition-all duration-500 group overflow-hidden relative"
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-[#915EFF] via-[#7c3aed] to-[#00BFFF] transition-opacity duration-700" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
          </div>

          <div className="relative z-10">
            {/* Image Container */}
            <div
              className="relative w-full h-[200px] cursor-pointer rounded-2xl overflow-hidden
                bg-gradient-to-br from-white/5 to-white/[0.02] p-4 mb-5
                group-hover:scale-[1.02] transition-transform duration-500"
              onClick={() => setShowModal(true)}
            >
              <img
                src={image}
                alt="certificate_image"
                className="w-full h-full object-contain"
              />

              {/* Verification Link Button */}
              <div className="absolute top-3 right-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(verification_link, "_blank");
                  }}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7c3aed] 
                    flex justify-center items-center shadow-lg shadow-[#915EFF]/50
                    hover:scale-110 hover:shadow-xl hover:shadow-[#915EFF]/60 
                    transition-all duration-300 group/btn"
                  title="Xác thực chứng chỉ"
                >
                  <svg
                    className="w-5 h-5 text-white group-hover/btn:rotate-12 transition-transform duration-300"
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
                </button>
              </div>

              {/* View Details Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                flex items-end justify-center pb-4">
                <span className="text-white text-sm font-semibold">
                  Click để xem chi tiết
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="text-white font-bold text-[22px] leading-tight 
                group-hover:text-transparent group-hover:bg-clip-text 
                group-hover:bg-gradient-to-r group-hover:from-[#CBB6FF] group-hover:to-[#915EFF]
                transition-all duration-300">
                {name}
              </h3>
              
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#915EFF]" />
                <p className="text-[#915EFF] text-[15px] font-semibold">
                  {issuer}
                </p>
              </div>
              
              <p className="text-secondary/70 text-[13px] font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {date}
              </p>

              {/* Divider */}
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-3" />
              
              <p className="text-secondary/90 text-[14px] leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className={`px-3 py-1 rounded-lg text-[11px] font-medium ${tag.color}
                    bg-white/5 border border-white/10 backdrop-blur-sm
                    hover:border-[#915EFF]/30 transition-colors duration-300`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </Tilt>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-[9998] p-4"
          onClick={() => setShowModal(false)}
          style={{ zIndex: 9998 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-tertiary to-black-200 p-2 rounded-3xl 
              shadow-2xl max-w-5xl w-full border border-[#915EFF]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={detail_image || image}
              alt="certificate_full"
              className="rounded-2xl max-h-[85vh] w-full object-contain"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-4 -right-4 w-12 h-12 rounded-full
                bg-gradient-to-r from-red-500 to-red-600 
                text-white font-bold text-2xl
                hover:scale-110 hover:shadow-xl hover:shadow-red-500/50
                transition-all duration-300 flex items-center justify-center
                border-4 border-black-200"
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

// Blog Card Component
const BlogCard = ({ index, post, onOpen }) => {
  const { category, title, description, date, readTime, tags } = post;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -8 }}
      onClick={() => onOpen(post)}
      className="relative bg-gradient-to-br from-tertiary to-black-200/50 p-6 rounded-3xl sm:w-[360px] w-full 
        cursor-pointer overflow-hidden group 
        border border-white/5 hover:border-[#915EFF]/60
        shadow-xl hover:shadow-[0_8px_40px_-12px_#915EFF]
        transition-all duration-500 ease-out"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-[#915EFF] via-[#7c3aed] to-[#00BFFF] transition-opacity duration-500" />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider
            bg-gradient-to-r from-[#915EFF] to-[#7c3aed] text-white shadow-lg shadow-[#915EFF]/30">
            {category}
          </span>
          <span className="text-[11px] text-secondary/70 font-medium">{date}</span>
        </div>

        <h3 className="text-white font-bold text-[22px] leading-tight mb-3
          group-hover:text-transparent group-hover:bg-clip-text 
          group-hover:bg-gradient-to-r group-hover:from-[#CBB6FF] group-hover:to-[#915EFF]
          transition-all duration-300">
          {title}
        </h3>

        <p className="text-secondary/90 text-[14px] leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2 flex-1">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={`${title}-${tag}`}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium
                  bg-white/5 text-secondary/80 border border-white/10
                  group-hover:bg-[#915EFF]/20 group-hover:text-[#CBB6FF] 
                  group-hover:border-[#915EFF]/30 transition-all duration-300"
              >
                #{tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2.5 py-1 text-[11px] text-secondary/60">
                +{tags.length - 3}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-[12px] text-secondary/70 whitespace-nowrap">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {readTime}
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#915EFF]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

// Content renderer for blog modal
const renderContentBlock = (block, index) => {
  switch (block?.type) {
    case "heading":
      return (
        <h3
          key={`heading-${index}`}
          className="text-white text-[26px] font-bold leading-[36px] mt-8 mb-5 first:mt-0
            bg-gradient-to-r from-white to-white/80 bg-clip-text"
        >
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p
          key={`paragraph-${index}`}
          className="text-secondary/90 text-[16px] leading-[30px] mb-5 text-justify"
        >
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul
          key={`list-${index}`}
          className="space-y-3 pl-6 mb-6"
        >
          {(block.items || []).map((item, itemIndex) => (
            <li 
              key={`list-${index}-${itemIndex}`} 
              className="text-secondary/90 text-[15px] leading-[28px] relative
                before:content-['▹'] before:absolute before:-left-5 before:text-[#915EFF] before:font-bold"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <div key={`code-${index}`} className="mb-6 group/code">
          <div className="relative">
            <pre
              className="bg-gradient-to-br from-[#0a0b0f] to-[#151620] 
                border border-[#915EFF]/20 rounded-2xl p-6 overflow-x-auto 
                text-[14px] leading-[26px] text-[#c9d1d9] 
                shadow-2xl shadow-black/50
                group-hover/code:border-[#915EFF]/40 transition-all duration-300"
            >
              <code className="font-mono">{block.code}</code>
            </pre>
            <div className="absolute top-3 right-3 flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState("certificates");
  const [openPost, setOpenPost] = useState(null);
  const [error, setError] = useState(null);

  const handleOpen = (post) => {
    try {
      if (!post) {
        throw new Error("Post data is null or undefined");
      }
      setOpenPost(post);
      setError(null);
    } catch (err) {
      setError(`Lỗi khi mở bài viết: ${err.message}`);
    }
  };

  const handleClose = () => {
    setOpenPost(null);
    setError(null);
  };

  const handleTabChange = (tabId) => {
    try {
      if (activeTab === tabId) {
        return;
      }
      setError(null);
      setActiveTab(tabId);
    } catch (err) {
      setError(`Lỗi khi chuyển tab: ${err.message}`);
    }
  };

  const tabs = [
    { id: "certificates", label: "Certificates", icon: "🎓", gradient: "from-[#915EFF] to-[#7c3aed]" },
    { id: "blog", label: "Blog", icon: "📝", gradient: "from-[#7c3aed] to-[#00BFFF]" },
    { id: "tech", label: "Tech Stack", icon: "⚙️", gradient: "from-[#00BFFF] to-[#915EFF]" },
  ];

  return (
    <>
      <motion.div variants={textVariant()} className="w-full flex flex-col items-center text-center relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] 
          bg-gradient-to-r from-[#915EFF]/20 via-[#7c3aed]/20 to-[#00BFFF]/20 
          blur-3xl rounded-full opacity-50" />
        
        <div className="relative z-10">
          <h2 className="text-[40px] sm:text-[50px] lg:text-[60px] font-black leading-tight
            bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#00BFFF] 
            bg-clip-text text-transparent">
            Portfolio Showcase
          </h2>
          <div className="mt-2 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full" />
          
          <p className="mt-6 text-secondary/90 text-[17px] sm:text-[18px] max-w-3xl leading-[32px] mx-auto">
            Khám phá hành trình của tôi thông qua các dự án, chứng chỉ và chuyên môn kỹ thuật. 
            Mỗi phần thể hiện một cột mốc trong quá trình học tập không ngừng của tôi.
          </p>
        </div>
      </motion.div>

      {/* Tabs Navigation */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              disabled={isActive}
              whileHover={!isActive ? { scale: 1.05, y: -2 } : {}}
              whileTap={!isActive ? { scale: 0.98 } : {}}
              className={`relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 
                flex items-center gap-3 text-[15px] overflow-hidden group
                ${isActive
                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-2xl shadow-[#915EFF]/50 cursor-default`
                  : "bg-white/5 text-secondary hover:text-white border border-white/10 hover:border-[#915EFF]/50 cursor-pointer"
              }`}
              title={isActive ? `${tab.label} đang được chọn` : `Chuyển sang ${tab.label}`}
            >
              {/* Active state glow */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-30" />
              )}
              
              {/* Hover effect for inactive tabs */}
              {!isActive && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/10 to-[#00BFFF]/10" />
                </div>
              )}
              
              <span className="relative z-10 text-2xl transform group-hover:scale-110 transition-transform duration-300">
                {tab.icon}
              </span>
              <span className="relative z-10">{tab.label}</span>
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 rounded-t-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Error Display */}
      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 mx-auto max-w-2xl bg-red-500/10 border border-red-500/30 rounded-2xl p-5 backdrop-blur-sm"
        >
          <div className="flex items-start gap-3 text-red-400">
            <span className="text-2xl">⚠️</span>
            <div className="flex-1">
              <span className="font-bold text-[16px] block mb-1">Lỗi:</span>
              <span className="text-sm text-red-300">{error}</span>
            </div>
          </div>
          <button
            onClick={() => setError(null)}
            className="mt-4 px-5 py-2 bg-red-500/20 hover:bg-red-500/30 text-white text-sm 
              rounded-xl transition-all duration-300 hover:scale-105 font-medium"
          >
            Đóng thông báo
          </button>
        </motion.div>
      )}

      {/* Content Area */}
      <div className="mt-16 min-h-[400px] relative">
        <AnimatePresence mode="wait" initial={false}>
          {/* Certificates Tab */}
          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="portfolio-showcase flex flex-wrap gap-8 justify-center w-full relative z-10"
            >
              {certificates && Array.isArray(certificates) && certificates.length > 0 ? (
                certificates.map((certificate, index) => {
                  if (!certificate) return null;
                  return (
                    <CertificateCard
                      key={`certificate-${certificate?.name || index}-${index}`}
                      index={index}
                      {...certificate}
                    />
                  );
                })
              ) : (
                <div className="text-center py-16 w-full">
                  <div className="text-6xl mb-4">📜</div>
                  <p className="text-secondary text-lg">Không có chứng chỉ nào.</p>
                  <p className="text-secondary/70 text-sm mt-2">
                    {!certificates ? "Data không tồn tại" : `Đã load ${certificates.length || 0} chứng chỉ`}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Blog Tab */}
          {activeTab === "blog" && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="project-cards w-full relative z-10"
            >
              {blogs && Array.isArray(blogs) && blogs.length > 0 ? (
                <div className="flex flex-wrap gap-8 justify-center">
                  {blogs.map((post, index) => {
                    if (!post) return null;
                    return (
                      <BlogCard 
                        key={post.id || `blog-${post?.title || index}-${index}`} 
                        index={index} 
                        post={post} 
                        onOpen={handleOpen} 
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-16 w-full">
                  <div className="text-6xl mb-4">📝</div>
                  <p className="text-secondary text-lg">Không có bài blog nào.</p>
                  <p className="text-secondary/70 text-sm mt-2">
                    {!blogs ? "Data không tồn tại" : `Đã load ${blogs.length || 0} bài blog`}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === "tech" && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="tech-cards flex flex-row flex-wrap justify-center gap-6 sm:gap-8 w-full relative z-10"
            >
              {technologies && Array.isArray(technologies) && technologies.length > 0 ? (
                technologies.map((technology, techIndex) => {
                  if (!technology) return null;
                  return (
                    <motion.div
                      key={technology.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05, duration: 0.5 }}
                    >
                      <Tilt
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        scale={1.1}
                        transitionSpeed={400}
                        glareEnable
                        glareMaxOpacity={0.4}
                        glareColor="#915EFF"
                        glareBorderRadius="32px"
                        className="w-36 h-44 sm:w-44 sm:h-52"
                      >
                        <div className="group relative w-full h-full rounded-[32px] 
                          bg-gradient-to-br from-[#0e0f12] to-[#1a1b20]
                          border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] 
                          hover:shadow-[0_20px_50px_rgba(145,94,255,0.5)] 
                          hover:border-[#915EFF]/50 
                          transition-all duration-700 ease-out 
                          flex flex-col items-center justify-center gap-4 
                          hover:-translate-y-3 overflow-hidden">
                          
                          {/* Background glow */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                            bg-gradient-to-br from-[#915EFF]/15 via-[#00BFFF]/10 to-transparent 
                            transition-opacity duration-700" />
                          
                          {/* Outer glow */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-40 
                            bg-gradient-to-tr from-[#915EFF] to-[#00BFFF] blur-2xl 
                            transition-opacity duration-700" />
                          
                          {/* Icon container */}
                          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl 
                            bg-gradient-to-br from-white/[0.08] to-transparent 
                            border border-white/10 group-hover:border-[#915EFF]/50 
                            flex items-center justify-center shadow-inner 
                            transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                            <img
                              src={technology.icon}
                              alt={technology.name}
                              className="w-14 h-14 sm:w-16 sm:h-16 object-contain 
                                drop-shadow-[0_2px_12px_rgba(145,94,255,0.4)] 
                                group-hover:drop-shadow-[0_6px_20px_rgba(145,94,255,0.7)] 
                                transition-all duration-700"
                            />
                          </div>
                          
                          {/* Tech name */}
                          <p className="relative z-10 text-center text-[13px] sm:text-[15px] 
                            font-bold text-white/90 group-hover:text-[#CBB6FF] 
                            tracking-wide transition-colors duration-500 px-2">
                            {technology.name}
                          </p>

                          {/* Bottom accent line */}
                          <div className="absolute bottom-0 left-0 right-0 h-1 
                            bg-gradient-to-r from-transparent via-[#915EFF] to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </Tilt>
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-center py-16 w-full">
                  <div className="text-6xl mb-4">⚙️</div>
                  <p className="text-secondary text-lg">Không có công nghệ nào.</p>
                  <p className="text-secondary/70 text-sm mt-2">
                    {!technologies ? "Data không tồn tại" : `Đã load ${technologies.length || 0} công nghệ`}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Blog Modal */}
      <Modal isOpen={!!openPost} onClose={handleClose}>
        {openPost && (
          <div className="relative">
            <div className='flex items-center justify-between mb-5 pb-4 border-b border-white/10'>
              <span className='px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider
                bg-gradient-to-r from-[#915EFF] to-[#7c3aed] text-white shadow-lg'>
                {openPost.category}
              </span>
              <span className='text-[12px] text-secondary/70 font-medium'>
                {openPost.date} • {openPost.readTime}
              </span>
            </div>

            <h2 className='text-white text-[32px] font-bold leading-tight mb-4
              bg-gradient-to-r from-white to-white/90 bg-clip-text'>
              {openPost.title}
            </h2>

            <div className='text-secondary/90 text-[16px] leading-[28px] mb-5 p-4 rounded-xl 
              bg-gradient-to-r from-[#915EFF]/10 to-transparent border-l-4 border-[#915EFF]'>
              {openPost.description}
            </div>

            <div className='flex flex-wrap gap-2 mb-8 pb-6 border-b border-white/10'>
              {openPost.tags.map((t) => (
                <span 
                  key={`${openPost.id}-${t}`} 
                  className='px-3 py-1.5 rounded-lg text-[12px] font-medium
                    bg-white/5 text-secondary/80 border border-white/10
                    hover:bg-[#915EFF]/20 hover:text-[#CBB6FF] hover:border-[#915EFF]/30
                    transition-all duration-300 cursor-default'
                >
                  #{t}
                </span>
              ))}
            </div>

            <div className='space-y-2'>
              {(openPost.content || []).map((block, i) => renderContentBlock(block, i))}
            </div>

            {openPost.link && (
              <div className='mt-8 pt-6 border-t border-white/10'>
                <a
                  href={openPost.link}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-3 px-6 py-3 rounded-xl
                    bg-gradient-to-r from-[#915EFF] to-[#7c3aed] text-white font-medium
                    hover:shadow-lg hover:shadow-[#915EFF]/50 hover:scale-105
                    transition-all duration-300 group'
                >
                  <span>Đọc thêm nguồn tham khảo</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>
      
      {/* StarField background */}
      <StarField />
    </>
  );
};

export default SectionWrapper(PortfolioShowcase, "portfolio");