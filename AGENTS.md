# Portfolio Project - Agent Configuration

## Project Overview
- **Name**: my-portfolio
- **Framework**: Next.js 16.3.2 with React 19.2.8
- **Styling**: Tailwind CSS 4 + MyResume template CSS (main.css)
- **Language**: TypeScript 5
- **Package Manager**: pnpm 10.11.0
- **Template**: Cloned from MyResume BootstrapMade template

## Development Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure
```
app/
├── globals.css         # Tailwind + Bootstrap grid utilities
├── layout.tsx          # Root layout with Google Fonts + vendor CSS
├── page.tsx            # Home page (renders ResumeLandingTemplate)
└── favicon.ico

src/
├── components/
│   ├── atoms/          # Icon, SectionTitle, ProgressBar, SocialLink
│   ├── molecules/      # NavItem, StatItem, SkillItem, ResumeItem,
│   │                   # PortfolioCard, ServiceCard, ContactInfoItem,
│   │                   # TestimonialCard
│   ├── organisms/      # Header, HeroSection, AboutSection, StatsSection,
│   │                   # SkillsSection, ResumeSection, PortfolioSection,
│   │                   # ServicesSection, TestimonialsSection, ContactSection,
│   │                   # Footer, ScrollTop
│   └── templates/      # ResumeLandingTemplate (main wrapper)
├── data/               # Static data (hero, about, stats, skills, resume,
│                       # portfolio, services, testimonials, contact, footer,
│                       # navigation)
└── types/              # vendor.d.ts (type declarations for isotope, typed,
                        # swiper, aos, purecounter)

public/
├── assets/
│   ├── css/main.css    # Original MyResume template CSS
│   ├── img/            # All images (hero-bg, profile, portfolio, etc.)
│   ├── js/main.js      # Original template JS (reference only)
│   └── vendor/         # Bootstrap Icons, AOS, GLightbox, Swiper,
│                       # Typed.js, PureCounter, Isotope, Waypoints
```

## Architecture Pattern
- **Atomic Design**: Components organized as atoms → molecules → organisms → templates
- **Data Separation**: All static content in `src/data/` files
- **Client Components**: Header, HeroSection, SkillsSection, PortfolioSection,
  TestimonialsSection, ContactSection, ScrollTop, ResumeLandingTemplate
- **Server Components**: AboutSection, StatsSection, ResumeSection, ServicesSection, Footer

## Libraries Used
- **typed.js** - Hero text typing animation
- **aos** - Animate On Scroll library
- **@srexi/purecounterjs** - Animated number counters
- **swiper** - Testimonials slider
- **isotope-layout** - Portfolio masonry layout + filtering
- **imagesloaded** - Image loading detection for Isotope

## Animations (from reference)
1. AOS scroll animations on all sections (fade-up, zoom-out)
2. Typed.js typing effect in Hero section
3. PureCounter animated numbers in Stats section
4. Skills progress bar animation via IntersectionObserver
5. Swiper autoplay slider for Testimonials
6. Isotope filtering + masonry layout for Portfolio
7. GLightbox for portfolio image previews
8. Scroll-to-top button (appears after 100px scroll)
9. Mobile header toggle animation
10. Scrollspy navigation highlighting

## Styling Approach
- **Tailwind CSS 4**: Imported via `@import "tailwindcss"` in globals.css
- **Bootstrap Grid**: Minimal CSS grid implementation in globals.css
  (container, row, col-*, gy-*, d-flex, etc.)
- **Original main.css**: Loaded from `public/assets/css/main.css`
  Contains all section-specific styles (header, hero, about, stats, etc.)
- **Vendor CSS**: Bootstrap Icons, AOS, GLightbox, Swiper loaded in layout.tsx

## Coding Conventions
- Use TypeScript for all components
- Follow Next.js App Router patterns
- Use Bootstrap grid classes (container, row, col-*) for layout
- Keep original HTML structure from reference template
- Client components for interactive parts (animations, state)
- Server components for static content

## Available Skills
- **frontend-design**: Create distinctive, production-grade frontend interfaces
- **next-best-practices**: Next.js best practices and patterns
- **next-cache-components**: Next.js 16 Cache Components
- **tailwind-css-patterns**: Tailwind CSS utility-first styling patterns
- **accessibility**: WCAG 2.2 compliance and accessibility improvements
- **seo**: Search engine optimization
- **typescript-advanced-types**: Advanced TypeScript type system

## Testing
- Run `pnpm lint` before committing
- Ensure `pnpm build` succeeds
- Test responsiveness across different screen sizes

## Deployment
- Build with `pnpm build`
- Deploy to Vercel or similar platform
- Ensure all static pages generate correctly

Skills provide specialized instructions and workflows for specific tasks.
Use the skill tool to load a skill when a task matches its description.
