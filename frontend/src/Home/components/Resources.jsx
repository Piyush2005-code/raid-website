import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const resources = [
  {
    title: "Machine Learning",
    subtitle: "Coursera Specialisation",
    tag: "BEGINNER",
    href: "https://www.coursera.org/specializations/machine-learning-introduction",
    image: "https://i.ytimg.com/vi/vStJoetOxJg/hq720.jpg",
    span: "md:col-span-4",
    accent: "#818cf8",
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Foundational Concepts",
    tag: "CORE",
    href: "#",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    span: "md:col-span-8",
    accent: "#f59e0b",
  },
  {
    title: "ML vs Deep Learning",
    subtitle: "Key Distinctions",
    tag: "CONCEPTS",
    href: "#",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    span: "md:col-span-8",
    accent: "#34d399",
  },
  {
    title: "Python Programming",
    subtitle: "W3Schools Reference",
    tag: "TOOLS",
    href: "https://www.w3schools.com/python/",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80",
    span: "md:col-span-4",
    accent: "#22d3ee",
  },
];

export const BouncyCardsFeatures = () => {
  return (
    <section className="px-6 py-24 sm:px-14 lg:px-24">

      {/* ── Header ── */}
      <div className="mb-12 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.22em] text-gray-600 uppercase">
            Start here
          </span>
          <h2 className="font-head text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Resources
          </h2>
          <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-gray-500">
            Curated starting points for your journey into artificial intelligence.
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            to="/blogs"
            className="
              mt-4 md:mt-0 inline-flex items-center gap-2
              rounded-full border border-white/[0.08]
              bg-white/[0.04] px-5 py-2 font-mono text-xs
              font-medium tracking-wide text-gray-400
              backdrop-blur-md transition-all
              hover:border-white/[0.15] hover:bg-white/[0.07] hover:text-gray-200
              shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
            "
          >
            See all resources
          </Link>
        </motion.div>
      </div>

      {/* ── Cards grid ── */}
      <div className="grid grid-cols-12 gap-4">
        {resources.map((res, i) => (
          <motion.a
            key={res.title}
            href={res.href}
            target={res.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={`
              col-span-12 ${res.span}
              group relative overflow-hidden rounded-2xl
              border border-white/[0.07] bg-white/[0.03]
              backdrop-blur-xl min-h-[280px]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]
              transition-all duration-300
              hover:border-white/[0.13] hover:bg-white/[0.055]
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_40px_rgba(0,0,0,0.5)]
              cursor-pointer
            `}
          >
            {/* Top accent line */}
            <div
              className="absolute inset-x-0 top-0 h-px opacity-70 transition-opacity group-hover:opacity-100"
              style={{ background: `linear-gradient(90deg, transparent, ${res.accent}90, transparent)` }}
            />

            {/* Card content */}
            <div className="relative z-10 p-6">
              <span className="mb-3 block font-mono text-[0.6rem] tracking-[0.2em] text-gray-600">{res.tag}</span>
              <h3 className="font-head text-xl font-semibold text-gray-100">{res.title}</h3>
              <p className="mt-1 font-body text-xs text-gray-600">{res.subtitle}</p>
            </div>

            {/* Background image — fades in with subtle overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={res.image}
                alt={res.title}
                className="h-full w-full object-cover opacity-[0.12] transition-opacity duration-500 group-hover:opacity-[0.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/60 to-transparent" />
            </div>

            {/* Arrow */}
            <div className="absolute bottom-5 right-5 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.05] opacity-0 transition-opacity group-hover:opacity-100">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"/>
              </svg>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};