import React, { useEffect } from "react";
import Data from "./CoordinatorData.js";
import CoreData from "./CoreMemberData.js";
import mentorData from "./MentorsData.js"
import Aos from "aos";
import "aos/dist/aos.css";
import Example from "./components/3dCard";
import FAcard from "./components/FacultyAdvisorCard";

function Team() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className="min-h-screen bg-[#050608] pb-40 pt-32">
      {/* ── Header Section ── */}
      <div className="flex flex-col items-center justify-center px-6 text-center" data-aos="fade-up">
        <span className="mb-4 block font-mono text-[0.65rem] tracking-[0.22em] text-gray-500 uppercase">
          The People
        </span>
        <h1 className="font-display text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl">
          Our Team
        </h1>
        <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-gray-400 sm:text-base">
          Meet the innovators behind the future of AI. Our team at RAID is shaping tomorrow's trends with expertise, dedication, and passion.
        </p>
      </div>

      {/* ── Coordinators ── */}
      <div className="mt-20 flex items-center justify-center gap-4 px-6" data-aos="fade-up">
        <div className="h-px w-12 bg-white/10 md:w-32" />
        <h2 className="font-head text-lg font-bold tracking-widest text-gray-300 md:text-xl uppercase">
          Coordinators
        </h2>
        <div className="h-px w-12 bg-white/10 md:w-32" />
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center gap-8 px-6" data-aos="fade-up">
        {Data.map((person) => (
          <Example key={person.id} person={person} />
        ))}
      </div>

      {/* ── Core Members ── */}
      <div className="mt-32 flex items-center justify-center gap-4 px-6" data-aos="fade-up">
        <div className="h-px w-12 bg-white/10 md:w-32" />
        <h2 className="font-head text-lg font-bold tracking-widest text-gray-300 md:text-xl uppercase">
          Core Members
        </h2>
        <div className="h-px w-12 bg-white/10 md:w-32" />
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center gap-8 px-6" data-aos="fade-up">
        {CoreData.map((person) => (
          <Example key={person.id} person={person} />
        ))}
      </div>

      {/* ── Mentors ── */}
      <div className="mt-32 flex items-center justify-center gap-4 px-6" data-aos="fade-up">
        <div className="h-px w-12 bg-white/10 md:w-32" />
        <h2 className="font-head text-lg font-bold tracking-widest text-gray-300 md:text-xl uppercase">
          Our Mentors
        </h2>
        <div className="h-px w-12 bg-white/10 md:w-32" />
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center gap-8 px-6" data-aos="fade-up">
        {mentorData.map((person) => (
          <Example key={person.id} person={person} />
        ))}
      </div>

      {/* ── Faculty Advisors ── */}
      <div className="mt-32 flex items-center justify-center gap-4 px-6" data-aos="fade-up">
        <div className="h-px w-12 bg-white/10 md:w-32" />
        <h2 className="font-head text-lg font-bold tracking-widest text-gray-300 md:text-xl uppercase">
          Faculty Advisors
        </h2>
        <div className="h-px w-12 bg-white/10 md:w-32" />
      </div>

      <div className="mx-auto mt-8" data-aos="fade-up">
        <FAcard />
      </div>
    </div>
  );
}

export default Team;
