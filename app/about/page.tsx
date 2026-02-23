import Link from 'next/link'

export const metadata = {
  title: 'About',
  description:
    'About Indian Speciality Coffee — a project dedicated to documenting and celebrating India's coffee growing regions, producers, roasters, and culture.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-14">

      {/* Page Header */}
      <div className="border-b border-amber-950/10 pb-8 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">
          Indian Speciality Coffee
        </p>
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-amber-950 mb-4">
          About
        </h1>
        <p className="text-base text-amber-950/70 leading-relaxed">
          A project dedicated to documenting, celebrating, and advancing India's specialty coffee
          industry — at origin, in the roastery, and in the cup.
        </p>
      </div>

      {/* Mission */}
      <section className="border-t border-amber-950/10 pt-10 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">Mission</p>
        <h2 className="text-2xl font-black tracking-tight text-amber-950 mb-6">
          Closing the Gap Between Origin and Cup
        </h2>
        <div className="space-y-4 text-base text-amber-950/80 leading-relaxed">
          <p>
            India produces world-class specialty coffee. Much of it leaves the country unrecognised,
            consumed abroad with no connection to the farms, families, and landscapes that produced it.
          </p>
          <p>
            Indian Speciality Coffee exists to close that gap — to make origin legible, to connect
            curious consumers with the people who grow and roast the coffee they drink, and to build
            the knowledge infrastructure that a maturing specialty market requires.
          </p>
          <p>
            This means journalism, education, producer profiles, roaster directories, and technical
            guides — all focused on India's coffee. We apply SCA standards and specialty sensibility
            to a context that is distinctly Indian.
          </p>
        </div>
      </section>

      {/* What We Cover */}
      <section className="border-t border-amber-950/10 pt-10 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">Coverage</p>
        <h2 className="text-2xl font-black tracking-tight text-amber-950 mb-6">
          What We Document
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {[
            {
              area: 'Growing Regions',
              desc: 'The geography, varietals, elevations, and estates of India's major and minor coffee origins — from Coorg to Araku, from the Nilgiris to Wayanad.',
            },
            {
              area: 'Roasters',
              desc: 'The roasters translating farm quality into cup quality — their sourcing philosophy, technical approach, and role in building India's specialty market.',
            },
            {
              area: 'Coffee Education',
              desc: 'From what specialty means (SCA definition and cupping protocols) to brewing guides, cupping, and varietal explanations — accessible to all levels.',
            },
            {
              area: 'History & Culture',
              desc: 'The centuries-long story of coffee in India — from Baba Budan's seven beans to the current third-wave moment — and the living culture of South Indian filter coffee.',
            },
          ].map((item) => (
            <div key={item.area} className="border border-amber-950/10 p-6 -mt-px -ml-px">
              <h3 className="font-bold text-amber-950 mb-2">{item.area}</h3>
              <p className="text-sm text-amber-950/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Gray Cup */}
      <section className="border-t border-amber-950/10 pt-10 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">Organisation</p>
        <h2 className="text-2xl font-black tracking-tight text-amber-950 mb-6">
          Gray Cup Enterprises
        </h2>
        <div className="space-y-4 text-base text-amber-950/80 leading-relaxed">
          <p>
            Indian Speciality Coffee is managed by{' '}
            <a
              href="https://graycup.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 text-amber-800 hover:text-amber-950"
            >
              Gray Cup Enterprises Private Limited
            </a>
            , an Indian company focused on building knowledge and media around India's specialty food
            and beverage industries.
          </p>
          <p>
            We believe that quality consumer goods are best understood in context — that knowing where
            something comes from, and who made it, deepens appreciation and drives better decisions
            for producers and consumers alike.
          </p>
        </div>
      </section>

      {/* Editorial Principles */}
      <section className="border-t border-amber-950/10 pt-10 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">Principles</p>
        <h2 className="text-2xl font-black tracking-tight text-amber-950 mb-6">
          How We Work
        </h2>
        <div className="space-y-0">
          {[
            {
              principle: 'No paid listings',
              detail: 'Roasters, farms, and products are featured on editorial merit. We do not accept payment for inclusion or placement.',
            },
            {
              principle: 'SCA-aligned standards',
              detail: 'We use Specialty Coffee Association cupping protocols and evaluation standards as our technical reference. Specialty is a measurable quality designation.',
            },
            {
              principle: 'Producer-first',
              detail: 'We prioritise the people who grow coffee — farmers, pickers, processors — as the primary subjects of this industry, not the retail end.',
            },
            {
              principle: 'Ongoing correction',
              detail: 'Coffee knowledge changes. If something on this site is factually incorrect, please tell us. We will update it promptly and note the correction.',
            },
          ].map((p) => (
            <div key={p.principle} className="border-t border-amber-950/10 py-5 grid grid-cols-3 gap-4">
              <div>
                <p className="font-semibold text-amber-950 text-sm">{p.principle}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-amber-950/70 leading-relaxed">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="border-t border-amber-950/10 pt-10">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">Get Involved</p>
        <p className="text-base text-amber-950/70 mb-6 leading-relaxed">
          Know of a roaster, farm, or story that deserves coverage? We'd like to hear from you.
        </p>
        <Link
          href="/contact"
          className="inline-block text-sm uppercase tracking-widest font-medium text-amber-950 border border-amber-950 px-5 py-3 hover:bg-amber-950 hover:text-amber-50 transition-colors"
        >
          Get in Touch →
        </Link>
      </div>
    </div>
  )
}
