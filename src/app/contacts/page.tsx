'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import { Mail, MapPin, Phone, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { validateContactForm, sanitizeInput, ValidationError } from '@/utils/validation';

const API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || 'https://api.pugofka.com/api/contact';

export default function ContactsPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState<ValidationError>({});
    const [apiError, setApiError] = useState<string>('');

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setApiError('');

        // Sanitize and validate
        const cleanData = {
            name: sanitizeInput(formData.name),
            contact: sanitizeInput(formData.contact),
            description: sanitizeInput(formData.message),
        };

        const validationErrors = validateContactForm(cleanData);
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);

        const payload = new FormData();
        payload.append('name', cleanData.name);
        payload.append('contact', cleanData.contact);
        payload.append('description', cleanData.description);
        payload.append('types', 'Contact Page Form');

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                body: payload,
            });

            const data = await response.json().catch(() => ({ success: response.ok }));

            if (response.ok || data.success) {
                setSuccess(true);
                setFormData({ name: '', contact: '', message: '' });
                // Reset success message after 5 seconds to allow sending another
                setTimeout(() => setSuccess(false), 5000);
            } else {
                // Handle validation errors from backend
                if (data.errors) {
                    setErrors(data.errors);
                } else {
                    setApiError(data.message || 'Ошибка при отправке. Попробуйте позже.');
                }
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setApiError('Ошибка соединения. Проверьте интернет и попробуйте снова.');
        } finally {
            setLoading(false);
        }
    };

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
                            className="bg-surface border border-border p-8 md:p-12 relative overflow-hidden"
                        >
                            {success ? (
                                <div className="absolute inset-0 z-20 bg-surface flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase mb-4">Сообщение отправлено!</h3>
                                    <p className="text-gray-400 mb-8 max-w-xs">
                                        Спасибо за обращение. Мы ответим вам в течение рабочего дня.
                                    </p>
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="text-sm font-mono uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary hover:border-white pb-1"
                                    >
                                        Отправить еще одно
                                    </button>
                                </div>
                            ) : null}

                            <h3 className="text-2xl font-bold uppercase mb-6">Начать проект</h3>
                            <p className="text-gray-400 mb-8">
                                Расскажите о вашей задаче. Мы ответим в течение рабочего дня.
                            </p>

                            {/* API Error Message */}
                            {apiError && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 flex items-start gap-3 relative z-10">
                                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-red-200">{apiError}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div>
                                    <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Имя</label>
                                    <input
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        className={`w-full bg-background border p-4 outline-none transition-colors ${
                                            errors.name ? 'border-red-500' : 'border-border focus:border-primary'
                                        }`}
                                        placeholder="Иван Иванов"
                                    />
                                    {errors.name && (
                                        <p className="text-xs text-red-400 font-mono mt-1">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Контакты</label>
                                    <input
                                        required
                                        name="contact"
                                        value={formData.contact}
                                        onChange={handleChange}
                                        type="text"
                                        className={`w-full bg-background border p-4 outline-none transition-colors ${
                                            errors.contact ? 'border-red-500' : 'border-border focus:border-primary'
                                        }`}
                                        placeholder="TELEGRAM / WHATSAPP / EMAIL"
                                    />
                                    {errors.contact && (
                                        <p className="text-xs text-red-400 font-mono mt-1">{errors.contact}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Задача</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full bg-background border p-4 h-32 outline-none transition-colors resize-none ${
                                            errors.description ? 'border-red-500' : 'border-border focus:border-primary'
                                        }`}
                                        placeholder="Опишите ваш проект..."
                                    />
                                    {errors.description && (
                                        <p className="text-xs text-red-400 font-mono mt-1">{errors.description}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-primary text-white font-bold uppercase py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Отправка...
                                        </>
                                    ) : (
                                        'Отправить'
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
