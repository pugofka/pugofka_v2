'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Header from '@/components/Header';
import { ArrowRight, Calculator, Database, FileSpreadsheet, Layers, LayoutTemplate, Search, ShoppingCart, Truck, Zap, BarChart, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SharikSpbPage() {
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
                            <ShoppingCart className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                B2B E-commerce / SAP Integration
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            Шарик <br />
                            <span className="text-stroke text-transparent">СПБ</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Крупнейший оптовый интернет-магазин товаров для праздника в Санкт-Петербурге.
                            Умный калькулятор печати, загрузка заказов из Excel и полная синхронизация с SAP.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Preview */}
            <section className="border-b border-border bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="relative aspect-video w-full overflow-hidden border-x border-border">
                        <Image
                            src="/cases/sharik-main.png"
                            alt="Sharik SPB Main Page"
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
                            <p className="mb-6">
                                <strong>Sharik.spb.ru</strong> — оптовый поставщик воздушных шаров и праздничных товаров в Санкт-Петербурге, работающий с B2B-клиентами, многие из которых являются постоянными партнёрами компании.
                            </p>
                            <p className="mb-6">
                                К моменту начала проекта сайт не обновлялся с 2008 года, не отвечал текущим требованиям оптовых клиентов и не поддерживал ключевые бизнес-процессы. Основной поток заказов шел через физические магазины Cash&Carry.
                            </p>
                            <p className="mb-6">
                                Нужен был современный, удобный и функциональный сайт для оптовых покупателей, с калькулятором услуги печати на шарах.
                            </p>
                            <p className="text-white font-bold mt-6">Болевые точки:</p>
                            <ul className="list-none pl-0 space-y-2 mt-2">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Нет инструментов для оптовиков (корзины, списков).
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Ручной расчет стоимости печати на шарах.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Слабая навигация в каталоге.
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
                                <FileSpreadsheet className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Оптовый функционал</h4>
                                <p className="text-sm text-gray-400">Загрузка заказов из Excel, работа с артикулами, быстрый заказ.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Calculator className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Калькулятор услуг</h4>
                                <p className="text-sm text-gray-400">Интерактивный расчет стоимости печати логотипов на шарах.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Database className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">SAP Интеграция</h4>
                                <p className="text-sm text-gray-400">Синхронизация остатков, цен и статусов заказов в реальном времени.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Truck className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Масштабирование</h4>
                                <p className="text-sm text-gray-400">Поддержка мульти-складов и запуск новых филиалов на поддоменах.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Print Calculator Feature Showcase */}
            <section className="py-24 px-6 border-b border-border bg-surface/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold uppercase mb-6 text-white">
                                Калькулятор Печати
                            </h2>
                            <p className="text-gray-400 mb-8 text-lg">
                                Мы разработали сложный интерактивный инструмент, который позволяет клиентам самостоятельно рассчитать стоимость печати, выбрав материал, тираж и метод нанесения.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-4 p-4 border border-border bg-background">
                                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full font-bold">1</div>
                                    <span>Учет всех параметров (газ/воздух, цвета, стороны)</span>
                                </li>
                                <li className="flex items-center gap-4 p-4 border border-border bg-background">
                                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full font-bold">2</div>
                                    <span>Моментальный пересчет стоимости</span>
                                </li>
                                <li className="flex items-center gap-4 p-4 border border-border bg-background">
                                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full font-bold">3</div>
                                    <span>Оформление заказа в один клик</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 relative aspect-[4/3] border border-border group overflow-hidden bg-background">
                            <Image
                                src="/cases/sharik-spb-calculator.png"
                                alt="Print Calculator Interface"
                                fill
                                className="object-cover object-left-top"
                            />
                            <div className="absolute bottom-4 right-4 bg-primary text-black font-bold px-4 py-2 text-xs uppercase">
                                Interactive Module
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Details */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Решение</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="border border-border p-8 bg-background hover:border-primary transition-colors group">
                            <LayoutTemplate className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold uppercase mb-4">Адаптивный E-commerce</h3>
                            <p className="text-gray-400">
                                Мы разработали 36 макетов для всех типов устройств. Интерфейс удобен для работы на ПК и мобильных устройствах, обеспечивая комфортное оформление заказов и взаимодействие с каталогом.
                            </p>
                        </div>
                        <div className="border border-border p-8 bg-background hover:border-primary transition-colors group">
                            <Search className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold uppercase mb-4">Умный Поиск</h3>
                            <p className="text-gray-400">
                                Реализовали поиск по списку артикулов для оптовиков, фасетный фильтр по характеристикам и мгновенный поиск по каталогу из 15,000+ SKU.
                            </p>
                        </div>
                        <div className="border border-border p-8 bg-background hover:border-primary transition-colors group">
                            <Zap className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold uppercase mb-4">Excel-заказы</h3>
                            <p className="text-gray-400">
                                Функция "Быстрый заказ": клиент загружает Excel-прайс с количеством, а сайт сам распознает артикулы и собирает корзину.
                            </p>
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
                                src="/cases/sharik-catalog.png"
                                alt="Wholesale Catalog"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Оптовый каталог
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/sharik-cart.png"
                                alt="Wholesale Cart"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Оптовая корзина
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
                                <BarChart className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">+17%</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Конверсия</h3>
                            <p className="text-gray-400 text-sm">
                                Рост конверсии сразу после запуска. Клиенты начали активнее оформлять заказы самостоятельно онлайн.
                            </p>
                        </div>

                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <Layers className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">SAP</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Автоматизация</h3>
                            <p className="text-gray-400 text-sm">
                                Ошибки человеческого фактора сведены к минимуму благодаря полной синхронизации остатков и цен с ERP.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 border border-border bg-surface/10 text-center max-w-3xl mx-auto relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
                            <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-lg text-gray-300 italic pt-4">
                            «В рамках проекта был реализован весь запланированный функционал. Дополнительная оптимизация отдельных решений позволила повысить удобство использования и скорость работы сайта, что положительно сказалось на пользовательском опыте и росте конверсии»
                        </p>
                    </div>
                </div>
            </section>

            {/* Tech Stack List */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xl font-bold uppercase mb-8 text-center text-gray-500 tracking-widest">Технологии</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {["1С-Битрикс", "PHP", "SAP Integration", "jQuery", "MySQL"].map((tech, i) => (
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
                    <span className="text-gray-500 font-mono uppercase tracking-widest text-sm">Есть похожая задача?</span>
                    <span className="text-4xl md:text-6xl font-bold uppercase group-hover:text-primary transition-colors">
                        Обсудить проект
                    </span>
                </button>
            </section>
        </main>
    );
}
