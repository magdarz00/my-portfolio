"use client";

import { BsArrowDownRight } from "react-icons/bs";
// import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Tworzę dynamiczne, responsywne strony internetowe, które łączą nowoczesny design z solidnymi rozwiązaniami technologicznymi. Wykorzystuję HTML5, CSS3, JavaScript, React, Next.js i Laravel, aby tworzyć wydajne, skalowalne projekty, które spełniają potrzeby użytkowników i klientów. Dodatkowo dbam o optymalizację pod kątem wydajności i łatwej obsługi na różnych urządzeniach.",
        href: ""
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: "Projektowanie intuicyjnych i atrakcyjnych interfejsów użytkownika to moja specjalność. Korzystam z narzędzi takich jak Figma, aby tworzyć estetyczne, funkcjonalne projekty, które zapewniają doskonałe doświadczenia użytkownikom. Skupiam się na detalach, aby każdy projekt nie tylko wyglądał dobrze, ale również był łatwy w obsłudze.",
        href: ""
    },
    {
        num: "03",
        title: "Design",
        description: "Kreatywność wyrażam również poprzez projektowanie unikalnych i przyciągających wzrok wizytówek. Każdy projekt tworzę z myślą o wizji i tożsamości marki, aby wizytówka idealnie odzwierciedlała jej charakter. Dbam o to, aby moje projekty były ponadczasowe, proste i łatwe do zapamiętania.",
        href: ""
    },
    {
        num: "04",
        title: "SEO",
        description: "Zwiększam widoczność stron internetowych dzięki optymalizacji SEO. Korzystam z narzędzi takich jak Google Lighthouse, aby poprawić szybkość ładowania, optymalizować strukturę strony i treści, co przekłada się na lepsze pozycje w wyszukiwarkach. Dobrze zoptymalizowana strona to nie tylko lepsze doświadczenie dla użytkowników, ale także większa szansa na sukces w internecie.",
        href: ""
    },
];

const Services = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center py-0 xl:py-12 mb-[20px] lg:mb-[40px]">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.5, duration: 0.6, ease: "easeOut" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[40px] items-stretch"
                >
                    {services.map((service, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.6 + index * 0.2, duration: 0.6, ease: "easeOut" },
                                }}
                                className="flex-1 flex flex-col justify-between lg:gap-6 group h-full"
                            >
                                {/* top */}
                                <div>
                                    {/* title */}
                                    <div className="w-full flex justify-between items-center mb-6">
                                        <h2 className="text-3xl xl:text-4xl font-bold leading-none text-black group-hover:text-accent transition-all duration-500">
                                            {service.title}
                                        </h2>
                                        {/* <Link href={service.href} className="w-[60px] h-[60px] rounded-full bg-black group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                            <BsArrowDownRight className="text-white text-2xl" />
                                        </Link> */}
                                    </div>
                                    {/* description */}
                                    <p className="text-black">{service.description}</p>
                                </div>
                                {/* border */}
                                <div className="border-b border-black/20 w-full mt-[40px]"></div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
