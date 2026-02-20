import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/ravisankar@stackvil.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: "", email: "", message: "" });
                // Reset success message after 5 seconds
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact" className="bg-dark py-32 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center items-center gap-3 mb-6">
                    <span className="h-px w-8 bg-primary"></span>
                    <span className="text-primary text-sm tracking-widest uppercase font-bold">Get In Touch</span>
                    <span className="h-px w-8 bg-primary"></span>
                </div>

                <h2 className="text-5xl md:text-8xl font-bold font-heading text-white mb-8 tracking-tighter">
                    LET'S TALK
                </h2>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                    Have a project in mind? I'm always looking for new challenges and opportunities to collaborate.
                </p>

                <a
                    href="mailto:ravisankar@stackvil.com"
                    className="uppercase inline-block text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:to-primary transition-all duration-300 mb-16 border-b-2 border-white/10 hover:border-primary pb-2"
                >
                    ravisankar@stackvil.com
                </a>

                {isSuccess ? (
                    <div className="max-w-lg mx-auto bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-lg flex items-center gap-3">
                        <CheckCircle size={24} />
                        <div>
                            <h4 className="font-bold">Message Sent!</h4>
                            <p className="text-sm opacity-80">Thanks for reaching out. I'll get back to you soon.</p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 text-left">
                        <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-gray-600 focus:border-primary focus:outline-none transition-colors"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-gray-600 focus:border-primary focus:outline-none transition-colors"
                            />
                        </div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Message"
                            required
                            className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-gray-600 focus:border-primary focus:outline-none transition-colors resize-none"
                        ></textarea>

                        <Button
                            variant="glow"
                            className="w-full rounded-none justify-center uppercase tracking-widest hover:border-primary disabled:opacity-70 disabled:cursor-not-allowed"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>Sending... <Loader2 className="animate-spin" size={18} /></>
                            ) : (
                                <>Send Message <ArrowRight size={18} /></>
                            )}
                        </Button>
                    </form>
                )}

                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm uppercase tracking-wider">
                    <p>© 2026 Ravi Sankar. All Rights Reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Styleguide</a>
                        <a href="#" className="hover:text-white transition-colors">Licensing</a>
                        <a href="#" className="hover:text-white transition-colors">Changelog</a>
                    </div>
                </div>
            </div>
        </Section>
    );
};
