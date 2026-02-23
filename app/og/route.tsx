import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Indian Speciality Coffee'

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full justify-between"
        style={{ background: '#451a03', fontFamily: 'sans-serif' }}
      >
        {/* Top rule */}
        <div tw="flex w-full h-1" style={{ background: '#92400e' }} />

        {/* Content */}
        <div tw="flex flex-col flex-1 justify-center px-20 py-16">
          {/* Eyebrow */}
          <p
            tw="text-lg uppercase tracking-widest mb-6"
            style={{ color: '#d97706', letterSpacing: '0.25em' }}
          >
            Indian Speciality Coffee
          </p>

          {/* Title */}
          <h1
            tw="text-6xl font-black leading-tight mb-0"
            style={{ color: '#fef3c7', lineHeight: 1.1, maxWidth: '900px' }}
          >
            {title}
          </h1>
        </div>

        {/* Footer */}
        <div
          tw="flex w-full items-center justify-between px-20 py-8 border-t"
          style={{ borderColor: '#92400e' }}
        >
          <p tw="text-base" style={{ color: '#92400e', letterSpacing: '0.1em' }}>
            indianspecialitycoffee.com
          </p>
          <p
            tw="text-sm uppercase tracking-widest"
            style={{ color: '#92400e', letterSpacing: '0.2em' }}
          >
            Gray Cup Enterprises
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
