import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState({
    type: 'general',
    message: '',
    page: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Lưu feedback vào localStorage
    const existingFeedback = JSON.parse(localStorage.getItem('portfolioFeedback') || '[]');
    const newFeedback = {
      ...feedback,
      timestamp: new Date().toISOString(),
      id: Date.now(),
    };
    existingFeedback.push(newFeedback);
    localStorage.setItem('portfolioFeedback', JSON.stringify(existingFeedback));
    
    // Log ra console để dễ theo dõi
    console.log('📝 Feedback mới:', newFeedback);
    console.log('📋 Tất cả feedback:', existingFeedback);
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFeedback({ type: 'general', message: '', page: '' });
    }, 2000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full 
          bg-gradient-to-r from-[#915EFF] to-[#7c3aed] 
          shadow-lg shadow-[#915EFF]/50 
          flex items-center justify-center
          hover:shadow-2xl hover:shadow-[#915EFF]/70
          transition-all duration-300
          group"
        title="Gửi feedback"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="message"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              className="text-white text-2xl"
            >
              💬
            </motion.div>
          ) : (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              className="text-white text-2xl"
            >
              ✕
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Feedback Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[90%] max-w-md"
          >
            <div className="bg-gradient-to-br from-tertiary via-tertiary to-black-200/50 
              rounded-2xl shadow-2xl border border-[#915EFF]/30 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#915EFF] to-[#7c3aed] p-4">
                <h3 className="text-white text-lg font-bold flex items-center gap-2">
                  <span>💭</span>
                  Gửi Feedback
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  Ý kiến của bạn rất quan trọng với tôi!
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="text-6xl mb-4">✅</div>
                    <p className="text-white text-lg font-semibold">
                      Cảm ơn bạn!
                    </p>
                    <p className="text-secondary text-sm mt-2">
                      Feedback đã được ghi nhận
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Type Selection */}
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        Loại feedback:
                      </label>
                      <select
                        value={feedback.type}
                        onChange={(e) => setFeedback({ ...feedback, type: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg bg-black-100 text-white border border-white/10
                          focus:border-[#915EFF] focus:outline-none transition-colors"
                      >
                        <option value="general">💡 Chung</option>
                        <option value="bug">🐛 Báo lỗi</option>
                        <option value="design">🎨 Thiết kế</option>
                        <option value="content">📝 Nội dung</option>
                        <option value="feature">🚀 Đề xuất tính năng</option>
                      </select>
                    </div>

                    {/* Page */}
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        Trang/Section:
                      </label>
                      <input
                        type="text"
                        value={feedback.page}
                        onChange={(e) => setFeedback({ ...feedback, page: e.target.value })}
                        placeholder="VD: Hero, About, Portfolio..."
                        className="w-full px-4 py-2 rounded-lg bg-black-100 text-white border border-white/10
                          focus:border-[#915EFF] focus:outline-none transition-colors
                          placeholder:text-secondary/50"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        Nội dung feedback: <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        value={feedback.message}
                        onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                        placeholder="Hãy chia sẻ suy nghĩ của bạn..."
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-black-100 text-white border border-white/10
                          focus:border-[#915EFF] focus:outline-none transition-colors resize-none
                          placeholder:text-secondary/50"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-[#915EFF] to-[#7c3aed]
                        text-white font-semibold
                        hover:shadow-lg hover:shadow-[#915EFF]/50
                        active:scale-95
                        transition-all duration-300"
                    >
                      Gửi Feedback
                    </button>
                  </>
                )}
              </form>

              {/* Footer Info */}
              <div className="px-6 pb-4 text-center space-y-2">
                <p className="text-secondary text-xs">
                  Feedback được lưu trong Console & localStorage
                </p>
                <a
                  href="/feedback"
                  className="inline-block text-[#915EFF] text-xs font-semibold hover:text-[#CBB6FF] transition-colors"
                >
                  📊 Xem tất cả feedback →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeedbackWidget;

