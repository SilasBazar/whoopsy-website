# WHOOPSY Website

[![Build and Deploy](https://github.com/SilasBazar/whoopsy-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/SilasBazar/whoopsy-website/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Games with soul. One dev. One vision.

WHOOPSY is a one-person game studio dedicated to creating games that have soul. This website showcases our games, philosophy, and connects players with our vision.

**Live Site**: [https://silasbazar.github.io/whoopsy-website/](https://silasbazar.github.io/whoopsy-website/)

## Current Games

### 🦒 Leap of Faith
**Status**: Announced  
**Platform**: PC (Steam)  
**Genre**: Party Game / Local Multiplayer

Unlimited local multiplayer chaos! Connect infinite controllers & phones, control wobbly giraffes, dodge physics-based obstacles, and fight to reach the rocket ship first.

[Add to Steam Wishlist](https://store.steampowered.com/app/3628800/Leap_Of_Faith/)

## Tech Stack

This website is built with modern web technologies:

- **Build Tool**: [Vite 5.0](https://vitejs.dev/)
- **Framework**: [React 18.2](https://react.dev/)
- **Language**: [TypeScript 5.2](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.3](https://tailwindcss.com/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## Getting Started

### Prerequisites

- Node.js 20+ installed
- Git installed

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SilasBazar/whoopsy-website.git
   cd whoopsy-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**:
   Navigate to [http://localhost:5173](http://localhost:5173)

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking
npm run type-check

# Linting (if configured)
npm run lint
```

## Project Structure

```
whoopsy-site/
├── public/                 # Static assets
│   └── images/            # Game images, UI assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   └── sections/    # Page sections (Hero, About, etc.)
│   ├── data/             # Game data (TypeScript)
│   ├── hooks/            # Custom React hooks (future)
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles (Tailwind)
├── docs/                # Documentation
├── games-data/          # Game-specific documentation
├── .github/workflows/   # GitHub Actions (CI/CD)
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json       # Dependencies
```

## Features

### Design
- ✨ Bold, playful design with 3D effects
- 🎨 Custom WHOOPSY brand colors and typography
- 📱 Fully responsive (mobile-first)
- ♿ Accessible (WCAG 2.1 Level AA)

### Performance
- ⚡ Fast loading with Vite's HMR
- 📦 Optimized bundle with code splitting
- 🚀 Lighthouse score 90+ target
- 🎯 Lazy loading support (future)

### Developer Experience
- 🔷 TypeScript for type safety
- 🎨 Tailwind CSS for rapid styling
- 🔄 Hot Module Replacement
- 📂 Path aliases with `@/` prefix
- 🧩 Component-based architecture

## Documentation

Comprehensive documentation is available in the `docs/` folder:

- **[PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md)** - Project mission and goals
- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** - Technical architecture details
- **[CODING_STANDARDS.md](docs/CODING_STANDARDS.md)** - Code style and conventions
- **[COMPONENT_GUIDE.md](docs/COMPONENT_GUIDE.md)** - Component usage guide
- **[GAME_DATA_GUIDE.md](docs/GAME_DATA_GUIDE.md)** - How to add/update game data
- **[AI_INSTRUCTIONS.md](docs/AI_INSTRUCTIONS.md)** - Guidelines for AI agents
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Deployment guide

## Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions when you push to the `main` branch.

### Manual Deployment

1. Make your changes
2. Commit with descriptive message:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```
3. Push to main:
   ```bash
   git push origin main
   ```
4. Wait for GitHub Actions to complete
5. Site is live at [https://silasbazar.github.io/whoopsy-website/](https://silasbazar.github.io/whoopsy-website/)

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment instructions.

## Contributing

As a one-person studio, this project is primarily developed by Silas Bazar. However, if you'd like to contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following [CODING_STANDARDS.md](docs/CODING_STANDARDS.md)
4. Commit your changes: `git commit -m 'feat: add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## Contact & Social

- **X/Twitter**: [@SilasBazar](https://x.com/SilasBazar)
- **Email**: silasbazar@gmail.com
- **GitHub**: [SilasBazar/whoopsy-website](https://github.com/SilasBazar/whoopsy-website)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React** - The React team and community
- **Vite** - Evan You and the Vite team
- **Tailwind CSS** - Adam Wathan and the Tailwind team
- **Google Fonts** - Londrina Solid and Space Mono fonts

---

Made with ❤️ and 🎮 by WHOOPSY

_"Games with soul. One dev. One vision."_