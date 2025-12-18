import { blogPosts, BlogPost } from '@/data/blogData';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Simulate network delay for mock
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const blogService = {
    async getPosts(): Promise<BlogPost[]> {
        if (API_URL) {
            try {
                const res = await fetch(`${API_URL}/posts`, { cache: 'no-store' });
                if (!res.ok) throw new Error('Failed to fetch posts');
                return res.json();
            } catch (error) {
                console.error("API Error, falling back to mock:", error);
            }
        }

        await delay(800);
        return blogPosts;
    },

    async getPostBySlug(slug: string): Promise<BlogPost | undefined> {
        if (API_URL) {
            try {
                const res = await fetch(`${API_URL}/posts/${slug}`, { next: { revalidate: 3600 } });
                if (!res.ok) return undefined;
                return res.json();
            } catch (error) {
                console.error("API Error, falling back to mock:", error);
            }
        }

        await delay(500);
        return blogPosts.find(post => post.slug === slug);
    },

    async getCategories(): Promise<{ name: string; slug: string; count: number }[]> {
        if (API_URL) {
            try {
                const res = await fetch(`${API_URL}/categories`, { next: { revalidate: 3600 } });
                if (res.ok) return res.json();
            } catch (error) {
                console.error("API Error, falling back to mock:", error);
            }
        }

        await delay(300);
        return [
            { name: 'Architecture', slug: 'architecture', count: 12 },
            { name: 'Development', slug: 'development', count: 8 },
            { name: 'Design', slug: 'design', count: 5 },
            { name: 'AI', slug: 'ai', count: 3 },
        ];
    }
};
