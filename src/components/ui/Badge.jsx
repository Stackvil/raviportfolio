import { motion } from "framer-motion";

export const Badge = ({ children, className = "" }) => {
    return (
        <motion.span
            className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        bg-primary/10 text-primary border border-primary/20
        hover:bg-primary/20 hover:border-primary/30 transition-colors cursor-default
        ${className}
      `}
            whileHover={{ scale: 1.05 }}
        >
            {children}
        </motion.span>
    );
};
