# My Portfolio

A modern portfolio website built with Next.js 16, React 19, and Tailwind CSS 4.

## Features

- **Modern Stack**: Next.js 16 with App Router, React 19, TypeScript 5
- **Styling**: Tailwind CSS 4 with custom theme configuration
- **Fonts**: Geist Sans and Geist Mono fonts
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
│   ├── globals.css      # Global styles with Tailwind CSS
│   ├── layout.tsx       # Root layout with Geist fonts
│   ├── page.tsx         # Home page
│   └── favicon.ico      # Favicon
├── public/              # Static assets
├── .agents/             # Agent configurations and skills
├── docs/                # Project documentation
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── next.config.ts       # Next.js configuration
└── tailwind.config.ts   # Tailwind CSS configuration
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 16.3.2
- **UI Library**: React 19.2.8
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Package Manager**: pnpm 10.11.0

## License

MIT
