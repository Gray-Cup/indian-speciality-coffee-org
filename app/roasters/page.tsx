export const metadata = {
  title: 'Roasters',
  description:
    "A directory of India's specialty coffee roasters — the people translating farm quality into cup quality.",
}

const roasters = [
  {
    name: 'Blue Tokai Coffee Roasters',
    city: 'Delhi / Mumbai / Bangalore',
    founded: '2012',
    focus: 'Single-estate Indian coffee, accessible specialty',
    description:
      'Among the first to retail single-estate Indian coffees at scale. Blue Tokai built the domestic specialty market by sourcing directly from named estates and making traceability legible to everyday consumers. Their subscription programme has introduced Indian specialty to hundreds of thousands of households.',
    region: 'North India (origin)',
  },
  {
    name: 'Subko',
    city: 'Mumbai',
    founded: '2020',
    focus: 'Micro-roastery, experimental processing, hospitality',
    description:
      'A considered micro-roastery and cafe space in Mumbai, Subko works closely with producers on process experimentation — anaerobic fermentation, extended naturals, co-fermented lots. Their retail offering spans Indian and international origins.',
    region: 'West India',
  },
  {
    name: 'Corridor Seven Coffee Roasters',
    city: 'Bangalore',
    founded: '2016',
    focus: 'SCA-aligned, barista training, competition',
    description:
      'One of the most technically rigorous roasters in India. Corridor Seven has trained multiple World Barista Championship competitors and maintains deep alignment with SCA protocols and education. Their roastery also serves as a training centre.',
    region: 'South India',
  },
  {
    name: 'Araku Coffee',
    city: 'Hyderabad / Paris',
    founded: '2017',
    focus: 'Tribal cooperative, single origin, export',
    description:
      'The commercial arm of the Naandi Foundation's work in Araku Valley. Araku Coffee opened a boutique in Paris before establishing significant domestic retail — a deliberate positioning as a world-class specialty origin. Multiple international award wins.',
    region: 'South India / International',
  },
  {
    name: 'The Flying Squirrel',
    city: 'Coorg / Bangalore',
    founded: '2013',
    focus: 'Farm-to-cup, estate-based roasting',
    description:
      'Founded by Aparna and Ashish Battina on their family estate in Coorg, The Flying Squirrel is one of India's most compelling farm-to-cup operations. Green beans are processed and roasted on-estate, with full traceability across every lot.',
    region: 'South India',
  },
  {
    name: 'Seven Beans Co.',
    city: 'Bangalore',
    founded: '2014',
    focus: 'Indian origins, estate partnerships',
    description:
      'A Bangalore-based roastery with a focused catalogue of Indian single-estate coffees. Seven Beans maintains long-term relationships with growers in Chikmagalur and Coorg, offering seasonal microlots alongside year-round staples.',
    region: 'South India',
  },
  {
    name: 'Curious Life Coffee',
    city: 'Chennai',
    founded: '2018',
    focus: 'Artisan roasting, South India-centric',
    description:
      'An artisan roastery in Chennai with a strong focus on South Indian origins and building coffee culture in a city where filter coffee heritage runs deep. Their approach bridges traditional South Indian coffee culture with specialty sensibility.',
    region: 'South India',
  },
  {
    name: 'Halli Berri',
    city: 'Chikmagalur',
    founded: '2015',
    focus: 'Estate-based, direct from Chikmagalur',
    description:
      'Operating directly from Chikmagalur — the birthplace of Indian coffee — Halli Berri sources and roasts from estates within the region. Their proximity to origin enables unique access to seasonal and microlot offerings.',
    region: 'South India',
  },
  {
    name: 'Sleepy Owl Coffee',
    city: 'Delhi',
    founded: '2018',
    focus: 'Cold brew, specialty RTD, North India',
    description:
      'Originally built around cold brew ready-to-drink, Sleepy Owl has expanded into roasted coffee and specialty offerings. Their cold brew format has introduced specialty-grade coffee to a broad consumer audience in North India.',
    region: 'North India',
  },
  {
    name: 'Third Wave Coffee',
    city: 'Bangalore / Pan-India',
    founded: '2016',
    focus: 'Specialty cafe chain, scale and quality',
    description:
      'One of India's fastest-growing specialty cafe chains, Third Wave has expanded nationally while maintaining a meaningful focus on coffee quality and barista training. A significant force in normalising specialty cafe culture beyond metro cities.',
    region: 'Pan-India',
  },
  {
    name: 'Kapi Kottage',
    city: 'Coorg',
    founded: '2010',
    focus: 'Estate coffee, heritage varieties, Coorg origin',
    description:
      'A small-scale roaster based in Coorg, Kapi Kottage sources exclusively from the region and offers estate tours alongside their coffee. A rare opportunity to taste Coorg coffee in Coorg, with full producer transparency.',
    region: 'South India',
  },
]

export default function RoastersPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">

      {/* Page Header */}
      <div className="border-b border-amber-950/10 pb-8 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">
          Indian Speciality Coffee
        </p>
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-amber-950 mb-4">
          Roasters
        </h1>
        <p className="text-base text-amber-950/70 max-w-2xl leading-relaxed">
          India's specialty roasters are the translators — taking what the estate produces and making it
          legible, accessible, and delicious in the cup. This is a curated, non-exhaustive directory of
          roasters doing meaningful work with Indian origins.
        </p>
      </div>

      {/* Roasters List */}
      <div className="space-y-0">
        {roasters.map((roaster, i) => (
          <div
            key={roaster.name}
            className="border-t border-amber-950/10 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Index + Name */}
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-widest text-amber-700/50 mb-1 font-medium">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h2 className="text-xl font-black tracking-tight text-amber-950 mb-1 leading-tight">
                {roaster.name}
              </h2>
              <p className="text-xs uppercase tracking-widest text-amber-700 font-medium mb-1">
                {roaster.city}
              </p>
              <p className="text-xs text-amber-950/50">Est. {roaster.founded}</p>
            </div>

            {/* Details */}
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-widest text-amber-700 mb-2 font-medium">
                {roaster.focus}
              </p>
              <p className="text-sm text-amber-950/80 leading-relaxed">
                {roaster.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="border-t border-amber-950/10 pt-8 mt-4">
        <p className="text-sm text-amber-950/60 max-w-2xl leading-relaxed">
          This directory is not exhaustive. India's specialty roasting scene is growing rapidly — new
          operations open every season. If you know of a roaster doing excellent work with Indian
          origins who should be listed here, please get in touch.
        </p>
      </div>
    </div>
  )
}
