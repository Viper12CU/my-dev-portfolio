# My Portfolio

A modern portfolio website built with Next.js 16, React 19, and Tailwind CSS 4.

## Features

- **Modern Stack**: Next.js 16 with App Router, React 19, TypeScript 5
- **Styling**: Tailwind CSS 4 with MyResume template CSS
- **Fonts**: Roboto, Poppins, Raleway (Google Fonts)
- **Responsive**: Mobile-first responsive design
- **Performance**: Optimized for production builds

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- pnpm 10.11.0+

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css      # Tailwind + Bootstrap grid utilities
│   ├── layout.tsx       # Root layout with Google Fonts + vendor CSS
│   ├── page.tsx         # Home page (renders ResumeLandingTemplate)
│   └── favicon.ico
├── src/
│   ├── components/      # Atomic design components (atoms, molecules, organisms, templates)
│   ├── data/            # Static data files
│   └── types/           # TypeScript type declarations
├── public/
│   └── assets/          # CSS, images, and vendor libraries
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 16.3.2
- **UI Library**: React 19.2.8
- **Styling**: Tailwind CSS 4 + MyResume template CSS
- **Language**: TypeScript 5
- **Package Manager**: pnpm 10.11.0
- **Libraries**: typed.js, AOS, PureCounter, Swiper, Isotope

## License

MIT
