import { useState, useEffect } from "react";
import { Menu, X, Grip } from "lucide-react";
import { navLinks } from "../../constants";
import { Button } from "../ui/Button";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const startTour = async (e) => {
        e.preventDefault();
        const sections = ["about", "services", "projects", "all-projects", "testimonials", "contact", "hire-me-button"];

        // Scroll to top first
        window.scrollTo({ top: 0, behavior: "smooth" });

        for (const sectionId of sections) {
            await new Promise(resolve => setTimeout(resolve, 6000));
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${isScrolled ? "bg-dark/90 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                        <img
                            src="/images/stackvil-logo.png"
                            alt="Stackvil Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold font-heading text-white leading-none group-hover:text-primary transition-colors">
                            RAVI SANKAR
                        </span>
                        <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">
                            Stackvil Technologies
                        </span>
                    </div>
                </a>

                {/* Why Hire Me Button */}
                <a
                    href="#tour"
                    onClick={startTour}
                    className="bg-[#ff6a00] hover:bg-[#ff8533] text-black font-bold font-heading py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_25px_rgba(255,106,0,0.5)] flex items-center gap-2 text-sm tracking-wide"
                >
                    WHY HIRE ME
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    <div className="flex gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="h-6 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white">
                            <Grip size={20} />
                        </button>
                        <Button variant="outline" className="uppercase text-xs tracking-wider px-6 py-2.5 rounded-none border-white/20 hover:border-primary hover:text-primary">
                            Download CV
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 h-screen">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-primary text-2xl font-bold font-heading uppercase"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button variant="outline" className="w-full mt-4 border-white/20">
                        Download CV
                    </Button>
                </div>
            )}
        </nav>
    );
};
