import { BlogPosts } from 'app/components/posts'
import HeroSlideshow from 'app/components/hero-slideshow'
import { baseUrl } from 'app/sitemap'

export const metadata = {
  openGraph: {
    images: [
      {

        url: `/og.webp`,
        width: 1200,
        height: 630,
        alt: 'Indian Speciality Coffee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image' as const,
    images: "/og.webp",
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
