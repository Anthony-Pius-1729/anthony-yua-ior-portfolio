import React, { useState, useEffect, useRef } from "react";
import { Project } from "../types";

interface GalleryModalProps {
  project: Project | null;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setActiveImageIndex(0);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  const images = [project.image, ...(project.gallery || [])];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl transition-opacity"
        onClick={onClose}
      ></div>

      {/* Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#0f172a] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-5 border-b border-white/5 bg-slate-900/50 backdrop-blur-md">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              {project.title}
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 text-[10px] uppercase font-bold tracking-widest">
                Gallery
              </span>
            </h3>
            <p className="text-slate-400 text-xs">
              Viewing {activeImageIndex + 1} of {images.length} visuals
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:rotate-90"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Main Display Area - Now Always Scrollable */}
        <div className="flex-grow overflow-y-auto overflow-x-hidden custom-scrollbar relative bg-black/20 p-4 md:p-8">
          <div className="min-h-full flex items-center justify-center">
            <img
              ref={imgRef}
              src={images[activeImageIndex]}
              alt={`${project.title} view ${activeImageIndex + 1}`}
              className="max-w-full h-auto rounded-xl shadow-2xl transition-all duration-500 animate-in zoom-in-95"
            />
          </div>

          {/* Navigation Arrows */}
          <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none max-w-6xl mx-auto">
            <button
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
              className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-indigo-600 transition-all border border-white/10 shadow-xl backdrop-blur-md"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                )
              }
              className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-indigo-600 transition-all border border-white/10 shadow-xl backdrop-blur-md"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="px-8 py-6 bg-slate-950/50 border-t border-white/5 backdrop-blur-sm">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all snap-start ${
                  activeImageIndex === idx
                    ? "border-indigo-500 scale-110 shadow-lg shadow-indigo-500/20"
                    : "border-transparent opacity-40 hover:opacity-80"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.8);
        }
      `}</style>
    </div>
  );
};

export default GalleryModal;
