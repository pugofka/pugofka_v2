'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Header from '@/components/Header';
import { ArrowRight, CheckCircle, Layers, Zap, Globe, Database, Server, Users, Search, Brain, LayoutTemplate, BarChart, Settings } from 'lucide-react';
import Image from 'next/image';

export default function AvroraSpecstalPage() {
    const { openContact } = useUI();
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 md:px-6 border-b border-border">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-8">
                            <Globe className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                E-commerce / Highload / AI
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            Аврора <br />
                            <span className="text-stroke text-transparent">Спецсталь</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Полноценный интернет-магазин металлопроката с каталогом 7+ миллионов товаров, AI-автоматизацией контента и мультигородами для SEO.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Preview */}
            <section className="border-b border-border bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="relative aspect-video w-full overflow-hidden border-x border-border">
                        <Image
                            src="/cases/avrora-specstal-main.png"
                            alt="Avrora Specstal Main Page"
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
                                <strong>АврораСпецсталь</strong> — компания по продаже металлопроката, работающая напрямую с заводами-производителями. У компании собственная логистика и широкая география поставок.
                            </p>
                            <p>
                                У клиента уже был сайт-визитка, который не отражал реальный масштаб компании и не помогал бизнесу расти.
                            </p>
                            <p className="text-white font-bold mt-6">Основные проблемы:</p>
                            <ul className="list-none pl-0 space-y-2 mt-2">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Сайт выглядел устаревшим и не вызывал доверия.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Отсутствовала инфраструктура для масштабирования по РФ.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Не работали поиск и фильтрация.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Каталог не отражал ассортимент (7+ млн SKU).
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
                                <Database className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Highload Каталог</h4>
                                <p className="text-sm text-gray-400">Реализовать каталог, способный обрабатывать миллионы SKU без задержек.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Search className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Умный Поиск</h4>
                                <p className="text-sm text-gray-400">Разработать гибкий поиск по металлопрокату (размеры, марки стали, ГОСТы).</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Brain className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">AI Автоматизация</h4>
                                <p className="text-sm text-gray-400">Настроить систему самостоятельного управления данными и генерации контента.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Globe className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">SEO & Мультигорода</h4>
                                <p className="text-sm text-gray-400">Внедрить мультирегиональность для продвижения по всей России.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Steps */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Что мы сделали</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="border border-border p-8 bg-background hover:border-primary transition-colors group">
                            <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary transition-colors">01</div>
                            <h3 className="text-xl font-bold uppercase mb-4">Архитектура Highload</h3>
                            <p className="text-gray-400">
                                Спроектировали архитектуру под огромный объём данных (7+ млн SKU). Оптимизировали базу данных, внедрили кэширование и распределенную нагрузку.
                            </p>
                        </div>
                        <div className="border border-border p-8 bg-background hover:border-primary transition-colors group">
                            <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary transition-colors">02</div>
                            <h3 className="text-xl font-bold uppercase mb-4">Дизайн и UX</h3>
                            <p className="text-gray-400">
                                Разработали индивидуальный дизайн в индустриальном стиле. Обеспечили легкий доступ к категориям и интуитивно понятную навигацию.
                            </p>
                        </div>
                        <div className="border border-border p-8 bg-background hover:border-primary transition-colors group">
                            <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary transition-colors">03</div>
                            <h3 className="text-xl font-bold uppercase mb-4">Поиск и Фильтрация</h3>
                            <p className="text-gray-400">
                                Реализовали мощную систему фильтрации с гибкой настройкой по множеству параметров каталога магазина.
                            </p>
                        </div>
                        <div className="border border-border p-8 bg-background hover:border-primary transition-colors group">
                            <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary transition-colors">04</div>
                            <h3 className="text-xl font-bold uppercase mb-4">Мультигорода</h3>
                            <p className="text-gray-400">
                                Внедрили поддомены для регионов, подмену контактных данных, мета-тегов и региональную SEO-оптимизацию.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Revolution Section (Special Feature) */}
            <section className="py-24 px-6 border-b border-border bg-surface/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-12 justify-center">
                        <Brain className="w-10 h-10 text-primary" />
                        <h2 className="text-3xl font-bold uppercase text-center">AI Pipeline</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p className="text-xl text-white font-bold mb-6">
                                Автоматизация создания каталога с помощью нейросетей
                            </p>
                            <p>
                                Мы внедрили полный цикл генерации контента, сократив ручную работу до минимума.
                            </p>
                            <ul className="list-none pl-0 space-y-4 mt-6">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                                    <span>
                                        <strong className="text-white">Генерация изображений:</strong> Динамические промпты на основе SKU для создания релевантных картинок.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                                    <span>
                                        <strong className="text-white">Уникальные описания:</strong> Автоматическое написание текстов для категорий и товаров.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                                    <span>
                                        <strong className="text-white">Система шаблонов:</strong> Обеспечение воспроизводимого качества и единого стиля.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                                    <span>
                                        <strong className="text-white">Админка:</strong> Интеграция AI-инструментов для генерации в один клик.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative aspect-video border border-border group overflow-hidden bg-background">
                            {/* Placeholder for AI Admin interface */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono uppercase text-sm">
                                AI Admin Interface Placeholder
                            </div>
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                AI-генерация в админке
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
                                src="/cases/avrora-specstal-catalog.png"
                                alt="Catalog"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Каталог
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/avrora-specstal-catalog-filters.png"
                                alt="Filters"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Фильтры
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/avrora-specstal-search.png"
                                alt="Search System"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Система поиска
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden bg-background">
                            {/* Placeholder for Admin Panel */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono uppercase text-sm">
                                Admin Panel Placeholder
                            </div>
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Админ-панель
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Page Gallery */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Карточка Товара</h2>
                    <div className="grid grid-cols-1 gap-12">
                        <div className="relative aspect-[16/9] border border-border group overflow-hidden">
                            <Image
                                src="/cases/avrora-specstal-product.png"
                                alt="Product Card"
                                fill
                                className="object-cover object-top"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Страница товара
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
                        {/* Result Card 1 */}
                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <Database className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">7M+</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Ассортимент</h3>
                            <p className="text-gray-400 text-sm">
                                Полноценный интернет-магазин с каталогом более 7 миллионов товаров, работающий быстро и стабильно.
                            </p>
                        </div>

                        {/* Result Card 2 */}
                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <Zap className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">AI</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Скорость</h3>
                            <p className="text-gray-400 text-sm">
                                Время генерации контента сократилось с «бесконечности» до минут благодаря внедрению нейросетей.
                            </p>
                        </div>

                        {/* Result Card 3 */}
                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <Globe className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">SEO</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Видимость</h3>
                            <p className="text-gray-400 text-sm">
                                Рост видимости в регионах уже в первые месяцы после запуска благодаря системе мультигородов.
                            </p>
                        </div>

                        {/* Result Card 4 */}
                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <Settings className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">CMS</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Автономия</h3>
                            <p className="text-gray-400 text-sm">
                                Клиент получил собственную систему управления каталогом с AI-инструментами, которая полностью автоматизирует рутинные процессы и позволяет команде самостоятельно расширять ассортимент без технической поддержки.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 border border-border bg-surface/10 text-center max-w-3xl mx-auto relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
                            <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-lg text-gray-300 italic pt-4">
                            "Сайт стал быстрым и удобным, несмотря на огромный объем данных. Клиент получил инструмент, который масштабируется без ограничений."
                        </p>
                    </div>
                </div>
            </section>

            {/* Tech Stack List */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xl font-bold uppercase mb-8 text-center text-gray-500 tracking-widest">Технологии</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {["Laravel", "Next.js", "MySQL", "Meilisearch", "OpenAI", "Docker", "Redis"].map((tech, i) => (
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
