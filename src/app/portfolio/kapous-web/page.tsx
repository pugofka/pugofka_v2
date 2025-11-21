'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Header from '@/components/Header';
import { ArrowRight, ArrowUpRight, CheckCircle, Layers, Zap, Globe, Database, Server, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function KapousWebPage() {
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
                            <Globe className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                E-commerce / Highload
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            Kapous <br />
                            <span className="text-stroke text-transparent">.ru</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Крупнейший интернет-магазин профессиональной косметики.
                            Экосистема из 9 микросервисов, сложная B2B-логика и интеграция с ERP.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Preview */}
            <section className="border-b border-border bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="relative aspect-video w-full overflow-hidden border-x border-border">
                        <Image
                            src="/cases/kapous_web_home.png"
                            alt="Kapous Website Preview"
                            fill
                            className="object-cover object-top"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                    </div>
                </div>
            </section>

            {/* Architecture & Challenge */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-primary rounded-full" />
                            Масштаб
                        </h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p>
                                Kapous — это ведущий бренд косметики с базой в сотни тысяч клиентов.
                                Продукцией пользуются как обычные покупатели, так и частные мастера, салоны красоты и дистрибьюторы по всей стране.
                            </p>
                            <p>
                                Ключевые особенности:
                            </p>
                            <ul className="list-none pl-0 space-y-2">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Разделение B2C и B2B потоков (разные цены, условия, склады).
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Независимые микросервисы для отказоустойчивости.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Сложная кастомная интеграция с 1С (обмен заказами, остатками, контрагентами).
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Мобильное приложение для iOS и Android.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-white rounded-full" />
                            Технологии
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 border border-border bg-surface/20">
                                <Server className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Микросервисы</h4>
                                <p className="text-sm text-gray-400">Битрикс и выделенные сервисы для чекаута, поиска и интеграций с логистикой.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Database className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">ElasticSearch</h4>
                                <p className="text-sm text-gray-400">Мгновенный поиск по тысячам SKU с учетом морфологии, фасетные фильтры</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Users className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">B2B Кабинет</h4>
                                <p className="text-sm text-gray-400">Персональные условия, оптовые прайс-листы.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Zap className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Highload</h4>
                                <p className="text-sm text-gray-400">Оптимизация под высокие нагрузки в сезонные пики.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 px-6 border-b border-border bg-surface/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Экосистема</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/kapous_web_catalog.png"
                                alt="Kapous Catalog"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Умный каталог
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/kapous_web_b2b.png"
                                alt="Kapous B2B Section"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Раздел партнеров
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack List */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xl font-bold uppercase mb-8 text-center text-gray-500 tracking-widest">Стек технологий</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {["1С-Битрикс", "PHP 8.4", "MySQL", "ElasticSearch", "Redis", "Docker", "Laravel", "Go", "NodeJs"].map((tech, i) => (
                            <div key={i} className="px-6 py-3 border border-border bg-surface/10 font-mono text-sm uppercase hover:border-primary transition-colors cursor-default">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Case Navigation */}
            <section className="py-24 px-6 text-center">
                <button onClick={openContact} className="inline-flex flex-col items-center gap-4 group">
                    <span className="text-gray-500 font-mono uppercase tracking-widest text-sm">Нужен масштабный проект?</span>
                    <span className="text-4xl md:text-6xl font-bold uppercase group-hover:text-primary transition-colors">
                        Обсудить разработку
                    </span>
                </button>
            </section>
        </main>
    );
}
