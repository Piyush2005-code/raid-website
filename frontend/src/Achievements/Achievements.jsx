import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FiAward, FiArrowUpRight } from 'react-icons/fi';
import Modal from '../Projects/Proj-widgets/Modal';
import { AchievementsData } from '../data/AchievementsData';

export default function Achievements() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen pb-40 pt-32">
      {/* ── Header Section ── */}
      <div className="flex flex-col items-center justify-center px-6 text-center" data-aos="fade-up">
        <span className="mb-4 block font-mono text-[0.65rem] tracking-[0.22em] text-cyan-500 uppercase">
          Milestones & Recognition
        </span>
        <h1 className="font-head text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Our <span className="gradient-text">Achievements</span>
        </h1>
        <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-transparent" />
        <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-gray-400 sm:text-base">
          A showcase of our triumphs, awards, and the relentless pursuit of excellence in the Realm of Artificial Intelligence and Data.
        </p>
      </div>

      {/* ── Achievements Grid ── */}
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 xl:gap-10">
        <AnimatePresence>
          {AchievementsData.map((achievement, i) => (
            <motion.div
              key={achievement.id}
              onClick={() => openModal(achievement)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-1 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/20 hover:bg-white/[0.04] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.07)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10" />

              <div className="relative flex flex-col md:flex-row h-full rounded-xl overflow-hidden bg-[rgba(5,6,8,0.4)]">
                {/* Image Section */}
                <div className="relative h-48 md:h-auto md:w-2/5 overflow-hidden border-b md:border-b-0 md:border-r border-white/[0.05]">
                  <img
                    src={achievement.Image}
                    alt={achievement.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[rgba(5,6,8,0.9)] to-transparent" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col p-6 md:w-3/5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2.5 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-widest text-yellow-500">
                      <FiAward size={10} />
                      {achievement.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-gray-500">{achievement.date}</span>
                  </div>

                  <h3 className="mb-3 font-head text-xl font-bold leading-snug text-gray-100 transition-colors duration-200 group-hover:text-white">
                    {achievement.name}
                  </h3>

                  <p className="font-body text-sm leading-relaxed text-gray-500 flex-grow line-clamp-3">
                    {achievement.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-cyan-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Read Details <FiArrowUpRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Detailed Modal ── */}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} project={selectedAchievement} />
    </div>
  );
}
