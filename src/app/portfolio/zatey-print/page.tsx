'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Header from '@/components/Header';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Eye, Image as ImageIcon, Layers, MousePointerClick, Printer, Settings, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ZateyPrintPage() {
    const { openContact } = useUI();
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 md:px-6 border-b border-border">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-8">
                        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-primary transition-colors uppercase tracking-wider">
                            <ArrowLeft className="w-4 h-4" />
                            Назад в портфолио
                        </Link>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-8">
                            <Printer className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                Service / React / Automation
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            Печать <br />
                            <span className="text-stroke text-transparent">На Шарах</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Онлайн-конструктор печати, который автоматизирует расчет стоимости и подготовку макетов.
                            От ручной обработки заявок к полной автоматизации.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Preview */}
            <section className="border-b border-border bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="relative aspect-video w-full overflow-hidden border-x border-border">
                        <Image
                            src="/cases/zatey-print-main.png"
                            alt="Zatey Print Service Main"
                            fill
                            className="object-cover object-top"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                    </div>
                </div>
            </section>

            {/* Challenge & Context */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-primary rounded-full" />
                            Контекст
                        </h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p>
                                <strong>Веселая Затея</strong> имеет собственное производство печати на шарах. Услуга популярна среди B2B и B2C клиентов.
                            </p>
                            <p>
                                Ранее процесс заказа был полностью ручным: звонки, e-mail переписки, долгие согласования макетов и ручные расчеты менеджеров.
                            </p>
                            <p className="text-white font-bold mt-6">Проблемы:</p>
                            <ul className="list-none pl-0 space-y-2 mt-2">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Клиент не знает цену до звонка менеджера.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Менеджеры тратят часы на рутинные просчеты.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Нет визуализации результата для клиента.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-white rounded-full" />
                            Задачи
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 border border-border bg-surface/20">
                                <MousePointerClick className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Онлайн-конструктор</h4>
                                <p className="text-sm text-gray-400">Инструмент для самостоятельной сборки заказа клиентом.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Zap className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Авто-расчет</h4>
                                <p className="text-sm text-gray-400">Мгновенный пересчет цены в зависимости от 10+ параметров (тираж, цвета, материал).</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Eye className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Визуализация</h4>
                                <p className="text-sm text-gray-400">Live-превью макета на виртуальном шаре.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Settings className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Автоматизация</h4>
                                <p className="text-sm text-gray-400">Формирование готовой заявки для производства без участия менеджера.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Visualization */}
            <section className="py-24 px-6 border-b border-border bg-surface/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-16 text-center">Как это работает</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Layers, title: "Выбор шара", desc: "Тип, размер, цвет, материал" },
                            { icon: ImageIcon, title: "Загрузка Лого", desc: "Или выбор картинки из библиотеки" },
                            { icon: Settings, title: "Настройка", desc: "Цвет краски, стороны печати" },
                            { icon: CheckCircle, title: "Расчет", desc: "Мгновенная смета и заказ" }
                        ].map((step, i) => (
                            <div key={i} className="relative p-6 border border-border bg-background hover:border-primary transition-colors group">
                                <step.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold uppercase mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-400">{step.desc}</p>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border -z-10" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Gallery */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Интерфейс</h2>
                    <div className="grid grid-cols-1 gap-12">
                        <div className="relative aspect-[16/9] border border-border group overflow-hidden">
                            <Image
                                src="/cases/zatey-print-constructor.png"
                                alt="Constructor Interface"
                                fill
                                className="object-cover object-top"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Конструктор заказа
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                                <Image
                                    src="/cases/zatey-print-step1.png"
                                    alt="Step 1"
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                                <Image
                                    src="/cases/zatey-print-step2.png"
                                    alt="Step 2"
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Результаты</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <Zap className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">0 ошибок</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Точность</h3>
                            <p className="text-gray-400 text-sm">
                                Отсутствие человеческого фактора в расчетах. Клиент сам формирует ТЗ.
                            </p>
                        </div>

                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <Clock className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">x3</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Скорость</h3>
                            <p className="text-gray-400 text-sm">
                                Сокращение времени обработки заявки менеджером в несколько раз.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack List */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xl font-bold uppercase mb-8 text-center text-gray-500 tracking-widest">Технологии</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {["React", "Konva.js (Canvas)", "Laravel", "PostgreSQL", "REST API"].map((tech, i) => (
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
                    <span className="text-gray-500 font-mono uppercase tracking-widest text-sm">Нужен сложный калькулятор?</span>
                    <span className="text-4xl md:text-6xl font-bold uppercase group-hover:text-primary transition-colors">
                        Обсудить задачу
                    </span>
                </button>
            </section>
        </main>
    );
}
