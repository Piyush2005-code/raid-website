import React, { useEffect } from "react";
import { FiArrowRight, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DimensionalField from "@/components/ui/dimensional-field";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

import Aos from "aos";
import "aos/dist/aos.css";

/* ── stagger children on mount ── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b101e]">

      {/* ── DimensionalField WebGL bubbles ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DimensionalField className="w-full h-full" />
      </div>

      {/* ── Gradient vignette — left-heavy so text stays legible ── */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#050608]/90 via-[#050608]/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#050608]/50 via-transparent to-[#050608]/80" />

      {/* ── Content — left-aligned ── */}
      <div className="relative z-[2] flex min-h-screen flex-col justify-center px-6 pb-24 pt-28 sm:px-14 lg:px-24">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Pre-label */}
          <motion.div variants={itemVariants} className="mb-8 flex items-center gap-3">
            <span className="h-px w-9 bg-white/30" />
            <span className="font-mono text-[0.68rem] tracking-[0.22em] text-gray-400 uppercase">
              AI Society · IIT Jodhpur
            </span>
          </motion.div>

          {/* Heading — Barlow Condensed ExtraBold */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-[clamp(3.4rem,12vw,9.5rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-white"
          >
            Realm{" "}
            <span className="text-white/20" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)" }}>
              of
            </span>
            <br className="hidden sm:block" />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(105deg, #7dd3fc 0%, #38bdf8 40%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
              }}
            >
              Artificial
            </span>
            <br className="hidden sm:block" />
            Intelligence
            <br className="hidden sm:block" />
            <span
              className="bg-clip-text text-transparent text-[0.7em]"
              style={{
                backgroundImage: "linear-gradient(105deg, #94a3b8 0%, #7dd3fc 60%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
              }}
            >
              &amp; Data
            </span>
          </motion.h1>

          {/* Body text */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-md font-body text-[0.9rem] leading-relaxed text-gray-400"
          >
            We build intelligent systems, publish research, and grow the next
            generation of AI engineers — one project, one paper, one breakthrough
            at a time.
          </motion.p>

          {/* CTA row — liquid glass buttons */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">

            {/* Primary: Explore Projects */}
            <Link to="/projects">
              <LiquidButton size="lg" variant="default" className="font-mono font-medium tracking-wide text-white/90">
                Explore Projects
                <FiArrowRight />
              </LiquidButton>
            </Link>

            {/* Secondary: Meet the Team */}
            <Link to="/teams">
              <LiquidButton size="lg" variant="ghost" className="font-mono font-medium tracking-wide text-white/60">
                <FiUsers />
                Meet the Team
              </LiquidButton>
            </Link>
          </motion.div>

          {/* Scroll hint */}
          <motion.div variants={itemVariants} className="mt-16 flex items-center gap-3">
            <div className="relative h-10 w-px overflow-hidden bg-white/10">
              <motion.div
                className="absolute top-0 h-full w-full bg-white/40"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
              />
            </div>
            <span className="font-mono text-[0.6rem] tracking-[0.22em] text-gray-600 uppercase">
              Scroll to explore
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;