import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

const Example = ({person}) => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br  px-4 py-12 text-slate-900">
      <TiltCard person={person} />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({person}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

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
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br  to-slate-800 "
    >
        <div className="transition: transform 400ms ease-out hover:scale-105"
    >
            <img
              className="h-[300px] w-full rounded-md object-cover hover:scale-105"
              src={person.image}
              alt=""
            />
            </div>
       
      <div
        style={{
          transform: "",
          transformStyle: "",
        }}
        className="absolute top-0 left-0 w-full h-1/2 rounded-t-xl overflow-hidden"
      >
         
      </div>
      <div
        style={{
          transform: "",
          transformStyle: "",
        }}
        className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-xl p-4 flex flex-col items-center justify-center text-white"
      >
        </div>
        <div className="flex flex-col items-center justify-center text-white pt-6">
        <h2 className="text-xl font-semibold">{person.name}</h2>
        <p className="mt-2 text-center text-sm">
          {person.job}
        </p>
        <p className="mt-2 text-center text-sm">
          {person.batch}
        </p>
        <div className="mt-4 flex space-x-4">
          {person.instagram && (
            <a href={person.instagram} target="_blank" rel="noopener noreferrer">
              <FiInstagram className="text-2xl hover:text-pink-500 transition-colors cursor-pointer" />
            </a>
          )}
          { person.linkedin && (
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="text-2xl hover:text-blue-500 transition-colors cursor-pointer" />
          </a>
          )}
          { person.github && (
          <a href={person.github} target="_blank" rel="noopener noreferrer">
            <FiGithub className="text-2xl hover:text-gray-500 transition-colors cursor-pointer" />
          </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Example;
