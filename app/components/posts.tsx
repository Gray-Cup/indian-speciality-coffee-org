import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  )

  return (
    <div>
      <div className="border-b border-amber-950/10 pb-4 mb-2">
        <p className="text-xs uppercase tracking-widest text-amber-700 font-medium">
          Latest from the Journal
        </p>
      </div>
      {allBlogs.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block group border-b border-amber-950/10 py-5 hover:bg-amber-100/40 transition-colors"
        >
          <p className="text-xs uppercase tracking-widest text-amber-700/70 font-medium mb-1">
            {formatDate(post.metadata.publishedAt)}
          </p>
          <p className="text-base font-bold text-amber-950 group-hover:text-amber-800 transition-colors leading-snug mb-1">
            {post.metadata.title}
          </p>
          {post.metadata.summary && (
            <p className="text-sm text-amber-950/55 leading-relaxed">
              {post.metadata.summary}
            </p>
          )}
        </Link>
      ))}
      <div className="pt-4">
        <Link
          href="/blog"
          className="text-xs uppercase tracking-widest text-amber-700 font-medium hover:text-amber-950 transition-colors"
        >
          All posts →
        </Link>
      </div>
    </div>
  )
}
