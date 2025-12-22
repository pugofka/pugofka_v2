'use client';

import { Share2, Printer, Check } from 'lucide-react';
import { useState } from 'react';

interface PostToolbarProps {
    title: string;
}

export default function PostToolbar({ title }: PostToolbarProps) {
    const [shareSuccess, setShareSuccess] = useState(false);

    const handleShare = async () => {
        const url = window.location.href;

        // Try Web Share API first
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    url: url
                });
            } catch (error) {
                // User cancelled or error occurred
                console.log('Share cancelled');
            }
        } else {
            // Fallback to clipboard
            try {
                await navigator.clipboard.writeText(url);
                setShareSuccess(true);
                setTimeout(() => setShareSuccess(false), 2000);
            } catch (error) {
                console.error('Failed to copy to clipboard', error);
            }
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex justify-end gap-4 mb-8 border-b border-border/50 pb-4">
            <button
                onClick={handleShare}
                className="p-2 hover:bg-surface text-gray-500 hover:text-white transition-colors relative group"
                title="Поделиться"
            >
                {shareSuccess ? (
                    <Check className="w-5 h-5 text-green-500" />
                ) : (
                    <Share2 className="w-5 h-5" />
                )}
                {shareSuccess && (
                    <span className="absolute -top-8 right-0 text-xs font-mono text-green-500 whitespace-nowrap">
                        Скопировано!
                    </span>
                )}
            </button>
            <button
                onClick={handlePrint}
                className="p-2 hover:bg-surface text-gray-500 hover:text-white transition-colors"
                title="Печать"
            >
                <Printer className="w-5 h-5" />
            </button>
        </div>
    );
}
