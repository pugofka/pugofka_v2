'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import Header from '@/components/Header';
import { ArrowRight, CheckCircle, Layers, Zap, Globe, Database, Server, Users, GraduationCap, Search, LayoutTemplate } from 'lucide-react';
import Image from 'next/image';

export default function OBSPage() {
    const { openContact } = useUI();
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-8">
                            <GraduationCap className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                Образование / 1С-Битрикс
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            Открытая школа <br />
                            <span className="text-stroke text-transparent">Бизнеса</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            Трансформация сайта-витрины в полноценную образовательную платформу.
                            Удобный поиск программ, онлайн-запись и раздел для тьюторов.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Preview */}
            <section className="border-b border-border bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="relative aspect-video w-full overflow-hidden border-x border-border">
                        <Image
                            src="/cases/obs_preview.png"
                            alt="OBS Website Preview"
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
                                <strong>OBS</strong> — образовательная школа для специалистов в сфере менеджмента и психологии.
                            </p>
                            <p>
                                До обращения к нам сайт выполнял роль статичной афиши. Он имел устаревший дизайн, не поддерживал онлайн-запись и не позволял пользователям удобно ориентироваться в программах.
                            </p>
                            <p className="text-white font-bold mt-6">Проблемы старого сайта:</p>
                            <ul className="list-none pl-0 space-y-2 mt-2">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Отсутствие воронки регистрации.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Сложная навигация и поиск курсов.
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                    Невозможность масштабирования под новые проекты.
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
                                <LayoutTemplate className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">UX/UI Редизайн</h4>
                                <p className="text-sm text-gray-400">Освежить визуальный стиль, сделать интерфейс современным и удобным.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Zap className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Онлайн-запись</h4>
                                <p className="text-sm text-gray-400">Создать рабочую систему записи на курсы, вебинары и семинары.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Search className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Умный поиск</h4>
                                <p className="text-sm text-gray-400">Инструмент для удобной фильтрации программ по направлениям.</p>
                            </div>
                            <div className="p-6 border border-border bg-surface/20">
                                <Users className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold uppercase mb-2">Раздел "Тьюторы"</h4>
                                <p className="text-sm text-gray-400">Личные карточки преподавателей с привязкой к их курсам.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Steps */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Решение</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="border border-border p-8 bg-background hover:border-primary transition-colors group">
                            <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary transition-colors">01</div>
                            <h3 className="text-xl font-bold uppercase mb-4">Анализ и Структура</h3>
                            <p className="text-gray-400">
                                Провели аудит контента, убрали лишнее и оптимизировали логику. Добавили новые функциональные блоки, сохранив полезные элементы старого сайта.
                            </p>
                        </div>
                        <div className="border border-border p-8 bg-background hover:border-primary transition-colors group">
                            <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary transition-colors">02</div>
                            <h3 className="text-xl font-bold uppercase mb-4">Индивидуальный Дизайн</h3>
                            <p className="text-gray-400">
                                Создали уникальную визуальную концепцию с цветовой семантикой для разных направлений обучения. Проработали UX сценарии записи и фильтрации.
                            </p>
                        </div>
                        <div className="border border-border p-8 bg-background hover:border-primary transition-colors group">
                            <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary transition-colors">03</div>
                            <h3 className="text-xl font-bold uppercase mb-4">Разработка на Bitrix</h3>
                            <p className="text-gray-400">
                                Реализовали систему кастомных блоков и гибкие формы регистрации. Настроили управление курсами и вебинарами через админку.
                            </p>
                        </div>
                        <div className="border border-border p-8 bg-background hover:border-primary transition-colors group">
                            <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary transition-colors">04</div>
                            <h3 className="text-xl font-bold uppercase mb-4">Раздел Тьюторы</h3>
                            <p className="text-gray-400">
                                Разработали карточки преподавателей с фото, описанием и автоматической привязкой всех курсов, которые они ведут.
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
                                src="/cases/obs_catalog.png"
                                alt="OBS Catalog"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Умный каталог
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/obs_tutors.png"
                                alt="OBS Tutors"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Раздел тьюторов
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/obs_events.png"
                                alt="OBS Events"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                События и новости
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] border border-border group overflow-hidden">
                            <Image
                                src="/cases/obs_form.png"
                                alt="OBS Forms"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Формы заявки
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Page Gallery */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Страница Курса</h2>
                    <div className="grid grid-cols-1 gap-12">
                        <div className="relative aspect-[16/9] border border-border group overflow-hidden">
                            <Image
                                src="/cases/obs_course_hero.png"
                                alt="Course Page Hero"
                                fill
                                className="object-cover object-top"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Лендинг курса
                            </div>
                        </div>
                        <div className="relative aspect-[16/9] border border-border group overflow-hidden">
                            <Image
                                src="/cases/obs_course_structure.png"
                                alt="Course Structure"
                                fill
                                className="object-cover object-top"
                            />
                            <div className="absolute bottom-0 left-0 bg-background/90 px-4 py-2 border-t border-r border-border text-xs font-mono uppercase">
                                Программа обучения
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
                                <LayoutTemplate className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">100%</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Трансформация</h3>
                            <p className="text-gray-400 text-sm">
                                Полный переход от статичного сайта-витрины к динамической образовательной платформе с личными кабинетами.
                            </p>
                        </div>

                        {/* Result Card 2 */}
                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <Users className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">2x</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Вовлеченность</h3>
                            <p className="text-gray-400 text-sm">
                                Новый раздел "Тьюторы" и прозрачная структура программ увеличили время нахождения пользователей на сайте.
                            </p>
                        </div>

                        {/* Result Card 3 */}
                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <Zap className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">Fast</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Онлайн-запись</h3>
                            <p className="text-gray-400 text-sm">
                                Внедрение сквозных форм регистрации сократило путь пользователя от выбора курса до заявки.
                            </p>
                        </div>

                        {/* Result Card 4 */}
                        <div className="p-8 border border-border bg-surface/5 hover:border-primary transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <Database className="w-8 h-8 text-primary" />
                                <span className="text-4xl font-bold">CMS</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2">Управление</h3>
                            <p className="text-gray-400 text-sm">
                                Гибкая админка на Bitrix позволяет менеджерам самостоятельно создавать лендинги под новые программы.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 border border-border bg-surface/10 text-center max-w-3xl mx-auto relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
                            <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-lg text-gray-300 italic pt-4">
                            "Сайт перестал быть статичной афишей. Пользователи могут выбрать программу без хаоса, а новый раздел «Тьюторы» повысил доверие студентов."
                        </p>
                    </div>
                </div>
            </section>

            {/* Tech Stack List */}
            <section className="py-24 px-6 border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xl font-bold uppercase mb-8 text-center text-gray-500 tracking-widest">Технологии</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {["1C-Bitrix", "PHP", "HTML5/CSS3", "JavaScript", "Custom Modules", "Adaptive Layout"].map((tech, i) => (
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
                    <span className="text-gray-500 font-mono uppercase tracking-widest text-sm">Есть образовательный проект?</span>
                    <span className="text-4xl md:text-6xl font-bold uppercase group-hover:text-primary transition-colors">
                        Обсудить задачу
                    </span>
                </button>
            </section>
        </main>
    );
}
