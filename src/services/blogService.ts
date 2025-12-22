import { blogPosts, BlogPost } from '@/data/blogData';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.pugofka.com/api';
const IMAGE_BASE_URL = 'https://api.pugofka.com'; // User confirmed backend and images are here

const normalizeImage = (url: string | undefined): string | undefined => {
    if (!url) return undefined;
    if (url.startsWith('http')) return url;
    if (url.startsWith('/')) return `${IMAGE_BASE_URL}${url}`;
    return url;
};

// Simulate network delay for mock
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const blogService = {
    async getPosts(page: number = 1, category?: string): Promise<{ data: BlogPost[], meta: { total: number, page: number, lastPage: number } }> {
        if (API_URL) {
            try {
                const params = new URLSearchParams({ page: page.toString() });
                let endpoint = `${API_URL}/posts?${params.toString()}`;

                if (category && category !== 'all') {
                    const categories = await blogService.getCategories();
                    const matched = categories.find((item) => item.slug === category);
                    const categoryId = matched?.id ?? (String(category).match(/^\d+$/) ? category : null);

                    if (categoryId) {
                        endpoint = `${API_URL}/posts/category/${categoryId}?${params.toString()}`;
                    }
                }

                const res = await fetch(endpoint, { cache: 'no-store' });
                if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
                const json = await res.json();

                // If API returns array directly (fallback for old mock behavior if needed, though we expect object now)
                if (Array.isArray(json)) {
                    return {
                        data: json,
                        meta: { total: json.length, page: 1, lastPage: 1 }
                    };
                }

                if (Array.isArray(json.data)) {
                    const posts = json.data.map((post: BlogPost) => ({
                        ...post,
                        coverImage: normalizeImage(post.coverImage)
                    }));
                    return {
                        data: posts,
                        meta: json.meta || { total: json.data.length, page: 1, lastPage: 1 }
                    };
                }

                throw new Error("Invalid format");
            } catch (error) {
                console.error("API Error, falling back to mock:", error);
            }
        }

        await delay(800);

        // Mock pagination logic with category filter
        const LIMIT = 10;
        let filteredPosts = blogPosts;

        if (category && category !== 'all') {
            filteredPosts = blogPosts.filter(post => {
                if (typeof post.category === 'object') {
                    return post.category.slug === category;
                }
                return post.category.toLowerCase() === category.toLowerCase();
            });
        }

        const total = filteredPosts.length;
        const lastPage = Math.ceil(total / LIMIT);
        const start = (page - 1) * LIMIT;
        const paginatedData = filteredPosts.slice(start, start + LIMIT);

        return {
            data: paginatedData,
            meta: { total, page, lastPage }
        };
    },

    async getPostById(idOrSlug: string | number): Promise<BlogPost | undefined> {
        if (API_URL) {
            try {
                const res = await fetch(`${API_URL}/post/${idOrSlug}`, { next: { revalidate: 3600 } });
                if (!res.ok) return undefined;
                const post = await res.json();
                return {
                    ...post,
                    coverImage: normalizeImage(post.coverImage),
                    content: post.content?.replace(/src="\/upload/g, `src="${IMAGE_BASE_URL}/upload`)
                };
            } catch (error) {
                console.error("API Error, falling back to mock:", error);
            }
        }

        await delay(500);
        return blogPosts.find(post => String(post.id) === String(idOrSlug) || post.slug === String(idOrSlug));
    },

    async getPostBySlug(categorySlug: string, slug: string): Promise<BlogPost | undefined> {
        if (API_URL) {
            try {
                let page = 1;
                let lastPage = 1;

                while (page <= lastPage) {
                    const params = new URLSearchParams({ page: page.toString(), limit: '50' });
                    if (categorySlug && categorySlug !== 'all') {
                        params.set('category', categorySlug);
                    }
                    const res = await fetch(`${API_URL}/posts?${params.toString()}`, { cache: 'no-store' });
                    if (!res.ok) break;
                    const json = await res.json();

                    const list = Array.isArray(json) ? json : json.data;
                    const meta = Array.isArray(json) ? undefined : json.meta;

                    if (Array.isArray(list)) {
                        const match = list.find((post: BlogPost) => post.slug === slug);
                        if (match?.id !== undefined) {
                            return await blogService.getPostById(match.id);
                        }
                    }

                    lastPage = meta?.lastPage || 1;
                    page += 1;
                }
            } catch (error) {
                console.error("API Error, falling back to mock:", error);
            }
        }

        await delay(300);
        return blogPosts.find(post => post.slug === slug);
    },

    async getCategories(): Promise<{ id: string | number; name: string; slug: string; count: number }[]> {
        if (API_URL) {
            try {
                // User indicated endpoint is /posts/categories
                const res = await fetch(`${API_URL}/posts/categories`, { next: { revalidate: 3600 } });
                if (res.ok) {
                    const json = await res.json();
                    // Check if wrapped in data or direct array
                    if (Array.isArray(json)) return json;
                    if (Array.isArray(json.data)) return json.data;
                }
            } catch (error) {
                console.error("API Error, falling back to mock:", error);
            }
        }

        await delay(300);
        return [
            { id: "1", name: 'Architecture', slug: 'architecture', count: 12 },
            { id: "2", name: 'Development', slug: 'development', count: 8 },
            { id: "3", name: 'Design', slug: 'design', count: 5 },
            { id: "4", name: 'AI', slug: 'ai', count: 3 },
        ];
    }
};
