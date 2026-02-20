import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-gray-950 py-12 border-t border-gray-800 relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-2">
                        Portfolio.
                    </h2>
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Ravi Sankar. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/RaviSankar-Dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/ravi-sankar-kandra-1948a5323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:ravisankar@stackvil.com" className="text-gray-400 hover:text-primary transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer >
    );
};
