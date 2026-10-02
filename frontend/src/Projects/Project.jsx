import React, { useEffect, useState } from 'react';
import './Project.css';
import Modal from './Proj-widgets/Modal';
import ProjectData from './ProjectData.js';
import ProjectCard from './Proj-widgets/ProjectCards';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  });


  const [modalOpen, setModalOpen] = useState(false);
  const [activeProjectType, setActiveProjectType] = useState('Summer RAID');
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  const handleClick = (projectStatus) => {
    setActiveProjectType(projectStatus);
  };

  const filteredProjects = ProjectData.filter(
    (project) => project.status === activeProjectType
  );


  return (

    <div className="projects-page mb-40">
      <div className="flex items-center justify-center pt-36" data-aos="fade-up">
        <h1 className="text-white text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Projects
          <p class="mx-[-10px] mt-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">"Discover the Future of AI with RAID – Where Cutting-Edge Projects and Innovative Trends Come to Life"</p>
        </h1>
        

      </div>
      <div className="card-section  grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 py-12 gap-2 sm:gap-6 md:gap-10 px-4 sm:px-6 md:px-12 lg:px-24" data-aos="fade-up">
  {filteredProjects.map((project) => (
    <ProjectCard
      key={project.id}
      status={project.status}
      project={project}
      onClick={() => openModal(project)}
    />
  ))}
</div>

      {modalOpen && selectedProject && (
        <Modal isOpen={modalOpen} setIsOpen={setModalOpen} project={selectedProject} />
      )}

    </div>
  );
};

export default Project;
