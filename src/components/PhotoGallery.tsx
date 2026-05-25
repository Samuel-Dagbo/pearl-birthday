"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Photo {
  secure_url: string;
  public_id: string;
  width: number;
  height: number;
}

export default function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch("/api/photos");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPhotos(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  const closeLightbox = useCallback(() => setSelectedPhoto(null), []);

  const nextPhoto = useCallback(() => {
    if (!selectedPhoto || photos.length === 0) return;
    const idx = photos.findIndex((p) => p.public_id === selectedPhoto.public_id);
    setSelectedPhoto(photos[(idx + 1) % photos.length]);
  }, [selectedPhoto, photos]);

  const prevPhoto = useCallback(() => {
    if (!selectedPhoto || photos.length === 0) return;
    const idx = photos.findIndex((p) => p.public_id === selectedPhoto.public_id);
    setSelectedPhoto(photos[(idx - 1 + photos.length) % photos.length]);
  }, [selectedPhoto, photos]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeLightbox, nextPhoto, prevPhoto]);

  if (loading) {
    return (
      <section className="relative py-24 sm:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="columns-2 sm:columns-3 md:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden" style={{ height: `${((i % 3) + 1) * 140}px` }}>
                <div className="w-full h-full animate-pulse bg-white/[0.02] rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || photos.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a] via-blue-950/5 to-[#050d1a]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
              Beautiful Memories
            </span>
          </h2>
          <p className="text-blue-200/50 text-sm sm:text-base">
            Glimpses of the moments we&apos;ve shared
          </p>
        </motion.div>

        <div className="columns-2 sm:columns-3 md:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.public_id}
              className="break-inside-avoid cursor-pointer group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/[0.04] group-hover:ring-blue-400/25 transition-all duration-500 shadow-lg shadow-black/30 group-hover:shadow-blue-500/10 group-hover:shadow-xl">
                <Image
                  src={photo.secure_url}
                  alt={`Memory ${index + 1}`}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <span className="text-blue-200/80 text-sm font-medium inline-flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050d1a]/95 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.button
              className="absolute top-4 right-4 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-blue-300/60 hover:text-white z-20 shadow-lg"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {photos.length > 1 && (
              <>
                <motion.button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-blue-300/60 hover:text-white z-20 shadow-lg"
                  onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <motion.button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-blue-300/60 hover:text-white z-20 shadow-lg"
                  onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </>
            )}

            <motion.div
              className="max-w-[90vw] max-h-[90vh] relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/[0.06] shadow-2xl shadow-blue-500/10">
                <Image
                  src={selectedPhoto.secure_url}
                  alt="Enlarged memory"
                  width={selectedPhoto.width}
                  height={selectedPhoto.height}
                  className="max-w-full max-h-[85vh] w-auto h-auto"
                  sizes="90vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
