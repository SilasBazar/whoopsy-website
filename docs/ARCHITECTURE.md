# WHOOPSY Website - Architecture

## Folder Structure

```
whoopsy-site/
├── public/                          # Static assets (served directly)
│   └── images/                      # Images
│       ├── games/leap-of-faith/    # Game-specific images
│       ├── logos/                    # Logo files
│       └── ui/                      # UI icons, backgrounds
├── src/
│   ├── components/                  # React components
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── Button.tsx         # 3D button with spark effect
│   │   │   └── Container.tsx      # Container wrapper
│   │   ├── layout/                # Layout components
│   │   │   ├── Header.tsx         # Navigation
│   │   │   └── Footer.tsx         # Footer with social links
│   │   └── sections/              # Page sections
│   │       ├── Hero.tsx           # Hero section
│   │       ├── About.tsx           # About section
│   │       ├── GameShowcase.tsx    # Game showcase
│   │       └── Philosophy.tsx      # Philosophy section
│   ├── data/                      # TypeScript data files
│   │   └── games.ts              # Game data (typed)
│   ├── hooks/                     # Custom React hooks (future)
│   ├── types/                     # TypeScript type definitions
│   │   └── game.ts               # Game interface
│   ├── utils/                     # Utility functions
│   │   └── cn.ts                 # Class name utility
│   ├── App.tsx                    # Root component
│   ├── main.tsx                   # Entry point
│   └── index.css                 # Global styles (Tailwind)
├── docs/                          # Documentation
├── games-data/                     # Game-specific documentation
├── .github/workflows/             # GitHub Actions
│   └── deploy.yml                # CI/CD workflow
├── index.html                     # HTML entry point
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
└── README.md                    # Project README
```

## Component Architecture

### Component Hierarchy

```
App
├── Header
│   └── Container
├── Hero
│   └── Container
├── About
│   └── Container
│       └── About Cards
├── GameShowcase
│   └── Container
│       └── Game Info
└── Philosophy
    └── Container
        └── Philosophy Cards
```

### Component Patterns

#### 1. UI Components (`src/components/ui/`)
- Pure, reusable components
- No business logic
- Highly configurable via props
- Examples: Button, Container, Card

#### 2. Layout Components (`src/components/layout/`)
- Structural components
- May include navigation
- Cross-page consistency
- Examples: Header, Footer, Sidebar

#### 3. Section Components (`src/components/sections/`)
- Page-specific sections
- May contain business logic
- Usually composed of UI components
- Examples: Hero, About, GameShowcase

### Component Design Principles

1. **Single Responsibility**: Each component does one thing well
2. **Composition Over Inheritance**: Build complex UIs from simple components
3. **Props Interface**: Define clear TypeScript interfaces for props
4. **No Side Effects**: Components should be pure (except for event handlers)
5. **Accessibility**: Always include ARIA labels where needed

## Data Flow

### Game Data Flow

```
games.ts (data)
    ↓
GameShowcase.tsx (component)
    ↓
Button.tsx (UI component)
```

### State Management

Currently using React's built-in state:
- Local component state (useState)
- No global state management needed yet
- Future: Consider Zustand or Context API if needed

## CSS Architecture

### Tailwind CSS Configuration

**Location**: `tailwind.config.js`

**Custom Theme**:
- **Colors**: `whoopsy` namespace (green, black, white)
- **Fonts**: `display` (Londrina Solid), `mono` (Space Mono)
- **Shadows**: `3d`, `3d-black`, `3d-hover`
- **Border Radius**: `whoopsy` (16px)

### CSS Organization

1. **Global Styles** (`src/index.css`):
   - Tailwind directives
   - Custom animations (sparks, glitch)
   - Global resets
   - Custom scrollbar

2. **Component Styles**:
   - Tailwind utility classes (primary method)
   - Custom CSS in `index.css` for animations
   - No component-scoped CSS files needed

3. **Responsive Design**:
   - Mobile-first approach
   - Tailwind breakpoints: `sm`, `md`, `lg`, `xl`
   - Example: `grid-cols-1 md:grid-cols-2`

## TypeScript Architecture

### Type Organization

**Location**: `src/types/`

**Types**:
- `game.ts`: Game interface with all game properties

### Type Safety Benefits

- Catch errors at compile time
- Better IDE autocomplete
- Self-documenting code
- Refactoring confidence

### Path Aliases

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Usage**:
```typescript
import { Button } from '@/components/ui/Button';
import { games } from '@/data/games';
```

## Build Process

### Development (`npm run dev`)

1. Vite dev server starts
2. React Fast Refresh enabled
3. TypeScript checking in real-time
4. Hot Module Replacement (HMR)

### Production Build (`npm run build`)

1. TypeScript compilation (`tsc`)
2. Vite bundling
3. Code splitting (automatic)
4. Minification
5. Output to `dist/` folder

### Build Optimization

**Code Splitting**:
```typescript
// vite.config.ts
manualChunks: {
  'react-vendor': ['react', 'react-dom'],
}
```

**Benefits**:
- Faster initial load
- Better caching
- Smaller bundle sizes

## Deployment Architecture

### GitHub Pages Deployment

**Workflow**: `.github/workflows/deploy.yml`

**Process**:
1. Push to `main` branch
2. GitHub Actions triggers
3. Install dependencies
4. Build project
5. Deploy to GitHub Pages

**URL**: `https://silasbazar.github.io/whoopsy-website/`

### Base Path Configuration

```typescript
// vite.config.ts
base: '/whoopsy-website/'
```

This ensures all assets load correctly on GitHub Pages.

## Performance Architecture

### Optimization Strategies

1. **Code Splitting**: Automatic with Vite
2. **Tree Shaking**: Remove unused code
3. **Minification**: CSS and JS
4. **Image Optimization**: WebP format (future)
5. **Lazy Loading**: Components and images (future)

### Performance Targets

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Bundle Size: < 200KB (gzipped)

## Future Architecture Considerations

### Potential Additions

1. **State Management**: Zustand or Context API
2. **Routing**: React Router for multiple pages
3. **Data Fetching**: React Query or SWR
4. **Animation**: Framer Motion
5. **Form Handling**: React Hook Form
6. **Testing**: Vitest + React Testing Library

### Scaling Strategies

1. **Feature-Based Structure**: Group by feature, not type
2. **Monorepo**: Multiple projects in one repo
3. **Micro-frontends**: Separate deployments
4. **Server-Side Rendering**: Next.js or Remix

## Security Considerations

1. **No Sensitive Data**: All data is public
2. **CSP Headers**: Future addition for GitHub Pages
3. **XSS Protection**: React's built-in escaping
4. **Dependency Updates**: Regular security audits

## Related Documentation

- [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) - Project context
- [CODING_STANDARDS.md](./CODING_STANDARDS.md) - Code style guide
- [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md) - Component usage