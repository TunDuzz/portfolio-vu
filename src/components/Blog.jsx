import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

import { styles } from "../styles";
import { blogs } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Modal from "./Modal";

const BlogCard = ({ index, post, onOpen }) => {
  const { category, title, description, date, readTime, tags } = post;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={() => onOpen(post)}
      className="relative bg-gradient-to-br from-tertiary to-black-200/50 p-6 rounded-3xl sm:w-[360px] w-full 
        cursor-pointer overflow-hidden group 
        border border-white/5 hover:border-[#915EFF]/60
        shadow-xl hover:shadow-[0_8px_40px_-12px_#915EFF]
        transition-all duration-500 ease-out backdrop-blur-sm"
    >
      {/* Gradient overlay animation */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-[#915EFF] via-[#7c3aed] to-[#00BFFF] transition-opacity duration-500" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
      </div>

      <div className="relative z-10">
        {/* Header với category và date */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider
            bg-gradient-to-r from-[#915EFF] to-[#7c3aed] text-white shadow-lg shadow-[#915EFF]/30">
            {category}
          </span>
          <span className="text-[11px] text-secondary/70 font-medium">{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-[22px] leading-tight mb-3
          group-hover:text-transparent group-hover:bg-clip-text 
          group-hover:bg-gradient-to-r group-hover:from-[#CBB6FF] group-hover:to-[#915EFF]
          transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-secondary/90 text-[14px] leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

        {/* Footer với tags và readTime */}
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

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#915EFF]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

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
            {/* Code block accent */}
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

const Blog = () => {
  const [openPost, setOpenPost] = useState(null);
  const handleOpen = (post) => setOpenPost(post);
  const handleClose = () => setOpenPost(null);
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#915EFF]`}>
          Chia sẻ kiến thức lập trình
        </p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white via-white to-white/70 bg-clip-text`}>
          Blog.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary/90 text-[17px] max-w-3xl leading-[32px]'
        >
          Những bài viết ngắn gọn, thực tế về Java, JavaScript, React và các chủ đề backend/frontend mình quan tâm.
        </motion.p>
      </div>

      <div className='mt-16 flex flex-wrap gap-8 justify-center sm:justify-start'>
        {blogs.map((post, index) => (
          <BlogCard key={post.id} index={index} post={post} onOpen={handleOpen} />
        ))}
      </div>

      <Modal isOpen={!!openPost} onClose={handleClose}>
        {openPost && (
          <div className="relative">
            {/* Header Section */}
            <div className='flex items-center justify-between mb-5 pb-4 border-b border-white/10'>
              <span className='px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider
                bg-gradient-to-r from-[#915EFF] to-[#7c3aed] text-white shadow-lg'>
                {openPost.category}
              </span>
              <span className='text-[12px] text-secondary/70 font-medium'>
                {openPost.date} • {openPost.readTime}
              </span>
            </div>

            {/* Title */}
            <h2 className='text-white text-[32px] font-bold leading-tight mb-4
              bg-gradient-to-r from-white to-white/90 bg-clip-text'>
              {openPost.title}
            </h2>

            {/* Description */}
            <div className='text-secondary/90 text-[16px] leading-[28px] mb-5 p-4 rounded-xl 
              bg-gradient-to-r from-[#915EFF]/10 to-transparent border-l-4 border-[#915EFF]'>
              {openPost.description}
            </div>

            {/* Tags */}
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

            {/* Content */}
            <div className='space-y-2'>
              {(openPost.content || []).map((block, i) => renderContentBlock(block, i))}
            </div>

            {/* Reference Link */}
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
    </>
  );
};

export default SectionWrapper(Blog, "blog");