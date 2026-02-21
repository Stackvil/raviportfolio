import { Section } from "../components/ui/Section";
import { skills } from "../constants";
import { motion } from "framer-motion";

const StatCard = ({ label, subLabel, value, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="bg-dark border border-white/10 p-6 flex flex-col justify-between hover:border-primary/50 transition-colors group h-48"
    >
        <div>
            <h4 className="text-gray-400 text-xs uppercase tracking-widest mb-1">{label}</h4>
            <p className="text-gray-500 text-xs">{subLabel}</p>
        </div>
        <div>
            <div className="text-4xl font-bold font-heading text-white mb-2 group-hover:text-primary transition-colors">
                {value}%
            </div>
            <div className="w-full bg-gray-800 h-1 mt-2">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    transition={{ delay: delay + 0.2, duration: 1 }}
                    className="h-full bg-primary"
                />
            </div>
        </div>
    </motion.div>
);

export const About = () => {
    return (
        <Section id="about" className="bg-dark/50 py-32">
            <div className="flex flex-col md:flex-row gap-16">
                {/* Text Content */}
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-8 bg-primary"></span>
                        <span className="text-primary text-sm tracking-widest uppercase font-bold">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight mb-8">
                        My Experience And Expertise With <span className="text-gray-500">Modern Web Technologies.</span>
                    </h2>

                    <p className="text-gray-400 leading-relaxed max-w-xl mb-12">
                        With 1+ years of professional experience in Full Stack Development, DevOps architectures, and Enterprise Digital Strategy, I have built and scaled systems that focus on security, high-availability, and unmatched performance.
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-1">1+</h3>
                            <p className="text-gray-500 text-sm uppercase">Year Experience</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-1">15+</h3>
                            <p className="text-gray-500 text-sm uppercase">Projects Done</p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <StatCard
                            key={skill.name}
                            label="Skill Proficiency"
                            subLabel={skill.name} // Description placeholder
                            value={skill.level}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};
