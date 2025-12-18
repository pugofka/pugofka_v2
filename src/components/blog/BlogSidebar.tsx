'use client';

import { allCategories } from '@/data/blogData';
import { Folder, Search, Hash } from 'lucide-react';
import { useState } from 'react';

export default function BlogSidebar() {
    const [activeCategory, setActiveCategory] = useState("All");

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
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`text-left px-6 py-2 font-mono text-sm transition-all relative group flex items-center gap-2
                                ${activeCategory === category
                                    ? 'text-primary bg-surface/50 translate-x-2'
                                    : 'text-gray-400 hover:text-white hover:translate-x-1'
                                }`}
                        >
                            {/* Connector Line */}
                            <div className={`absolute left-0 top-1/2 w-4 h-px -translate-x-full transition-colors
                                ${activeCategory === category ? 'bg-primary' : 'bg-transparent group-hover:bg-border'}`}
                            />

                            <span className="opacity-50">&gt;</span>
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tags / Keywords */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                    <Hash className="w-3 h-3" />
                    <span>Keywords</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["Highload", "Backend", "Frontend", "Design", "AI", "Rust", "Go"].map(tag => (
                        <span key={tag} className="text-[10px] font-mono border border-border px-2 py-1 text-gray-500 hover:border-primary hover:text-primary cursor-pointer transition-colors uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
}
