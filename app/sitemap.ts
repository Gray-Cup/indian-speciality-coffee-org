import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://indian-speciality-coffee-org.vercel.app'

const staticRoutes = [
  { path: '', priority: 1.0 },
  { path: '/blog', priority: 0.9 },
  { path: '/farms', priority: 0.8 },
  { path: '/roasters', priority: 0.8 },
  { path: '/learn', priority: 0.8 },
  { path: '/about', priority: 0.6 },
  { path: '/contact', priority: 0.5 },
]

export default async function sitemap() {
  const today = new Date().toISOString().split('T')[0]

  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const routes = staticRoutes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: today,
    changeFrequency: 'weekly' as const,
    priority,
  }))

  return [...routes, ...blogs]
}
