import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCode } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

const pillars = [
  {
    Icon: FaLaptopCode,
    title: "WARP Projects",
    tag: "WINTER",
    accent: "#22d3ee",
    description:
      "Every winter, RAID runs WARP (Winter Adventures with RAID Projects) — a structured programme where students deep-dive into real AI problems through guided, hands-on projects.",
  },
  {
    Icon: FaCode,
    title: "Summer RAID",
    tag: "SUMMER",
    accent: "#818cf8",
    description:
      "Seniors mentor juniors through summer-long AI projects. A unique peer-learning model that accelerates skill growth while fostering lasting mentorship bonds.",
  },
  {
    Icon: GiTeacher,
    title: "Paper Reading",
    tag: "RESEARCH",
    accent: "#34d399",
    description:
      "Weekly sessions where members collaboratively dissect landmark AI research papers — turning dense PDFs into shared understanding and open discussion.",
  },
  {
    Icon: IoIosPeople,
    title: "Alumni Network",
    tag: "COMMUNITY",
    accent: "#fbbf24",
    description:
      "A thriving network of RAID alumni at top companies and PhD programmes worldwide — sharing insights, referrals, and career guidance with current members.",
  },
];

/* Shared liquid-glass card classes */
const glassCard =
  "relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] " +
  "backdrop-blur-xl " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.2),0_8px_32px_rgba(0,0,0,0.35)]";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:px-14 lg:px-24">

      {/* ── Section divider ── */}
      <div className="mb-16 flex items-center gap-4">
        <span className="h-px flex-1 bg-white/[0.05]" />
        <span className="font-mono text-[0.65rem] tracking-[0.22em] text-gray-600 uppercase">What we do</span>
        <span className="h-px flex-1 bg-white/[0.05]" />
      </div>

      {/* ── Heading ── */}
      <div className="mb-14 max-w-2xl">
        <h2 className="font-head text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          Building AI engineers
          <br />
          <span className="text-white/30">from scratch</span>
        </h2>
        <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-gray-500">
          At RAID, we innovate through hands-on projects, rigorous research, and a
          collaborative community that believes in learning by building.
        </p>
      </div>

      {/* ── Liquid glass pillar cards ── */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.09, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`${glassCard} group p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05]`}
          >
            {/* Subtle top accent line using the pillar colour */}
            <div
              className="absolute inset-x-0 top-0 h-px opacity-60"
              style={{ background: `linear-gradient(90deg, transparent, ${pillar.accent}80, transparent)` }}
            />

            {/* Tag */}
            <span className="mb-5 block font-mono text-[0.6rem] tracking-[0.2em] text-gray-600">
              {pillar.tag}
            </span>

            {/* Icon */}
            <div
              className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.04]"
              style={{ boxShadow: `0 0 20px ${pillar.accent}20` }}
            >
              <pillar.Icon className="h-5 w-5 text-gray-300" />
            </div>

            {/* Title */}
            <h3 className="mb-3 font-head text-base font-semibold text-gray-100">
              {pillar.title}
            </h3>

            {/* Description */}
            <p className="font-body text-[0.8rem] leading-relaxed text-gray-500">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
