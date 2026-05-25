"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function LoveLetter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  return (
    <section className="relative py-24 sm:py-32 px-4" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/10 to-black" />

      <motion.div
        className="relative z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              A Letter From My Heart
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="glass-card rounded-3xl p-8 sm:p-10 md:p-14 glow-pink relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />

          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <button
              onClick={() => setEnvelopeOpen(!envelopeOpen)}
              className="text-5xl sm:text-6xl cursor-pointer hover:scale-110 transition-transform active:scale-95"
              aria-label="Toggle envelope"
            >
              {envelopeOpen ? "💖" : "💌"}
            </button>
          </motion.div>

          <motion.h3
            className="text-2xl sm:text-3xl text-center mb-8"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              My Dearest Pearl,
            </span>
          </motion.h3>

          <motion.div
            className="space-y-5 text-base sm:text-lg leading-relaxed text-pink-100/80"
            initial={{ opacity: 0 }}
            animate={isInView && envelopeOpen ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p>
              Every single day with you feels like a beautiful melody that I
              never want to stop hearing. Your smile lights up even my darkest
              days, and your laugh is my favorite sound in the entire world.
            </p>

            <p>
              On this special day, I want you to know just how much you mean to
              me. You are kind, strong, brilliant, and so incredibly beautiful —
              inside and out. You inspire me to be a better person every single
              day.
            </p>

            <p>
              I hope this year brings you everything you&apos;ve been dreaming
              of and more. You deserve all the happiness, love, and success this
              world has to offer.
            </p>

            <p>Thank you for being you. Thank you for being mine.</p>

            <motion.p
              className="text-pink-300/50 text-xs pt-2 italic"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2 }}
            >
              {!envelopeOpen && "💡 Tap the envelope to open"}
            </motion.p>
          </motion.div>

          {!envelopeOpen && (
            <motion.div
              className="space-y-5 text-base sm:text-lg leading-relaxed text-pink-100/80"
              initial={{ opacity: 1 }}
              animate={isInView ? { opacity: 0.4 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p className="blur-sm select-none">
                Every single day with you feels like a beautiful melody...
              </p>
              <p className="blur-sm select-none">
                On this special day, I want you to know just how much you
                mean...
              </p>
              <p className="blur-sm select-none">
                I hope this year brings you everything...
              </p>
            </motion.div>
          )}

          <motion.div
            className="mt-10 pt-8 border-t border-pink-500/15 text-center"
            initial={{ opacity: 0 }}
            animate={isInView && envelopeOpen ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <p
              className="text-xl sm:text-2xl text-pink-300"
              style={{ fontFamily: "var(--font-dancing), cursive" }}
            >
              Happy Birthday, my love
            </p>
            <p className="mt-2 text-pink-400/40 text-xs sm:text-sm">
              With all my heart, forever and always
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
