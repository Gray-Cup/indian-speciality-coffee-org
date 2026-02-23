import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// OG image is handled by opengraph-image.tsx in this directory (file-based convention)
export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  const { title, publishedAt: publishedTime, summary: description } = post.metadata

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-14">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Organization',
              name: 'Indian Speciality Coffee',
            },
          }),
        }}
      />

      {/* Back link */}
      <div className="mb-10">
        <Link
          href="/blog"
          className="text-xs uppercase tracking-widest text-amber-700 font-medium hover:text-amber-950 transition-colors"
        >
          ← Coffee Journal
        </Link>
      </div>

      {/* Article Header */}
      <div className="border-b border-amber-950/10 pb-8 mb-10">
        <p className="text-xs uppercase tracking-widest text-amber-700 font-medium mb-4">
          {formatDate(post.metadata.publishedAt)}
        </p>
        <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-amber-950 leading-tight mb-4 title">
          {post.metadata.title}
        </h1>
        {post.metadata.summary && (
          <p className="text-base text-amber-950/60 leading-relaxed">
            {post.metadata.summary}
          </p>
        )}
      </div>

      {/* Article Body */}
      <article className="prose max-w-none">
        <CustomMDX source={post.content} />
      </article>

      {/* Footer */}
      <div className="border-t border-amber-950/10 mt-12 pt-8">
        <Link
          href="/blog"
          className="text-xs uppercase tracking-widest text-amber-700 font-medium hover:text-amber-950 transition-colors"
        >
          ← Back to Coffee Journal
        </Link>
      </div>
    </div>
  )
}
