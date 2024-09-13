"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaLaravel,
    FaReact,
    FaFigma,
    FaNodeJs
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const experience = {
    title: "doświadczenie",
    description: "Mam doświadczenie w projektowaniu i tworzeniu responsywnych stron internetowych, wykorzystując technologie takie jak HTML5, CSS3, JavaScript, React, Next.js i Laravel. Pracowałam nad różnorodnymi projektami, optymalizując witryny pod kątem SEO oraz dbając o ich estetykę i funkcjonalność dzięki umiejętnościom UX/UI designu.",
    items: [
        {
            company: "Hydrofest",
            position: "Freelance Frontend Developer & UX/UI Designer",
            duration: "Luty - Marzec 2023",
        },
        {
            company: "Agencja Ma & Ma",
            position: "Frontend Developer & UX/UI Designer",
            duration: "Styczeń 2022 - Styczeń 2023",
        },
    ],
};

const education = {
    title: "wykształcenie",
    description: "Jestem absolwentką Uniwersytetu Morskiego w Gdyni, gdzie zdobyłam licencjat z Informatyki oraz tytuł magistra ze specjalizacją w Biznesie Elektronicznym. Moje wykształcenie łączy wiedzę techniczną z umiejętnościami zarządzania projektami internetowymi.",
    items: [
        {
            institution: "Uniwersytet Morski w Gdyni",
            degree: "Magister - specjalizacja Biznes Elektroniczny",
            duration: "2022 - 2024",
        },
        {
            institution: "Uniwersytet Morski w Gdyni",
            degree: "Licencjat - specjalizacja Informatyka",
            duration: "2019 - 2022",
        },
    ],
};

const skills = {
    title: "umiejętności",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <FaLaravel />,
            name: "Laravel",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
    ],
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-0 xl:py-12"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">doświadczenie</TabsTrigger>
                        <TabsTrigger value="education">wykształcenie</TabsTrigger>
                        <TabsTrigger value="skills">umiejętności</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <motion.div
                        className="min-h-[70vh] w-full"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
                        }}
                    >
                        {/* experience */}
                        <TabsContent value="experience" className="w-full h-full">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
                                }}
                                className="flex flex-col gap-[30px] text-left"
                            >
                                <h3 className="text-4xl font-bold text-black">{experience.title}</h3>
                                <p className="w-full text-black mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: { delay: 0.8 + index * 0.2, duration: 0.6, ease: "easeOut" },
                                                    }}
                                                    className="bg-white/50 shadow-sm h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-start gap-1"
                                                >
                                                    <span className="text-black font-semibold">{item.duration}</span>
                                                    <h3 className="text-lg max-w-[260px] min-h-[60px] text-left text-black">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-black">{item.company}</p>
                                                    </div>
                                                </motion.li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </motion.div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full h-full">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
                                }}
                                className="flex flex-col gap-[30px] text-left"
                            >
                                <h3 className="text-4xl font-bold text-black">{education.title}</h3>
                                <p className="w-full text-black mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: { delay: 0.8 + index * 0.2, duration: 0.6, ease: "easeOut" },
                                                    }}
                                                    className="bg-white/50 shadow-sm h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-start gap-1"
                                                >
                                                    <span className="text-black font-semibold">{item.duration}</span>
                                                    <h3 className="text-lg max-w-[260px] min-h-[60px] text-left text-black">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-black">{item.institution}</p>
                                                    </div>
                                                </motion.li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </motion.div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
                                }}
                                className="flex flex-col gap-[30px]"
                            >
                                <h3 className="text-4xl text-black font-bold">{skills.title}</h3>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { delay: 0.8 + index * 0.2, duration: 0.6, ease: "easeOut" },
                                                }}
                                            >
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-white/50 shadow-sm rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300 text-black">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        </TabsContent>
                    </motion.div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
