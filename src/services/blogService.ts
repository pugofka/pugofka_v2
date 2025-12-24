export interface BlogPost {
    id: string | number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readingTime: string;
    category: string | { id: number | string; name: string; slug: string };
    tags: string[];
    coverImage?: string;
    detailImage?: string;
    seo?: {
        metaTitle: string;
        metaDescription: string;
        ogImage: string;
    };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.pugofka.com/api';
const IMAGE_BASE_URL = 'https://api.pugofka.com'; // User confirmed backend and images are here

const normalizeImage = (url: string | undefined): string | undefined => {
    if (!url) return undefined;
    if (url.startsWith('http')) return url;
    if (url.startsWith('/')) return `${IMAGE_BASE_URL}${url}`;
    return url;
};

export const blogService = {
    async getPosts(page: number = 1, category?: string): Promise<{ data: BlogPost[], meta: { total: number, page: number, lastPage: number } }> {
        if (!API_URL) return { data: [], meta: { total: 0, page: 1, lastPage: 1 } };

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
                coverImage: normalizeImage(post.coverImage),
                detailImage: normalizeImage(post.detailImage)
            }));
            return {
                data: posts,
                meta: json.meta || { total: json.data.length, page: 1, lastPage: 1 }
            };
        }

        return { data: [], meta: { total: 0, page: 1, lastPage: 1 } };
    },

    async getPostById(idOrSlug: string | number): Promise<BlogPost | undefined> {
        if (!API_URL) return undefined;

        try {
            const res = await fetch(`${API_URL}/post/${idOrSlug}`, { next: { revalidate: 3600 } });
            if (!res.ok) return undefined;
            const post = await res.json();
            return {
                ...post,
                coverImage: normalizeImage(post.coverImage),
                detailImage: normalizeImage(post.detailImage),
                content: post.content
                    ?.replace(/src=["']\s*\/([^"']+)["']/g, `src="${IMAGE_BASE_URL}/$1"`)
                    ?.replace(/src=["']\s*http:\/\/localhost:\d+\/([^"']+)["']/g, `src="${IMAGE_BASE_URL}/$1"`)

            };
        } catch (error) {
            console.error("API Error:", error);
            return undefined;
        }
    },

    async getPostBySlug(categorySlug: string, slug: string): Promise<BlogPost | undefined> {
        if (!API_URL) return undefined;

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
            console.error("API Error:", error);
        }
        return undefined;
    },

    async getCategories(): Promise<{ id: string | number; name: string; slug: string; count: number }[]> {
        if (!API_URL) return [];

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
            console.error("API Error:", error);
        }
        return [];
    }
};
