import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DimensionalField from "@/components/ui/dimensional-field";

import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050608]">
      {/* ── DimensionalField WebGL background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DimensionalField className="w-full h-full" />
      </div>

      {/* ── Subtle dark vignette so text stays readable ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      {/* ── Hero content ── */}
      <div
        className="relative z-[2] flex flex-col items-center px-4 text-gray-200"
        data-aos="fade-up"
      >
        {/* Main heading — Space Grotesk */}
        <h1 className="font-head max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-semibold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Realm of Artificial Intelligence and Data
        </h1>

        {/* Sub-text — Inter */}
        <p className="font-body my-6 max-w-xl text-center text-base leading-relaxed text-gray-300 md:text-lg md:leading-relaxed font-light">
          We at RAID, the AI Society of IIT Jodhpur, are dedicated to
          innovation in artificial intelligence.
        </p>


        {/* CTA button */}
        <motion.div
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
        >
          <Link
            to="/projects"
            className="group relative flex w-fit items-center gap-2 rounded-full border border-white/20 bg-gray-950/30 px-6 py-2.5 text-sm text-gray-50 backdrop-blur-sm transition-colors hover:bg-gray-950/60"
          >
            Explore Projects
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;