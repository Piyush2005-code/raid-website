import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

const ROTATION_RANGE = 18;

const TiltCard = ({ person }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 20 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rX = ((e.clientY - rect.top)  / rect.height - 0.5) * -ROTATION_RANGE;
    const rY = ((e.clientX - rect.left) / rect.width  - 0.5) *  ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="
        relative w-64 overflow-hidden rounded-2xl
        border border-white/[0.08] bg-white/[0.04]
        backdrop-blur-2xl
        shadow-[inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-1px_0_rgba(0,0,0,0.25),0_8px_40px_rgba(0,0,0,0.5)]
      "
    >
      {/* Top shimmer */}
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      {/* Avatar */}
      <div className="relative overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          className="h-64 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,9,12,0.92)] via-[rgba(8,9,12,0.15)] to-transparent" />
      </div>

      {/* Info */}
      <div className="px-5 py-4 text-center">
        <h2 className="font-head text-base font-semibold text-gray-100">
          {person.name}
        </h2>
        {person.job && (
          <p className="mt-1 font-mono text-[0.7rem] tracking-wide text-gray-500">
            {person.job}
          </p>
        )}
        {person.batch && (
          <p className="font-body text-xs text-gray-600">{person.batch}</p>
        )}

        {/* Social icons */}
        <div className="mt-4 flex items-center justify-center gap-3">
          {[
            { href: person.instagram, Icon: FiInstagram, hover: "hover:text-pink-400" },
            { href: person.linkedin,  Icon: FiLinkedin,  hover: "hover:text-blue-400" },
            { href: person.github,    Icon: FiGithub,    hover: "hover:text-gray-200" },
          ]
            .filter(s => s.href)
            .map(({ href, Icon, hover }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-lg border border-white/[0.06] bg-white/[0.04] p-1.5 text-gray-600 transition-all hover:border-white/[0.14] hover:bg-white/[0.09] ${hover}`}
              >
                <Icon size={13} />
              </a>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

const AlumniCard = ({ person }) => (
  <div className="grid place-content-center px-4 py-8">
    <TiltCard person={person} />
  </div>
);

export default AlumniCard;
