"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FinalSection() {
  const confettiFired = useRef(false);

  useEffect(() => {
    async function fireConfetti() {
      if (confettiFired.current) return;
      confettiFired.current = true;

      try {
        const confetti = (await import("canvas-confetti")).default;

        const burst = () => {
          confetti({
            particleCount: 50,
            spread: 100,
            origin: { x: 0.5, y: 0.4 },
            colors: ["#06b6d4", "#22d3ee", "#67e8f9", "#ffffff", "#a5f3fc"],
            ticks: 100,
          });

          setTimeout(() => {
            confetti({
              particleCount: 30,
              angle: 60,
              spread: 70,
              origin: { x: 0, y: 0.6 },
              colors: ["#06b6d4", "#22d3ee", "#67e8f9", "#ffffff"],
              ticks: 80,
            });
            confetti({
              particleCount: 30,
              angle: 120,
              spread: 70,
              origin: { x: 1, y: 0.6 },
              colors: ["#06b6d4", "#22d3ee", "#67e8f9", "#ffffff"],
              ticks: 80,
            });
          }, 200);

          setTimeout(() => {
            confetti({
              particleCount: 80,
              spread: 120,
              origin: { x: 0.5, y: 0.3 },
              colors: ["#06b6d4", "#22d3ee", "#67e8f9", "#ffffff", "#a5f3fc"],
              ticks: 120,
            });
          }, 500);
        };

        burst();
      } catch {}
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fireConfetti();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById("final-section");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="final-section" className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[#021a24] via-cyan-950/15 to-cyan-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          <motion.div
            className="text-6xl sm:text-8xl block mb-8"
            animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
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
          <span className="text-gradient-warm drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            Happy Birthday, Pearl
          </span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-cyan-200/70 max-w-lg mx-auto leading-relaxed mb-8 sm:mb-10"
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
          className="inline-flex items-center gap-3 glass-card-strong rounded-full px-6 py-3 sm:px-8 sm:py-4 shadow-lg shadow-cyan-500/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.03 }}
        >
          <span className="text-cyan-400 animate-heart-beat text-lg">♥</span>
          <span className="text-cyan-300/70 text-xs sm:text-sm tracking-wide">
            Made with infinite love, just for you
          </span>
          <span className="text-cyan-400 animate-heart-beat text-lg">♥</span>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.span
              key={i}
              className="text-cyan-300/20 text-lg"
              animate={{ y: [0, -6, 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            >
              ✦
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
