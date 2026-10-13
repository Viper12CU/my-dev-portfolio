# My Portfolio

Personal developer portfolio for Fabian Lemus, built with Next.js 16, React 19,
TypeScript, Tailwind CSS 4, and the MyResume template styles.

## Features

- **Internationalization**: Spanish and English routes powered by `next-intl`
- **Portfolio**: Filterable project collection with localized detail pages
- **Services**: Localized service pages with technology and process information
- **Contact**: Validated and rate-limited contact API with CallMeBot delivery
- **Animations**: Typed.js, AOS, PureCounter, Swiper, and Motion
- **Responsive**: Mobile-first layout based on the MyResume template

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10.11.0+

### Installation

```bash
pnpm install
```

Create `.env.local` for the contact form:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CALLMEBOT_PHONE=your_phone_number
CALLMEBOT_API_KEY=your_callmebot_api_key
```

`CALLMEBOT_PHONE` and `CALLMEBOT_API_KEY` are server-only variables. The
CallMeBot WhatsApp service must be configured before contact messages can be
delivered.

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. The
middleware redirects the root path to the default locale, Spanish:

- [Spanish home](http://localhost:3000/es)
- [English home](http://localhost:3000/en)

### Production

Set `NEXT_PUBLIC_SITE_URL` to the public HTTPS URL before deploying. This value is used by the canonical URL, Open Graph metadata, structured data, `robots.txt`, and `sitemap.xml`.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com pnpm build
pnpm start
```

Set the production value of `NEXT_PUBLIC_SITE_URL` in the hosting provider's
environment variables. It is used for canonical URLs, Open Graph metadata,
structured data, `robots.txt`, and `sitemap.xml`.

## Testing

Run the unit and API tests with Vitest:

```bash
pnpm test       # Watch mode
pnpm test:run   # Single run
pnpm lint       # ESLint
pnpm build      # Production build
```

The contact endpoint is available at `POST /api/contact` and includes origin
validation, input length limits, sanitization, rate limiting, and basic
anti-bot checks.

## Project Structure

```
my-portfolio/
├── app/
│   ├── [locale]/         # Localized pages for es and en
│   │   ├── portfolio/[id]/
│   │   └── services/[slug]/
│   ├── api/contact/      # Contact form route handler and tests
│   ├── globals.css       # Tailwind and layout utilities
│   ├── layout.tsx        # Root metadata and global styles
│   ├── robots.ts
│   └── sitemap.ts
├── messages/             # English and Spanish translations
├── src/
│   ├── components/       # Atomic design components
│   ├── data/             # Portfolio, service, and section data
│   ├── i18n/             # Routing and next-intl request configuration
│   ├── lib/              # Contact delivery, sanitization, and rate limiting
│   └── types/            # TypeScript declarations
├── public/
│   └── assets/           # CSS, images, and vendor assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── proxy.ts              # Locale middleware configuration
└── vitest.config.ts
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run Vitest in watch mode
- `pnpm test:run` - Run Vitest once

## Tech Stack

- **Framework**: Next.js 16.3.2
- **UI Library**: React 19.2.8
- **Styling**: Tailwind CSS 4 + MyResume template CSS
- **Language**: TypeScript 5
- **Package Manager**: pnpm 10.11.0
- **Internationalization**: next-intl
- **UI and animation**: typed.js, AOS, PureCounter, Swiper, Motion
- **Portfolio layout**: Isotope and imagesloaded
- **Icons**: Lucide React and Bootstrap Icons

## License

MIT
