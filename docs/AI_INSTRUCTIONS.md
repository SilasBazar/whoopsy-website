# WHOOPSY Website - AI Agent Instructions

This document provides specific guidance for AI agents working on the WHOOPSY website project.

## Project Context

WHOOPSY is a one-person game studio's website built with:
- **Vite** (build tool)
- **React 18** (UI framework)
- **TypeScript** (type safety)
- **Tailwind CSS** (styling)

The goal is to showcase games, philosophy, and connect with players.

## Important Design Patterns

### 1. Component Structure

Always follow this component pattern:

```typescript
// 1. Imports
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

// 2. Props Interface
interface ComponentProps {
  title: string;
  onAction: () => void;
}

// 3. Component Definition
export function Component({ title, onAction }: ComponentProps) {
  // 4. Hooks
  const [isOpen, setIsOpen] = useState(false);

  // 5. Event Handlers
  const handleClick = () => {
    setIsOpen(true);
    onAction();
  };

  // 6. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### 2. Styling Conventions

**Always use Tailwind CSS utilities first:**

```typescript
// ✅ Good - Tailwind utilities
<div className="bg-whoopsy-white p-6 rounded-whoopsy shadow-3d">

// ❌ Bad - Custom CSS (unless necessary)
<div className="custom-card">
```

**WHOOPSY Design Tokens:**
- Colors: `whoopsy-green`, `whoopsy-black`, `whoopsy-white`
- Fonts: `font-display` (Londrina Solid), `font-mono` (Space Mono)
- Effects: `shadow-3d`, `shadow-3d-black`, `rounded-whoopsy`

### 3. Button Usage

Always use the `Button` component for actions:

```typescript
import { Button } from '@/components/ui/Button';

// For internal links
<Button href="#section">Navigate</Button>

// For external links
<Button href="https://example.com" target="_blank">
  External Link
</Button>

// For actions
<Button onClick={() => console.log('clicked')}>
  Do Something
</Button>
```

### 4. Data Access

Access game data through the typed interface:

```typescript
import { games, gamesList } from '@/data/games';
import { Game } from '@/types/game';

// Single game
const game: Game = games['leap-of-faith'];

// All games
const allGames: Game[] = gamesList;

// Filtered
const releasedGames = gamesList.filter(g => g.status === 'released');
```

## What AI Agents Should Do

### ✅ DO:

1. **Follow TypeScript Strict Mode**: All code must pass TypeScript checking
2. **Use Path Aliases**: Import with `@/` prefix
3. **Maintain Type Safety**: Never use `any`, use proper types
4. **Follow Component Patterns**: Use established component structure
5. **Use WHOOPSY Design Tokens**: Use brand colors and fonts
6. **Write Self-Documenting Code**: Clear names, interfaces for props
7. **Keep Components Small**: Single responsibility, focused purpose
8. **Use Tailwind First**: Prefer utilities over custom CSS
9. **Test Responsiveness**: Mobile-first approach with Tailwind breakpoints
10. **Follow Coding Standards**: Adhere to CODING_STANDARDS.md

### ❌ DON'T:

1. **Don't Use `any` Type**: Always use proper TypeScript types
2. **Don't Inline Complex Logic**: Extract to functions/components
3. **Don't Create Unnecessary Files**: Use existing patterns
4. **Don't Hardcode Data**: Use game data from `src/data/games.ts`
5. **Don't Ignore TypeScript Errors**: Fix all TS errors before committing
6. **Don't Use External CSS Files**: Use Tailwind or `src/index.css`
7. **Don't Break Component Contract**: Keep props interfaces consistent
8. **Don't Add Unnecessary Dependencies**: Keep dependencies minimal
9. **Don't Ignore Mobile**: Always consider responsive design
10. **Don't Skip Accessibility**: Use ARIA labels, semantic HTML

## Common Tasks & Patterns

### Adding a New Section Component

```typescript
// src/components/sections/NewSection.tsx
import { Container } from '@/components/ui/Container';

export function NewSection() {
  return (
    <section id="new-section" className="py-[100px]">
      <Container>
        {/* Content */}
      </Container>
    </section>
  );
}

// Then add to App.tsx
import { NewSection } from './components/sections/NewSection';

function App() {
  return (
    <div>
      {/* ... */}
      <NewSection />
    </div>
  );
}
```

### Creating a Reusable UI Component

```typescript
// src/components/ui/NewComponent.tsx
import { cn } from '@/utils/cn';

interface NewComponentProps {
  title: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  children?: React.ReactNode;
}

export function NewComponent({ 
  title, 
  variant = 'primary',
  className,
  children 
}: NewComponentProps) {
  return (
    <div className={cn(
      'base-classes',
      variant === 'primary' && 'primary-classes',
      variant === 'secondary' && 'secondary-classes',
      className
    )}>
      <h3 className="font-display">{title}</h3>
      {children}
    </div>
  );
}
```

### Working with Game Data

```typescript
// Adding a new game
export const games: Record<string, Game> = {
  // ... existing games
  'new-game': {
    id: 'new-game',
    title: 'NEW GAME',
    shortDescription: 'Brief description',
    longDescription: 'Full description...',
    tagline: 'Catchy tagline',
    features: ['Feature 1', 'Feature 2'],
    images: {
      capsule: '/images/games/new-game/capsule.png'
    },
    status: 'announced'
  }
};
```

## Important Constraints

### File Structure
- Components: `src/components/` (ui/, layout/, sections/)
- Data: `src/data/`
- Types: `src/types/`
- Utils: `src/utils/`
- Docs: `docs/`

### Naming Conventions
- Components: PascalCase (`GameCard.tsx`)
- Files: kebab-case or PascalCase (follow pattern)
- Variables: camelCase (`userName`)
- Constants: UPPER_SNAKE_CASE (`MAX_PLAYERS`)

### Styling Rules
- Use Tailwind utilities for 95% of styling
- Custom CSS only in `src/index.css` for animations
- Mobile-first responsive design
- WHOOPSY design tokens (colors, fonts, effects)

### TypeScript Rules
- Strict mode enabled
- No `any` types
- Define interfaces for all props
- Use proper event types

## Testing & Verification

### Before Completing Tasks:

1. **Check TypeScript**: Run `npm run build` - no errors
2. **Test Locally**: Run `npm run dev` and verify changes
3. **Check Accessibility**: Ensure keyboard navigation works
4. **Verify Responsiveness**: Test on mobile (use browser dev tools)
5. **Review Code**: Follow CODING_STANDARDS.md

### Common Issues to Avoid:

1. **Missing Dependencies**: If using new imports, check package.json
2. **Wrong Image Paths**: Must start with `/images/games/[game-id]/`
3. **Broken Links**: Verify all `href` and `src` attributes
4. **Missing Props Interfaces**: Always define TypeScript interfaces
5. **Typos in Tailwind Classes**: Check class names carefully

## Communication Style

### When Asking for Clarification:

✅ **Good**:
- "Should this component accept a `size` prop for different sizes?"
- "Do you want the game list to filter by status or show all games?"
- "Should the modal close on backdrop click?"

❌ **Vague**:
- "How should I do this?"
- "What do you want?"
- "I need more info."

### When Proposing Solutions:

✅ **Good**:
- "I can implement this as a new component `GameList.tsx` that maps over `gamesList` and renders a `GameCard` for each game. Would you like me to proceed?"
- "I'll add a `status` prop to the `Game` interface to track: 'wip' | 'announced' | 'released'. Sound good?"

❌ **Bad**:
- "I'll add the thing."
- "Done." (without explanation)

### When Reporting Progress:

1. **What I did**: Clear description of changes
2. **Why I did it**: Brief rationale
3. **What's next**: Any follow-up tasks
4. **Testing**: How I verified it works

## Performance Considerations

### Optimizations AI Should Implement:

1. **Code Splitting**: Use dynamic imports for large components (future)
2. **Memoization**: Use `useMemo`/`useCallback` for expensive operations
3. **Lazy Loading**: Load images only when needed (future)
4. **Avoid Re-renders**: Proper dependency arrays in useEffect
5. **Optimize Images**: Use appropriate formats (WebP, AVIF)

### Anti-Patterns to Avoid:

1. **Inline Functions in Render**: Define handlers outside
2. **Unnecessary State**: Use derived values when possible
3. **Deep Nesting**: Flatten component structure
4. **Large Components**: Split into smaller, focused components
5. **Unused Dependencies**: Remove unused imports

## Security & Privacy

### Data Handling:
- All game data is public (no sensitive information)
- No user authentication required
- No API calls to backend (static site)

### Safe Practices:
1. Sanitize any user input (if forms added)
2. Use HTTPS for all external links
3. Validate data from external sources
4. Never expose API keys or secrets

## Project-Specific Knowledge

### WHOOPSY Brand:
- **Vibe**: Playful, bold, soulful
- **Colors**: Green (#86ce43), Black (#1d1c00), White (#e5e6cc)
- **Fonts**: Londrina Solid (display), Space Mono (body)
- **Style**: 3D effects, bold typography, clean layout

### Current Games:
- **Leap of Faith**: Local multiplayer party game, announced status

### Development Philosophy:
- "Games with soul. One dev. One vision."
- Focus on authenticity, connection, and courage
- Embrace imperfection and risk-taking

## Escalation & Questions

### When to Ask for Help:
1. **Unclear Requirements**: Ask for clarification
2. **Design Decisions**: Propose options and ask for preference
3. **Technical Trade-offs**: Explain pros/cons and ask for choice
4. **Breaking Changes**: Warn before making major changes

### What AI Shouldn't Decide:
- Major feature additions without approval
- Changing brand identity (colors, fonts, style)
- Removing existing functionality
- Changing deployment strategy
- Adding new dependencies without reason

## Related Documentation

- [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) - Project context
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical architecture
- [CODING_STANDARDS.md](./CODING_STANDARDS.md) - Code style guide
- [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md) - Component usage
- [GAME_DATA_GUIDE.md](./GAME_DATA_GUIDE.md) - Game data management