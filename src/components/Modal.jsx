import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modal = (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-start md:items-center justify-center p-4 md:p-8 pointer-events-auto"
        style={{
          zIndex: 2147483647, // Max z-index value
          position: "fixed",
          isolation: "isolate", // Tạo context stacking riêng
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.95)'
        }}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* ✅ Nội dung modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          style={{
            zIndex: 2147483647,
            pointerEvents: "auto",
            position: "relative",
          }}
          className="w-full max-w-5xl md:max-w-6xl max-h-[92vh] overflow-y-auto 
            rounded-2xl bg-primary border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
        >
          {/* Nút đóng */}
          <button
            onClick={onClose}
            className="absolute top-4 right-5 text-white/70 hover:text-white text-2xl font-bold transition"
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className="p-6 md:p-10">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  // ✅ Render ra ngoài root DOM
  return createPortal(modal, document.body);
};

export default Modal;
