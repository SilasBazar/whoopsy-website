# WHOOPSY Website - Coding Standards

## General Principles

1. **Readability First**: Code should be easy to read and understand
2. **Consistency**: Follow established patterns throughout the codebase
3. **Simplicity**: Avoid unnecessary complexity
4. **Type Safety**: Leverage TypeScript to catch errors early
5. **Performance**: Write efficient code without premature optimization

## Naming Conventions

### Files and Folders

- **React Components**: PascalCase (e.g., `Button.tsx`, `GameShowcase.tsx`)
- **Utilities**: camelCase (e.g., `cn.ts`, `formatDate.ts`)
- **Types**: camelCase (e.g., `game.ts`, `user.ts`)
- **Data**: camelCase (e.g., `games.ts`, `constants.ts`)
- **Folders**: kebab-case (e.g., `src/components/ui/`, `src/components/layout/`)

### Variables and Functions

- **Variables**: camelCase (e.g., `userName`, `gameList`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_PLAYERS`, `BASE_URL`)
- **Functions**: camelCase, start with verb (e.g., `getUserData()`, `handleClick()`)
- **Boolean**: Start with `is/has/can` (e.g., `isLoading`, `hasAccess`, `canEdit`)

### React Components

- **Component Names**: PascalCase (e.g., `Button`, `GameShowcase`)
- **Props Interface**: PascalCase with `Props` suffix (e.g., `ButtonProps`)
- **Event Handlers**: Start with `handle` (e.g., `handleSubmit`, `handleClick`)

### CSS/Tailwind Classes

- **Utilities**: Use Tailwind's naming convention
- **Custom Classes**: kebab-case (e.g., `.spark-1`, `.hero-title`)

## Code Organization

### React Component Structure

```typescript
// 1. Imports (external first, then internal)
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

// 2. Types/Interfaces (if inline)
interface ComponentProps {
  // ...
}

// 3. Component definition
export function Component({ prop1, prop2 }: ComponentProps) {
  // 4. Hooks
  const [state, setState] = useState(initialValue);

  // 5. Event handlers
  const handleClick = () => {
    // ...
  };

  // 6. Derived values
  const derivedValue = state.map(/* ... */);

  // 7. Effects
  useEffect(() => {
    // ...
  }, [dependencies]);

  // 8. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### Import Order

1. React and Next.js (if used)
2. External libraries (alphabetically)
3. Internal components (using `@/` alias)
4. Types and interfaces
5. Utility functions
6. Styles (if any)

```typescript
import React from 'react';
import { useState } from 'react';
import clsx from 'clsx';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Game } from '@/types/game';
import { cn } from '@/utils/cn';
```

## TypeScript Guidelines

### Type Definitions

- **Always** type function parameters and return values
- **Use interfaces** for object shapes
- **Use type aliases** for unions, primitives, functions
- **Avoid `any`** at all costs

```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Promise<User> {
  // ...
}

// Bad
function getUser(id: any): any {
  // ...
}
```

### Type Inference

Let TypeScript infer when possible, but be explicit for clarity.

```typescript
// Good - TypeScript infers number[]
const numbers = [1, 2, 3];

// Good - Explicit for clarity
const numbers: number[] = [1, 2, 3];

// Good - Explicit for complex types
const gameData: Record<string, Game> = { /* ... */ };
```

### Generic Types

Use generics when appropriate for reusability.

```typescript
function identity<T>(value: T): T {
  return value;
}
```

## React Best Practices

### Component Design

1. **Functional Components Only**: Use functional components with hooks
2. **Props Interface**: Always define props interface
3. **Default Props**: Use default values in destructuring
4. **Children Prop**: Use `children` prop for composition

```typescript
interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={cn('card', className)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

### Hooks

- **Custom Hooks**: Start with `use` (e.g., `useGame`, `useLocalStorage`)
- **Hook Dependencies**: Always include all dependencies in dependency array
- **Cleanup**: Return cleanup function from `useEffect` when needed

```typescript
// Good - proper dependency array
useEffect(() => {
  const fetchData = async () => {
    // ...
  };
  fetchData();

  return () => {
    // Cleanup
  };
}, [dependency1, dependency2]);

// Bad - missing dependencies
useEffect(() => {
  // ...
}, []); // Missing dependency1, dependency2
```

### State Management

- **Local State**: Use `useState` for component-specific state
- **Derived State**: Compute from props/state, don't duplicate
- **Global State**: Use Context API or Zustand when needed

```typescript
// Good - derived state
const total = items.reduce((sum, item) => sum + item.price, 0);

// Bad - duplicated state
const [total, setTotal] = useState(0);
useEffect(() => {
  setTotal(items.reduce((sum, item) => sum + item.price, 0));
}, [items]);
```

### Event Handlers

- **Arrow Functions**: Use arrow functions to avoid `this` issues
- **Handler Naming**: Start with `handle` prefix
- **Event Types**: Use proper event types

```typescript
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  // ...
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};
```

## Tailwind CSS Guidelines

### Utility-First Approach

- **Prefer Utilities**: Use Tailwind utilities over custom CSS
- **Responsive**: Use mobile-first responsive design
- **Extract Components**: Create components for repeated patterns

```typescript
// Good - Tailwind utilities
<div className="bg-whoopsy-white p-6 rounded-whoopsy shadow-3d">

// Bad - Custom CSS class
<div className="custom-card">
```

### Class Organization

- **Static Classes First**: Layout, positioning, sizing
- **Dynamic Classes Last**: Colors, variants, state
- **Use `cn()` Utility**: For conditional classes

```typescript
// Good - organized
<div className={cn(
  'flex items-center justify-between p-4', // static
  isActive && 'bg-whoopsy-green', // conditional
  className // override
)}>

// Bad - disorganized
<div className={cn(className, 'flex items-center', isActive && 'bg-whoopsy-green')}>
```

### Custom Classes

- **In `index.css`**: For animations and global styles
- **In Components**: For component-specific styles only
- **Naming**: Use kebab-case with prefix if needed

```css
/* Good - in index.css */
@keyframes spark-1 {
  /* ... */
}

.custom-scrollbar {
  /* ... */
}
```

## Comment Guidelines

### When to Comment

- **Complex Logic**: Explain why, not what
- **TODO/FIXME**: Mark work to be done
- **Public APIs**: Document props and functions
- **Business Rules**: Explain domain-specific logic

### Comment Style

```typescript
// Single line for simple explanations
// Multi-line for complex explanations
// that span multiple lines

/**
 * Function documentation
 * @param param1 - Description
 * @returns Description of return value
 */
```

### What NOT to Comment

- **Obvious Code**: Don't state the obvious
- **Outdated Comments**: Delete or update comments
- **Commented Code**: Remove unused code, use git history

```typescript
// Bad - obvious
// Increment count
count++;

// Good - business rule
// Count increments only when user is authenticated
if (user.isAuthenticated) {
  count++;
}
```

## Error Handling

### TypeScript Errors

- **Fix TS Errors**: Never use `@ts-ignore` or `@ts-expect-error`
- **Type Assertions**: Use sparingly, prefer proper typing
- **Unknown Types**: Use `unknown` instead of `any`

```typescript
// Bad - ts-ignore
// @ts-ignore
const value = getData();

// Good - proper typing
const value: unknown = getData();
if (typeof value === 'string') {
  console.log(value);
}
```

### Runtime Errors

- **Try-Catch**: Wrap async operations
- **Error Boundaries**: Catch React errors (future)
- **User Feedback**: Show user-friendly error messages

```typescript
try {
  await fetchData();
} catch (error) {
  console.error('Failed to fetch data:', error);
  showError('Failed to load data. Please try again.');
}
```

## Performance Guidelines

### React Performance

1. **Avoid Inline Functions**: Define handlers outside render (when possible)
2. **Memoization**: Use `useMemo`, `useCallback` when needed
3. **Keys**: Always provide unique keys for lists
4. **Avoid Deep Comparisons**: Prefer shallow comparisons

```typescript
// Good - handler defined once
const handleClick = useCallback(() => {
  // ...
}, [dependency]);

// Bad - handler recreated on every render
<div onClick={() => handleClick()}>
```

### Asset Optimization

- **Images**: Use appropriate formats (WebP, AVIF)
- **Lazy Loading**: Load images and components as needed
- **Code Splitting**: Vite handles this automatically

## Testing Guidelines (Future)

### Test Structure

```typescript
describe('ComponentName', () => {
  it('should render correctly', () => {
    // ...
  });

  it('should handle user interaction', () => {
    // ...
  });

  it('should show error state', () => {
    // ...
  });
});
```

### Testing Best Practices

1. **Test Behavior**: Test what users see and do
2. **Avoid Implementation Details**: Don't test internal functions
3. **Mock External Dependencies**: Isolate component under test
4. **Use Descriptive Names**: Tests should read like documentation

## Git Commit Guidelines

### Commit Message Format

```
<type>: <description>

[optional body]

[optional footer]
```

### Commit Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic change)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks
- **perf**: Performance improvements

### Examples

```bash
feat: add game showcase component
fix: correct button hover animation
docs: update deployment guide
style: format code with prettier
refactor: improve component structure
test: add unit tests for Button
chore: update dependencies
```

## Related Documentation

- [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) - Project context
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical architecture
- [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md) - Component usage