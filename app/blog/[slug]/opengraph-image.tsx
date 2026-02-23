// File-based dynamic OG image for each blog post.
// Next.js auto-generates the correct <meta> tags per slug — no manual wiring needed.

import { ImageResponse } from 'next/og'
import { getBlogPosts } from 'app/blog/utils'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((p) => p.slug === params.slug)
  const title = post?.metadata.title ?? 'Indian Speciality Coffee'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          background: '#451a03',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top rule */}
        <div style={{ width: '100%', height: 4, background: '#92400e' }} />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            padding: '64px 80px',
          }}
        >
          <p
            style={{
              color: '#d97706',
              fontSize: 16,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            Coffee Journal — Indian Speciality Coffee
          </p>
          <h1
            style={{
              color: '#fef3c7',
              fontSize: 60,
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: 950,
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '32px 80px',
            borderTop: '1px solid #92400e',
          }}
        >
          <p style={{ color: '#92400e', fontSize: 16, letterSpacing: '0.1em' }}>
            indianspecialitycoffee.com/blog
          </p>
          <p
            style={{
              color: '#92400e',
              fontSize: 14,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Gray Cup Enterprises
          </p>
        </div>
      </div>
    )
  )
}
