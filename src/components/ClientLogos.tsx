'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from 'framer-motion';

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

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
        name: "1С-Битрикс",
        logo: "/clients/1c-bitrix.svg",
        category: "Partner",
    },
];

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1500], [0, 2.5], {
        clamp: false
    });

    /**
     * This is a magic number for the wrap function.
     * It needs to be negative and large enough to cover the content width.
     * Since we duplicate content 4 times, -25% to -50% is a safe range usually,
     * but we need to experiment.
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    const isHovered = useRef(false);

    useAnimationFrame((t, delta) => {
        if (isHovered.current) return;

        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div
            className="parallax overflow-hidden flex flex-nowrap whitespace-nowrap"
            onMouseEnter={() => isHovered.current = true}
            onMouseLeave={() => isHovered.current = false}
        >
            <motion.div className="scroller flex flex-nowrap" style={{ x }}>
                <div className="flex flex-nowrap gap-12 md:gap-20 px-6 md:px-10">
                    {children}
                </div>
                <div className="flex flex-nowrap gap-12 md:gap-20 px-6 md:px-10">
                    {children}
                </div>
                <div className="flex flex-nowrap gap-12 md:gap-20 px-6 md:px-10">
                    {children}
                </div>
                <div className="flex flex-nowrap gap-12 md:gap-20 px-6 md:px-10">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}

export default function ClientLogos() {
    return (
        <section className="py-24 border-b border-border bg-background overflow-hidden relative group/section">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-border" />
                    <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground/60">
                        Доверие / Clients
                    </h2>
                    <div className="h-px w-12 bg-border" />
                </div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <div className="flex flex-col gap-12 md:gap-20 relative z-0">
                {/* Row 1: Left (Base) */}
                <ParallaxText baseVelocity={-0.4}>
                    {clients.map((client, index) => (
                        <LogoItem key={`row1-${index}`} client={client} />
                    ))}
                </ParallaxText>

                {/* Row 2: Right (Base) */}
                <ParallaxText baseVelocity={0.4}>
                    {clients.map((client, index) => (
                        <LogoItem key={`row2-${index}`} client={client} />
                    ))}
                </ParallaxText>
            </div>
        </section>
    );
}

function LogoItem({ client }: { client: typeof clients[0] }) {
    return (
        <div className="group flex flex-col items-center justify-center gap-8 min-w-[200px] md:min-w-[300px] cursor-pointer relative">
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
    );
}
