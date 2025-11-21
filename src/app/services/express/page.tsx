'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Header from '@/components/Header';
import { ArrowRight, MonitorPlay, Zap, LayoutTemplate, CheckCircle, Shield, Clock, LifeBuoy } from 'lucide-react';
import Link from 'next/link';
import Guarantees from '@/components/Guarantees';

export default function ExpressPage() {
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
                            <MonitorPlay className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                Express Web
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            Fast <br />
                            <span className="text-stroke text-transparent">Launch</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Быстрый запуск на готовых решениях. Отдельная команда для старта продаж за 1-2 недели.
                            Идеально для малого бизнеса и проверки гипотез.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={openContact} className="bg-primary text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-red-600 transition-colors flex items-center gap-2">
                                Запустить быстро <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
                        {[
                            {
                                icon: Zap,
                                title: "1-2 Недели",
                                desc: "Срок запуска. Мы не пишем код с нуля, а настраиваем готовое решение под ваши задачи."
                            },
                            {
                                icon: LayoutTemplate,
                                title: "Готовые Шаблоны",
                                desc: "Используем проверенные решения из Маркетплейса (Аспро, Digital Web и др.)."
                            },
                            {
                                icon: CheckCircle,
                                title: "Базовая SEO",
                                desc: "Сайт сразу готов к продвижению. Настроены мета-теги, карта сайта и robots.txt."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-background p-10 group hover:bg-surface transition-colors"
                            >
                                <item.icon className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-2xl font-bold uppercase mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 px-6 border-b border-border bg-background">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Что входит в запуск</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Лицензия 1С-Битрикс", desc: "Подберем подходящую редакцию под ваши задачи. Официальный ключ." },
                            { title: "Готовое Решение", desc: "Лицензия на шаблон (Аспро, Digital Web) из Маркетплейса." },
                            { title: "Мобильная Версия", desc: "Адаптивный дизайн под смартфоны и планшеты." },
                            { title: "Настройка Почты", desc: "Корпоративная почта на вашем домене (Yandex/Mail.ru)." },
                            { title: "Базовое SEO", desc: "Настройка robots.txt, sitemap.xml и мета-тегов главной страницы." },
                            { title: "Обучение", desc: "Персональное обучение менеджером: наполнение каталога, обработка заказов." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold uppercase mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guarantees Block */}
            <Guarantees items={[
                {
                    title: "Лицензионный софт",
                    description: "Мы — официальные партнеры 1С-Битрикс. Вы получаете официальную лицензию и обновления.",
                    icon: Shield
                },
                {
                    title: "Обучение",
                    description: "Проводим обучение в формате онлайн-звонка. Менеджер покажет, как управлять сайтом.",
                    icon: MonitorPlay
                },
                {
                    title: "Сроки",
                    description: "Фиксируем сроки запуска в договоре. Обычно это несколько рабочих дней.",
                    icon: Clock
                },
                {
                    title: "Поддержка",
                    description: "Бесплатный технический аудит при запуске. Подсветим точки роста и возможные проблемы.",
                    icon: LifeBuoy
                }
            ]} />
        </main>
    );
}
