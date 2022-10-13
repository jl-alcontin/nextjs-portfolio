import { motion } from "framer-motion";
import React from "react";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h64 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 -mt-5 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold">
          this is {pageInfo?.name}
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
