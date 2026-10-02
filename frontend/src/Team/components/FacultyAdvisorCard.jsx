import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiInstagram, FiLinkedin, FiGithub, FiMail, FiGlobe } from "react-icons/fi";
import FacultyAdvisorsData from "../FacultyAdvisorsData.js";

/**
 * Faculty Advisor Card
 * ─────────────────────
 * Renders a card for each entry in FacultyAdvisorsData.js.
 * To add a new faculty advisor, update FacultyAdvisorsData.js — no changes needed here.
 */
const FAcard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-12">
      {FacultyAdvisorsData.map((faculty) => (
        <TiltCard key={faculty.id} faculty={faculty} />
      ))}
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ faculty }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br to-slate-800"
    >
      <div className="transition-transform duration-300 hover:scale-105">
        <img
          className="h-[300px] w-full rounded-md object-cover hover:scale-105"
          src={faculty.image}
          alt={faculty.name}
        />
      </div>

      <div className="flex flex-col items-center justify-center text-white pt-6">
        <h2 className="text-xl font-semibold">{faculty.name}</h2>
        <p className="mt-2 text-center text-sm text-gray-300">{faculty.title}</p>
        <div className="mt-4 flex space-x-4">
          {faculty.email && (
            <a href={`mailto:${faculty.email}`} aria-label="Email">
              <FiMail className="text-2xl hover:text-red-500 transition-colors cursor-pointer" />
            </a>
          )}
          {faculty.linkedin && (
            <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin className="text-2xl hover:text-blue-500 transition-colors cursor-pointer" />
            </a>
          )}
          {faculty.website && (
            <a href={faculty.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
              <FiGlobe className="text-2xl hover:text-green-400 transition-colors cursor-pointer" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FAcard;
