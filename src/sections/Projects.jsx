import { Section } from "../components/ui/Section";
import { projects } from "../constants";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const Projects = () => {
    return (
        <Section id="projects" className="bg-dark py-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-8 bg-primary"></span>
                        <span className="text-primary text-sm tracking-widest uppercase font-bold">Selected Work</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight">
                        Featured <br /> Projects.
                    </h2>
                </div>
                <a href="#all-projects" className="hidden md:flex items-center gap-2 text-white border-b border-primary pb-1 hover:text-primary transition-colors uppercase tracking-widest text-sm">
                    View All Works <ArrowUpRight size={16} />
                </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-white/5">
                            {/* Project Image */}
                            <div className="absolute inset-0 bg-gray-900 group-hover:scale-105 transition-transform duration-700 ease-out">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                            </div>

                            {/* Overlay details */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                                <div className="flex justify-end">
                                    <div className="bg-primary text-black p-3 rounded-full">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-2 mb-4">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-md">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Number */}
                            <span className="absolute top-4 left-4 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                                0{index + 1}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{project.description}</p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 md:hidden flex justify-center">
                <a href="#all-projects" className="flex items-center gap-2 text-white border-b border-primary pb-1 uppercase tracking-widest text-sm">
                    View All Works <ArrowUpRight size={16} />
                </a>
            </div>
        </Section>
    );
};
