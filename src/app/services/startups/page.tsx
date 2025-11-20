'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Header from '@/components/Header';
import { ArrowRight, Rocket, Target, Clock, ShieldCheck, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function StartupsPage() {
    const { openContact } = useUI();
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 border-b border-border">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-8">
                            <Rocket className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                Startup Launchpad
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            From Zero <br />
                            <span className="text-stroke text-transparent">To One</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Запускаем MVP за 2-3 месяца. Превращаем идеи в работающий продукт.
                            Мы не просто пишем код, мы становимся вашим техническим партнером.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={openContact} className="bg-primary text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-red-600 transition-colors flex items-center gap-2">
                                Запустить стартап <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Process (Timeline) */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold uppercase mb-16 text-center">Путь к запуску</h2>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

                        {[
                            {
                                step: "01",
                                title: "Discovery & Audit",
                                desc: "Анализируем идею, конкурентов и технические риски. Формируем Roadmap.",
                                icon: Target
                            },
                            {
                                step: "02",
                                title: "MVP Development",
                                desc: "Разрабатываем основную функциональность. Фокус на Time-to-Market.",
                                icon: Clock
                            },
                            {
                                step: "03",
                                title: "Launch & Feedback",
                                desc: "Запуск первой версии, сбор метрик и обратной связи от пользователей.",
                                icon: Rocket
                            },
                            {
                                step: "04",
                                title: "Scaling",
                                desc: "Масштабирование архитектуры под рост нагрузки. Добавление новых фич.",
                                icon: TrendingUp
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 mb-16 relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Node */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 hidden md:block shadow-[0_0_10px_rgba(230,62,43,0.5)]" />

                                <div className="w-full md:w-1/2 p-8 border border-border bg-surface/50 hover:bg-surface transition-colors">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-4xl font-bold text-stroke text-transparent opacity-50">{item.step}</span>
                                        <item.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase mb-4">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-24 bg-background border-b border-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                                Без Vendor Lock
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Весь код и инфраструктура принадлежат вам. Мы используем открытые технологии (Open Source), чтобы вы не зависели от нас вечно.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                                <TrendingUp className="w-6 h-6 text-primary" />
                                Технический Партнер
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Мы не просто исполнители. Мы помогаем принимать правильные продуктовые решения, чтобы сэкономить бюджет и время.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                                <Clock className="w-6 h-6 text-primary" />
                                Скорость
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Используем готовые наработки и бойлерплейты для старта. Не изобретаем велосипед там, где это не нужно.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
