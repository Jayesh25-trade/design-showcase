import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  images: { src: string; caption: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}

export const Lightbox = ({ images, index, onClose, onNavigate }: LightboxProps) => {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={onClose}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute top-5 right-5 md:top-8 md:right-8 text-bone/80 hover:text-bone text-3xl font-light"
          >
            ×
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + images.length) % images.length); }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-bone/80 hover:text-bone text-3xl px-3 py-2"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % images.length); }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-bone/80 hover:text-bone text-3xl px-3 py-2"
          >
            ›
          </button>
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            src={images[index].src}
            alt={images[index].caption}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 inset-x-0 text-center text-bone/80 text-sm tracking-wide">
            {images[index].caption} <span className="opacity-50">· {index + 1} / {images.length}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const useLightbox = () => {
  const [index, setIndex] = useState<number | null>(null);
  return {
    index,
    open: (i: number) => setIndex(i),
    close: () => setIndex(null),
    navigate: (i: number) => setIndex(i),
  };
};
