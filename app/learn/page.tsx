import Link from 'next/link'

export const metadata = {
  title: 'Learn',
  description:
    "A guide to Indian specialty coffee — from what specialty means, to growing regions, varietals, processing, brewing, and how to evaluate what's in your cup.",
}

export default function LearnPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-14">

      {/* Page Header */}
      <div className="border-b border-amber-950/10 pb-8 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">
          Indian Speciality Coffee
        </p>
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-amber-950 mb-4">
          Learn
        </h1>
        <p className="text-base text-amber-950/70 leading-relaxed">
          Everything you need to understand Indian specialty coffee — where it grows, how it is
          processed, what makes it distinct, and how to taste it properly.
        </p>
      </div>

      {/* Contents */}
      <nav className="mb-14 border border-amber-950/10 p-6">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-4 font-medium">Contents</p>
        <ol className="space-y-2 text-sm text-amber-950/80">
          <li><span className="text-amber-700 font-medium mr-2">01</span> What is Specialty Coffee?</li>
          <li><span className="text-amber-700 font-medium mr-2">02</span> India's Coffee Heritage</li>
          <li><span className="text-amber-700 font-medium mr-2">03</span> Key Varietals</li>
          <li><span className="text-amber-700 font-medium mr-2">04</span> Processing Methods</li>
          <li><span className="text-amber-700 font-medium mr-2">05</span> Brewing Guides</li>
          <li><span className="text-amber-700 font-medium mr-2">06</span> Cupping & Evaluation</li>
          <li><span className="text-amber-700 font-medium mr-2">07</span> The SCA in India</li>
        </ol>
      </nav>

      {/* Section 01 */}
      <section className="border-t border-amber-950/10 pt-10 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">01</p>
        <h2 className="text-2xl font-black tracking-tight text-amber-950 mb-4">
          What is Specialty Coffee?
        </h2>
        <div className="space-y-4 text-base text-amber-950/80 leading-relaxed">
          <p>
            The Specialty Coffee Association (SCA) defines specialty coffee as green coffee that scores
            80 points or above on its standardised 100-point cupping scale when evaluated by a trained,
            certified Q-Grader. The scale measures aroma, flavour, aftertaste, acidity, body,
            uniformity, balance, sweetness, and clean cup, alongside an overall impression score.
          </p>
          <p>
            Specialty is a quality designation, not a marketing term. It means the coffee has been grown,
            harvested, processed, and transported with sufficient care to preserve — and express — the
            inherent character of its origin.
          </p>
          <p>
            Indian coffees, at their best, regularly score 85–90+. Araku Valley lots have exceeded
            90 points at international evaluations. This places them firmly among the world's finest
            single origins.
          </p>
          <div className="border-l-2 border-amber-700 pl-4 my-6">
            <p className="text-sm text-amber-950/70 italic">
              "Specialty coffee is the highest quality segment of the coffee industry, measured
              objectively through a calibrated evaluation system and requiring excellence at
              every stage of the supply chain."
            </p>
            <p className="text-xs uppercase tracking-widest text-amber-700 mt-2 font-medium">
              Specialty Coffee Association
            </p>
          </div>
        </div>
      </section>

      {/* Section 02 */}
      <section className="border-t border-amber-950/10 pt-10 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">02</p>
        <h2 className="text-2xl font-black tracking-tight text-amber-950 mb-4">
          India's Coffee Heritage
        </h2>
        <div className="space-y-4 text-base text-amber-950/80 leading-relaxed">
          <p>
            Coffee arrived in India in the 17th century when Baba Budan, a Sufi saint returning from
            Mecca, planted seven smuggled beans in the hills of Chikmagalur. Those hills — now
            called Baba Budan Giri — remain sacred to Indian coffee history.
          </p>
          <p>
            Commercial cultivation began under the British in the 1840s. The Coffee Leaf Rust epidemic
            of 1869 devastated Arabica crops across Asia, leading to widespread Robusta adoption
            in India. Today, roughly 70% of India's coffee is Robusta; the specialty segment is
            predominantly Arabica.
          </p>
          <p>
            South India's filter coffee culture — strong, chicory-blended, served in stainless steel
            tumbler and davara — developed independently of European cafe tradition. It remains one of
            the world's great coffee rituals, distinct from anything else.
          </p>
        </div>
      </section>

      {/* Section 03 */}
      <section className="border-t border-amber-950/10 pt-10 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">03</p>
        <h2 className="text-2xl font-black tracking-tight text-amber-950 mb-4">
          Key Varietals
        </h2>
        <div className="space-y-4 text-base text-amber-950/80 leading-relaxed">
          <p>
            India grows several distinct Arabica varietals, many developed specifically for the
            subcontinent's climate and disease pressures.
          </p>
        </div>
        <div className="mt-6 space-y-0">
          {[
            {
              varietal: 'S795',
              notes: 'The workhorse of Indian specialty. A Mysore × Hybrido de Timor hybrid, disease-resistant, producing well-balanced cups with mild acidity and chocolate-caramel sweetness.',
            },
            {
              varietal: 'Kent',
              notes: "One of India's oldest named varieties, a Bourbon-derived selection. Produces excellent cup quality — wine-like, bright, fruit-forward — but is susceptible to Coffee Leaf Rust.",
            },
            {
              varietal: 'Cauvery (Catimor)',
              notes: 'A Caturra × Hibrido de Timor cross, bred for disease resistance and high yield. Cup quality varies significantly with altitude and processing; exceptional at 1,400m+.',
            },
            {
              varietal: 'SLN 9',
              notes: 'A selection from the Central Coffee Research Institute. High-yielding, disease-tolerant, with a clean, mild cup profile suitable for both filter and espresso preparation.',
            },
            {
              varietal: 'Chandragiri',
              notes: 'A newer release from CCRI. Compact plant, excellent cup quality, showing bright acidity and floral character. Gaining adoption among quality-focused estates.',
            },
          ].map((v) => (
            <div key={v.varietal} className="border-t border-amber-950/10 py-5 grid grid-cols-4 gap-4">
              <div>
                <p className="font-bold text-amber-950">{v.varietal}</p>
              </div>
              <div className="col-span-3">
                <p className="text-sm text-amber-950/80 leading-relaxed">{v.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 04 */}
      <section className="border-t border-amber-950/10 pt-10 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">04</p>
        <h2 className="text-2xl font-black tracking-tight text-amber-950 mb-4">
          Processing Methods
        </h2>
        <div className="space-y-4 text-base text-amber-950/80 leading-relaxed">
          <p>
            How coffee is processed after harvest has profound influence on its flavour. India
            employs all major processing methods, and the best estates are experimenting with
            fermentation-driven approaches that push cup complexity further.
          </p>
        </div>
        <div className="mt-6 space-y-0">
          {[
            {
              method: 'Washed (Wet)',
              flavour: 'Clean, bright, origin-expressive',
              description: "The coffee cherry's fruit is removed before drying. The result is a clean, transparent cup where the bean's inherent character — terroir, varietal, altitude — is most legible. Most Indian specialty Arabica is washed.",
            },
            {
              method: 'Natural (Dry)',
              flavour: 'Fruity, heavy, wine-like',
              description: 'The whole cherry dries with the fruit intact around the bean. Sugars from the cherry ferment into the bean during drying, creating intense fruit character — blueberry, tropical fruit, wine. Araku and several Coorg estates produce excellent naturals.',
            },
            {
              method: 'Honey',
              flavour: 'Balanced, sweet, structured',
              description: 'The skin is removed but varying amounts of mucilage (fruit pulp) are left on the bean during drying. Yellow, red, and black honey refer to increasing mucilage retention. Produces a middle ground between washed clarity and natural sweetness.',
            },
            {
              method: 'Monsoon Malabar',
              flavour: 'Earthy, musty, low acid, heavy body',
              description: 'Unique to India. Green beans are exposed to monsoon winds in open warehouses on the Malabar Coast, where they absorb moisture and expand. Acidity drops dramatically; body becomes very heavy. A recreation of the maritime coffee that colonial-era British consumers preferred.',
            },
          ].map((p) => (
            <div key={p.method} className="border-t border-amber-950/10 py-6">
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="font-bold text-amber-950">{p.method}</h3>
                <p className="text-xs uppercase tracking-widest text-amber-700 font-medium">{p.flavour}</p>
              </div>
              <p className="text-sm text-amber-950/80 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 05 */}
      <section className="border-t border-amber-950/10 pt-10 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">05</p>
        <h2 className="text-2xl font-black tracking-tight text-amber-950 mb-4">
          Brewing Guides
        </h2>
        <div className="space-y-4 text-base text-amber-950/80 leading-relaxed">
          <p>
            Indian specialty coffee rewards careful brewing. The following ratios are starting points —
            adjust to your taste, your water, and your specific coffee.
          </p>
        </div>
        <div className="mt-6 space-y-0">
          {[
            {
              method: 'South Indian Filter',
              ratio: '1:4 coffee to water',
              grind: 'Fine to medium-fine',
              notes: 'The traditional method. Brew concentrated decoction, dilute with hot milk. Use a blend with 20–30% chicory for authenticity, or single-estate for specialty expression. Serve in tumbler and davara.',
            },
            {
              method: 'Pour Over (V60)',
              ratio: '1:15 to 1:16',
              grind: 'Medium',
              notes: 'Ideal for washed Indian Arabica — reveals acidity, sweetness, and terroir clearly. Bloom for 30–45 seconds with 2× coffee weight in water. Total brew time 3:00–3:30.',
            },
            {
              method: 'French Press',
              ratio: '1:12 to 1:14',
              grind: 'Coarse',
              notes: 'Suits natural-processed Indian coffees with heavy body and fruit character. Steep for 4 minutes, press slowly. The full-immersion method preserves body and oils.',
            },
            {
              method: 'AeroPress',
              ratio: '1:12 to 1:14',
              grind: 'Medium-fine',
              notes: 'Versatile and forgiving. Inverted method with a 2-minute steep produces a concentrated, clean cup. Excellent for Monsoon Malabar and bold Coorg coffees.',
            },
            {
              method: 'Moka Pot',
              ratio: 'Fill basket; water to valve',
              grind: 'Fine (not espresso-fine)',
              notes: 'Low-pressure espresso-style extraction. Use dark-roast Indian Robusta or blend. Medium heat, remove from heat as coffee reaches spout. Do not let it boil.',
            },
          ].map((b) => (
            <div key={b.method} className="border-t border-amber-950/10 py-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="sm:col-span-1">
                <h3 className="font-bold text-amber-950 mb-1">{b.method}</h3>
                <p className="text-xs text-amber-700 font-medium">{b.ratio}</p>
                <p className="text-xs text-amber-700/70">{b.grind}</p>
              </div>
              <div className="sm:col-span-3">
                <p className="text-sm text-amber-950/80 leading-relaxed">{b.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 06 */}
      <section className="border-t border-amber-950/10 pt-10 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">06</p>
        <h2 className="text-2xl font-black tracking-tight text-amber-950 mb-4">
          Cupping & Evaluation
        </h2>
        <div className="space-y-4 text-base text-amber-950/80 leading-relaxed">
          <p>
            Cupping is the standardised method for evaluating coffee quality. It was codified by the
            SCA and is used by producers, traders, roasters, and buyers worldwide. A calibrated cupping
            session allows direct comparison between coffees under identical conditions.
          </p>
          <p>
            The process: coarsely ground coffee is weighed into a cup (8.25g per 150ml), hot water is
            poured directly over the grounds, and the coffee is evaluated at multiple temperature stages
            — first by aroma, then by breaking the crust at the surface, then by tasting with a cupping
            spoon at around 70°C and again as it cools.
          </p>
          <p>
            Attributes scored include: fragrance/aroma, flavour, aftertaste, acidity, body, balance,
            uniformity, clean cup, sweetness, and overall impression. Each attribute is scored up to
            10 points; total score determines specialty grade (80+).
          </p>
          <p>
            To start cupping at home: use a consistent ratio (8.25g/150ml), grind coarse, use water
            at 93°C, and evaluate at three temperature stages. Take notes. Taste with others when
            possible — calibration requires comparison.
          </p>
        </div>
      </section>

      {/* Section 07 — SCA */}
      <section className="border-t border-amber-950/10 pt-10 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">07</p>
        <h2 className="text-2xl font-black tracking-tight text-amber-950 mb-4">
          The SCA in India
        </h2>
        <div className="space-y-4 text-base text-amber-950/80 leading-relaxed">
          <p>
            The Specialty Coffee Association is the global trade body and standards organisation
            for specialty coffee. It publishes cupping protocols, barista competition frameworks,
            green coffee grading standards, and educational curricula used worldwide.
          </p>
          <p>
            The SCA's India chapter has been instrumental in professionalising the domestic specialty
            industry. Key programmes include:
          </p>
          <ul className="list-none space-y-3 border-l-2 border-amber-700 pl-4">
            <li>
              <strong className="text-amber-950 font-semibold">Q-Grader Certification</strong>
              <p className="text-sm mt-1">The global standard for coffee evaluation. Requires passing 22 rigorous tests covering green grading, sensory skills, organic chemistry, and cupping protocols. India now has a growing cohort of licensed Q-Graders at origin.</p>
            </li>
            <li>
              <strong className="text-amber-950 font-semibold">Barista Skills Programme</strong>
              <p className="text-sm mt-1">Foundation, Intermediate, and Professional levels covering espresso extraction, milk technique, and cafe workflow. Widely taught by Indian SCA-accredited trainers.</p>
            </li>
            <li>
              <strong className="text-amber-950 font-semibold">Brewing & Sensory Skills</strong>
              <p className="text-sm mt-1">Structured courses covering brewing science and sensory evaluation — highly relevant for both cafe professionals and serious home brewers.</p>
            </li>
            <li>
              <strong className="text-amber-950 font-semibold">India Barista Championship</strong>
              <p className="text-sm mt-1">The national competition feeding into the World Barista Championship. Several Indian competitors have represented the country on the world stage in recent years.</p>
            </li>
          </ul>
          <p>
            The SCA's technical standards — particularly the cupping protocol — have given Indian
            producers, roasters, and buyers a shared, objective language for quality. This has been
            essential in enabling direct trade between Indian estates and international buyers.
          </p>
        </div>

        <div className="mt-8 border border-amber-950/10 p-6">
          <p className="text-xs uppercase tracking-widest text-amber-700 mb-2 font-medium">Further Reading</p>
          <p className="text-sm text-amber-950/70 leading-relaxed">
            Visit{' '}
            <a
              href="https://sca.coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 text-amber-800 hover:text-amber-950"
            >
              sca.coffee
            </a>{' '}
            for the full catalogue of SCA programmes, research publications, and certified trainer
            directories. The SCA also publishes{' '}
            <em>Sprudge</em>,{' '}
            <em>25 Magazine</em>, and hosts the Specialty Coffee Expo annually.
          </p>
        </div>
      </section>

      {/* CTA to Blog */}
      <div className="border-t border-amber-950/10 pt-10">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">Continue Reading</p>
        <p className="text-base text-amber-950/70 mb-4 leading-relaxed">
          Explore longer-form writing on Indian coffee history, specific origins, and the
          people shaping the industry.
        </p>
        <Link
          href="/blog"
          className="inline-block text-sm uppercase tracking-widest font-medium text-amber-950 border border-amber-950 px-5 py-3 hover:bg-amber-950 hover:text-amber-50 transition-colors"
        >
          Coffee Journal →
        </Link>
      </div>
    </div>
  )
}
