import { motion } from "framer-motion";
import { ArrowRight, Play, Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useState } from "react";
import { HireMeModal } from "../components/HireMeModal";

// Placeholder for user image - using a professional placeholder
// Local image reference
const USER_IMAGE = "/images/sanakar image 1.jpeg";

export const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex flex-col pt-24 pb-12 overflow-hidden bg-dark">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

            <div className="flex-1 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">

                {/* Text Content */}
                <div className="flex-1 w-full relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <span className="text-gray-400 text-sm tracking-wider uppercase">Available for work</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white leading-none tracking-tight mb-2">
                            RAVI SANKAR
                        </h1>
                        <div className="h-1 w-32 bg-white/20 relative mb-4">
                            <div className="absolute top-0 left-0 h-full w-1/3 bg-primary" />
                        </div>
                        <p className="text-xl md:text-2xl text-gray-300 font-light mb-8">
                            DevOps Expert
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="max-w-md bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg mb-8"
                        >
                            <QuoteIcon className="text-primary mb-4 w-8 h-8" />
                            <p className="text-gray-400 text-sm leading-relaxed uppercase tracking-wide">
                                With 1+ years of dedicated professional experience. I design high-performance architectures and automate complex deployment pipelines.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Hero Image / Portrait */}
                <motion.div
                    className="flex-1 relative w-full h-[500px] md:h-[700px] flex items-end justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Central Portrait with Fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10" />
                    <img
                        src={USER_IMAGE}
                        alt="Ravi Sankar Portrait"
                        className="w-full h-full object-cover object-top opacity-90 mask-image-gradient"
                        style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                    />

                    {/* Social Sidebar (Floating) */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 bg-white/5 backdrop-blur-md p-3 rounded-full border border-white/10 z-20">
                        <a href="https://www.instagram.com/ravi_sankar_999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href="https://www.linkedin.com/in/ravi-sankar-kandra-1948a5323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        <a href="https://github.com/RaviSankar-Dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Github size={20} /></a>
                    </div>
                </motion.div>

                {/* Bottom Status Panel */}
                <div className="absolute bottom-4 right-0 md:right-6 z-20">
                    <div className="flex items-end gap-1 justify-end">
                        <span className="text-4xl md:text-5xl font-bold font-heading text-white">$15</span>
                        <span className="text-lg md:text-xl text-gray-400 mb-2">.00</span>
                    </div>
                    <p className="text-right text-gray-500 text-xs md:text-sm uppercase tracking-wider">Hourly Rate</p>
                </div>
            </div>

            {/* Bottom CTA Bar */}
            <div className="w-full border-t border-white/10 bg-dark/50 backdrop-blur-sm relative z-30">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Optional tickers or small stats */}
                    </div>

                    <div id="hire-me-button" className="absolute left-1/2 -translate-x-1/2 -top-5">
                        <Button
                            variant="glow"
                            onClick={() => setIsModalOpen(true)}
                            className="rounded-full px-12 py-6 bg-gradient-to-r from-gray-800 to-black border border-white/20 uppercase tracking-widest text-sm hover:border-primary group"
                        >
                            Hire Me
                        </Button>
                    </div>
                </div>
            </div>

            <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

const QuoteIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
    </svg>
);
