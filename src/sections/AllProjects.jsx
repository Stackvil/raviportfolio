import { Section } from "../components/ui/Section";
import { allProjects } from "../constants";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export const AllProjects = () => {
    return (
        <Section id="all-projects" className="bg-gray-950 py-20 border-t border-white/5">
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-px w-8 bg-primary"></span>
                    <span className="text-primary text-sm tracking-widest uppercase font-bold">Full Archive</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight">
                    All Projects.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-900 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px]">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/5">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-[#ff6a00] hover:bg-[#ff8533] text-black font-medium py-2 rounded-lg transition-colors text-sm"
                                >
                                    <ExternalLink size={16} /> Live
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                                    aria-label="View Source Code"
                                >
                                    <Github size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
