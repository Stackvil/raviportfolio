import { motion } from "framer-motion";

export const Section = ({
    children,
    id,
    className = "",
    centered = false
}) => {
    return (
        <section
            id={id}
            className={`
        relative py-20 px-4 md:px-0 w-full overflow-hidden
        ${centered ? 'flex flex-col items-center text-center' : ''}
        ${className}
      `}
        >
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};
