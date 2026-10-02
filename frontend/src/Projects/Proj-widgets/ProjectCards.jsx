import React, { useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="
        group relative w-full max-w-sm cursor-pointer overflow-hidden rounded-2xl
        border border-white/[0.07] bg-white/[0.03]
        backdrop-blur-xl
        shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:border-white/[0.13] hover:bg-white/[0.05]
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_48px_rgba(0,0,0,0.5)]
        mx-auto mt-8
      "
    >
      {/* Top accent shimmer line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.Image}
          alt={project.name}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h2 className="font-head text-base font-semibold leading-tight text-gray-100 group-hover:text-white transition-colors">
            {project.name}
          </h2>
          <a
            href={project.Link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="shrink-0 rounded-lg border border-white/[0.06] bg-white/[0.04] p-1.5 text-gray-500 transition-all hover:border-white/[0.14] hover:text-gray-200"
          >
            <VscGithubInverted size={15} />
          </a>
        </div>

        {/* Divider */}
        <div className="mb-3 h-px bg-white/[0.05]" />

        <p className="font-body text-[0.78rem] leading-relaxed text-gray-500">
          {preview}
          {isLong && (
            <button
              onClick={e => { e.stopPropagation(); onClick(); }}
              className="ml-1.5 font-medium text-gray-400 hover:text-gray-200 transition-colors"
            >
              Read more
            </button>
          )}
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
