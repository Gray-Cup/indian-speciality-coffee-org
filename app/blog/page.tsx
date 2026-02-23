import { getBlogPosts, formatDate } from 'app/blog/utils'
import Link from 'next/link'

export const metadata = {
  title: 'Coffee Journal',
  description:
    'Long-form writing on Indian specialty coffee — origins, people, processing, culture, and the industry.',
}

export default function BlogPage() {
  const posts = getBlogPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  )

  return (
    <div className="max-w-3xl mx-auto px-6 py-14">

      {/* Page Header */}
      <div className="border-b border-amber-950/10 pb-8 mb-2">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">
          Indian Speciality Coffee
        </p>
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-amber-950 mb-4">
          Coffee Journal
        </h1>
        <p className="text-base text-amber-950/70 leading-relaxed">
          Long-form writing on Indian specialty coffee — the regions, the people, the science
          of processing, and the culture of the cup.
        </p>
      </div>

      {/* Posts */}
      <div>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group border-b border-amber-950/10 py-8 hover:bg-amber-100/40 transition-colors"
          >
            <p className="text-xs uppercase tracking-widest text-amber-700 font-medium mb-2">
              {formatDate(post.metadata.publishedAt)}
            </p>
            <h2 className="text-xl font-black tracking-tight text-amber-950 mb-2 group-hover:text-amber-800 transition-colors leading-snug">
              {post.metadata.title}
            </h2>
            <p className="text-sm text-amber-950/60 leading-relaxed">
              {post.metadata.summary}
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-amber-700 font-medium">
              Read →
            </p>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="border-t border-amber-950/10 pt-8">
          <p className="text-sm text-amber-950/50">No posts yet.</p>
        </div>
      )}
    </div>
  )
}
