import React, { useEffect, useState } from 'react';
import Modal from './Proj-widgets/Modal';
import ProjectData from './ProjectData.js';
import ProjectCard from './Proj-widgets/ProjectCards';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { motion } from 'framer-motion';

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [activeProjectType, setActiveProjectType] = useState('Summer RAID');
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const filteredProjects = ProjectData.filter(
    (project) => project.status === activeProjectType
  );

  const projectTypes = [...new Set(ProjectData.map(p => p.status))];

  return (
    <div className="min-h-screen bg-[#050608] pb-40 pt-32">
      {/* ── Header Section ── */}
      <div className="flex flex-col items-center justify-center px-6 text-center" data-aos="fade-up">
        <span className="mb-4 block font-mono text-[0.65rem] tracking-[0.22em] text-gray-500 uppercase">
          Our Work
        </span>
        <h1 className="font-display text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl">
          Projects
        </h1>
        <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-gray-400 sm:text-base">
          Discover the future of AI with RAID — where cutting-edge research, hands-on development, and innovative trends come to life.
        </p>
      </div>

      {/* ── Filter Buttons ── */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 px-4" data-aos="fade-up" data-aos-delay="100">
        {projectTypes.map((type) => (
          <LiquidButton
            key={type}
            size="md"
            variant={activeProjectType === type ? 'default' : 'ghost'}
            onClick={() => setActiveProjectType(type)}
            className={activeProjectType === type ? 'border-white/20 bg-white/10 text-white' : ''}
          >
            {type}
          </LiquidButton>
        ))}
      </div>

      {/* ── Project Cards Grid ── */}
      <div 
        className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10"
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => openModal(project)}
          />
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-full py-20 text-center text-gray-500 font-mono text-sm">
            No projects found for this category.
          </div>
        )}
      </div>

      {/* ── Modal ── */}
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} project={selectedProject} />
    </div>
  );
};

export default Project;
