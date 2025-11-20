'use client';

import { motion } from 'framer-motion';

const technologies = [
    'Laravel', 'Go', 'Python', 'Bitrix', 'Next.js', 'React', 'PostgreSQL', 'Docker', 'Redis', 'TypeScript'
];

export default function TechStack() {
    return (
        <section className="py-8 border-b border-border bg-background overflow-hidden">
            <div className="flex">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    className="flex gap-16 whitespace-nowrap px-16"
                >
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-xl md:text-2xl font-mono font-bold text-gray-400 uppercase tracking-wider">
                                {tech}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
