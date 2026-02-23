import { BlogPosts } from 'app/components/posts'
import HeroSlideshow from 'app/components/hero-slideshow'

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
