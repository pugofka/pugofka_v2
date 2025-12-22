import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import Pagination from '@/components/blog/Pagination';
import PostToolbar from '@/components/blog/PostToolbar';
import { blogService } from '@/services/blogService';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ segments: string[] }>;
    searchParams: Promise<{ page?: string }>;
}

const slugifyCategory = (value: string) =>
    value.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-_]/g, '');

const getPostCategorySlug = (post: { category?: unknown }) => {
    if (post?.category && typeof post.category === 'object' && 'slug' in post.category) {
        return String((post.category as { slug?: string }).slug || 'all');
    }
    if (typeof post?.category === 'string') {
        return slugifyCategory(post.category);
    }
    return 'all';
};

const buildPostMetadata = (post: {
    title: string;
    excerpt: string;
    date: string;
    coverImage?: string;
    seo?: { metaTitle: string; metaDescription: string; ogImage: string };
}): Metadata => {
    const ogImage = post.seo?.ogImage || post.coverImage || 'https://pugofka.com/og-default.jpg';
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://api.pugofka.com${ogImage}`;

    if (post.seo) {
        return {
            title: post.seo.metaTitle,
            description: post.seo.metaDescription,
            openGraph: {
                title: post.seo.metaTitle,
                description: post.seo.metaDescription,
                type: 'article',
                locale: 'ru_RU',
                siteName: 'Pugofka',
                publishedTime: post.date,
                authors: ['Pugofka'],
                images: [
                    {
                        url: fullOgImage,
                        width: 1200,
                        height: 630,
                        alt: post.title,
                    }
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: post.seo.metaTitle,
                description: post.seo.metaDescription,
                images: [fullOgImage],
            },
        };
    }

    return {
        title: `${post.title} | Pugofka System Logs`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            locale: 'ru_RU',
            siteName: 'Pugofka',
            publishedTime: post.date,
            authors: ['Pugofka'],
            images: [
                {
                    url: fullOgImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [fullOgImage],
        },
    };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { segments } = await params;
    if (!segments || segments.length === 0) {
        return { title: 'Post Not Found' };
    }

    if (segments.length === 1) {
        const categorySlug = segments[0];
        const categories = await blogService.getCategories();
        const category = categories.find((item) => item.slug === categorySlug);
        if (!category) {
            return { title: 'Category Not Found' };
        }
        const categoryName = category?.name || categorySlug;

        return {
            title: `System Logs | ${categoryName}`,
            description: `Подборка статей из категории ${categoryName}.`,
            openGraph: {
                title: `System Logs | ${categoryName}`,
                description: `Подборка статей из категории ${categoryName}.`,
                type: 'website',
                locale: 'ru_RU',
                siteName: 'Pugofka',
                images: [
                    {
                        url: 'https://pugofka.com/og-blog.jpg',
                        width: 1200,
                        height: 630,
                        alt: 'Pugofka System Logs',
                    }
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: `System Logs | ${categoryName}`,
                description: `Подборка статей из категории ${categoryName}.`,
            },
        };
    }

    const post = await blogService.getPostBySlug(segments[0], segments[1]);
    if (!post) {
        return { title: 'Post Not Found' };
    }

    return buildPostMetadata(post);
}

export default async function BlogSegmentsPage({ params, searchParams }: PageProps) {
    const { segments } = await params;
    const query = await searchParams;
    const page = Number(query.page) || 1;

    if (!segments || segments.length === 0) {
        notFound();
    }

    if (segments.length === 1) {
        const segment = segments[0];
        const categorySlug = segment;
        const categories = await blogService.getCategories();
        const category = categories.find((item) => item.slug === categorySlug);
        if (!category) {
            notFound();
        }
        const { data: posts, meta } = await blogService.getPosts(page, categorySlug);
        const categoryName = category?.name || categorySlug;

        return (
            <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
                <div className="container mx-auto px-4 mb-20">
                    <div className="border-b border-white/10 pb-8">
                        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-4">
                            System <span className="text-stroke">Logs</span>
                        </h1>
                        <div className="flex justify-between items-end">
                            <p className="text-gray-400 max-w-xl font-light">
                                Категория: <span className="text-white font-medium">{categoryName}</span>
                            </p>
                            <div className="hidden md:block font-mono text-xs text-primary uppercase tracking-widest">
                                Status: Online
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="md:col-span-1">
                            <div className="sticky top-32">
                                <BlogSidebar categories={categories} />
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {posts.map((post) => (
                                    <div key={post.id} className="h-full">
                                        <BlogCard post={post} />
                                    </div>
                                ))}
                            </div>

                            <Pagination
                                currentPage={meta.page}
                                totalPages={meta.lastPage}
                                baseUrl={`/blog/${categorySlug}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (segments.length === 2) {
        const [categorySlug, postSlug] = segments;
        const post = await blogService.getPostBySlug(categorySlug, postSlug);
        if (!post) {
            notFound();
        }

        const canonicalCategory = getPostCategorySlug(post);
        if (canonicalCategory && canonicalCategory !== categorySlug) {
            notFound();
        }

        return (
            <article className="min-h-screen bg-background text-foreground pt-24 pb-20">
                <div className="fixed top-0 left-0 w-full h-1 z-50 bg-surface">
                    <div className="h-full bg-primary w-1/3" />
                </div>

                <div className="container mx-auto px-4">
                    <Link
                        href={`/blog/${canonicalCategory || categorySlug}`}
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 font-mono text-sm uppercase tracking-widest group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Вернуться к блогу
                    </Link>

                    <header className="max-w-4xl mx-auto mb-16 border-b border-border pb-12">
                        <div className="flex flex-wrap gap-4 mb-8 font-mono text-xs text-primary uppercase tracking-widest">
                            <span className="border border-border px-2 py-1">
                                {typeof post.category === 'object' ? post.category.name : post.category}
                            </span>
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

                        {post.coverImage && (
                            <div className="relative w-full border border-border p-1 bg-surface mb-8 group overflow-hidden">
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        )}
                    </header>

                    <div className="max-w-3xl mx-auto">
                        <PostToolbar title={post.title} />

                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-16 pt-8 border-t border-border">
                            <div className="flex flex-wrap gap-2">
                                <div className="flex flex-wrap gap-2">
                                    {/* Tags hidden temporarily */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    notFound();
}
