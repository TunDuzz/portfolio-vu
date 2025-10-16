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
      variants={fadeIn("up", "spring", index * 0.25, 0.75)}
      whileHover={{ scale: 1.03, y: -4 }} // 🌟 scale và nâng nhẹ card lên khi hover
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onClick={() => onOpen(post)}
      className="relative bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full 
        cursor-pointer overflow-hidden group 
        border border-transparent hover:border-[#915EFF]/40 
        hover:shadow-[0_0_25px_-8px_#915EFF] 
        transition-all duration-300 ease-out"
    >
      {/* Hiệu ứng ánh sáng gradient nhẹ khi hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#915EFF] to-[#00BFFF] rounded-2xl transition-all duration-300" />

      <div className="relative z-10">
        <div className="flex items-center justify-between text-[12px] text-secondary">
          <span className="px-2 py-1 rounded-md bg-black-100/40">{category}</span>
          <span>{date}</span>
        </div>

        <h3 className="mt-4 text-white font-bold text-[20px] leading-snug group-hover:text-[#915EFF] transition-colors duration-300">
          {title}
        </h3>

        <p className="mt-2 text-secondary text-[14px]">{description}</p>

        <div className="mt-4 flex items-center justify-between text-[12px] text-secondary">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${title}-${tag}`}
                className="px-2 py-[2px] rounded-md bg-black-100/40"
              >
                #{tag}
              </span>
            ))}
          </div>
          <span>{readTime}</span>
        </div>
      </div>
    </motion.div>
  );
};

const renderContentBlock = (block, index) => {
  switch (block?.type) {
    case "heading":
      return (
        <h3
          key={`heading-${index}`}
          className="text-white text-[20px] font-semibold leading-[30px]"
        >
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p
          key={`paragraph-${index}`}
          className="text-secondary text-[15px] leading-[28px]"
        >
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul
          key={`list-${index}`}
          className="list-disc list-inside text-secondary text-[15px] leading-[26px] space-y-2 pl-4"
        >
          {(block.items || []).map((item, itemIndex) => (
            <li key={`list-${index}-${itemIndex}`}>{item}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre
          key={`code-${index}`}
          className="bg-black-100/40 border border-white/10 rounded-xl p-4 overflow-auto text-[13px] leading-[22px] text-secondary"
        >
          <code>{block.code}</code>
        </pre>
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
        <p className={`${styles.sectionSubText}`}>Chia sẻ kiến thức lập trình</p>
        <h2 className={`${styles.sectionHeadText}`}>Blog.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Những bài viết ngắn gọn, thực tế về Java, JavaScript, React và các chủ đề backend/frontend mình quan tâm.
        </motion.p>
      </div>

      <div className='mt-12 flex flex-wrap gap-7'>
        {blogs.map((post, index) => (
          <BlogCard key={post.id} index={index} post={post} onOpen={handleOpen} />
        ))}
      </div>

      <Modal isOpen={!!openPost} onClose={handleClose}>
        {openPost && (
          <div>
            <div className='flex items-center justify-between text-[12px] text-secondary'>
              <span className='px-2 py-1 rounded-md bg-black-100/40'>{openPost.category}</span>
              <span>{openPost.date} • {openPost.readTime}</span>
            </div>
            <h2 className='mt-4 text-white text-[26px] font-bold leading-tight'>{openPost.title}</h2>
            <div className='mt-4 text-secondary text-[14px] leading-[26px]'>
              {openPost.description}
            </div>
            <div className='mt-5 flex flex-wrap gap-2 text-[12px] text-secondary'>
              {openPost.tags.map((t) => (
                <span key={`${openPost.id}-${t}`} className='px-2 py-[2px] rounded-md bg-black-100/40'>#{t}</span>
              ))}
            </div>
            <div className='mt-6 space-y-4'>
              {(openPost.content || []).map((block, i) => renderContentBlock(block, i))}
            </div>
            {openPost.link && (
              <div className='mt-6'>
                <a
                  href={openPost.link}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#915EFF]/20 text-[#CBB6FF] hover:bg-[#915EFF]/30 transition-colors border border-[#915EFF]/30'
                >
                  Đọc thêm nguồn tham khảo
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


