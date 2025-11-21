'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Paperclip, Check } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PROJECT_TYPES = [
    'Интернет-магазин',
    'Корпоративный сайт',
    'Стартап / MVP',
    'Внедрение CRM',
    'Поддержка',
    'Другое'
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [mounted, setMounted] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

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

    const toggleType = (type: string) => {
        setSelectedTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

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
                        className="fixed inset-y-0 right-0 w-full md:w-[600px] bg-background border-l border-border z-[70] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 md:p-8 pb-6 flex justify-between items-center border-b border-border/50 shrink-0">
                            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">
                                Начать проект
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-surface rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 pt-6">
                            <form className="space-y-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                                        Имя / Компания
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="ИВАН ИВАНОВ / ООО РОМАШКА"
                                        className="w-full bg-surface/50 border border-transparent focus:border-primary p-3 text-base transition-all placeholder:text-muted-foreground/30 outline-none"
                                    />
                                </div>

                                {/* Contacts */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                                        Контакты
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="TELEGRAM / WHATSAPP / EMAIL"
                                        className="w-full bg-surface/50 border border-transparent focus:border-primary p-3 text-base transition-all placeholder:text-muted-foreground/30 outline-none"
                                    />
                                </div>

                                {/* Project Types (Tags) */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                                        Тип проекта
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {PROJECT_TYPES.map((type) => {
                                            const isSelected = selectedTypes.includes(type);
                                            return (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => toggleType(type)}
                                                    className={`px-3 py-2 text-xs font-mono transition-all border ${isSelected
                                                            ? 'bg-primary border-primary text-white'
                                                            : 'bg-surface/50 border-transparent text-gray-400 hover:border-gray-600'
                                                        }`}
                                                >
                                                    {type}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                                        О задаче
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="РАССКАЖИТЕ О ВАШИХ ЦЕЛЯХ..."
                                        className="w-full bg-surface/50 border border-transparent focus:border-primary p-3 text-base transition-all placeholder:text-muted-foreground/30 outline-none resize-none"
                                    />
                                </div>

                                {/* File Attachment */}
                                <div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="flex items-center gap-3 text-xs text-gray-400 hover:text-white transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-surface/50 flex items-center justify-center group-hover:bg-surface transition-colors">
                                            {file ? <Check className="w-4 h-4 text-green-500" /> : <Paperclip className="w-4 h-4" />}
                                        </div>
                                        <span className="border-b border-dashed border-gray-600 group-hover:border-white pb-0.5">
                                            {file ? file.name : 'Прикрепить бриф или ТЗ'}
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Footer / Submit */}
                        <div className="p-6 md:p-8 pt-0 bg-background border-t border-border/0 md:border-t-0 shrink-0">
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold uppercase tracking-widest py-4 hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                            >
                                Отправить заявку <Send className="w-4 h-4" />
                            </button>
                            <p className="text-[10px] text-muted-foreground text-center font-mono mt-3 opacity-50">
                                НАЖИМАЯ КНОПКУ, ВЫ СОГЛАШАЕТЕСЬ С ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
