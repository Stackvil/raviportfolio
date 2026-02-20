import { Section } from "../components/ui/Section";
import { testimonials } from "../constants";
import { Quote } from "lucide-react";

export const Testimonials = () => {
    return (
        <Section id="testimonials" className="bg-dark/50 py-32">
            <div className="flex items-center gap-3 mb-12 justify-center">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary text-sm tracking-widest uppercase font-bold">Testimonials</span>
                <span className="h-px w-8 bg-primary"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white text-center mb-16">
                Trusted By <span className="text-gray-500">Clients.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 p-8 hover:border-primary/30 transition-colors relative group">
                        <Quote className="text-primary/20 mb-6 absolute top-8 right-8 group-hover:text-primary/40 transition-colors" size={60} />

                        <p className="text-gray-300 mb-8 text-lg leading-relaxed relative z-10">
                            "{testimonial.content}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm uppercase tracking-wide">{testimonial.name}</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-wider">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
