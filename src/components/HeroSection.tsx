"use client";

import { motion } from "framer-motion";

const sparkles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 3,
  duration: Math.random() * 2 + 2,
}));

const floatingHearts = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: Math.random() * 16 + 8,
  duration: Math.random() * 12 + 10,
  delay: Math.random() * 8,
}));

function Sparkle({
  left,
  top,
  size,
  delay,
  duration,
}: {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${left}%`, top: `${top}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#fbbf24">
        <path d="M12 0l2.5 7.5L22 9l-6 5.5L17.5 22 12 17.5 6.5 22 8 14.5 2 9l7.5-1.5z" />
      </svg>
    </motion.div>
  );
}

function FloatingHeart({
  left,
  size,
  duration,
  delay,
}: {
  left: number;
  size: number;
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: `${left}%`, fontSize: size }}
      initial={{ y: "110vh", opacity: 0, rotate: 0 }}
      animate={{
        y: "-10vh",
        opacity: [0, 0.5, 0.5, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <span className="text-pink-500/20">♥</span>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-950 via-purple-950/80 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/15 via-purple-500/5 to-transparent" />

      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full animate-gradient-shift"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, rgba(236,72,153,0.1) 25%, transparent 50%, rgba(168,85,247,0.1) 75%, transparent 100%)",
            backgroundSize: "400% 400%",
          }}
        />
      </div>

      {sparkles.map((s) => (
        <Sparkle key={s.id} {...s} />
      ))}

      {floatingHearts.map((h) => (
        <FloatingHeart key={h.id} {...h} />
      ))}

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mb-6 sm:mb-8 inline-block"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="px-5 py-2.5 rounded-full glass-strong text-pink-300 text-xs sm:text-sm tracking-[0.2em] uppercase inline-flex items-center gap-2 border-pink-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-heart-beat" />
            June 8th
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-heart-beat" />
          </span>
        </motion.div>

        <motion.div
          className="relative mb-4 sm:mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-pink-500/10 blur-3xl" />
          </div>

          <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-gradient block mb-2">Happy Birthday</span>
            <span
              className="block mt-1 sm:mt-2"
              style={{
                fontFamily: "var(--font-dancing), cursive",
                fontSize: "1.4em",
              }}
            >
              <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                Pearl
              </span>
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-pink-200/70 max-w-xl mx-auto leading-relaxed px-4 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          To the most beautiful soul I know — today is all about celebrating
          you and the incredible light you bring into this world.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-3 text-pink-300/40 text-xs sm:text-sm"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Scroll to explore</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
