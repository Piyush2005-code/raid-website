import React, { useEffect } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";
import { FiX, FiArrowUpRight } from "react-icons/fi";

const Modal = ({ isOpen, setIsOpen, project }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <DragCloseDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
      {project && (
        <div className="relative mx-auto max-w-2xl space-y-6 text-gray-400">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="
              absolute right-0 top-0 flex h-8 w-8 items-center justify-center
              rounded-full border border-white/[0.08] bg-white/[0.05]
              text-gray-400 backdrop-blur-sm
              transition-all hover:border-white/[0.16] hover:bg-white/[0.10] hover:text-white
            "
          >
            <FiX size={14} />
          </button>

          {/* Hero image */}
          <div className="overflow-hidden rounded-xl border border-white/[0.07]">
            <img
              src={project.Image}
              alt={project.name}
              className="h-52 w-full object-cover md:h-72"
            />
          </div>

          {/* Title */}
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              {project.name}
            </h2>
          </div>

          {/* Description */}
          <p className="font-body text-sm leading-relaxed text-gray-400">
            {project.description}
          </p>

          {/* Divider */}
          <div className="h-px bg-white/[0.05]" />

          {/* Links */}
          <div>
            <h3 className="mb-3 font-mono text-[0.65rem] tracking-[0.2em] text-gray-600 uppercase">
              Project Links
            </h3>
            <a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2.5
                rounded-xl border border-white/[0.07] bg-white/[0.04]
                px-4 py-2.5 font-mono text-sm text-gray-300
                backdrop-blur-md
                transition-all hover:border-white/[0.14] hover:bg-white/[0.08] hover:text-white
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
              "
            >
              <VscGithubInverted size={16} />
              View Source Code
              <FiArrowUpRight size={13} className="text-gray-600" />
            </a>
          </div>
        </div>
      )}
    </DragCloseDrawer>
  );
};

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
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-[2px]"
        >
          <motion.div
            id="modal-drawer"
            ref={drawerRef}
            onClick={e => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.44 }}
            /* ── Liquid glass drawer ── */
            className="
              relative w-full max-h-[92vh] overflow-hidden
              rounded-t-3xl md:rounded-3xl md:max-w-2xl md:mb-8
              border border-white/[0.08]
              bg-[rgba(10,11,15,0.88)]
              backdrop-blur-2xl
              shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_-8px_48px_rgba(0,0,0,0.7)]
            "
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => { if (y.get() >= 100) handleClose(); }}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
          >
            {/* Drag handle */}
            <div className="flex justify-center p-4 pb-0">
              <button
                onPointerDown={e => controls.start(e)}
                className="h-1 w-12 cursor-grab touch-none rounded-full bg-white/[0.12] active:cursor-grabbing"
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
