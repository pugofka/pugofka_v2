import { blogService } from '@/services/blogService';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Share2, Printer } from 'lucide-react';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await blogService.getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | Pugofka System Logs`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await blogService.getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background text-foreground pt-24 pb-20">
            {/* Progress Bar / Scroll Indicator (Visual Only for now) */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 bg-surface">
                <div className="h-full bg-primary w-1/3" /> {/* Mock progress */}
            </div>

            <div className="container mx-auto px-4">
                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 font-mono text-sm uppercase tracking-widest group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back_to_Index
                </Link>

                {/* Hero Header */}
                <header className="max-w-4xl mx-auto mb-16 border-b border-border pb-12">
                    <div className="flex flex-wrap gap-4 mb-8 font-mono text-xs text-primary uppercase tracking-widest">
                        <span className="border border-border px-2 py-1">{post.category}</span>
                        <span className="flex items-center gap-2 text-gray-400">
                            <Clock className="w-3 h-3" /> {post.readingTime}
                        </span>
                        <span className="flex items-center gap-2 text-gray-400">
                            <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                        {post.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed border-l-2 border-primary pl-6 mb-12">
                        {post.excerpt}
                    </p>

                    {/* Cover Image */}
                    {post.coverImage && (
                        <div className="relative w-full aspect-video border border-border p-1 bg-surface mb-8 group overflow-hidden">
                            {/* Industrial overlay effects */}
                            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />
                            <div className="absolute top-0 right-0 p-2 z-20 font-mono text-xs bg-black/80 text-primary border-l border-b border-primary">
                                IMG_SOURCE: EXT_DB
                            </div>

                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    )}
                </header>

                {/* Main Content */}
                <div className="max-w-3xl mx-auto">
                    {/* Toolbar */}
                    <div className="flex justify-end gap-4 mb-8 border-b border-border/50 pb-4">
                        <button className="p-2 hover:bg-surface text-gray-500 hover:text-white transition-colors">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-surface text-gray-500 hover:text-white transition-colors">
                            <Printer className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content Body */}
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags Footer */}
                    <div className="mt-16 pt-8 border-t border-border">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-sm font-mono text-gray-500">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
