'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const cases = [
    {
        id: 1,
        title: 'SpaDream',
        category: 'E-commerce / Bitrix',
        image: '/cases/spadream_preview.png',
        year: '2024',
        link: '/portfolio/spadream'
    },
    {
        id: 2,
        title: 'Kapous Professional',
        category: 'Highload / Microservices',
        image: '/cases/kapous_web_home.png',
        year: '2024',
        link: '/portfolio/kapous-web'
    },
    {
        id: 3,
        title: 'Kapous Mobile',
        category: 'App / React Native',
        image: '/cases/kapous_app_catalog.png',
        year: '2024',
        link: '/portfolio/kapous-app'
    },
    {
        id: 4,
        title: 'Logistics CRM',
        category: 'Bitrix24 / Automation',
        image: '/cases/case3.jpg', // Placeholder
        year: '2024',
        link: '#'
    }
];

export default function CasesGrid() {
    return (
        <section className="py-32 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 text-primary text-xs font-mono uppercase tracking-widest mb-4">
                        Selected Works
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none">
                        Наши <span className="text-stroke text-transparent">Кейсы</span>
                    </h2>
                </div>
                <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-xl font-bold uppercase hover:text-primary transition-colors">
                    Все проекты <ArrowUpRight className="w-6 h-6" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
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

            <div className="p-6 md:hidden border-b border-border text-center">
                <Link href="/portfolio" className="inline-flex items-center gap-2 text-lg font-bold uppercase hover:text-primary transition-colors">
                    Все проекты <ArrowUpRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}
