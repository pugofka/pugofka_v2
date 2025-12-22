'use client';

import { Folder, Search, Hash } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Category {
    id: string | number;
    name: string;
    slug: string;
    count?: number;
}

interface BlogSidebarProps {
    categories: Category[];
}

export default function BlogSidebar({ categories }: BlogSidebarProps) {
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get('category') || 'all';

    const getCategoryUrl = (categorySlug: string) => {
        if (categorySlug === 'all') {
            return '/blog';
        }
        return `/blog?category=${categorySlug}`;
    };

    return (
        <aside className="space-y-12">
            {/* Search Module */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                    <Search className="w-3 h-3" />
                    <span>Search_Database</span>
                </div>
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="SEARCH QUERY..."
                        className="w-full bg-surface border border-border p-4 font-mono text-sm focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-600"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary animate-pulse" />
                </div>
            </div>

            {/* Filter Module (File System Style) */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                    <Folder className="w-3 h-3" />
                    <span>Directory_Tree</span>
                </div>

                <div className="flex flex-col border-l border-border ml-2">
                    <Link
                        href={getCategoryUrl('all')}
                        className={`text-left px-6 py-2 font-mono text-sm transition-all relative group flex items-center gap-2
                             ${activeCategory === 'all'
                                ? 'text-primary bg-surface/50 translate-x-2'
                                : 'text-gray-400 hover:text-white hover:translate-x-1'
                            }`}
                    >
                        <div className={`absolute left-0 top-1/2 w-4 h-px -translate-x-full transition-colors
                             ${activeCategory === 'all' ? 'bg-primary' : 'bg-transparent group-hover:bg-border'}`}
                        />
                        <span className="opacity-50">&gt;</span>
                        All_Systems
                    </Link>

                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={getCategoryUrl(category.slug)}
                            className={`text-left px-6 py-2 font-mono text-sm transition-all relative group flex items-center gap-2
                                ${activeCategory === category.slug
                                    ? 'text-primary bg-surface/50 translate-x-2'
                                    : 'text-gray-400 hover:text-white hover:translate-x-1'
                                }`}
                        >
                            {/* Connector Line */}
                            <div className={`absolute left-0 top-1/2 w-4 h-px -translate-x-full transition-colors
                                ${activeCategory === category.slug ? 'bg-primary' : 'bg-transparent group-hover:bg-border'}`}
                            />

                            <span className="opacity-50">&gt;</span>
                            {category.name}
                            {category.count !== undefined && (
                                <span className="ml-auto text-xs text-gray-600">[{category.count}]</span>
                            )}
                        </Link>
                    ))}
                </div>
            </div>


        </aside>
    );
}
