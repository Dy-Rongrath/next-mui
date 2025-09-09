# Next.js + MUI + Emotion Starter

This project is a [Next.js](https://nextjs.org) app bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), using the **App Router** and integrated with [Material UI (MUI)](https://mui.com/) and [Emotion](https://emotion.sh/docs/introduction) for styling.

## Features

- Next.js 15+ with App Router
- Material UI v7 with advanced theme customization
- Emotion for CSS-in-JS styling
- Automatic font optimization (Roboto)
- ESLint and Prettier for code quality
- TypeScript support

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-app/
├── app/                # Next.js app directory (pages, layouts, etc.)
├── components/         # Reusable React components (e.g., ThemeRegistry)
├── theme.ts            # MUI theme configuration
├── public/             # Static assets
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Custom MUI Theme

The app uses an advanced MUI theme with custom palette, typography, shape, and component overrides.  
See [`src/components/ThemeRegistry.tsx`](src/components/ThemeRegistry.tsx) for details.

## Font Setup

Roboto is used as the default font.  
You can customize fonts in `theme.ts` or via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts).

## Code Quality

- **Lint:** `npm run lint`
- **Format:** Prettier is included

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [MUI Documentation](https://mui.com/)
- [Emotion Documentation](https://emotion.sh/docs/introduction)

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any Node.js hosting platform.

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for