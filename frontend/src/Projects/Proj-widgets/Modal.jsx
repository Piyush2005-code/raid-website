import React from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";
import { FiX, FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const Modal = ({ isOpen, setIsOpen, project }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <DragCloseDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
      {project && (
        <div className="relative mx-auto max-w-2xl space-y-7 text-gray-400">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="
              absolute right-0 top-0 flex h-9 w-9 items-center justify-center
              rounded-full border border-white/[0.1] bg-white/[0.06]
              text-gray-400 backdrop-blur-sm
              transition-all hover:border-white/[0.2] hover:bg-white/[0.12] hover:text-white
              shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
            "
          >
            <FiX size={14} />
          </button>

          {/* Hero image with gradient overlay */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08]">
            <img
              src={project.Image}
              alt={project.name}
              className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-80"
            />
            {/* Vivid bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,6,8,0.95)] via-[rgba(5,6,8,0.3)] to-transparent" />
            {/* Cyan shimmer at top edge */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            {/* Project name overlaid on image */}
            <div className="absolute bottom-0 left-0 p-5">
              <h2 className="font-head text-2xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-3xl">
                {project.name}
              </h2>
              {project.status && (
                <span className="mt-2 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-widest text-cyan-400">
                  {project.status}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4 backdrop-blur-sm">
            <p className="font-body text-sm leading-relaxed text-gray-400">
              {project.description}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          {/* Links */}
          <div>
            <h3 className="mb-3 font-mono text-[0.62rem] tracking-[0.22em] text-gray-600 uppercase">
              Project Links
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.Link && (
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group inline-flex items-center gap-2.5
                    rounded-xl border border-white/[0.08] bg-white/[0.04]
                    px-5 py-2.5 font-mono text-sm text-gray-300
                    backdrop-blur-md
                    transition-all duration-200
                    hover:border-cyan-500/30 hover:bg-cyan-500/[0.06] hover:text-cyan-300
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_16px_rgba(0,0,0,0.3)]
                  "
                >
                  <VscGithubInverted size={16} />
                  View Source Code
                  <FiArrowUpRight size={13} className="text-gray-600 transition-colors group-hover:text-cyan-400" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </DragCloseDrawer>
  );
};

import { useEffect } from "react";

/* ── Bottom sheet drawer with drag-to-close ── */
const DragCloseDrawer = ({ isOpen, setIsOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, { opacity: [1, 0] }, { duration: 0.22 });
    const yStart = typeof y.get() === "number" ? y.get() : 0;
    await animate("#modal-drawer", { y: [yStart, height] }, { duration: 0.28, ease: "easeIn" });
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-[3px]"
        >
          <motion.div
            id="modal-drawer"
            ref={drawerRef}
            onClick={e => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.44 }}
            className="
              relative w-full max-h-[92vh] overflow-hidden
              rounded-t-3xl md:rounded-3xl md:max-w-2xl md:mb-8
              border border-white/[0.09]
              bg-[rgba(8,9,13,0.92)]
              backdrop-blur-2xl
              shadow-[inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-1px_0_rgba(0,0,0,0.3),0_-8px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(34,211,238,0.04)]
            "
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => { if (y.get() >= 100) handleClose(); }}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
          >
            {/* Cyan top edge glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            {/* Drag handle */}
            <div className="flex justify-center p-4 pb-0">
              <button
                onPointerDown={e => controls.start(e)}
                className="h-1 w-14 cursor-grab touch-none rounded-full bg-white/[0.1] transition-colors hover:bg-white/[0.2] active:cursor-grabbing"
              />
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto p-6 pt-5 max-h-[80vh]">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
