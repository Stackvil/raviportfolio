import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "./ui/Button";

export const HireMeModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Website Development",
        projectDetails: ""
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

        // WhatsApp Integration
        const phoneNumber = "8790527857";
        const text = `*New Project Inquiry*
        
*Name:* ${formData.name}
*Email:* ${formData.email}
*Service:* ${formData.service}

*Project Details:*
${formData.projectDetails}`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, "_blank");

        setIsSuccess(true);
        setFormData({
            name: "",
            email: "",
            service: "Website Development",
            projectDetails: ""
        });
        setTimeout(() => {
            setIsSuccess(false);
            onClose();
        }, 1000);
        setIsSubmitting(false);
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
                    />

                    {/* Modal Container - Flexbox centering is more robust than absolute positioning */}
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-lg bg-[#0a0a0a] border border-white/20 shadow-2xl shadow-primary/10 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/10 flex justify-between items-start sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-sm z-10">
                                <div>
                                    <h3 className="text-2xl font-bold font-heading text-white mb-2">🚀 Start Your Project</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Need a Website? DevOps Setup? Digital Marketing Strategy?
                                        <br />
                                        Let’s discuss your requirements.
                                    </p>
                                </div>
                                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6">
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 text-green-500">
                                            <CheckCircle size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2">Request Sent!</h4>
                                        <p className="text-gray-400">Thanks for reaching out. I'll get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Name & Email */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs text-gray-500 uppercase tracking-wider">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs text-gray-500 uppercase tracking-wider">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        {/* Service Selection */}
                                        <div className="space-y-1">
                                            <label className="text-xs text-gray-500 uppercase tracking-wider">What Service Do You Need?</label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors appearance-none"
                                            >
                                                <option className="bg-dark text-gray-300" value="Website Development">Website Development</option>
                                                <option className="bg-dark text-gray-300" value="DevOps & Deployment">DevOps & Deployment</option>
                                                <option className="bg-dark text-gray-300" value="Digital Marketing">Digital Marketing</option>
                                                <option className="bg-dark text-gray-300" value="Full Digital Setup">Full Digital Setup</option>
                                                <option className="bg-dark text-gray-300" value="Other">Other</option>
                                            </select>
                                        </div>



                                        {/* Project Details */}
                                        <div className="space-y-1">
                                            <label className="text-xs text-gray-500 uppercase tracking-wider">Describe Your Project</label>
                                            <textarea
                                                name="projectDetails"
                                                value={formData.projectDetails}
                                                onChange={handleChange}
                                                required
                                                rows="4"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                                                placeholder="Tell me about your requirements..."
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-2">
                                            <Button
                                                type="submit"
                                                variant="glow"
                                                className="w-full justify-center py-4 text-base"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>Sending... <Loader2 className="animate-spin ml-2" size={18} /></>
                                                ) : (
                                                    <>SEND MESSAGE <ArrowRight className="ml-2" size={18} /></>
                                                )}
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};
