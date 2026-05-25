"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    emoji: "😊",
    title: "Your Smile",
    description: "It lights up every room and melts my heart every single time.",
    gradient: "from-blue-500/15 to-transparent",
    border: "hover:border-blue-500/30",
  },
  {
    emoji: "💪",
    title: "Your Strength",
    description: "You face everything with grace and courage. You inspire me daily.",
    gradient: "from-sky-500/15 to-transparent",
    border: "hover:border-sky-500/30",
  },
  {
    emoji: "❤️",
    title: "Your Kindness",
    description: "The way you care for others is one of the most beautiful things about you.",
    gradient: "from-blue-400/15 to-transparent",
    border: "hover:border-blue-400/30",
  },
  {
    emoji: "😂",
    title: "Your Laugh",
    description: "My absolute favorite sound in the whole world.",
    gradient: "from-cyan-500/15 to-transparent",
    border: "hover:border-cyan-500/30",
  },
  {
    emoji: "✨",
    title: "Your Heart",
    description: "You have the purest, most loving heart I have ever known.",
    gradient: "from-indigo-500/15 to-transparent",
    border: "hover:border-indigo-500/30",
  },
  {
    emoji: "🌟",
    title: "Just Being You",
    description: "Every little thing about you makes me fall in love more every day.",
    gradient: "from-white/[0.06] to-transparent",
    border: "hover:border-white/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ReasonsSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a] via-blue-950/5 to-[#050d1a]" />

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
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
              Reasons I Love You
            </span>
          </h2>
          <p className="text-blue-200/50 text-sm sm:text-base">
            And this is just the beginning...
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              className={`glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group cursor-default transition-colors duration-300 ${reason.border}`}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.02] to-transparent" />

              <div className="relative z-10">
                <motion.span
                  className="text-3xl sm:text-4xl block mb-4"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {reason.emoji}
                </motion.span>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-200 mb-2 group-hover:text-blue-100 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-blue-200/50 text-sm sm:text-base leading-relaxed group-hover:text-blue-200/60 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/[0.02] to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
