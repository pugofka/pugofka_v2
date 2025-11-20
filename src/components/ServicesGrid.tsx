'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Server, Rocket, Zap, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: 'ecom',
        number: '01',
        title: 'E-commerce',
        subtitle: '& Bitrix',
        description: 'Масштабируемые интернет-магазины и B2B-порталы. Сложные интеграции (1С, ERP). Компетенции в Битрикс24.',
        icon: ShoppingCart,
    },
    {
        id: 'custom',
        number: '02',
        title: 'Custom Dev',
        subtitle: '& Highload',
        description: 'Сложные системы на Laravel & Go. Личные кабинеты, маркетплейсы и высоконагруженные бэкенды.',
        icon: Server,
    },
    {
        id: 'startup',
        number: '03',
        title: 'Startups',
        subtitle: '& MVP',
        description: 'Быстрый запуск MVP для проверки гипотез. Технический консалтинг и масштабирование продукта.',
        icon: Rocket,
    },
    {
        id: 'express',
        number: '04',
        title: 'Express',
        subtitle: 'Web',
        description: 'Быстрый запуск на шаблонах Битрикс для малого бизнеса.',
        icon: Zap,
    },
];

export default function ServicesGrid() {
    return (
        <section className="border-b border-border bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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

                            <h3 className="text-3xl font-bold uppercase mb-1 leading-none">
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

                    if (service.id === 'ecom') {
                        return (
                            <Link href="/services/ecommerce" key={service.id} className="block h-full">
                                {CardContent}
                            </Link>
                        );
                    }

                    return <div key={service.id} className="h-full">{CardContent}</div>;
                })}
            </div>
        </section>
    );
}
