'use client';

import { useUI } from '@/context/UIContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
    const { openContact } = useUI();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/80 backdrop-blur-md py-4 border-b border-border'
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
            </div>
        </header>
    );
}
