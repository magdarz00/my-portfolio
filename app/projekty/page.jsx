"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Project 1",
        description:
            "Nowoczesna strona portfolio dla architektki, stworzona z użyciem Next.js, Tailwind CSS i Node.js. Zapewnia szybkie ładowanie, optymalizację SEO i minimalistyczny, responsywny design, idealnie prezentujący projekty architektoniczne.",
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "React.js" }],
        image: "/assets/work/mockup1.png",
        live: "https://portfolio-architect.vercel.app/",
        github: "https://github.com/magdarz00/Project-portfolio",
    },
    {
        num: "02",
        category: "frontend",
        title: "Project 2",
        description:
            "Projekt strony internetowej dla kwiaciarni został stworzony z wykorzystaniem HTML i CSS, co było celowym wyborem w celu zapewnienia prostoty i efektywności.",
        stack: [{ name: "HTML5" }, { name: "CSS3" }],
        image: "/assets/work/mockup2.png",
        live: "https://magdarz00.github.io/florist-shop/index.html",
        github: "https://github.com/magdarz00/florist-shop",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.6, ease: "easeInOut" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.6, duration: 0.6, ease: "easeInOut" },
                        }}
                        className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
                    >
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-black text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} projekt
                            </h2>
                            <p className="text-black">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="lg:text-lg text-black bg-secondary/30 rounded-lg px-4 py-1">
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-secondary/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-secondary/30 shadow-sm flex justify-center items-center group">
                                                <BsArrowUpRight className="text-black text-2xl lg:text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-secondary/30 flex justify-center items-center group">
                                                <BsGithub className="text-black text-2xl lg:text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.8, duration: 0.6, ease: "easeInOut" },
                        }}
                        className="w-full xl:w-[50%]"
                    >
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[300px] md:h-[500px] 2xl:h-[700px] relative group flex justify-center items-center">
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} fill className="object-fill rounded-lg" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-primary/80 hover:bg-accent text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
