'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

const cases = [

    {
        id: 1,
        title: 'Интернет-магазин Kapous',
        category: 'Highload / Microservices',
        image: '/cases/kapous_web_home.png',
        link: '/portfolio/kapous-web'
    },
    {
        id: 2,
        title: 'Приложение Kapous',
        category: 'App / React Native',
        image: '/cases/kapous_app_catalog.png',
        link: '/portfolio/kapous-app'
    },
    {
        id: 3,
        title: 'SpaDream',
        category: 'E-commerce / Bitrix',
        image: '/cases/spadream_preview.png',
        link: '/portfolio/spadream'
    },
    {
        id: 4,
        title: 'Открытая школа бизнеса',
        category: 'Education / Bitrix Framework',
        image: '/cases/obs_preview.png',
        link: '/portfolio/obs'
    },
    {
        id: 5,
        title: 'АврораСпецсталь',
        category: 'E-commerce / Highload / AI',
        image: '/cases/avrora-specstal-main.png',
        link: '/portfolio/avrora-specstal'
    },
    {
        id: 6,
        title: 'Шарик.СПБ',
        category: 'B2B E-commerce / SAP',
        image: '/cases/sharik-main.png',
        link: '/portfolio/sharik-spb'
    },
    {
        id: 7,
        title: 'Веселая Затея',
        category: 'Federal Support / Microservices',
        image: '/cases/veselaya-zateya-main.png',
        link: '/portfolio/zatey'
    },
    {
        id: 8,
        title: 'Печать на шарах',
        category: 'Service / Automation',
        image: '/cases/zatey-print-constructor.png',
        link: '/portfolio/zatey-print'
    }
];

export default function CasesGrid() {
    return (
        <section className="py-32 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
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
                {cases.slice(0, 4).map((item, index) => (
                    <ProjectCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        image={item.image}
                        link={item.link}
                        index={index}
                        year="" // Not shown on homepage typically but required by component interface if strictly typed, but let's check interface
                    />
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
