import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../constants";
import { styles } from "../styles";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return (
      <div className='min-h-screen bg-primary text-white flex items-center justify-center px-6'>
        <div className='text-center'>
          <h1 className={`${styles.sectionHeadText}`}>Không tìm thấy bài viết</h1>
          <Link to='/' className='mt-6 inline-block text-secondary underline'>← Quay lại trang chủ</Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-primary text-white px-6 py-10'>
      <div className='max-w-3xl mx-auto'>
        <Link to='/' className='text-secondary underline'>← Quay lại</Link>
        <div className='mt-4 text-[12px] text-secondary flex items-center justify-between'>
          <span className='px-2 py-1 rounded-md bg-black-100/40'>{post.category}</span>
          <span>{post.date} • {post.readTime}</span>
        </div>
        <h1 className='mt-4 text-[32px] font-bold leading-[40px]'>{post.title}</h1>
        <p className='mt-4 text-secondary text-[16px] leading-[28px]'>
          {post.description}
        </p>

        <div className='mt-6 flex flex-wrap gap-2 text-[12px] text-secondary'>
          {post.tags.map((t) => (
            <span key={`${post.id}-${t}`} className='px-2 py-[2px] rounded-md bg-black-100/40'>#{t}</span>
          ))}
        </div>

        {/* Nội dung demo; có thể thay bằng markdown hoặc CMS sau này */}
        <div className='mt-8 prose prose-invert max-w-none'>
          <p>
            Đây là nội dung minh họa cho bài viết. Bạn có thể mở rộng bằng cách tích hợp
            Markdown hoặc lấy dữ liệu từ CMS. Mục tiêu hiện tại là hiển thị trang chi tiết
            với bố cục gọn gàng và dễ đọc.
          </p>
          <ul>
            <li>Phần mở đầu giới thiệu vấn đề.</li>
            <li>Phần nội dung chính với ví dụ.</li>
            <li>Kết luận và tài liệu tham khảo.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;


