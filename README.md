# Quantum Bridge Landing Page

A modern single-page marketing website built with React, TypeScript, Vite, and Tailwind CSS v4.

This project is structured as reusable UI sections (hero, services, stats, contact, and more) combined in one main page.

## Tech Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- ESLint 9

## Getting Started

### 1. Prerequisites

Install the following tools:

- Node.js 20+ (recommended)
- npm 10+

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the URL printed in your terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start local development server with hot reload
- `npm run build` - run TypeScript build check and create production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint across the project

## Project Structure

```text
src/
  main.tsx                    # App entry point
  index.css                   # Global styles + Tailwind theme tokens
  pages/
    App.tsx                   # Main page composition
  components/
    layouts/
      NavBar.tsx
      Footer.tsx
    sections/
      HeroSection.tsx
      ServicesSection.tsx
      WhyChooseUsSection.tsx
      StatsSection.tsx
      ContactSection.tsx
```

## How the App Works

1. `src/main.tsx` renders the main page component.
2. `src/pages/App.tsx` combines layout and section components in order.
3. Each section in `src/components/sections/` is a standalone UI block.
4. Shared look and feel (colors, fonts, utility classes) are defined in `src/index.css`.

## Styling and Theme

This project uses Tailwind CSS v4 with custom design tokens defined in `src/index.css` under the `@theme` block.

To update branding quickly:

- Change color tokens (for example `--color-primary`, `--color-background`)
- Update font tokens (`--font-headline`, `--font-body`, `--font-label`)
- Edit utility classes like `.glass-card` or `.text-gradient`

## Build for Production

```bash
npm run build
```

Production files are generated in the `dist/` folder.

To test the production output locally:

```bash
npm run preview
```

## Notes

- The contact form currently provides UI only (no backend submission yet).
- Navigation links are present in the navbar and can be wired to section IDs as needed.
