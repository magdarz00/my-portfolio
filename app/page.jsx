"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Social from "@/components/Social";

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative flex xl:mt-12 h-max-screen">
      <div className="container mx-auto flex flex-col gap-4 xl:gap-14">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col text-black font-bold tracking-tighter leading-none uppercase"
        >
          <motion.div variants={textVariants} className="text-6xl md:text-7xl lg:text-8xl">Frontend Developer</motion.div>
          <motion.div variants={textVariants} className="text-6xl md:text-7xl lg:text-8xl"> & UX/UI Designer</motion.div>
          <motion.div variants={textVariants} className="text-6xl md:text-7xl lg:text-8xl mt-2">Portfolio.</motion.div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-2 lg:gap-0">
            <motion.div variants={textVariants} className="text-5xl md:text-6xl lg:text-7xl mt-2">Magda Rzepa</motion.div>
            <motion.div variants={textVariants} className="text-4xl md:text-5xl xl:text-6xl font-bold text-accent opacity-80">2024</motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col xl:flex-row gap-6"
        >
          <div className="mb-8 xl:mb-0 xl:self-center">
            <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white hover:transition-all duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
