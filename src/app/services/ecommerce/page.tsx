'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import { ArrowRight, Check, Database, Server, ShoppingCart, Zap, Code, Globe, Shield, Cpu, Network } from 'lucide-react';
import Link from 'next/link';

export default function EcommercePage() {
    const { openContact } = useUI();
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white pt-20">
            {/* 1. Hero: Business Value + Tech Reliability */}
            <section className="relative py-20 border-b border-border overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary text-primary font-mono text-xs uppercase tracking-widest mb-6">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                E-commerce Development
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] mb-6">
                                Интернет <br />
                                <span className="text-stroke">Магазины</span>
                            </h1>
                            <div className="flex gap-4 text-sm font-mono text-primary mb-6">
                                <span>// LARAVEL</span>
                                <span>// GO</span>
                                <span>// BITRIX</span>
                            </div>
                        </div>
                        <div className="max-w-lg mb-2">
                            <p className="text-xl text-gray-400 leading-relaxed">
                                Разрабатываем High-load интернет-магазины.
                                Строим надежные и масштабируемые системы на 1С-Битрикс, Laravel и Go.
                            </p>
                        </div>
                    </div>

                    {/* Business Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border">
                        {[
                            { label: 'Заказов в сутки', value: '5000+' },
                            { label: 'Отказоустойчивость', value: '99.9%' },
                            { label: 'Товаров в каталоге', value: '8M+' },
                            { label: 'Скорость загрузки', value: '<0.5s' },
                        ].map((item, i) => (
                            <div key={i} className="p-8 border-r border-border last:border-r-0 hover:bg-surface transition-colors">
                                <div className="text-3xl md:text-4xl font-mono font-bold text-white mb-2">{item.value}</div>
                                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. What We Do (Business Focus) */}
            <section className="py-24 border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-primary">01. Разработка</h3>
                            <p className="text-gray-400 mb-4">
                                Создаем удобные и быстрые магазины. Адаптивный дизайн, умный поиск,
                                личные кабинеты и программы лояльности.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500 font-mono">
                                <li>• High-load архитектура</li>
                                <li>• Стек: Laravel / Go / Bitrix</li>
                                <li>• Отказоустойчивые решения</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-primary">02. Интеграции</h3>
                            <p className="text-gray-400 mb-4">
                                Связываем сайт с вашей учетной системой. Заказы, остатки и цены
                                обновляются автоматически в реальном времени.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500 font-mono">
                                <li>• 1С:Предприятие / SAP / ERP</li>
                                <li>• CRM и CDP платформы</li>
                                <li>• Службы доставки</li>
                                <li>• Платежные шлюзы</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-primary">03. Поддержка</h3>
                            <p className="text-gray-400 mb-4">
                                Не бросаем после запуска. Обеспечиваем стабильную работу,
                                развиваем функционал и следим за серверами.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500 font-mono">
                                <li>• SLA и Гарантия</li>
                                <li>• Мониторинг доступности</li>
                                <li>• Развитие проекта</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Architecture Diagram (Simplified for Business) */}
            <section className="py-24 border-b border-border bg-surface/30">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold uppercase mb-4">Как это работает</h2>
                        <p className="text-gray-400">Единая экосистема для вашего бизнеса</p>
                    </div>

                    {/* Schematic Grid */}
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch border border-border">
                        {/* Left: ERP/1C */}
                        <div className="bg-background p-10 relative group border-r border-border">
                            <div className="flex justify-between items-start mb-8">
                                <Database className="w-8 h-8 text-gray-500" />
                                <span className="font-mono text-xs text-gray-600">СКЛАД И УЧЕТ</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">1С / ERP / SAP</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Ваша основная система учета. Мы не ломаем процессы, а встраиваемся в них.
                            </p>
                            <div className="space-y-2">
                                <div className="p-2 bg-surface border border-border text-xs font-mono text-gray-400">
                                    Товары и Цены
                                </div>
                                <div className="p-2 bg-surface border border-border text-xs font-mono text-gray-400">
                                    Заказы и Контрагенты
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="hidden md:flex absolute top-1/2 -right-4 z-10 items-center justify-center w-8 h-8 bg-background border border-border rounded-full">
                                <ArrowRight className="w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        {/* Center: Core */}
                        <div className="bg-surface p-10 relative border-r border-border">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                            <div className="flex justify-between items-start mb-8">
                                <Server className="w-10 h-10 text-primary" />
                                <span className="font-mono text-xs text-primary">САЙТ (ЯДРО)</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Платформа</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Мощный движок, который обрабатывает заказы и выдерживает наплыв покупателей.
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" /> Быстрый поиск
                                </div>
                                <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" /> Личный кабинет
                                </div>
                                <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" /> Корзина
                                </div>
                                <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" /> Онлайн-оплата
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="hidden md:flex absolute top-1/2 -right-4 z-10 items-center justify-center w-8 h-8 bg-background border border-primary rounded-full">
                                <ArrowRight className="w-4 h-4 text-primary" />
                            </div>
                        </div>

                        {/* Right: Frontend */}
                        <div className="bg-background p-10 relative group">
                            <div className="flex justify-between items-start mb-8">
                                <Globe className="w-8 h-8 text-gray-500" />
                                <span className="font-mono text-xs text-gray-600">ПОКУПАТЕЛЬ</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Витрина</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Удобный интерфейс для ваших клиентов на любом устройстве.
                            </p>
                            <div className="space-y-2">
                                <div className="p-2 bg-surface border border-border text-xs font-mono text-gray-400 flex justify-between">
                                    <span>Web Platform</span>
                                    <span className="text-white">Adaptive</span>
                                </div>
                                <div className="p-2 bg-surface border border-border text-xs font-mono text-gray-400 flex justify-between">
                                    <span>Mobile App</span>
                                    <span className="text-white">iOS / Android</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Tech Stack (Simplified) */}
            <section className="py-24 border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-0">
                        <h2 className="text-4xl font-bold uppercase leading-tight">
                            Надежные <br /> Технологии
                        </h2>
                        <p className="text-gray-400 max-w-md text-left md:text-right">
                            Используем современные инструменты, чтобы ваш бизнес работал стабильно.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border">
                        <div className="bg-background p-8 hover:bg-surface transition-colors">
                            <h4 className="font-mono text-xs text-gray-500 uppercase mb-4">Платформа</h4>
                            <div className="text-xl font-bold text-white">1С-Битрикс</div>
                            <div className="text-sm text-gray-400 mt-2">Мощная E-com платформа</div>
                        </div>
                        <div className="bg-background p-8 hover:bg-surface transition-colors">
                            <h4 className="font-mono text-xs text-gray-500 uppercase mb-4">Фреймворки</h4>
                            <div className="text-xl font-bold text-white">Laravel / Go</div>
                            <div className="text-sm text-gray-400 mt-2">High-load и Микросервисы</div>
                        </div>
                        <div className="bg-background p-8 hover:bg-surface transition-colors">
                            <h4 className="font-mono text-xs text-gray-500 uppercase mb-4">Frontend</h4>
                            <div className="text-xl font-bold text-white">React / Vue</div>
                            <div className="text-sm text-gray-400 mt-2">Быстрый интерфейс</div>
                        </div>
                        <div className="bg-background p-8 hover:bg-surface transition-colors">
                            <h4 className="font-mono text-xs text-gray-500 uppercase mb-4">Данные</h4>
                            <div className="text-xl font-bold text-white">PostgreSQL / MySQL</div>
                            <div className="text-sm text-gray-400 mt-2">Надежное хранение</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold uppercase mb-8">Нужен современный магазин?</h2>
                    <button onClick={openContact} className="inline-block px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                        Рассчитать проект
                    </button>
                </div>
            </section>
        </main >
    );
}
