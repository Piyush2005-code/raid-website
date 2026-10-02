import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

/* ── Shared liquid-glass shadow ── */
const GLASS_SHADOW = [
  "inset 0 1px 0 rgba(255,255,255,0.07)",
  "inset 0 -1px 0 rgba(0,0,0,0.25)",
  "0 8px 32px rgba(0,0,0,0.45)",
  "0 1px 0 rgba(0,0,0,0.5)",
].join(",");

const TiltCard = ({ person }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });
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
      /* ── Liquid glass card ── */
      className="
        relative w-64 overflow-hidden rounded-2xl
        border border-white/[0.08]
        bg-white/[0.04]
        backdrop-blur-2xl
      "
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      /* inline shadow keeps perspective transform */
      // eslint-disable-next-line react/forbid-component-props
      // @ts-ignore
      __css={{ boxShadow: GLASS_SHADOW }}
    >
      {/* Top shimmer accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Avatar */}
      <div className="relative overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          className="h-64 w-full object-cover"
        />
        {/* Bottom fade into card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,9,12,0.9)] via-[rgba(8,9,12,0.2)] to-transparent" />
      </div>

      {/* Info */}
      <div className="px-5 py-4 text-center">
        <h2 className="font-head text-base font-semibold text-gray-100">
          {person.name}
        </h2>
        <p className="mt-1 font-body text-xs text-gray-500">
          {person.message}
        </p>

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
                className={`rounded-lg border border-white/[0.06] bg-white/[0.04] p-1.5 text-gray-600 transition-all hover:border-white/[0.14] hover:bg-white/[0.08] ${hover}`}
              >
                <Icon size={13} />
              </a>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

const TeamCard = ({ person }) => (
  <div className="grid place-content-center px-4 py-8">
    <TiltCard person={person} />
  </div>
);

export default TeamCard;
