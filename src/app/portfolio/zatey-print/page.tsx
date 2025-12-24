'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Header from '@/components/Header';
import { ArrowLeft, Clock, Zap, CheckCircle, MousePointerClick, Image as ImageIcon, Settings, Layers, Eye, Printer, Palette } from 'lucide-react';
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
                                Service / Vue.js / Automation
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            Печать <br />
                            <span className="text-stroke text-transparent">На Шарах</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Промосайт сервиса печати на воздушных шарах с возможностью создания уникального дизайна при помощи простого и понятного конструктора.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Context & Challenge Section */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-primary rounded-full" />
                            Цель и задача проекта
                        </h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p>
                                Расширить рынок печати на воздушных шарах за счёт привлечения розничных клиентов.
                            </p>
                            <p>
                                Для этого создать специализированный сервис, при помощи которого можно будет в режиме онлайн создавать макеты принтов для печати на шарах и оформлять заказы любого объёма.
                            </p>
                        </div>
                        <h3 className="text-2xl font-bold uppercase mt-12 mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-primary rounded-full" />
                            Поиск решения
                        </h3>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p>
                                Нестандартная форма воздушных шаров, строгие требования к формату, особенности техники нанесения изображения — это лишь некоторые нюансы, которые нужно учитывать при создании макета для печати на воздушных шарах.
                            </p>
                            <p>
                                Мы рассчитывали подобрать похожее готовое решение и адаптировать его под наши цели, но оказалось, что готовых решений не существует.
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image
                            src="/cases/zatey-print-constructor.png"
                            alt="Visual Constructor Interface"
                            width={1600}
                            height={900}
                            className="w-full h-auto"
                        />
                        <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                            Конструктор заказа
                        </div>
                    </div>
                </div>
            </section>

            {/* Functionality Grid */}
            <section className="py-24 px-6 border-b border-border bg-surface/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Функционал</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 border border-border bg-background hover:border-primary transition-colors">
                            <MousePointerClick className="w-8 h-8 text-primary mb-4" />
                            <h4 className="font-bold uppercase mb-2">Интерфейс</h4>
                            <p className="text-sm text-gray-400">Простой интерфейс, позволяющий компилировать изображения и набирать текст.</p>
                        </div>
                        <div className="p-6 border border-border bg-background hover:border-primary transition-colors">
                            <Zap className="w-8 h-8 text-primary mb-4" />
                            <h4 className="font-bold uppercase mb-2">Экспорт</h4>
                            <p className="text-sm text-gray-400">Экспорт готового изображения в подходящем для печати формате.</p>
                        </div>

                        <div className="p-6 border border-border bg-background hover:border-primary transition-colors">
                            <Settings className="w-8 h-8 text-primary mb-4" />
                            <h4 className="font-bold uppercase mb-2">Скорость</h4>
                            <p className="text-sm text-gray-400">Мгновенная реакция интерфейса.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testing & Optimization Section */}
            <section className="py-24 px-6 border-b border-border bg-surface/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group order-2 lg:order-1">
                        <Image
                            src="/cases/zatey-print-step1.png"
                            alt="Testing Process"
                            width={1200}
                            height={900}
                            className="w-full h-auto"
                        />
                        <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                            Процесс работы
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-white rounded-full" />
                            Качество
                        </h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-4 text-white">Тестирование</h3>
                                <p className="text-gray-400 mb-4">
                                    Когда решение разрабатывается с нуля, как в нашем случае, важно проводить комплексное тестирование:
                                </p>
                                <ul className="list-disc pl-4 space-y-2 text-gray-400">
                                    <li>Мы покрыли критические блоки автоматическими тестами.</li>
                                    <li>Для исправления сложных ошибок использовали двойное детальное логирование (на сервере и в браузере).</li>
                                    <li>Провели нагрузочное тестирование сервиса.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-4 text-white">Оптимизация</h3>
                                <p className="text-gray-400">
                                    Несмотря на хорошие результаты нагрузочного тестирования, мы сделали ряд доработок:
                                    уменьшили объём загружаемых данных, убрали долгую загрузку изображений в прелоадер и оптимизировали работу с кэшем браузера.
                                    В результате сервис работает максимально быстро уже после первой загрузки.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Approach Section */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 bg-primary rounded-full" />
                            Дизайн
                        </h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p>
                                Чтобы создать праздничное настроение, мы решили использовать яркую солнечную цветовую гамму, большие красочные фотографии шаров, фоновые подложки с видом города, инфографику.
                            </p>
                            <p>
                                Сайт получился светлым и лёгким, передавая атмосферу праздника и легкости, которую дарят воздушные шары.
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image
                            src="/cases/zatey-print-step2.png"
                            alt="Final Design"
                            width={1200}
                            height={900}
                            className="w-full h-auto"
                        />
                        <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                            Финальный результат
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-16 text-center">Инструкция по применению</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Layers, title: "Тематика", desc: "Выбрать тематику поздравлений из предложенных" },
                            { icon: ImageIcon, title: "Рисунок", desc: "Подобрать подходящий рисунок и придумать текст" },
                            { icon: CheckCircle, title: "Оплата", desc: "Указать количество шаров и способ оплаты" },
                            { icon: Settings, title: "Помощь", desc: "Руководство в виде всплывающих надписей" }
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

            {/* Results Section */}
            <section className="py-24 px-6 border-b border-border bg-surface/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Маленькая победа</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 border border-border bg-background hover:border-primary transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <Zap className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">Рынок</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Рост заказов</h3>
                            <p className="text-gray-400 text-sm">
                                Мы изменили рынок печати на воздушных шарах. Нам удалось увеличить количество заказов в кризис и уменьшить время их обработки.
                            </p>
                        </div>

                        <div className="p-8 border border-border bg-background hover:border-primary transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <Clock className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">Win-Win</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Выгода для всех</h3>
                            <p className="text-gray-400 text-sm">
                                Производитель расширил рынок сбыта за счёт новых клиентов, а покупатели получили возможность заказывать шары с индивидуальным дизайном без ограничений.
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
                        {["Vue.js", "Konva.js (Canvas)", "Laravel", "REST API"].map((tech, i) => (
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
