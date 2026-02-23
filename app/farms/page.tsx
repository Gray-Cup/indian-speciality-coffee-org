export const metadata = {
  title: 'Farms & Growing Regions',
  description:
    'Explore India's major coffee-growing regions — from the shade-grown estates of Coorg to the tribal cooperatives of Araku Valley.',
}

const regions = [
  {
    name: 'Coorg (Kodagu)',
    state: 'Karnataka',
    elevation: '900–1,500m',
    varietals: 'Arabica (S795, Cauvery), Robusta',
    area: 'India's largest coffee-growing district, ~30% of national output.',
    flavours: 'Pepper spice, dark chocolate, mild acidity. Dense shade under silver oak and rosewood.',
    estates: 'Tata Coffee, Harley Estate, Pollibetta Group',
    note: 'Home to the legendary Balmuri and other centenary estates. Coffee grows alongside black pepper and cardamom.',
  },
  {
    name: 'Chikmagalur',
    state: 'Karnataka',
    elevation: '1,000–1,700m',
    varietals: 'Arabica (S795, Kent, Cauvery)',
    area: 'Birthplace of Indian coffee. Includes the sacred Baba Budan Giri range.',
    flavours: 'Wine-like brightness at altitude, stone fruit, cocoa. One of India's most complex origins.',
    estates: 'Ratnagiri Estate, Classic Coffee, Barista Reserve',
    note: 'The seven beans Baba Budan smuggled from Yemen were planted here in the 17th century. Chikmagalur remains the spiritual home of Indian coffee.',
  },
  {
    name: 'Araku Valley',
    state: 'Andhra Pradesh',
    elevation: '900–1,200m',
    varietals: 'Arabica',
    area: 'Eastern Ghats tribal cooperative farming, ~70,000 family growers.',
    flavours: 'Floral (jasmine, honeysuckle), stone fruit (peach, apricot), clean finish.',
    estates: 'Araku Coffee (Naandi Foundation Cooperative)',
    note: 'Araku coffees have won international awards and are sold in Paris boutiques. A proof of concept for equitable specialty at scale.',
  },
  {
    name: 'Bababudangiri',
    state: 'Karnataka',
    elevation: '1,500–1,900m',
    varietals: 'Arabica (heritage varieties)',
    area: 'High-altitude belt within Chikmagalur, among India's most elevated coffee land.',
    flavours: 'Exceptional cup clarity, bright acidity, complex fruit. Limited production volumes.',
    estates: 'Various smallholder estates',
    note: 'The highest coffee-growing zone in India. Microlots from here routinely score among the country's highest in cupping evaluations.',
  },
  {
    name: 'Wayanad',
    state: 'Kerala',
    elevation: '700–1,200m',
    varietals: 'Robusta (primary), Arabica (specialty)',
    area: 'Second largest coffee district in India by volume.',
    flavours: 'Bold, chocolate-forward, heavy body. Specialty Arabica lots show tropical fruit and spice.',
    estates: 'Wayanad Social Service Society cooperatives, private estates',
    note: 'Predominantly Robusta, but serious growers are now producing specialty Arabica lots that are gaining recognition.',
  },
  {
    name: 'Nilgiris',
    state: 'Tamil Nadu',
    elevation: '1,000–1,800m',
    varietals: 'Arabica',
    area: 'The Blue Mountains — cool climate, distinct from Karnataka estates.',
    flavours: 'High-toned acidity, brightness, floral notes. Influenced by proximity to tea gardens.',
    estates: 'Korakundah Estate (UPASI), various',
    note: 'Coffee grows alongside tea in the Nilgiris. The cooler temperatures produce coffees with a distinctive brightness rarely found in other Indian regions.',
  },
  {
    name: 'Anaimalai (Valparai)',
    state: 'Tamil Nadu',
    elevation: '1,000–1,400m',
    varietals: 'Arabica, Robusta',
    area: 'Anamalai Hills, biodiversity-rich Southern Ghats.',
    flavours: 'Forest character, mild earthiness, clean body. Unique microclimate complexity.',
    estates: 'Parry Agro Industries, various',
    note: 'One of India's more underexplored origins. The dense Anaimalai forests create remarkable microclimate variation across short distances.',
  },
]

export default function FarmsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">

      {/* Page Header */}
      <div className="border-b border-amber-950/10 pb-8 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">
          Indian Speciality Coffee
        </p>
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-amber-950 mb-4">
          Growing Regions
        </h1>
        <p className="text-base text-amber-950/70 max-w-2xl leading-relaxed">
          India produces coffee across a vast arc of the Western and Eastern Ghats. Each region carries
          distinct geography, elevation, and heritage — and each expresses itself differently in the cup.
          All certified specialty grade Indian Arabica must score 80 or above on the SCA cupping scale.
        </p>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-3 border border-amber-950/10 mb-14">
        <div className="p-6 border-r border-amber-950/10">
          <p className="text-3xl font-black text-amber-950">~3.5L</p>
          <p className="text-xs uppercase tracking-widest text-amber-700 mt-1">Hectares cultivated</p>
        </div>
        <div className="p-6 border-r border-amber-950/10">
          <p className="text-3xl font-black text-amber-950">7</p>
          <p className="text-xs uppercase tracking-widest text-amber-700 mt-1">Major growing regions</p>
        </div>
        <div className="p-6">
          <p className="text-3xl font-black text-amber-950">98%</p>
          <p className="text-xs uppercase tracking-widest text-amber-700 mt-1">Shade-grown production</p>
        </div>
      </div>

      {/* Regions */}
      <div className="space-y-0">
        {regions.map((region, i) => (
          <div
            key={region.name}
            className="border-t border-amber-950/10 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Index + Region Name */}
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-widest text-amber-700/60 mb-1 font-medium">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h2 className="text-2xl font-black tracking-tight text-amber-950 mb-1">
                {region.name}
              </h2>
              <p className="text-xs uppercase tracking-widest text-amber-700 font-medium">
                {region.state}
              </p>
            </div>

            {/* Details */}
            <div className="lg:col-span-8 space-y-4">
              <p className="text-base text-amber-950/80 leading-relaxed">{region.area}</p>
              <p className="text-sm text-amber-950/60 leading-relaxed italic">{region.note}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-700 mb-1 font-medium">Elevation</p>
                  <p className="text-sm text-amber-950">{region.elevation}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-700 mb-1 font-medium">Varietals</p>
                  <p className="text-sm text-amber-950">{region.varietals}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-700 mb-1 font-medium">Flavour Profile</p>
                  <p className="text-sm text-amber-950">{region.flavours}</p>
                </div>
              </div>

              <div className="pt-1">
                <p className="text-xs uppercase tracking-widest text-amber-700 mb-1 font-medium">Notable Estates</p>
                <p className="text-sm text-amber-950/80">{region.estates}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="border-t border-amber-950/10 pt-8 mt-4">
        <p className="text-sm text-amber-950/60 max-w-2xl leading-relaxed">
          India also produces coffee in Shevaroy Hills (Salem, Tamil Nadu), Hassan district (Karnataka),
          and pockets of the Andaman Islands. The specialty segment represents a small but growing
          fraction of India's total output of approximately 350,000 metric tonnes per year.
        </p>
      </div>
    </div>
  )
}
