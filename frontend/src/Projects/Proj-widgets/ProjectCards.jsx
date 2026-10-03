import React, { useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ProjectCard({ project, onClick }) {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  const wordLimit = 22;
  const words = project.description.split(' ');
  const isLong = words.length > wordLimit;
  const preview = isLong ? words.slice(0, wordLimit).join(' ') + '…' : project.description;

  return (
    <motion.div
      data-aos="fade-up"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="
        group relative w-full max-w-sm cursor-pointer overflow-hidden rounded-2xl
        border border-white/[0.07] bg-white/[0.025]
        backdrop-blur-xl
        shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]
        transition-all duration-300
        hover:border-cyan-500/20 hover:bg-white/[0.04]
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(34,211,238,0.06)]
        mx-auto mt-8
      "
    >
      {/* Cyan shimmer on hover — top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.Image}
          alt={project.name}
          className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Vivid overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,6,8,0.9)] via-[rgba(5,6,8,0.3)] to-transparent" />
        {/* Cyan side-glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:from-cyan-500/[0.06] group-hover:to-indigo-500/[0.06] group-hover:opacity-100" />
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h2 className="font-head text-base font-semibold leading-tight text-gray-100 transition-colors duration-200 group-hover:text-white">
            {project.name}
          </h2>
          <a
            href={project.Link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="
              shrink-0 rounded-lg border border-white/[0.06] bg-white/[0.04] p-1.5
              text-gray-500 transition-all duration-200
              hover:border-cyan-500/30 hover:bg-cyan-500/[0.08] hover:text-cyan-400
            "
          >
            <VscGithubInverted size={15} />
          </a>
        </div>

        {/* Divider with gradient */}
        <div className="mb-3 h-px bg-gradient-to-r from-white/[0.07] via-white/[0.04] to-transparent" />

        <p className="font-body text-[0.78rem] leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors duration-200">
          {preview}
          {isLong && (
            <button
              onClick={e => { e.stopPropagation(); onClick(); }}
              className="ml-1.5 font-medium text-cyan-500/70 hover:text-cyan-400 transition-colors"
            >
              Read more
            </button>
          )}
        </p>

        {/* View details hint */}
        <div className="mt-4 flex items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="font-mono text-[0.6rem] uppercase tracking-widest text-cyan-500">View details</span>
          <FiArrowUpRight size={10} className="text-cyan-500" />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
