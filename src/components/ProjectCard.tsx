'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    id: number | string;
    title: string;
    category: string;
    image?: string;
    link: string;
    year?: string;
    index: number;
}

export default function ProjectCard({ id, title, category, image, link, year, index }: ProjectCardProps) {
    return (
        <Link href={link} className="block group relative border-b border-r border-border aspect-[4/3] overflow-hidden cursor-pointer bg-zinc-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full w-full relative"
            >
                {/* Custom Preview for Mobile App (ID 2 - Kapous App) */}
                {id === 2 ? (
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity" />
                    </div>
                ) : (
                    /* Standard Image Preview */
                    image ? (
                        <>
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-700" />
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-surface to-background group-hover:scale-105 transition-transform duration-700">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                        </div>
                    )
                )}

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                        <span className="font-mono text-sm text-gray-300" style={{ textShadow: '0 2px 4px rgba(0,0,0,1)' }}>{year}</span>
                        <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 drop-shadow-md" />
                    </div>

                    <div>
                        <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                            {category}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold uppercase text-white group-hover:text-primary transition-colors" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
                            {title}
                        </h3>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
