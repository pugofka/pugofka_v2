'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

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
        image: '/cases/sharik-main.png',
        year: '2025',
        link: '/portfolio/sharik-spb'
    },
    {
        id: 7,
        title: 'Веселая Затея',
        category: 'Federal Support / Microservices',
        image: '/cases/veselaya-zateya-main.png',
        year: '2025',
        link: '/portfolio/zatey'
    },
    {
        id: 8,
        title: 'Печать на шарах',
        category: 'Service / Automation',
        image: '/cases/zatey-print-constructor.png',
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
                        <ProjectCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            category={item.category}
                            image={item.image}
                            link={item.link}
                            index={index}
                            year={item.year}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
