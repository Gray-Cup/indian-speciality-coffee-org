import type { Metadata } from 'next'
import { BlogPosts } from 'app/components/posts'
import HeroSlideshow from 'app/components/hero-slideshow'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  title: 'Indian Speciality Coffee',
  description: "Celebrating India's coffee regions, producers, and unique flavour profiles.",
  openGraph: {
    title: 'Indian Speciality Coffee',
    description: "Celebrating India's coffee regions, producers, and unique flavour profiles.",
    images: [
      {
        url: `${baseUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: 'Indian Speciality Coffee',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indian Speciality Coffee',
    description: "Celebrating India's coffee regions, producers, and unique flavour profiles.",
    images: [`${baseUrl}/og.png`],
  },
}

export default function Page() {
  return (
    <>
      <HeroSlideshow />
      <section className='max-w-2xl mx-4 mt-8 lg:mx-auto'>
        <div className="my-8">
          <BlogPosts />
        </div>
      </section>
    </>
  )
}
