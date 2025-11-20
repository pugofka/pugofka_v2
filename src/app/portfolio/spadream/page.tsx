'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Header from '@/components/Header';
import { ArrowRight, ArrowUpRight, CheckCircle, Layers, Zap, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SpaDreamPage() {
    const { openContact } = useUI();
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-8">
                            <ShoppingCart className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                E-commerce / Bitrix
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            Spa<span className="text-stroke text-transparent">Dream</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Премиальный интернет-магазин косметики.
                            Скорость загрузки менее 1 секунды, персонализация и глубокая интеграция с 1С.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Preview */}
            <section className="border-b border-border bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="relative aspect-video w-full overflow-hidden border-x border-border">
                        <Image
                            src="/cases/spadream_preview.png"
                            alt="SpaDream Website Preview"
                            fill
                            className="object-cover object-top"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-primary rounded-full" />
                            Задача
                        </h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p>
                                Spadream — интернет-магазин профессиональной косметики с брендами класса «Люкс».
                                Клиент обратился с задачей обновить устаревший сайт, который не поддерживал мобильные устройства,
                                медленно работал и имел низкую конверсию.
                            </p>
                            <p>
                                Ключевые требования:
                            </p>
                            <ul className="list-none pl-0 space-y-2">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Скорость загрузки страниц менее 1 секунды.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Полная адаптивность (Mobile First).
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Интеграция со складом и службами доставки.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-white rounded-full" />
                            Решение
                        </h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p>
                                Мы полностью переработали архитектуру проекта, перейдя на современный стек 1С-Битрикс.
                                Реализовали технологию «Композитный сайт» для мгновенной отдачи контента.
                            </p>
                            <p>
                                Вдрили умный поиск на базе ElasticSearch, который понимает опечатки и синонимы.
                                Разработали систему персональных рекомендаций, увеличившую средний чек.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 px-6 border-b border-border bg-surface/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Интерфейс</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/spadream_catalog.png"
                                alt="Catalog Page"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Catalog
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/spadream_product.png"
                                alt="Product Page"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Product Card
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack & Results */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                        <div className="p-8 border border-border bg-surface/20">
                            <Layers className="w-8 h-8 text-primary mb-6" />
                            <h3 className="text-xl font-bold uppercase mb-4">Tech Stack</h3>
                            <ul className="space-y-2 font-mono text-sm text-gray-400">
                                <li>1C-Bitrix: Business</li>
                                <li>Vue.js Components</li>
                                <li>ElasticSearch</li>
                                <li>Redis Caching</li>
                            </ul>
                        </div>
                        <div className="p-8 border border-border bg-surface/20">
                            <Zap className="w-8 h-8 text-primary mb-6" />
                            <h3 className="text-xl font-bold uppercase mb-4">Performance</h3>
                            <ul className="space-y-2 font-mono text-sm text-gray-400">
                                <li>Load Time: 0.8s</li>
                                <li>Google PageSpeed: 90+</li>
                                <li>Uptime: 99.9%</li>
                            </ul>
                        </div>
                        <div className="p-8 border border-border bg-surface/20">
                            <CheckCircle className="w-8 h-8 text-primary mb-6" />
                            <h3 className="text-xl font-bold uppercase mb-4">Integrations</h3>
                            <ul className="space-y-2 font-mono text-sm text-gray-400">
                                <li>1C: Enterprise</li>
                                <li>Payment Gateways</li>
                                <li>Delivery Services</li>
                                <li>SMS / Email</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { value: "+10%", label: "Рост конверсии" },
                            { value: "x2", label: "Глубина просмотра" },
                            { value: "24/7", label: "Поддержка" }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 border border-border bg-background hover:border-primary transition-colors group">
                                <div className="text-5xl md:text-6xl font-bold text-stroke text-transparent group-hover:text-primary transition-colors mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Case Navigation */}
            <section className="py-24 px-6 text-center">
                <button onClick={openContact} className="inline-flex flex-col items-center gap-4 group">
                    <span className="text-gray-500 font-mono uppercase tracking-widest text-sm">Хотите так же?</span>
                    <span className="text-4xl md:text-6xl font-bold uppercase group-hover:text-primary transition-colors">
                        Обсудить проект
                    </span>
                </button>
            </section>
        </main>
    );
}
