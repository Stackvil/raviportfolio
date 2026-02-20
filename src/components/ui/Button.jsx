import { motion } from "framer-motion";

export const Button = ({
    children,
    variant = "primary",
    className = "",
    fullWidth = false,
    ...props
}) => {
    const baseStyles = "relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group";

    const variants = {
        primary: "bg-primary text-white shadow-lg hover:shadow-primary/25 border border-primary/20",
        secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10 backdrop-blur-sm",
        outline: "bg-transparent text-white border border-white/20 hover:border-primary/50 hover:text-primary",
        glow: "bg-gradient-to-r from-primary to-orange-600 text-white shadow-xl shadow-primary/20 hover:shadow-orange-500/30",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            {...props}
        >
            {/* Glow effect for primary/glow variants */}
            {(variant === 'primary' || variant === 'glow') && (
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            )}
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.button>
    );
};
