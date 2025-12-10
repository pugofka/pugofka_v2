'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const cases = [
    {
        id: 1,
        title: 'сайт Kapous',
        category: 'Highload / Microservices / Bitrix',
        image: '/cases/kapous_web_home.png',
        year: '2024',
        link: '/portfolio/kapous-web'
    },
    {
        id: 2,
        title: 'Мобильное приложение Kapous',
        category: 'App / React Native',
        year: '2024',
        image: '/cases/kapous_app_catalog.png',
        link: '/portfolio/kapous-app'
    },
    {
        id: 3,
        title: 'SpaDream',
        category: 'E-commerce / Bitrix',
        image: '/cases/spadream_preview.png',
        year: '2024',
        link: '/portfolio/spadream'
    },
    {
        id: 4,
        title: 'Открытая школа бизнеса',
        category: 'Education / Bitrix24',
        image: '/cases/obs_preview.png',
        year: '2024',
        link: '/portfolio/obs'
    },
    {
        id: 5,
        title: 'АврораСпецсталь',
        category: 'E-commerce / Highload / AI',
        image: '/cases/avrora-specstal-main.png',
        year: '2025',
        link: '/portfolio/avrora-specstal'
    },
    {
        id: 6,
        title: 'Шарик.СПБ',
        category: 'B2B E-commerce / SAP',
        image: '/cases/sharik-spb-main.png',
        year: '2025',
        link: '/portfolio/sharik-spb'
    },
    {
        id: 7,
        title: 'Веселая Затея',
        category: 'Federal Support / Microservices',
        image: '/cases/zatey-main.png',
        year: '2025',
        link: '/portfolio/zatey'
    },
    {
        id: 8,
        title: 'Печать на шарах',
        category: 'Service / Automation',
        image: '/cases/zatey-print-main.png',
        year: '2025',
        link: '/portfolio/zatey-print'
    }
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="pt-32 pb-16 border-b border-border">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-sm font-mono uppercase tracking-widest text-primary">
                                Portfolio
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
                            ВСЕ <span className="text-transparent text-stroke">ПРОЕКТЫ</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl font-mono">
                            Избранные кейсы, демонстрирующие наш подход к разработке высоконагруженных систем и мобильных приложений.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cases Grid */}
            <section className="border-b border-border">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {cases.map((item, index) => (
                        <Link href={item.link} key={item.id} className="block group relative border-b border-r border-border aspect-[4/3] overflow-hidden cursor-pointer bg-zinc-900">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full w-full relative"
                            >
                                {/* Custom Preview for Mobile App */}
                                {item.id === 3 ? (
                                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-zinc-900 p-8 group-hover:scale-105 transition-transform duration-700">
                                        <div className="relative w-[30%] aspect-[9/19.5] rounded-xl overflow-hidden border-2 border-zinc-700 shadow-xl translate-y-4 opacity-60 group-hover:opacity-80 transition-opacity">
                                            <Image src="/cases/kapous_app_filters.png" alt="Filters" fill className="object-cover" />
                                        </div>
                                        <div className="relative w-[35%] aspect-[9/19.5] rounded-xl overflow-hidden border-2 border-zinc-700 shadow-xl z-10">
                                            <Image src="/cases/kapous_app_catalog.png" alt="Catalog" fill className="object-cover" />
                                        </div>
                                        <div className="relative w-[30%] aspect-[9/19.5] rounded-xl overflow-hidden border-2 border-zinc-700 shadow-xl translate-y-4 opacity-60 group-hover:opacity-80 transition-opacity">
                                            <Image src="/cases/kapous_app_product.png" alt="Product" fill className="object-cover" />
                                        </div>
                                        {/* Gradient Overlay for Text Readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                    </div>
                                ) : (
                                    /* Standard Image Preview */
                                    item.image ? (
                                        <>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-surface to-background group-hover:scale-105 transition-transform duration-700" />
                                    )
                                )}

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-20">
                                    <div className="flex justify-between items-start">
                                        <span className="font-mono text-sm text-gray-300 drop-shadow-md">{item.year}</span>
                                        <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 drop-shadow-md" />
                                    </div>

                                    <div>
                                        <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2 drop-shadow-md">
                                            {item.category}
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold uppercase text-white drop-shadow-lg group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
