import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
    if (totalPages <= 1) return null;

    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return (
        <div className="flex justify-center items-center gap-4 mt-16 font-mono text-sm">
            {/* PREV BUTTON */}
            {prevPage ? (
                <Link
                    href={`${baseUrl}?page=${prevPage}`}
                    className="flex items-center gap-2 px-4 py-2 border border-border bg-surface hover:border-primary hover:text-primary transition-colors uppercase tracking-wider"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>НАЗАД</span>
                </Link>
            ) : (
                <span className="flex items-center gap-2 px-4 py-2 border border-border/30 text-gray-700 uppercase tracking-wider cursor-not-allowed">
                    <ArrowLeft className="w-4 h-4" />
                    <span>НАЗАД</span>
                </span>
            )}

            {/* PAGE INDICATOR */}
            <div className="px-6 py-2 border-x border-border bg-surface/50 text-gray-400">
                СТР. <span className="text-white font-bold">{currentPage}</span> / {totalPages}
            </div>

            {/* NEXT BUTTON */}
            {nextPage ? (
                <Link
                    href={`${baseUrl}?page=${nextPage}`}
                    className="flex items-center gap-2 px-4 py-2 border border-border bg-surface hover:border-primary hover:text-primary transition-colors uppercase tracking-wider"
                >
                    <span>ДАЛЕЕ</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            ) : (
                <span className="flex items-center gap-2 px-4 py-2 border border-border/30 text-gray-700 uppercase tracking-wider cursor-not-allowed">
                    <span>ДАЛЕЕ</span>
                    <ArrowRight className="w-4 h-4" />
                </span>
            )}
        </div>
    );
}
