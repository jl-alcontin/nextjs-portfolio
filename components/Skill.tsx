
import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill,directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out bg-white"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 sm:w-16 sm:h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center w-full h-full absolute">
          <p className="text-xs sm:text-base md:text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
