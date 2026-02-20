import { Section } from "../components/ui/Section";
import { services } from "../constants";
import { ArrowUpRight } from "lucide-react";

export const Services = () => {
    return (
        <Section id="services" className="bg-dark py-32 border-t border-white/5">
            <div className="flex items-center gap-3 mb-12">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary text-sm tracking-widest uppercase font-bold">What I Do?</span>
            </div>

            <div className="flex flex-col">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 hover:border-primary/50 transition-colors cursor-pointer"
                    >
                        <div className="flex items-start gap-8">
                            <span className="text-gray-600 font-mono text-sm group-hover:text-primary transition-colors">
                                0{index + 1}
                            </span>
                            <div>
                                <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4 group-hover:text-gray-300 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 max-w-md group-hover:text-gray-400">
                                    {service.description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-0">
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-300">
                                <ArrowUpRight size={24} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
