import { motion } from "framer-motion";

export const Card = ({ children, className = "", hover = true, ...props }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
            className={`
        relative bg-white/5 backdrop-blur-xl border border-white/10 
        rounded-2xl p-6 overflow-hidden
        hover:border-white/20 hover:bg-white/10 transition-colors
        ${className}
      `}
            {...props}
        >
            {/* Gradient blob effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-colors" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
