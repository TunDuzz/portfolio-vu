import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FeedbackViewer = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Load feedback từ localStorage
    const loadFeedback = () => {
      const stored = JSON.parse(localStorage.getItem('portfolioFeedback') || '[]');
      setFeedbacks(stored.reverse()); // Mới nhất lên đầu
    };
    
    loadFeedback();
    
    // Listen for storage changes
    window.addEventListener('storage', loadFeedback);
    return () => window.removeEventListener('storage', loadFeedback);
  }, []);

  const filteredFeedbacks = filter === 'all' 
    ? feedbacks 
    : feedbacks.filter(f => f.type === filter);

  const typeIcons = {
    general: '💡',
    bug: '🐛',
    design: '🎨',
    content: '📝',
    feature: '🚀'
  };

  const typeLabels = {
    general: 'Chung',
    bug: 'Báo lỗi',
    design: 'Thiết kế',
    content: 'Nội dung',
    feature: 'Đề xuất'
  };

  const clearAllFeedback = () => {
    if (window.confirm('Bạn có chắc muốn xóa tất cả feedback?')) {
      localStorage.removeItem('portfolioFeedback');
      setFeedbacks([]);
    }
  };

  const exportFeedback = () => {
    const dataStr = JSON.stringify(feedbacks, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `feedback-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-primary p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#915EFF] to-[#7c3aed] bg-clip-text text-transparent mb-2">
            📝 Feedback Dashboard
          </h1>
          <p className="text-secondary">
            Tất cả feedback từ người dùng ({feedbacks.length} feedback)
          </p>
        </motion.div>

        {/* Filters & Actions */}
        <div className="flex flex-wrap gap-4 mb-6 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === 'all'
                  ? 'bg-[#915EFF] text-white'
                  : 'bg-tertiary text-secondary hover:bg-tertiary/80'
              }`}
            >
              Tất cả ({feedbacks.length})
            </button>
            {Object.entries(typeLabels).map(([type, label]) => {
              const count = feedbacks.filter(f => f.type === type).length;
              return (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === type
                      ? 'bg-[#915EFF] text-white'
                      : 'bg-tertiary text-secondary hover:bg-tertiary/80'
                  }`}
                >
                  {typeIcons[type]} {label} ({count})
                </button>
              );
            })}
          </div>

          <div className="flex gap-2">
            <button
              onClick={exportFeedback}
              disabled={feedbacks.length === 0}
              className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium
                hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed
                transition-all"
            >
              📥 Export JSON
            </button>
            <button
              onClick={clearAllFeedback}
              disabled={feedbacks.length === 0}
              className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium
                hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed
                transition-all"
            >
              🗑️ Xóa tất cả
            </button>
          </div>
        </div>

        {/* Feedback List */}
        <div className="space-y-4">
          {filteredFeedbacks.length === 0 ? (
            <div className="text-center py-12 bg-tertiary rounded-2xl">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-white text-lg">Chưa có feedback nào</p>
              <p className="text-secondary text-sm mt-2">
                Sử dụng nút 💬 ở góc phải dưới để gửi feedback
              </p>
            </div>
          ) : (
            filteredFeedbacks.map((fb, index) => (
              <motion.div
                key={fb.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-tertiary to-black-200/50 rounded-2xl p-6
                  border border-white/10 hover:border-[#915EFF]/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{typeIcons[fb.type]}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#915EFF]/20 text-[#CBB6FF] text-sm font-medium">
                          {typeLabels[fb.type]}
                        </span>
                        {fb.page && (
                          <span className="px-3 py-1 rounded-full bg-white/5 text-secondary text-sm">
                            {fb.page}
                          </span>
                        )}
                      </div>
                      <p className="text-secondary text-xs mt-1">
                        {new Date(fb.timestamp).toLocaleString('vi-VN')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black-100 rounded-xl p-4">
                  <p className="text-white leading-relaxed whitespace-pre-wrap">
                    {fb.message}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackViewer;

