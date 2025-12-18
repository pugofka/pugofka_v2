import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { blogService } from '@/services/blogService';

export default async function BlogPage() {
    const posts = await blogService.getPosts();

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
                            <BlogSidebar />
                        </div>
                    </div>

                    {/* Content Feed (3 Cols) */}
                    <div className="md:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {posts.map((post) => (
                                <div key={post.id} className="h-full">
                                    <BlogCard post={post} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
