'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed inset-y-0 right-0 w-full md:w-[600px] bg-background border-l border-border z-[70] p-6 md:p-12 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-3xl font-bold uppercase tracking-tighter">
                                Начать проект
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-surface rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                                    Имя / Компания
                                </label>
                                <input
                                    type="text"
                                    placeholder="ИВАН ИВАНОВ / ООО РОМАШКА"
                                    className="w-full bg-surface border-b border-border p-4 text-lg focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/30"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                                    Контакты (Email / Telegram)
                                </label>
                                <input
                                    type="text"
                                    placeholder="@USERNAME ИЛИ EMAIL"
                                    className="w-full bg-surface border-b border-border p-4 text-lg focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/30"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                                    Тип проекта
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    {['Интернет-магазин', 'Корпоративный сайт', 'Стартап / MVP', 'Битрикс24', 'Поддержка', 'Другое'].map((type) => (
                                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                            <input type="checkbox" className="w-4 h-4 accent-primary bg-surface border-border" />
                                            <span className="font-mono text-sm group-hover:text-primary transition-colors">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                                    Краткое описание
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="РАССКАЖИТЕ О ВАШИХ ЗАДАЧАХ..."
                                    className="w-full bg-surface border-b border-border p-4 text-lg focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/30 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold uppercase tracking-widest py-6 hover:bg-red-600 transition-colors flex items-center justify-center gap-2 mt-8"
                            >
                                Запустить <Send className="w-4 h-4" />
                            </button>

                            <p className="text-xs text-muted-foreground text-center font-mono">
                                // ОТПРАВЛЯЯ ФОРМУ, ВЫ СОГЛАШАЕТЕСЬ С ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ
                            </p>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
