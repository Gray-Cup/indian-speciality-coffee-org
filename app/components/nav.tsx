import Link from 'next/link'

const navItems = {
  '/': { name: 'Home' },
  '/blog': { name: 'Blog' },
  '/farms': { name: 'Farms' },
  '/roasters': { name: 'Roasters' },
  '/learn': { name: 'Learn' },
  '/about': { name: 'About' },
  '/contact': { name: 'Contact' },
}

export function Navbar() {
  return (
    <header className="w-full bg-amber-950 text-center pt-6 pb-6">
      <div className="pb-3">
        <h1 className="text-3xl text-white lg:text-5xl font-black tracking-widest uppercase">
          Indian Speciality Coffee
        </h1>
        <p className="text-xs md:text-sm md:text-md text-neutral-100 mt-1 tracking-wide">
          Celebrating India's coffee regions, producers, and unique flavour profiles.
        </p>
      </div>
      <nav className="flex flex-row justify-center space-x-1">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="transition-all py-1 px-3 text-neutral-100 text-lg hover:underline tracking-wide"
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  )
}
