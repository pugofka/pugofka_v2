'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Header from '@/components/Header';
import { ArrowRight, BarChart, Box, CheckCircle, Clock, Database, Globe, Layers, Search, Server, ShoppingCart, Truck, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ZateyPage() {
    const { openContact } = useUI();
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 md:px-6 border-b border-border">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-8">
                        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-primary transition-colors uppercase tracking-wider">
                            <ArrowRight className="w-4 h-4 rotate-180" />
                            Назад в портфолио
                        </Link>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-8">
                            <Globe className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                Federal Support / Microservices
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            Веселая <br />
                            <span className="text-stroke text-transparent">Затея</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Федеральная сеть товаров для праздника.
                            Трансформация legacy-монолита в микросервисную экосистему с умным поиском и экспресс-доставкой.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Preview */}
            <section className="border-b border-border bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="relative aspect-video w-full overflow-hidden border-x border-border">
                        <Image
                            src="/cases/veselaya-zateya-main.png"
                            alt="Zatey.ru Main Page"
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
                            Наследие
                        </h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p>
                                <strong>Zatey.ru</strong> — крупнейшая сеть товаров для праздника в России (30+ лет на рынке).
                                Проект перешел к нам от предыдущего подрядчика с большим багажом технического долга.
                            </p>
                            <p>
                                Существующая архитектура не справлялась с ростом бизнеса.
                                Интеграция с SAP работала нестабильно, поиск не находил товары, а логистика требовала ручного управления.
                            </p>
                            <p className="text-white font-bold mt-6">Проблемы на старте:</p>
                            <ul className="list-none pl-0 space-y-2 mt-2">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Нестабильная работа корзины и чекаута.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Медленный и нерелевантный поиск.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Отсутствие гибкости в управлении доставками.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-white rounded-full" />
                            Трансформация
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 border border-border bg-surface/20">
                                <Server className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Микросервисы</h4>
                                <p className="text-sm text-gray-400">Выделили поиск, доставку и печать в отдельные независимые сервисы.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Search className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Smart Search</h4>
                                <p className="text-sm text-gray-400">Поиск с учетом синонимов, опечаток и морфологии. Аналитика запросов.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Clock className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Экспресс-заказ</h4>
                                <p className="text-sm text-gray-400">Отдельная логика корзины для срочной доставки за пару часов.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Truck className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Логистика</h4>
                                <p className="text-sm text-gray-400">Панель управления доставками для менеджеров, расчеты 5Post и Яндекса.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Microservices Diagram / Visualization (Conceptual) */}
            <section className="py-24 px-6 border-b border-border bg-surface/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-16 text-center">Архитектура</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
                        {/* Connecting Lines (Desktop only) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10" />

                        <div className="bg-background border border-border p-8 relative z-10 hover:border-primary transition-colors">
                            <div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center mb-6 border border-border">
                                <Database className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="font-bold uppercase mb-2">SAP ERP</h3>
                            <p className="text-sm text-gray-500">Товары, цены, остатки</p>
                        </div>

                        <div className="bg-background border border-border p-8 relative z-10 hover:border-primary transition-colors transform scale-110 shadow-2xl">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary">
                                <Layers className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-bold uppercase mb-2 text-primary">Core Platform</h3>
                            <p className="text-sm text-gray-500">Bitrix + Laravel</p>
                        </div>

                        <div className="bg-background border border-border p-8 relative z-10 hover:border-primary transition-colors">
                            <div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center mb-6 border border-border">
                                <Box className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="font-bold uppercase mb-2">Microservices</h3>
                            <p className="text-sm text-gray-500">Search, Print, Delivery</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Solutions */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Ключевые решения</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="border border-border p-8 flex gap-6 group hover:bg-surface/10 transition-colors">
                            <div className="text-5xl font-bold text-stroke text-transparent group-hover:text-primary transition-colors">01</div>
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-4">Переработка Корзины</h3>
                                <p className="text-gray-400">
                                    Полностью переписали логику корзины. Теперь она учитывает сложные сценарии: разные склады, резервирование в SAP, частичную доставку. Сбои при оформлении заказа исчезли.
                                </p>
                            </div>
                        </div>

                        <div className="border border-border p-8 flex gap-6 group hover:bg-surface/10 transition-colors">
                            <div className="text-5xl font-bold text-stroke text-transparent group-hover:text-primary transition-colors">02</div>
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-4">Умный Поиск</h3>
                                <p className="text-gray-400">
                                    Внедрили ElasticSearch с поддержкой синонимов ("хлопушка" → "пневмохлопушка"). Добавили аналитику "нулевых выдач", чтобы менеджеры видели, какой товар ищут, но не находят клиенты.
                                </p>
                            </div>
                        </div>

                        <div className="border border-border p-8 flex gap-6 group hover:bg-surface/10 transition-colors">
                            <div className="text-5xl font-bold text-stroke text-transparent group-hover:text-primary transition-colors">03</div>
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-4">Вторая Корзина</h3>
                                <p className="text-gray-400">
                                    Реализовали "Экспресс-заказ" параллельно с обычным. Это ограниченный ассортимент товаров с приоритетной сборкой и быстрой доставкой, что стало киллер-фичей для B2C клиентов.
                                </p>
                            </div>
                        </div>

                        <div className="border border-border p-8 flex gap-6 group hover:bg-surface/10 transition-colors">
                            <div className="text-5xl font-bold text-stroke text-transparent group-hover:text-primary transition-colors">04</div>
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-4">Управление Логистикой</h3>
                                <p className="text-gray-400">
                                    Создали интерфейс для логистов, где можно настраивать расписание, выходные дни и зоны доставки без участия разработчиков.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Интерфейс</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/veselaya-zateya-catalog.png"
                                alt="Zatey Catalog"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Каталог и поиск
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/veselaya-zateya-cart.png"
                                alt="Zatey Cart"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Корзина
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/zatey-delivery.png"
                                alt="Delivery Management"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Интерфейс доставки
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden bg-background flex items-center justify-center">
                            {/* Placeholder for Express Cart */}
                            <Zap className="w-16 h-16 text-primary mb-4 opacity-50" />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Экспресс-заказ
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Результаты</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors text-center">
                            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-6" />
                            <h3 className="text-xl font-bold uppercase mb-2">Стабильность</h3>
                            <p className="text-gray-400 text-sm">
                                Сайт стабильно держит пиковые нагрузки в праздники. Ошибки синхронизации с SAP сведены к минимуму.
                            </p>
                        </div>
                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors text-center">
                            <ShoppingCart className="w-12 h-12 text-primary mx-auto mb-6" />
                            <h3 className="text-xl font-bold uppercase mb-2">Рост Online</h3>
                            <p className="text-gray-400 text-sm">
                                Значительно выросла доля заказов, оформленных полностью онлайн, благодаря удобному поиску и надежной корзине.
                            </p>
                        </div>
                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors text-center">
                            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
                            <h3 className="text-xl font-bold uppercase mb-2">Автоматизация</h3>
                            <p className="text-gray-400 text-sm">
                                Менеджеры получили инструменты (доставка, аналитика), которые экономят часы ручной работы ежедневно.
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
                        {["Laravel", "Bitrix", "ElasticSearch", "Redis", "Microservices", "SAP Integration", "Yandex Maps API"].map((tech, i) => (
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
                    <span className="text-gray-500 font-mono uppercase tracking-widest text-sm">Есть сложный legacy-проект?</span>
                    <span className="text-4xl md:text-6xl font-bold uppercase group-hover:text-primary transition-colors">
                        Трансформировать
                    </span>
                </button>
            </section>
        </main>
    );
}
