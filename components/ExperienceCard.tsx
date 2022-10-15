import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col gap-3 rounded-lg items-center space-y-7 flex-shrink-0 w-[380px] sm:w-[500px] md:w-[600px] xl:w-[900px] text-small snap-center bg-[#29292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-y-scroll mt-24 scrollbar-thin scrollbar-track-slate-400/80 scrollbar-thumb-[#FB2576]/80 scrollbar-thumb-rounded-full md:overflow-y-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt=""
        className="w-24 h-24 shrink-0 rounded-full sm:w-28 sm:h-28 xl:w-[200px] xl:h-[200px] object-cover object-center xl:mt-0"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl text-center md:text-4xl font-light ">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-center text-sm mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2 justify-center">
          {/* {Tech used} */}
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 text-xs">
          {new Date(experience.dateStarted).toDateString()} --{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 md:text-lg text-sx leading-4">
          {experience.points.map((point, i) => (
            <li className="flex-center text-[#76ab03]" key={i}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
