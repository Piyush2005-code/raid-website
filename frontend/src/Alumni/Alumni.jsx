import React, { useEffect } from "react";
import Data from "./AlumniData.js";
import Aos from "aos";
import "aos/dist/aos.css";
import Example from "./AlumniCard";

function Alumni() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className="min-h-screen bg-[#050608] pb-40 pt-32">
      {/* ── Header Section ── */}
      <div className="flex flex-col items-center justify-center px-6 text-center" data-aos="fade-up">
        <span className="mb-4 block font-mono text-[0.65rem] tracking-[0.22em] text-gray-500 uppercase">
          The Legacy
        </span>
        <h1 className="font-display text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl">
          Our Alumni
        </h1>
        <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-gray-400 sm:text-base">
          Our esteemed alumni pioneered RAID, the AI society of IIT Jodhpur, and their visionary leadership still inspires innovation today.
        </p>
      </div>

      {/* ── Pioneers ── */}
      <div className="mt-20 flex items-center justify-center gap-4 px-6" data-aos="fade-up">
        <div className="h-px w-12 bg-white/10 md:w-32" />
        <h2 className="font-head text-lg font-bold tracking-widest text-gray-300 md:text-xl uppercase">
          Pioneers of RAID
        </h2>
        <div className="h-px w-12 bg-white/10 md:w-32" />
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center gap-8 px-6" data-aos="fade-up">
        {Data.map((person) => (
          <Example key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default Alumni;
