'use client';

import { motion } from 'framer-motion';
import { useUI } from '@/context/UIContext';
import { ArrowRight, Check, BarChart3, Users, Settings, Zap, ShieldCheck, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

export default function BitrixPage() {
    const { openContact } = useUI();
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white pt-20">
            {/* 1. Hero: Control & Transparency */}
            <section className="relative py-20 border-b border-border overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary text-primary font-mono text-xs uppercase tracking-widest mb-6">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Business Automation
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] mb-6">
                                Системный <br />
                                <span className="text-stroke">Бизнес</span>
                            </h1>
                        </div>
                        <div className="max-w-lg mb-2">
                            <p className="text-xl text-gray-400 leading-relaxed">
                                Превращаем хаос в систему. Внедряем Битрикс24 (Облако и Коробка), настраиваем воронки продаж
                                и делаем бизнес прозрачным и управляемым.
                            </p>
                        </div>
                    </div>

                    {/* Pain Points / Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
                        <div className="p-8 border-r border-border hover:bg-surface transition-colors">
                            <div className="text-primary mb-4"><Zap className="w-8 h-8" /></div>
                            <h3 className="text-xl font-bold uppercase mb-2">Теряете лиды?</h3>
                            <p className="text-sm text-gray-400">
                                Все заявки с сайта, почты и мессенджеров будут попадать в CRM автоматически. Ни один клиент не потеряется.
                            </p>
                        </div>
                        <div className="p-8 border-r border-border hover:bg-surface transition-colors">
                            <div className="text-primary mb-4"><Users className="w-8 h-8" /></div>
                            <h3 className="text-xl font-bold uppercase mb-2">Менеджеры забывают?</h3>
                            <p className="text-sm text-gray-400">
                                Система сама поставит задачу, напомнит о звонке и отправит письмо клиенту. Роботы работают без выходных.
                            </p>
                        </div>
                        <div className="p-8 hover:bg-surface transition-colors">
                            <div className="text-primary mb-4"><BarChart3 className="w-8 h-8" /></div>
                            <h3 className="text-xl font-bold uppercase mb-2">Нет прозрачности?</h3>
                            <p className="text-sm text-gray-400">
                                Сквозная аналитика покажет, откуда приходят деньги, а не просто клики. Реальный ROI маркетинга.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Visual: The Process (Kanban Abstraction) */}
            <section className="py-24 border-b border-border bg-surface/30">
                <div className="container mx-auto px-4">
                    <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end">
                        <div>
                            <h2 className="text-3xl font-bold uppercase mb-4">Как мы работаем</h2>
                            <p className="text-gray-400">От аудита процессов до обучения сотрудников</p>
                        </div>
                        <div className="hidden md:block font-mono text-xs text-gray-500">
                            WORKFLOW_V2.0
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Stage 1 */}
                        <div className="bg-background border border-border p-6 relative group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 group-hover:bg-primary transition-colors" />
                            <div className="font-mono text-xs text-gray-500 mb-4">STEP 01</div>
                            <h3 className="text-xl font-bold uppercase mb-4">Аудит</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Разбираем ваши процессы по косточкам. Кто, кому и когда звонит. Где теряются деньги.
                            </p>
                            <ul className="space-y-2 text-xs font-mono text-gray-500">

                                <li>• Карта процессов</li>
                            </ul>
                        </div>

                        {/* Stage 2 */}
                        <div className="bg-background border border-border p-6 relative group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 group-hover:bg-primary transition-colors" />
                            <div className="font-mono text-xs text-gray-500 mb-4">STEP 02</div>
                            <h3 className="text-xl font-bold uppercase mb-4">Настройка</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Внедряем CRM. Настраиваем воронки, карточки сделок, права доступа и телефонию.
                            </p>
                            <ul className="space-y-2 text-xs font-mono text-gray-500">
                                <li>• Воронки продаж</li>
                                <li>• Подключение каналов</li>
                            </ul>
                        </div>

                        {/* Stage 3 */}
                        <div className="bg-background border border-border p-6 relative group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 group-hover:bg-primary transition-colors" />
                            <div className="font-mono text-xs text-gray-500 mb-4">STEP 03</div>
                            <h3 className="text-xl font-bold uppercase mb-4">Автоматизация</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Запускаем роботов. Авто-смс, генерация договоров, постановка задач.
                            </p>
                            <ul className="space-y-2 text-xs font-mono text-gray-500">
                                <li>• Генераторы документов</li>
                                <li>• Триггерные рассылки</li>
                            </ul>
                        </div>

                        {/* Stage 4 */}
                        <div className="bg-background border border-border p-6 relative group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 group-hover:bg-primary transition-colors" />
                            <div className="font-mono text-xs text-gray-500 mb-4">STEP 04</div>
                            <h3 className="text-xl font-bold uppercase mb-4">Обучение</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Пишем регламенты и учим менеджеров работать в системе. Аттестация сотрудников.
                            </p>
                            <ul className="space-y-2 text-xs font-mono text-gray-500">
                                <li>• Видео-инструкции</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Features Grid */}
            <section className="py-24 border-b border-border">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold uppercase mb-16 text-center">Возможности</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
                        <div className="bg-background p-10 hover:bg-surface transition-colors flex gap-6">
                            <LayoutDashboard className="w-10 h-10 text-primary shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-2">CRM + ERP</h3>
                                <p className="text-gray-400 text-sm">
                                    Единое окно для работы. Клиенты, сделки, задачи, счета и акты — всё в одной системе.
                                </p>
                            </div>
                        </div>
                        <div className="bg-background p-10 hover:bg-surface transition-colors flex gap-6">
                            <Settings className="w-10 h-10 text-primary shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-2">Бизнес-процессы</h3>
                                <p className="text-gray-400 text-sm">
                                    Согласование договоров, отпусков и счетов в пару кликов. Никаких бумажек и беготни по кабинетам.
                                </p>
                            </div>
                        </div>
                        <div className="bg-background p-10 hover:bg-surface transition-colors flex gap-6">
                            <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-2">Контроль Качества</h3>
                                <p className="text-gray-400 text-sm">
                                    Запись всех звонков, история переписки. Вы всегда знаете, о чем говорили менеджеры.
                                </p>
                            </div>
                        </div>
                        <div className="bg-background p-10 hover:bg-surface transition-colors flex gap-6">
                            <BarChart3 className="w-10 h-10 text-primary shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-2">Отчеты BI</h3>
                                <p className="text-gray-400 text-sm">
                                    Строим наглядные дашборды. Визуализация ключевых показателей бизнеса.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold uppercase mb-8">Наведем порядок?</h2>
                    <button onClick={openContact} className="inline-block px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                        Заказать аудит
                    </button>
                </div>
            </section>
        </main>
    );
}
