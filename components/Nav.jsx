"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "o mnie",
        path: "/o-mnie",
    },
    {
        name: "usługi",
        path: "/uslugi",
    },
    {
        name: "projekty",
        path: "/projekty",
    },
    {
        name: "kontakt",
        path: "/kontakt",
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-10">
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${isActive ? "text-accent border-b-2 border-accent" : ""} font-semibold hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
