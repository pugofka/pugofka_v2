'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function ContactsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
            <Header />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16"
                    >
                        Контакты
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-12"
                        >
                            <div>
                                <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">Офис</h3>
                                <p className="text-2xl md:text-3xl font-bold uppercase">
                                    Санкт-Петербург, <br />
                                    Громова 4, оф. 371, 373
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-primary">
                                    <MapPin className="w-5 h-5" />
                                    <span className="font-mono text-sm">59.9343° N, 30.3351° E</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">Связь</h3>
                                <div className="flex flex-col gap-4">
                                    <a href="mailto:info@pugofka.com" className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors flex items-center gap-4 group">
                                        info@pugofka.com
                                        <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0" />
                                    </a>
                                    <a href="tel:+78122373937" className="text-xl text-gray-400 hover:text-foreground transition-colors">
                                        +7 812 237-39-37
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-surface border border-border p-8 md:p-12"
                        >
                            <h3 className="text-2xl font-bold uppercase mb-6">Начать проект</h3>
                            <p className="text-gray-400 mb-8">
                                Расскажите о вашей задаче. Мы ответим в течение рабочего дня.
                            </p>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Имя</label>
                                    <input type="text" className="w-full bg-background border border-border p-4 focus:border-primary outline-none transition-colors" placeholder="Иван Иванов" />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Email</label>
                                    <input type="email" className="w-full bg-background border border-border p-4 focus:border-primary outline-none transition-colors" placeholder="ivan@company.com" />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Задача</label>
                                    <textarea className="w-full bg-background border border-border p-4 h-32 focus:border-primary outline-none transition-colors resize-none" placeholder="Опишите ваш проект..." />
                                </div>
                                <button type="submit" className="w-full bg-primary text-white font-bold uppercase py-4 hover:bg-white hover:text-black transition-colors">
                                    Отправить
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
