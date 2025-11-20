'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
    {
        name: "Kapous",
        logo: "/clients/kapous.svg",
        category: "E-commerce",
    },
    {
        name: "SpaDream",
        logo: "/clients/spadream.svg",
        category: "E-commerce",
    },
    {
        name: "New Balance",
        logo: "/clients/new-balance.svg",
        category: "Retail",
    },
    {
        name: "Timberland",
        logo: "/clients/timberland.svg",
        category: "Retail",
    },
    {
        name: "AlfaStrakhovanie",
        logo: "/clients/alfastrah.svg",
        category: "Insurance",
    },
    {
        name: "Vilebrequin",
        logo: "/clients/vilebrequin.svg",
        category: "Retail",
    },
    {
        name: "Bitrix24",
        logo: "/clients/bitrix24.svg",
        category: "Partner",
    },
    {
        name: "1C-Bitrix",
        logo: "/clients/1c-bitrix.svg",
        category: "Partner",
    },
];

export default function ClientLogos() {
    return (
        <section className="py-24 border-b border-border bg-background overflow-hidden relative group/section">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-border" />
                    <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground/60">
                        Доверие / Clients
                    </h2>
                    <div className="h-px w-12 bg-border" />
                </div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <div className="flex relative z-0">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 50,
                    }}
                    className="flex gap-24 md:gap-40 whitespace-nowrap px-20 group-hover/section:[animation-play-state:paused]"
                >
                    {[...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center gap-8 min-w-[200px] cursor-pointer relative"
                        >
                            {/* Hover Glow Background */}
                            <div className="absolute inset-0 -z-10 bg-white/0 group-hover:bg-white/5 blur-2xl rounded-full transition-all duration-500 scale-0 group-hover:scale-150" />

                            {client.logo ? (
                                <div className="relative h-12 w-36 md:h-16 md:w-48 transition-all duration-500 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        fill
                                        className="object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                                    />
                                </div>
                            ) : (
                                <div className="h-12 md:h-16 flex items-center relative group-hover:scale-110 transition-transform duration-500">
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white/40 group-hover:text-white transition-colors duration-500">
                                        {client.name}
                                    </h3>
                                </div>
                            )}

                            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <div className="h-px w-8 bg-red-500" />
                                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                                    {client.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
