'use client';

import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { BlogPost } from '@/data/blogData';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <article className="h-full bg-surface border border-border p-6 relative overflow-hidden transition-all duration-300 hover:bg-surface-hover hover:border-primary/50 flex flex-col">

                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/0 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/0 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/0 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/0 group-hover:border-primary transition-colors duration-300" />

                {/* Header Meta */}
                <div className="flex justify-between items-center mb-6 font-mono text-xs text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        <FileText className="w-3 h-3 text-primary" />
                        <span>{post.id}</span>
                    </div>
                    <span>{post.date}</span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h2>
                    <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed font-light">
                        {post.excerpt}
                    </p>
                </div>

                {/* Footer Meta */}
                <div className="pt-6 border-t border-border/50 flex justify-between items-center mt-auto">
                    <div className="flex gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[10px] font-mono border border-border px-2 py-1 text-gray-400 uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary group-hover:translate-x-1 transition-transform">
                        <span>Read_Log</span>
                        <ArrowRight className="w-3 h-3" />
                    </div>
                </div>
            </article>
        </Link>
    );
}
