'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, Scale } from 'lucide-react';

interface GuaranteeItem {
    title: string;
    description: string;
    icon: any;
}

interface GuaranteesProps {
    items?: GuaranteeItem[];
}

const defaultItems = [
    {
        title: "Юридическая защита",
        description: "Работаем строго по договору. Фиксируем SLA и ответственность за простои. Подписываем NDA.",
        icon: Scale
    },
    {
        title: "Финансовая прозрачность",
        description: "Детальные отчеты о затраченном времени (Time & Material). Вы всегда знаете, за что платите.",
        icon: FileText
    },
    {
        title: "Лицензионный софт",
        description: "Мы — золотые партнеры 1С-Битрикс. Только официальные лицензии и обновления.",
        icon: CheckCircle
    },
    {
        title: "Гарантия на код",
        description: "Исправляем баги за свой счет в течение 12 месяцев после сдачи проекта.",
        icon: Shield
    }
];

export default function Guarantees({ items = defaultItems }: GuaranteesProps) {
    return (
        <section className="py-24 bg-surface border-y border-border relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 text-primary text-xs font-mono uppercase tracking-widest mb-4">
                            Certificate of Trust
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase leading-none">
                            Наши <span className="text-stroke text-transparent">Гарантии</span>
                        </h2>
                    </div>
                    <div className="hidden md:block h-px flex-1 bg-border mx-8 mb-2" />
                    <div className="text-right hidden md:block">
                        <div className="text-xs text-gray-500 font-mono">APPROVED BY</div>
                        <div className="text-xl font-bold uppercase">PUGOFKA</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-background translate-x-2 translate-y-2 border border-border transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                            <div className="relative bg-background border border-border p-8 h-full hover:border-primary transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <item.icon className="w-24 h-24" />
                                </div>

                                <div className="flex items-start gap-6 relative z-10">
                                    <div className="w-12 h-12 bg-surface border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold uppercase mb-3 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative Corners */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
