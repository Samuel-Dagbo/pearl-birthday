"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    emoji: "😊",
    title: "Your Smile",
    description:
      "It lights up every room and melts my heart every single time.",
  },
  {
    emoji: "💪",
    title: "Your Strength",
    description:
      "You face everything with grace and courage. You inspire me daily.",
  },
  {
    emoji: "❤️",
    title: "Your Kindness",
    description:
      "The way you care for others is one of the most beautiful things about you.",
  },
  {
    emoji: "😂",
    title: "Your Laugh",
    description: "My absolute favorite sound in the whole world.",
  },
  {
    emoji: "✨",
    title: "Your Heart",
    description:
      "You have the purest, most loving heart I have ever known.",
  },
  {
    emoji: "🌟",
    title: "Just Being You",
    description:
      "Every little thing about you makes me fall in love more every day.",
  },
];

export default function ReasonsSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/10 to-black" />

      <div className="relative z-10 max-w-5xl mx-auto">
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
            <span className="bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text text-transparent">
              Reasons I Love You
            </span>
          </h2>
          <p className="text-pink-200/60 text-sm sm:text-base">
            And this is just the beginning...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="glass rounded-2xl p-6 sm:p-8 hover:bg-white/[0.08] transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <span className="text-3xl sm:text-4xl block mb-4">
                {reason.emoji}
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-pink-200 mb-2">
                {reason.title}
              </h3>
              <p className="text-pink-200/60 text-sm sm:text-base leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
