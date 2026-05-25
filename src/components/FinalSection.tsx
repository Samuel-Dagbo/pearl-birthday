"use client";

import { motion } from "framer-motion";

export default function FinalSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/20 to-pink-950/40" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <span className="text-6xl sm:text-8xl block mb-8">🎂</span>
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
          className="text-lg sm:text-xl text-pink-200/80 max-w-xl mx-auto leading-relaxed mb-8"
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
          className="text-pink-400/40 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p>Made with infinite love, just for you ❤️</p>
        </motion.div>
      </div>
    </section>
  );
}
