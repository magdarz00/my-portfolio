"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "usługi",
        path: "/uslugi"
    },
    {
        name: "o mnie",
        path: "/o-mnie"
    },
    {
        name: "projekty",
        path: "/projekty"
    },
    {
        name: "kontakt",
        path: "/kontakt"
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-20 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Magda Rzepa <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center text-black gap-8">
                    {links.map((link, index) => {
                        const isActive = link.path === pathname;
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`text-xl hover:text-white transition-all ${isActive ? "text-white border-b-2 border-white" : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
