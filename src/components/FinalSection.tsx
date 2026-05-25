"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FinalSection() {
  const confettiRef = useRef<boolean>(false);

  useEffect(() => {
    async function loadConfetti() {
      if (confettiRef.current) return;
      confettiRef.current = true;

      try {
        const confetti = (await import("canvas-confetti")).default;

        const fire = () => {
          confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 },
            colors: ["#ec4899", "#a855f7", "#fbbf24", "#f472b6", "#6366f1"],
            ticks: 60,
          });
          confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.7 },
            colors: ["#ec4899", "#a855f7", "#fbbf24", "#f472b6", "#6366f1"],
            ticks: 60,
          });
        };

        const interval = setInterval(fire, 300);
        setTimeout(() => clearInterval(interval), 4000);
      } catch {}
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadConfetti();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById("final-section");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="final-section" className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/15 to-pink-950/30" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <motion.div
            className="text-6xl sm:text-8xl block mb-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🎂
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight"
          style={{ fontFamily: "var(--font-dancing), cursive" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-amber-200 via-pink-300 to-purple-400 bg-clip-text text-transparent">
            Happy Birthday, Pearl
          </span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-pink-200/70 max-w-lg mx-auto leading-relaxed mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          You are my sunshine, my happiness, and my home. I love you more than
          words could ever express. Here&apos;s to you, and to us, and to all
          the beautiful years ahead.
        </motion.p>

        <motion.div
          className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 sm:px-8 sm:py-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-pink-400 animate-heart-beat text-lg">♥</span>
          <span className="text-pink-300/70 text-xs sm:text-sm tracking-wide">
            Made with infinite love, just for you
          </span>
          <span className="text-pink-400 animate-heart-beat text-lg">♥</span>
        </motion.div>
      </div>
    </section>
  );
}
