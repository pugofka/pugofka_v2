'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import { ArrowRight, ArrowUpRight, Smartphone, Code, Zap, Wifi } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function KapousAppPage() {
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
                            <Smartphone className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                Mobile App / React Native
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-8 leading-none">
                            Kapous <br />
                            <span className="text-stroke text-transparent">Mobile</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Нативное мобильное приложение для iOS и Android.
                            Полный функционал магазина в кармане: каталог, умный поиск, push-уведомления.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Preview */}
            <section className="border-b border-border bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="relative aspect-video w-full overflow-hidden border-x border-border flex items-center justify-center bg-zinc-900">
                        {/* Composition of 3 screens for the main preview */}
                        <div className="relative w-full h-full flex items-center justify-center gap-4 scale-90 md:scale-100">
                            <div className="relative w-[20%] aspect-[9/19.5] rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl translate-y-12 opacity-80 bg-black">
                                <Image src="/cases/kapous_app_filters.png" alt="Filters" fill className="object-contain" />
                            </div>
                            <div className="relative w-[22%] aspect-[9/19.5] rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl z-10 bg-black">
                                <Image src="/cases/kapous_app_catalog.png" alt="Catalog" fill className="object-contain" />
                            </div>
                            <div className="relative w-[20%] aspect-[9/19.5] rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl translate-y-12 opacity-80 bg-black">
                                <Image src="/cases/kapous_app_product.png" alt="Product" fill className="object-contain" />
                            </div>
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Features & Stack */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-primary rounded-full" />
                            Функционал
                        </h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p className="mb-12">
                                Приложение разработано на React Native, что позволило использовать единую кодовую базу для iOS и Android,
                                сохраняя высокую производительность и нативный UX.
                            </p>
                            <ul className="list-none pl-0 space-y-8">
                                <li className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-primary">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold uppercase text-white mb-2">Быстрый заказ</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Удобный чекаут с сохранением карт и адресов доставки.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-primary">
                                        <Wifi className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold uppercase text-white mb-2">Push-уведомления</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Персональные предложения и статусы заказов.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-primary">
                                        <Code className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold uppercase text-white mb-2">Единый API</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Синхронизация с сайтом в реальном времени через REST API.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-surface/20 border border-border p-8">
                        <h3 className="text-xl font-bold uppercase mb-6 text-primary">Tech Stack</h3>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2 font-mono text-sm">
                                    <span>Framework</span>
                                    <span className="text-white">React Native</span>
                                </div>
                                <div className="h-1 bg-surface w-full overflow-hidden">
                                    <div className="h-full bg-primary w-[90%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2 font-mono text-sm">
                                    <span>State Management</span>
                                    <span className="text-white">Redux Toolkit</span>
                                </div>
                                <div className="h-1 bg-surface w-full overflow-hidden">
                                    <div className="h-full bg-primary w-[80%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2 font-mono text-sm">
                                    <span>API</span>
                                    <span className="text-white">REST / Axios</span>
                                </div>
                                <div className="h-1 bg-surface w-full overflow-hidden">
                                    <div className="h-full bg-primary w-[95%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2 font-mono text-sm">
                                    <span>Maps</span>
                                    <span className="text-white">Yandex Maps SDK</span>
                                </div>
                                <div className="h-1 bg-surface w-full overflow-hidden">
                                    <div className="h-full bg-primary w-[70%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 px-6 border-b border-border bg-surface/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Интерфейс</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { src: '/cases/kapous_app_catalog.png', label: 'Каталог' },
                            { src: '/cases/kapous_app_filters.png', label: 'Фильтры' },
                            { src: '/cases/kapous_app_product.png', label: 'Товар' },
                            { src: '/cases/kapous_app_cart.png', label: 'Корзина' },
                        ].map((screen, i) => (
                            <div key={i} className="group relative aspect-[9/19.5] rounded-2xl overflow-hidden border border-border shadow-lg bg-zinc-950">
                                <Image
                                    src={screen.src}
                                    alt={screen.label}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                    <span className="text-xs font-mono uppercase text-gray-300">{screen.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Case Navigation */}
            <section className="py-24 px-6 text-center">
                <Link href="/#contact" className="inline-flex flex-col items-center gap-4 group">
                    <span className="text-gray-500 font-mono uppercase tracking-widest text-sm">Нужно мобильное приложение?</span>
                    <span className="text-4xl md:text-6xl font-bold uppercase group-hover:text-primary transition-colors">
                        Заказать разработку
                    </span>
                </Link>
            </section>
        </main>
    );
}
