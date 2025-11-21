'use client';

import { useUI } from '@/context/UIContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const { openContact } = useUI();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen
                ? 'bg-background py-4 border-b border-border'
                : 'pt-6 border-b border-transparent'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="block w-40 md:w-48 relative h-10 hover:opacity-80 transition-opacity">
                    <Image
                        src="/logo.svg"
                        alt="Pugofka Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                <div className="hidden md:flex gap-8 font-mono text-sm text-gray-400 items-center">
                    <Link href="/company" className="hover:text-primary transition-colors uppercase tracking-widest">
                        Manifesto
                    </Link>
                    <div className="h-4 w-px bg-border" />
                    <span>EST. 2011</span>
                    <span>ST. PETERSBURG</span>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 top-[72px] bg-background z-40 md:hidden p-6 border-t border-border"
                    >
                        <nav className="flex flex-col gap-8 text-2xl font-bold uppercase">
                            <Link
                                href="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="hover:text-primary transition-colors"
                            >
                                Главная
                            </Link>
                            <Link
                                href="/company"
                                onClick={() => setIsMenuOpen(false)}
                                className="hover:text-primary transition-colors"
                            >
                                Manifesto
                            </Link>
                            <Link
                                href="/contacts"
                                onClick={() => setIsMenuOpen(false)}
                                className="hover:text-primary transition-colors"
                            >
                                Контакты
                            </Link>
                        </nav>
                        <div className="mt-12 flex flex-col gap-4 text-sm font-mono text-gray-400">
                            <span>EST. 2011</span>
                            <span>ST. PETERSBURG</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
