export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Indian Speciality Coffee — for editorial submissions, farm and roaster listings, corrections, or general enquiries.',
}

const topics = [
  {
    label: 'Farm or Roaster Listing',
    description:
      'Know a farm or roaster doing meaningful work with Indian specialty coffee? Share their details with us.',
  },
  {
    label: 'Editorial Submission',
    description:
      'Writers with expertise in Indian coffee origins, processing, or culture are welcome to pitch.',
  },
  {
    label: 'Corrections',
    description:
      'If something on this site is factually incorrect, please tell us. We take accuracy seriously and will update with attribution.',
  },
  {
    label: 'General Enquiry',
    description:
      'Anything else — partnerships, research collaboration, media requests.',
  },
]

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-14">

      {/* Page Header */}
      <div className="border-b border-amber-950/10 pb-8 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-3 font-medium">
          Indian Speciality Coffee
        </p>
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-amber-950 mb-4">
          Contact
        </h1>
        <p className="text-base text-amber-950/70 leading-relaxed">
          We welcome correspondence from farmers, roasters, writers, researchers, and anyone
          with a meaningful connection to Indian specialty coffee.
        </p>
      </div>

      {/* Topics */}
      <section className="mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-6 font-medium">Topics</p>
        <div className="space-y-0">
          {topics.map((t, i) => (
            <div key={t.label} className="border-t border-amber-950/10 py-5 grid grid-cols-4 gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-amber-700/50 font-medium mb-1">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="font-semibold text-amber-950 text-sm">{t.label}</p>
              </div>
              <div className="col-span-3">
                <p className="text-sm text-amber-950/70 leading-relaxed">{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-t border-amber-950/10 pt-10 mb-12">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-6 font-medium">Send a Message</p>

        <form
          action="mailto:hello@graycup.org"
          method="get"
          encType="text/plain"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-widest text-amber-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-amber-950/20 bg-transparent px-4 py-3 text-sm text-amber-950 placeholder-amber-950/30 focus:outline-none focus:border-amber-700 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-widest text-amber-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-amber-950/20 bg-transparent px-4 py-3 text-sm text-amber-950 placeholder-amber-950/30 focus:outline-none focus:border-amber-700 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs uppercase tracking-widest text-amber-700 font-medium mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full border border-amber-950/20 bg-transparent px-4 py-3 text-sm text-amber-950 placeholder-amber-950/30 focus:outline-none focus:border-amber-700 transition-colors"
              placeholder="Farm listing, correction, pitch…"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-widest text-amber-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="body"
              required
              rows={7}
              className="w-full border border-amber-950/20 bg-transparent px-4 py-3 text-sm text-amber-950 placeholder-amber-950/30 focus:outline-none focus:border-amber-700 transition-colors resize-none"
              placeholder="Write your message here…"
            />
          </div>

          <div className="flex items-center gap-6">
            <button
              type="submit"
              className="text-sm uppercase tracking-widest font-medium text-amber-50 bg-amber-950 px-6 py-3 hover:bg-amber-800 transition-colors"
            >
              Send Message
            </button>
            <p className="text-xs text-amber-950/40">
              Opens your email client
            </p>
          </div>
        </form>
      </section>

      {/* Direct Contact */}
      <section className="border-t border-amber-950/10 pt-10">
        <p className="text-xs uppercase tracking-widest text-amber-700 mb-6 font-medium">Direct Contact</p>
        <div className="space-y-0">
          <div className="border-t border-amber-950/10 py-5 grid grid-cols-3 gap-4">
            <p className="text-xs uppercase tracking-widest text-amber-700 font-medium">Email</p>
            <div className="col-span-2">
              <a
                href="mailto:hello@graycup.org"
                className="text-sm text-amber-950 underline underline-offset-2 hover:text-amber-700"
              >
                hello@graycup.org
              </a>
            </div>
          </div>
          <div className="border-t border-amber-950/10 py-5 grid grid-cols-3 gap-4">
            <p className="text-xs uppercase tracking-widest text-amber-700 font-medium">Organisation</p>
            <div className="col-span-2">
              <a
                href="https://graycup.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-amber-950 underline underline-offset-2 hover:text-amber-700"
              >
                Gray Cup Enterprises Private Limited
              </a>
              <p className="text-xs text-amber-950/50 mt-1">India</p>
            </div>
          </div>
          <div className="border-t border-amber-950/10 py-5 grid grid-cols-3 gap-4">
            <p className="text-xs uppercase tracking-widest text-amber-700 font-medium">Response</p>
            <div className="col-span-2">
              <p className="text-sm text-amber-950/70 leading-relaxed">
                We aim to respond within 5 working days. Corrections to factual errors are prioritised.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
