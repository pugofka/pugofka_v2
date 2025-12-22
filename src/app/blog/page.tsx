import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import Pagination from '@/components/blog/Pagination';
import { blogService } from '@/services/blogService';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'System Logs | Pugofka - Блог о разработке и архитектуре',
    description: 'Архив технических решений, архитектурных паттернов и заметок от команды Pugofka. Статьи о разработке, highload системах, дизайне и AI.',
    openGraph: {
        title: 'System Logs | Pugofka',
        description: 'Архив технических решений, архитектурных паттернов и заметок от команды Pugofka.',
        type: 'website',
        locale: 'ru_RU',
        siteName: 'Pugofka',
        images: [
            {
                url: 'https://pugofka.com/og-blog.jpg', // Нужно будет создать это изображение
                width: 1200,
                height: 630,
                alt: 'Pugofka System Logs',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'System Logs | Pugofka',
        description: 'Архив технических решений, архитектурных паттернов и заметок от команды Pugofka.',
    },
};

interface PageProps {
    searchParams: Promise<{ page?: string; category?: string }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
    const params = await searchParams;
    const page = Number(params.page) || 1;
    const category = params.category;
    const { data: posts, meta } = await blogService.getPosts(page, category);
    const categories = await blogService.getCategories();

    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-20">

            {/* Header Section */}
            <div className="container mx-auto px-4 mb-20">
                <div className="border-b border-white/10 pb-8">
                    <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-4">
                        System <span className="text-stroke">Logs</span>
                    </h1>
                    <div className="flex justify-between items-end">
                        <p className="text-gray-400 max-w-xl font-light">
                            Архив технических решений, архитектурных паттернов и заметок.
                            Доступ к базе данных разрешен. Start reading sequence...
                        </p>
                        <div className="hidden md:block font-mono text-xs text-primary uppercase tracking-widest">
                            Status: Online
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Grid Layout */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Sidebar (1 Col) */}
                    <div className="md:col-span-1">
                        <div className="sticky top-32">
                            <BlogSidebar categories={categories} />
                        </div>
                    </div>

                    {/* Content Feed (3 Cols) */}
                    {/* Content Feed (3 Cols) */}
                    <div className="md:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {posts.map((post) => (
                                <div key={post.id} className="h-full">
                                    <BlogCard post={post} />
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <Pagination
                            currentPage={meta.page}
                            totalPages={meta.lastPage}
                            baseUrl="/blog"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
