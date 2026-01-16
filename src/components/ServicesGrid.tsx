'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ShoppingCart, Zap, Code, Rocket, LifeBuoy, MonitorPlay } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: 'ecom',
        number: '01',
        title: 'E-commerce',
        subtitle: 'Solutions',
        description: 'Масштабируемые интернет-магазины. От 1С-Битрикс до микросервисов на Laravel и Go.',
        icon: ShoppingCart,
    },
    {
        id: 'custom',
        number: '02',
        title: 'Custom',
        subtitle: 'Development',
        description: 'Сложные веб-сервисы и нетривиальные задачи. Бэкенд, API и архитектура высоких нагрузок.',
        icon: Code,
    },
    {
        id: 'startups',
        number: '03',
        title: 'Startup',
        subtitle: '& MVP',
        description: 'Технический партнер. Работаем как автономная продуктовая команда: запускаем MVP за 1-3 месяца и усиливаем ваш IT-отдел.',
        icon: Rocket,
    },
    {
        id: 'support',
        number: '04',
        title: 'Support',
        subtitle: '& Evolution',
        description: 'Развитие проектов. Поддерживаем то, что создали сами, и берем на обслуживание чужой код.',
        icon: LifeBuoy,
    },
    {
        id: 'express',
        number: '05',
        title: 'Express',
        subtitle: 'Launch',
        description: 'Быстрый старт на готовых решениях. Отдельная команда для запуска простых проектов.',
        icon: MonitorPlay,
    },
    {
        id: 'bitrix',
        number: '06',
        title: 'Bitrix24',
        subtitle: 'Integration',
        description: 'Внедрение корпоративных порталов и автоматизация процессов. Облачные и коробочные версии.',
        icon: Zap,
    },
];

export default function ServicesGrid() {
    return (
        <section className="border-b border-border bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => {
                    const CardContent = (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative border-r border-b border-border p-8 md:p-12 h-full hover:bg-surface transition-colors duration-300 cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="font-mono text-primary text-sm tracking-widest">/{service.number}</span>
                                <service.icon className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-3xl font-bold uppercase mb-1 leading-none whitespace-nowrap">
                                {service.title}
                            </h3>
                            <h3 className="text-3xl font-bold uppercase text-gray-600 mb-6 leading-none group-hover:text-primary transition-colors">
                                {service.subtitle}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-6 h-6 text-primary" />
                            </div>
                        </motion.div>
                    );

                    if (service.id === 'ecom') return <Link href="/services/ecommerce" key={service.id} className="block h-full">{CardContent}</Link>;
                    if (service.id === 'bitrix') return <Link href="/services/bitrix24" key={service.id} className="block h-full">{CardContent}</Link>;
                    if (service.id === 'custom') return <Link href="/services/custom" key={service.id} className="block h-full">{CardContent}</Link>;
                    if (service.id === 'startups') return <Link href="/services/startups" key={service.id} className="block h-full">{CardContent}</Link>;
                    if (service.id === 'support') return <Link href="/services/support" key={service.id} className="block h-full">{CardContent}</Link>;
                    if (service.id === 'express') return <Link href="/services/express" key={service.id} className="block h-full">{CardContent}</Link>;

                    return <div key={service.id} className="h-full">{CardContent}</div>;
                })}
            </div>
        </section>
    );
}
