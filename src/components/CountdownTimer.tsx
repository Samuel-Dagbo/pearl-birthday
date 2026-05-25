"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(birthday: Date): TimeLeft | null {
  const now = new Date();
  const diff = birthday.getTime() - now.getTime();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const BIRTHDAY = new Date("2026-06-08T00:00:00");

function FlipUnit({ value, label }: { value: number; label: string }) {
  const [flip, setFlip] = useState(false);
  const prevValue = value;

  useEffect(() => {
    setFlip(true);
    const timeout = setTimeout(() => setFlip(false), 300);
    return () => clearTimeout(timeout);
  }, [prevValue]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <motion.div
          className="glass-card rounded-xl sm:rounded-2xl w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 flex items-center justify-center overflow-hidden"
          animate={flip ? { rotateX: [0, 90, 0] } : {}}
          transition={{ duration: 0.3 }}
          style={{ perspective: 200 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
          <span className="relative text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-b from-pink-300 via-purple-300 to-purple-400 bg-clip-text text-transparent tabular-nums">
            {String(value).padStart(2, "0")}
          </span>
        </motion.div>
        <div className="absolute inset-x-0 top-1/2 h-px bg-pink-500/10" />
      </div>
      <span className="mt-2 text-[10px] sm:text-xs text-pink-300/40 uppercase tracking-[0.2em] font-medium">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(BIRTHDAY));

    const timer = setInterval(() => {
      const result = calculateTimeLeft(BIRTHDAY);
      if (result === null) {
        setIsBirthday(true);
        setTimeLeft(null);
        clearInterval(timer);
      } else {
        setTimeLeft(result);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isBirthday) {
    return (
      <section className="relative py-24 sm:py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/20 to-black" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <span className="text-6xl sm:text-8xl block mb-6">🎉</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-amber-200 via-pink-300 to-purple-400 bg-clip-text text-transparent">
              It&apos;s Your Day!
            </span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-pink-200/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Happy Birthday, my love! Today is all about you. 🎂💕
          </motion.p>
        </div>
      </section>
    );
  }

  if (!timeLeft) {
    return (
      <section className="relative py-24 sm:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
            {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
              <div key={label} className="flex flex-col items-center">
                <div className="glass-card rounded-xl sm:rounded-2xl w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border-2 border-pink-500/20 border-t-pink-500 animate-spin" />
                </div>
                <span className="mt-2 text-[10px] sm:text-xs text-pink-300/40 uppercase tracking-[0.2em] font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl mb-3"
          style={{ fontFamily: "var(--font-dancing), cursive" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
            Counting Down to Your Special Day
          </span>
        </motion.h2>
        <motion.p
          className="text-pink-200/40 text-sm sm:text-base mb-10 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The wait is almost over...
        </motion.p>

        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
          <FlipUnit value={timeLeft.days} label="Days" />
          <FlipUnit value={timeLeft.hours} label="Hours" />
          <FlipUnit value={timeLeft.minutes} label="Minutes" />
          <FlipUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}
