# WHOOPSY Website - Component Guide

This guide explains how to use the available components in the WHOOPSY website.

## UI Components

### Button

The `Button` component is a reusable 3D-styled button with spark animation effect.

#### Usage

```tsx
import { Button } from '@/components/ui/Button';

// Basic button
<Button>Click Me</Button>

// Link button
<Button href="https://example.com" target="_blank">
  Visit Site
</Button>

// With onClick handler
<Button onClick={() => console.log('clicked!')}>
  Click Me
</Button>
```

#### Props

| Prop | Type | Required | Default | Description |
|-------|--------|-----------|----------|-------------|
| `children` | `React.ReactNode` | Yes | - | Button content/text |
| `href` | `string` | No | - | URL if button should be a link |
| `target` | `string` | No | `_blank` | Link target (only used with href) |
| `variant` | `'3d' \| 'flat'` | No | `'3d'` | Button style variant |
| `className` | `string` | No | `''` | Additional CSS classes |
| `onClick` | `() => void` | No | - | Click handler |

#### Variants

**3D (Default)**:
- Multi-layer shadow effect
- Pops up on hover
- Spark animation on click
- Green bevel shadow

**Flat**:
- Simple solid background
- No shadow
- No pop effect
- Green background

#### Example

```tsx
<div className="flex gap-4">
  <Button>3D Button</Button>
  <Button variant="flat">Flat Button</Button>
  <Button href="https://store.steampowered.com" target="_blank">
    Steam Link
  </Button>
</div>
```

---

### Container

The `Container` component provides a centered, responsive container with consistent max-width.

#### Usage

```tsx
import { Container } from '@/components/ui/Container';

<Container>
  <h1>Content here</h1>
  <p>This content is centered and responsive.</p>
</Container>
```

#### Props

| Prop | Type | Required | Default | Description |
|-------|--------|-----------|----------|-------------|
| `children` | `React.ReactNode` | Yes | - | Container content |
| `className` | `string` | No | `''` | Additional CSS classes |

#### Example

```tsx
<Container className="py-12">
  <h2 className="text-2xl mb-4">Custom Padding</h2>
  <p>This container has custom padding.</p>
</Container>
```

---

## Layout Components

### Header

The `Header` component provides site navigation with smooth scrolling.

#### Usage

```tsx
import { Header } from '@/components/layout/Header';

<Header />
```

#### Features

- Logo link to top of page
- Navigation links with smooth scroll
- Responsive (hidden on mobile, could be enhanced)
- Hover effects on links

#### Navigation Links

The header includes these navigation links:
- **ABOUT** - Links to `#about` section
- **GAME** - Links to `#game` section
- **PHILOSOPHY** - Links to `#philosophy` section
- **CONTACT** - Links to `#contact` section (footer)

---

### Footer

The `Footer` component provides site footer with social links and copyright.

#### Usage

```tsx
import { Footer } from '@/components/layout/Footer';

<Footer />
```

#### Features

- WHOOPSY logo
- Social media buttons (X/Twitter, Email)
- Copyright notice
- Responsive layout

#### Social Links

- **X/Twitter**: [@SilasBazar](https://x.com/SilasBazar)
- **Email**: silasbazar@gmail.com

---

## Section Components

### Hero

The `Hero` component creates the main landing section with large title and CTA.

#### Usage

```tsx
import { Hero } from '@/components/sections/Hero';

<Hero />
```

#### Features

- Large animated title ("WHOOPSY")
- Tagline text
- Call-to-action button
- Decorative background element
- Glitch effect on hover

---

### About

The `About` component displays information about the WHOOPSY studio.

#### Usage

```tsx
import { About } from '@/components/sections/About';

<About />
```

#### Features

- Two-card layout (responsive)
- Studio statistics (1 Developer, ∞ Soul)
- Mission statement
- Styled with 3D shadows

---

### GameShowcase

The `GameShowcase` component displays a featured game with image, description, and CTA.

#### Usage

```tsx
import { GameShowcase } from '@/components/sections/GameShowcase';

<GameShowcase />
```

#### Features

- Game image with 3D shadow
- Game title and tagline
- Short description
- Steam wishlist button (if available)
- Styled banner with game ID
- Responsive layout (side-by-side on desktop)

#### Data Source

The component fetches game data from `src/data/games.ts`. Currently displays "Leap of Faith".

---

### Philosophy

The `Philosophy` component displays WHOOPSY's core philosophy cards.

#### Usage

```tsx
import { Philosophy } from '@/components/sections/Philosophy';

<Philosophy />
```

#### Features

- Three philosophy cards
- Hover effects (color change)
- Numbered sections (01, 02, 03)
- Responsive grid layout
- Smooth transitions

#### Philosophies

1. **AUTHENTICITY** - Genuine passion, no checkboxes or trends
2. **CONNECTION** - Bridge gap between creator and player
3. **COURAGE** - Taking risks, embracing imperfection

---

## Utility Components

### cn

The `cn` utility function combines CSS class names.

#### Usage

```tsx
import { cn } from '@/utils/cn';

<div className={cn('base-class', isActive && 'active-class', className)}>
  {/* ... */}
</div>
```

#### Features

- Combines multiple class names
- Filters out falsy values (null, undefined, false)
- Useful for conditional classes

---

## Component Patterns

### Combining Components

```tsx
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Hero } from '@/components/sections/Hero';

function CustomSection() {
  return (
    <section className="py-20">
      <Container>
        <Hero />
        <div className="mt-12 flex justify-center">
          <Button href="/games">View All Games</Button>
        </div>
      </Container>
    </section>
  );
}
```

### Custom Card Pattern

```tsx
interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function CustomCard({ title, description, children }: CardProps) {
  return (
    <div className="bg-whoopsy-white rounded-whoopsy shadow-3d p-6">
      <h3 className="font-display text-xl mb-2">{title}</h3>
      <p className="text-whoopsy-black mb-4">{description}</p>
      {children}
    </div>
  );
}
```

---

## Styling Guidelines

### WHOOPSY Design Tokens

When creating new components, use these design tokens:

#### Colors

```tsx
// Backgrounds
className="bg-whoopsy-black"  // Main background
className="bg-whoopsy-white"  // Cards, containers
className="bg-whoopsy-green"   // Accents, banners

// Text
className="text-whoopsy-black"  // On light backgrounds
className="text-whoopsy-white"  // On dark backgrounds
className="text-whoopsy-green"  // Headings, accents
```

#### Typography

```tsx
className="font-display"  // Londrina Solid (headings, logo)
className="font-mono"     // Space Mono (body text)
```

#### Effects

```tsx
className="shadow-3d"        // Green shadow (3D effect)
className="shadow-3d-black"  // Black shadow
className="rounded-whoopsy"  // 16px border radius
```

#### Hover Effects

```tsx
className="hover:-translate-x-2.5 hover:-translate-y-2.5"  // 3D pop effect
className="hover:shadow-3d-hover"                    // Enhanced shadow
className="hover:text-whoopsy-green"                    // Color change
className="transition-all"                             // Smooth transitions
```

---

## Accessibility

### Button Accessibility

```tsx
// Good - accessible button
<Button 
  onClick={handleAction}
  aria-label="Close dialog"
>
  <CloseIcon />
</Button>

// Good - accessible link button
<Button 
  href="/about"
  aria-label="Learn more about WHOOPSY"
>
  Learn More
</Button>
```

### Keyboard Navigation

All interactive elements should be keyboard accessible:
- Buttons: `Tab` to focus, `Enter`/`Space` to activate
- Links: `Tab` to focus, `Enter` to activate

### ARIA Labels

Use ARIA labels for:
- Icon-only buttons
- Non-standard UI elements
- Screen reader clarification

---

## Performance Tips

1. **Avoid Inline Functions**: Define handlers outside render when possible
2. **Memoization**: Use `useMemo`/`useCallback` for expensive operations
3. **Code Splitting**: Use lazy loading for large components (future)
4. **Image Optimization**: Use appropriate formats and sizes

---

## Future Components

Potential components to add:
- **Modal** - For dialogs, forms, detailed info
- **Card** - Reusable card component
- **Badge** - Status badges (released, announced, wip)
- **Skeleton** - Loading placeholders
- **ErrorBoundary** - Error handling wrapper
- **SearchBar** - Game search functionality

---

## Related Documentation

- [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) - Project context
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical architecture
- [CODING_STANDARDS.md](./CODING_STANDARDS.md) - Code style guide