'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface BackButtonProps {
    fallbackUrl: string;
    label?: string;
}

export default function BackButton({ fallbackUrl, label = 'НАЗАД' }: BackButtonProps) {
    const router = useRouter();

    const handleBack = (e: React.MouseEvent) => {
        e.preventDefault();

        if (window.history.length > 2) {
            router.back();
        } else {
            router.push(fallbackUrl);
        }
    };

    return (
        <a
            href={fallbackUrl}
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 font-mono text-sm uppercase tracking-widest group cursor-pointer"
        >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {label}
        </a>
    );
}
