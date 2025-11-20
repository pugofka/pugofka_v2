'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Small delay to not annoy immediately
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 right-0 z-50 p-4 md:p-6 w-full md:w-auto max-w-md"
                >
                    <div className="bg-background border border-border p-6 shadow-2xl relative">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary" />

                        <div className="flex justify-between items-start gap-4 mb-4">
                            <h3 className="font-mono text-sm uppercase tracking-widest text-primary">
                                System Notice
                            </h3>
                            <button
                                onClick={acceptCookies}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <p className="text-sm text-muted-foreground mb-6 font-mono leading-relaxed">
                            // МЫ ИСПОЛЬЗУЕМ COOKIES ДЛЯ АНАЛИЗА ТРАФИКА И УЛУЧШЕНИЯ UX.
                            ПРОДОЛЖАЯ ИСПОЛЬЗОВАНИЕ САЙТА, ВЫ СОГЛАШАЕТЕСЬ С ЭТИМ.
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={acceptCookies}
                                className="flex-1 bg-primary text-white font-bold uppercase tracking-wider py-3 px-6 hover:bg-red-600 transition-colors text-xs md:text-sm"
                            >
                                Принять
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
