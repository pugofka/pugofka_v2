'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function CompanyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center border-b border-border overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-sm font-mono uppercase tracking-widest text-primary">
                                Manifesto v2.0
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-12"
                        >
                            МЫ СТРОИМ <br />
                            <span className="text-transparent text-stroke">ЦИФРОВЫЕ</span> <br />
                            ЗАВОДЫ
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-mono border-l-2 border-primary pl-6"
                        >
                            Pugofka — это не креативное агентство. Это промышленный стандарт веб-разработки. Мы создаем системы, которые работают как швейцарские часы и растут вместе с вашим бизнесом.
                        </motion.p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 p-12 hidden md:block">
                    <div className="flex flex-col items-end gap-2 font-mono text-xs text-muted-foreground/40">
                        <span>SYS.STATUS: ONLINE</span>
                        <span>UPTIME: 99.99%</span>
                        <span>LOC: 59.9343° N, 30.3351° E</span>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 border-b border-border relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="sticky top-32 h-fit">
                            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
                                ФИЛОСОФИЯ <br />
                                <span className="text-primary">NO BULLSHIT</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-12 max-w-md">
                                Мы отказались от всего лишнего. Никаких бесконечных митингов, красивых презентаций без смысла и раздутых смет. Только инженерный подход и результат.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 border border-border bg-surface hover:border-primary transition-colors group">
                                    <Zap className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-mono font-bold uppercase mb-2">Скорость</h3>
                                    <p className="text-xs text-muted-foreground">Быстрый запуск MVP и итеративная разработка.</p>
                                </div>
                                <div className="p-6 border border-border bg-surface hover:border-primary transition-colors group">
                                    <Shield className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-mono font-bold uppercase mb-2">Надежность</h3>
                                    <p className="text-xs text-muted-foreground">Отказоустойчивая архитектура и тесты.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-0">
                            {[
                                {
                                    title: "ИНЖЕНЕРНАЯ КУЛЬТУРА",
                                    text: "Мы пишем код, который легко поддерживать. Мы используем типизацию, линтеры и CI/CD не потому что это модно, а потому что это гарантирует качество."
                                },
                                {
                                    title: "ПРОЗРАЧНОСТЬ",
                                    text: "Вы видите процесс работы в реальном времени. Никаких скрытых этапов или 'черных ящиков'. Мы работаем в ваших репозиториях и таск-трекерах."
                                },
                                {
                                    title: "БИЗНЕС-ФОКУС",
                                    text: "Мы не просто пишем код, мы решаем бизнес-задачи. Если задачу можно решить без кода — мы скажем об этом. Если нужно готовое решение — мы его внедрим."
                                }
                            ].map((item, index) => (
                                <div key={index} className="group border-b border-border py-16 hover:bg-surface transition-colors px-8 -mx-8">
                                    <div className="flex items-start gap-6">
                                        <span className="font-mono text-primary/50 text-xl">0{index + 1}</span>
                                        <div>
                                            <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Process Section - Production Line */}
            <section className="py-32 border-b border-border bg-surface overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
                            ПРОИЗВОДСТВЕННАЯ <br />
                            <span className="text-transparent text-stroke">ЛИНИЯ</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-border hidden md:block -translate-y-1/2" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "АНАЛИЗ", desc: "Декомпозиция задачи и ТЗ" },
                                { step: "02", title: "ПРОТОТИП", desc: "UX/UI и архитектура" },
                                { step: "03", title: "СБОРКА", desc: "Код, тесты, интеграции" },
                                { step: "04", title: "ЗАПУСК", desc: "Деплой и поддержка" }
                            ].map((item, index) => (
                                <div key={index} className="relative group">
                                    <div className="bg-background border border-border p-8 relative z-10 hover:border-primary transition-colors h-full flex flex-col justify-between">
                                        <div className="mb-8">
                                            <span className="text-4xl font-black text-border group-hover:text-primary/20 transition-colors">
                                                {item.step}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold uppercase mb-2">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground font-mono">{item.desc}</p>
                                        </div>

                                        {/* Connector Dot */}
                                        <div className="absolute top-1/2 -right-4 w-8 h-px bg-primary hidden md:block opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="py-32 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8">
                        ГОТОВЫ К ЗАПУСКУ?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 font-mono mb-12 max-w-2xl mx-auto">
                        Давайте обсудим ваш проект и построим эффективное решение.
                    </p>
                    <Link
                        href="/contacts"
                        className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 text-xl font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all border border-black hover:border-transparent"
                    >
                        Начать проект <ArrowRight />
                    </Link>
                </div>
            </section>
        </main>
    );
}
