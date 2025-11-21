'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Header from '@/components/Header';
import { ArrowRight, LifeBuoy, Shield, Clock, RefreshCw, Server, FileText, Scale } from 'lucide-react';
import Link from 'next/link';
import Guarantees from '@/components/Guarantees';

export default function SupportPage() {
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
                            <LifeBuoy className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                Support & SLA
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            Stable <br />
                            <span className="text-stroke text-transparent">Growth</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Мы не бросаем проекты после запуска. Поддерживаем то, что создали сами,
                            и берем на обслуживание чужой код. Мониторинг и развитие функционала.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={openContact} className="bg-primary text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-red-600 transition-colors flex items-center gap-2">
                                Обсудить поддержку <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Clock,
                            title: "SLA & Monitoring",
                            desc: "Гарантированное время реакции. Мониторинг доступности и производительности."
                        },
                        {
                            icon: RefreshCw,
                            title: "Миграция на современный стек",
                            desc: "Переводим проекты на актуальные технологии для ускорения разработки и снижения стоимости поддержки."
                        },
                        {
                            icon: Server,
                            title: "DevOps & Servers",
                            desc: "Настройка CI/CD, оптимизация серверов, резервное копирование и защита от DDoS."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 border border-border bg-surface/30 hover:bg-surface transition-colors"
                        >
                            <item.icon className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-2xl font-bold uppercase mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tools & Stack */}
            <section className="py-24 px-6 border-b border-border bg-background">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Принципы работы</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Task Tracker", label: "Прозрачность задач" },
                            { name: "SLA", label: "Гарантия реакции" },
                            { name: "Monitoring", label: "Контроль доступности" },
                            { name: "Planning", label: "Планирование ресурсов" },
                            { name: "Backups", label: "Сохранность данных" },
                            { name: "Security", label: "Защита от атак" },
                            { name: "Optimization", label: "Ускорение работы" },
                            { name: "Consulting", label: "Экспертиза" }
                        ].map((tool, i) => (
                            <div key={i} className="border border-border p-6 flex flex-col items-center justify-center text-center hover:border-primary transition-colors bg-surface/20">
                                <span className="font-bold uppercase mb-2">{tool.name}</span>
                                <span className="text-xs text-gray-500 font-mono uppercase">{tool.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guarantees Block */}
            <Guarantees items={[
                {
                    title: "Юридическая защита",
                    description: "Работаем строго по договору. Фиксируем SLA (Service Level Agreement) и ответственность за простои.",
                    icon: Shield
                },
                {
                    title: "Финансовая прозрачность",
                    description: "Детальные отчеты о затраченном времени (Time & Material). Вы всегда знаете, за что платите.",
                    icon: FileText
                },
                {
                    title: "Конфиденциальность",
                    description: "Подписываем NDA перед началом работ. Ваши данные и код под надежной защитой.",
                    icon: Scale
                },
                {
                    title: "Реакция 15 минут",
                    description: "Для критических инцидентов гарантируем время реакции до 15 минут в рабочее время.",
                    icon: Clock
                }
            ]} />
        </main>
    );
}
