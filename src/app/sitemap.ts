import { MetadataRoute } from 'next'
import { blogService } from '@/services/blogService'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://pugofka.com'

    // Static routes
    const routes = [
        '',
        '/company',
        '/contacts',
        '/privacy',
        '/terms',
        '/services',
        '/portfolio',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Services
    const services = [
        'bitrix24',
        'custom',
        'ecommerce',
        'express',
        'startups',
        'support',
    ].map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    // Portfolio
    const portfolio = [
        'avrora-specstal',
        'kapous-app',
        'kapous-web',
        'obs',
        'sharik-spb',
        'spadream',
        'zatey',
        'zatey-print',
    ].map((slug) => ({
        url: `${baseUrl}/portfolio/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    // Dynamic Blog Content
    let blogRoutes: MetadataRoute.Sitemap = []
    try {
        const categories = await blogService.getCategories()
        const categoryRoutes = categories.map((cat) => ({
            url: `${baseUrl}/blog/${cat.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }))

        // Fetch all posts (iterating through pages)
        let allPosts: any[] = []
        let page = 1
        let lastPage = 1

        // Fetch first page to get meta
        const firstPage = await blogService.getPosts(1)
        if (firstPage.data.length > 0) {
            allPosts = [...firstPage.data]
            lastPage = firstPage.meta.lastPage

            // Fetch remaining pages in parallel
            if (lastPage > 1) {
                const promises = []
                for (let i = 2; i <= lastPage; i++) {
                    promises.push(blogService.getPosts(i))
                }
                const results = await Promise.all(promises)
                results.forEach(res => {
                    allPosts = [...allPosts, ...res.data]
                })
            }
        }

        const postRoutes = allPosts.map((post) => {
            const categorySlug = typeof post.category === 'object' && post.category !== null && 'slug' in post.category
                ? (post.category as any).slug
                : (typeof post.category === 'string' ? post.category : 'all');

            return {
                url: `${baseUrl}/blog/${categorySlug}/${post.slug}`,
                lastModified: new Date(post.date),
                changeFrequency: 'monthly' as const,
                priority: 0.7,
            }
        })

        blogRoutes = [...categoryRoutes, ...postRoutes]
    } catch (error) {
        console.error('Failed to generate blog sitemap:', error)
    }

    return [...routes, ...services, ...portfolio, ...blogRoutes]
}
