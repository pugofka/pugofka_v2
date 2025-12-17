'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Paperclip, Check, Loader2 } from 'lucide-react';
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

const API_URL = '/api/contact';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [mounted, setMounted] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Form refs
    const nameRef = useRef<HTMLInputElement>(null);
    const contactRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setSuccess(false); // Reset success state on open
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formData = {
            name: nameRef.current?.value || '',
            contact: contactRef.current?.value || '',
            types: selectedTypes,
            description: descriptionRef.current?.value || '',
            fileName: file?.name || null
        };

        console.log('🚀 [ContactModal] Sending to API:', formData);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                // Clear form
                if (nameRef.current) nameRef.current.value = '';
                if (contactRef.current) contactRef.current.value = '';
                if (descriptionRef.current) descriptionRef.current.value = '';
                setSelectedTypes([]);
                setFile(null);

                // Close modal after delay
                setTimeout(() => {
                    onClose();
                    setSuccess(false);
                }, 3000);
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
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
                                {success ? 'Заявка отправлена!' : 'Начать проект'}
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-surface rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {success ? (
                            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6"
                                >
                                    <Check className="w-10 h-10 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold uppercase mb-4">Спасибо!</h3>
                                <p className="text-gray-400 max-w-sm">
                                    Мы получили вашу заявку и свяжемся с вами в ближайшее время.
                                </p>
                            </div>
                        ) : (
                            <>
                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-y-auto p-6 md:p-8 pt-6">
                                    <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                                                Имя / Компания
                                            </label>
                                            <input
                                                required
                                                ref={nameRef}
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
                                                required
                                                ref={contactRef}
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
                                                ref={descriptionRef}
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
                                        form="contact-form"
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-primary text-white font-bold uppercase tracking-widest py-4 hover:bg-red-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Отправка...
                                            </>
                                        ) : (
                                            <>
                                                Отправить заявку <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-[10px] text-muted-foreground text-center font-mono mt-3 opacity-50">
                                        НАЖИМАЯ КНОПКУ, ВЫ СОГЛАШАЕТЕСЬ С ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ
                                    </p>
                                </div>
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
