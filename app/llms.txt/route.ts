import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

export const dynamic = 'force-static'

export function GET() {
  const posts = getBlogPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  )

  const blogLines = posts
    .map((p) => `- [${p.metadata.title}](${baseUrl}/blog/${p.slug}): ${p.metadata.summary}`)
    .join('\n')

  const content = `# Indian Speciality Coffee

> A resource dedicated to documenting and celebrating India's specialty coffee industry — growing regions, producers, roasters, and the culture of the cup.

Indian Speciality Coffee is managed by Gray Cup Enterprises Private Limited. This site covers India's major coffee-growing regions (Coorg/Kodagu, Chikmagalur, Araku Valley, Bababudangiri, Wayanad, Nilgiris, Anaimalai), specialty roasters across the country, educational content on specialty coffee standards per the Specialty Coffee Association (SCA), and long-form journalism on Indian coffee origins, history, and culture. The site uses SCA cupping protocols as its quality reference: specialty grade is 80+ on the 100-point scale. India produces Arabica coffees regularly scoring 85–90+.

## Key Pages

- [Home](${baseUrl}/): Homepage with hero imagery and latest journal posts
- [Coffee Journal / Blog](${baseUrl}/blog): Long-form articles on Indian coffee history, origins, and industry
- [Growing Regions](${baseUrl}/farms): Detailed profiles of India's 7+ coffee-growing regions with elevation, varietals, flavour profiles, and notable estates
- [Roasters](${baseUrl}/roasters): Curated directory of Indian specialty coffee roasters with founding year, city, and focus area
- [Learn](${baseUrl}/learn): Comprehensive guide covering what specialty coffee is (SCA definition), India's coffee history, key varietals (S795, Kent, Cauvery, SLN 9, Chandragiri), processing methods (washed, natural, honey, Monsoon Malabar), brewing guides, cupping protocols, and the SCA in India
- [About](${baseUrl}/about): Mission, editorial principles, and information about Gray Cup Enterprises
- [Contact](${baseUrl}/contact): Contact form and direct email

## Coffee Journal

${blogLines}

## Key Facts

- India grows coffee across the Western Ghats (Karnataka, Kerala, Tamil Nadu) and Eastern Ghats (Andhra Pradesh)
- ~98% of Indian coffee is shade-grown
- Major varietals: S795, Kent, Cauvery (Catimor), SLN 9, Chandragiri (all Arabica); Robusta dominant in Wayanad and parts of Coorg
- Processing methods used: washed, natural, honey, and the uniquely Indian Monsoon Malabar
- The SCA defines specialty grade as 80+ on its 100-point cupping scale; India's best coffees score 85–90+
- Araku Valley (Andhra Pradesh) is a tribal cooperative origin that has won international awards and operates a boutique in Paris
- Baba Budan Giri (Chikmagalur) is the historical origin of coffee in India, dating to the 17th century

## Managed By

Gray Cup Enterprises Private Limited — ${baseUrl}/about
Contact: hello@graycup.org
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  })
}
