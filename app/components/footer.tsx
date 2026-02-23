import Link from 'next/link'

const footerNavItems = {
  '/': { name: 'Home' },
  '/blog': { name: 'Blog' },
  '/about': { name: 'About' },
  '/sourcing': { name: 'Sourcing' },
  '/contact': { name: 'Contact' },
}

export default function Footer() {
  return (
    <footer className="pt-16 bottom-0 bg-amber-200 pb-8 text-center border-t border-neutral-200 pt-8">
      <p className="text-xl font-bold tracking-widest uppercase">
        Indian Speciality Coffee
      </p>
      <p className="text-xs text-neutral-700 mt-1">
        managed by <a href="https://graycup.org" target='_blank' className='underline'>Gray Cup Enterprises Private Limited</a>
      </p>
      <nav className="flex flex-row justify-center space-x-4 mt-4 text-sm text-neutral-900">
        {Object.entries(footerNavItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="transition-all hover:underline hover:text-neutral-950"
          >
            {name}
          </Link>
        ))}
      </nav>
      <p className="mt-6 text-xs text-neutral-700">
        © {new Date().getFullYear()} Gray Cup Enterprises Private Limited. All rights reserved.
      </p>
    </footer>
  )
}
