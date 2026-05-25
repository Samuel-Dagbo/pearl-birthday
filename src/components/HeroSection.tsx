"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const starsLayer1 = Array.from({ length: 50 }, (_, i) => ({
  id: `s1-${i}`,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 2,
}));

const starsLayer2 = Array.from({ length: 30 }, (_, i) => ({
  id: `s2-${i}`,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 1.5 + 0.3,
  delay: Math.random() * 4,
  duration: Math.random() * 4 + 3,
}));

const sparkles = Array.from({ length: 15 }, (_, i) => ({
  id: `sp-${i}`,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 4 + 3,
  delay: Math.random() * 6,
  duration: Math.random() * 2.5 + 2,
}));

function Star({ left, top, size, delay, duration }: {
  left: number; top: number; size: number; delay: number; duration: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none rounded-full bg-white"
      style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.7, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function Sparkle({ left, top, size, delay, duration }: {
  left: number; top: number; size: number; delay: number; duration: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${left}%`, top: `${top}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#67e8f9">
        <path d="M12 0l2.5 7.5L22 9l-6 5.5L17.5 22 12 17.5 6.5 22 8 14.5 2 9l7.5-1.5z" />
      </svg>
    </motion.div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    function handleMouse(e: MouseEvent) {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950 via-teal-950 to-[#021a24]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-teal-500/5 to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.12] transition-all duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(34,211,238,0.3), transparent 60%)`,
        }}
      />

      <div className="absolute inset-0 opacity-15">
        <div
          className="w-full h-full animate-gradient-shift"
          style={{
            background: "linear-gradient(135deg, transparent 0%, rgba(6,182,212,0.08) 25%, transparent 50%, rgba(103,232,249,0.08) 75%, transparent 100%)",
            backgroundSize: "400% 400%",
          }}
        />
      </div>

      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-aurora"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-aurora"
        style={{ animationDelay: "-4s", transform: "translate(50%, 50%)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-cyan-400/3 rounded-full blur-3xl animate-soft-float"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {starsLayer1.map((s) => <Star key={s.id} {...s} />)}
      {starsLayer2.map((s) => <Star key={s.id} {...s} />)}
      {sparkles.map((s) => <Sparkle key={s.id} {...s} />)}

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
          <span className="px-5 py-2.5 rounded-full glass-strong text-cyan-300 text-xs sm:text-sm tracking-[0.2em] uppercase inline-flex items-center gap-2 border-cyan-500/20 shadow-lg shadow-cyan-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-heart-beat" />
            June 8th
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-heart-beat" />
          </span>
        </motion.div>

        <motion.div
          className="relative mb-4 sm:mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `translate(${(mousePos.x - 50) * 0.02}px, ${(mousePos.y - 50) * 0.02}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-cyan-500/8 via-teal-500/5 to-cyan-300/5 blur-3xl animate-soft-float" />
          </div>

          <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <motion.span
              className="text-gradient block mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Happy Birthday
            </motion.span>
            <motion.span
              className="block mt-1 sm:mt-2"
              style={{
                fontFamily: "var(--font-dancing), cursive",
                fontSize: "1.4em",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
            >
              <span className="text-gradient-name drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                Pearl
              </span>
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-cyan-200/60 max-w-xl mx-auto leading-relaxed px-4 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          To the most beautiful soul I know — today is all about celebrating
          you and the incredible light you bring into this world.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-3 text-cyan-300/30 text-xs sm:text-sm"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Scroll to explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
