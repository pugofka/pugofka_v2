'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full border-b border-border bg-background/80 backdrop-blur-md z-50">
            <div className="container mx-auto px-4 h-20 flex justify-between items-center">
                <Link href="/" className="block w-40 md:w-48 relative h-10 hover:opacity-80 transition-opacity">
                    <Image
                        src="/logo.svg"
                        alt="Pugofka Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                <div className="hidden md:flex gap-8 font-mono text-sm text-gray-400">
                    <span>EST. 2011</span>
                    <span>ST. PETERSBURG</span>
                </div>
            </div>
        </header>
    );
}
