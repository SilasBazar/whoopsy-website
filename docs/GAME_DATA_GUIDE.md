# WHOOPSY Website - Game Data Guide

This guide explains how to add, update, and manage game data for the WHOOPSY website.

## Overview

Game data is stored in `src/data/games.ts` as a TypeScript object with type safety. Each game follows the `Game` interface defined in `src/types/game.ts`.

## Game Interface

```typescript
interface Game {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tagline: string;
  features: string[];
  images: {
    capsule: string;
    header?: string;
    library?: string;
  };
  steamUrl?: string;
  releaseDate?: string;
  status: 'released' | 'announced' | 'wip';
}
```

## Adding a New Game

### Step 1: Prepare Images

1. Create folder in `public/images/games/[game-id]/`
2. Add images with these names:
   - `capsule.png` - Main game image (required)
   - `header.png` - Wide banner image (optional)
   - `library.png` - Library/thumbnail image (optional)

**Example Structure**:
```
public/images/games/my-new-game/
├── capsule.png
├── header.png
└── library.png
```

**Image Specifications**:
- **Format**: PNG or WebP preferred
- **Capsule**: 3:4 aspect ratio, min 600x800px
- **Header**: 16:9 aspect ratio, min 1920x1080px
- **Library**: 1:1 or 3:2 aspect ratio

### Step 2: Add Game Data

Edit `src/data/games.ts`:

```typescript
export const games: Record<string, Game> = {
  'leap-of-faith': {
    // Existing game...
  },
  
  // Add your new game:
  'my-new-game': {
    id: 'my-new-game',
    title: 'MY NEW GAME',
    shortDescription: 'A brief description for the game list/preview',
    longDescription: `Full game description with paragraphs and details...
    
    You can use multi-line strings for longer descriptions.
    Include gameplay features, story, and anything else relevant.`,
    tagline: 'A catchy tagline for marketing',
    features: [
      'Feature 1: Description',
      'Feature 2: Description',
      'Feature 3: Description',
    ],
    images: {
      capsule: '/images/games/my-new-game/capsule.png',
      header: '/images/games/my-new-game/header.png',
      library: '/images/games/my-new-game/library.png'
    },
    steamUrl: 'https://store.steampowered.com/app/YOUR_APP_ID/',
    releaseDate: '2026-01-15',
    status: 'announced'
  }
};
```

### Step 3: Update Components (if needed)

If you want to display the new game:

**Option A: In GameShowcase Component**
```typescript
// src/components/sections/GameShowcase.tsx
export function GameShowcase() {
  const game = games['my-new-game']; // Change game ID
  // ... rest of component
}
```

**Option B: Create Multiple Game Cards**
```typescript
// src/components/sections/GamesList.tsx
export function GamesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {gamesList.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
```

## Updating Existing Games

### Updating Basic Information

```typescript
'my-game': {
  id: 'my-game',
  title: 'UPDATED TITLE',  // Changed
  shortDescription: 'Updated description',  // Changed
  // ... rest unchanged
}
```

### Updating Status

As your game progresses through development:

```typescript
status: 'wip'           // Work in progress
status: 'announced'      // Announced but not released
status: 'released'       // Released to public
```

### Adding Steam URL

When you have a Steam store page:

```typescript
steamUrl: 'https://store.steampowered.com/app/1234560/'
```

### Updating Images

1. Replace images in `public/images/games/[game-id]/`
2. Update paths in `src/data/games.ts` (if filenames changed)

## Game Data Best Practices

### Description Guidelines

**Short Description**:
- 1-2 sentences maximum
- Highlights main selling point
- Good for previews/lists

**Long Description**:
- Full marketing copy
- Multiple paragraphs
- Include features, story, gameplay
- Can use formatting (newlines, etc.)

**Tagline**:
- Catchy, memorable
- Short (under 100 characters)
- Used in hero sections/marketing

### Features List

Each feature should be:
- Clear and concise
- Benefit-focused (what player gets)
- Start with feature name
- Explain briefly

**Good Examples**:
- "Unlimited Local Players: If they have a browser, they are in the game. No player limits, no taking turns."
- "Ragdoll Physics: Hilarious, wobbly movement that makes every jump a gamble and every failure funny."

**Bad Examples**:
- "Has multiplayer" (too vague)
- "Physics" (doesn't explain benefit)
- "Cool graphics" (subjective)

### Image Organization

**Naming Convention**:
- Use kebab-case for game ID (e.g., `my-new-game`)
- Use descriptive image names (capsule, header, library)
- Keep consistent across games

**File Paths**:
- Always start with `/images/games/[game-id]/`
- Use forward slashes
- No spaces in filenames

## Game Documentation

Each game should have a documentation folder in `games-data/[game-id]/`:

```
games-data/
└── leap-of-faith/
    ├── GAME_INFO.md      # Detailed game information
    ├── MEDIA_ASSETS.md   # Available media/assets
    └── UPDATES.md        # Development updates/changelog
```

### Creating Game Documentation

Create folder for your game:
```bash
mkdir games-data/my-new-game
```

Add documentation files:

**GAME_INFO.md**:
```markdown
# My New Game

## Overview
Brief overview of the game...

## Story
Game story and lore...

## Gameplay
Detailed gameplay mechanics...

## Platforms
- PC (Steam)
- Console (TBD)
```

**MEDIA_ASSETS.md**:
```markdown
# Media Assets

## Screenshots
- /images/games/my-new-game/capsule.png
- /images/games/my-new-game/header.png

## Videos
- Trailer URL (YouTube/Vimeo)
- Gameplay footage

## Press Kit
- Logo files
- Press release PDF
```

**UPDATES.md**:
```markdown
# Development Updates

## 2026-01-15
- Added new feature
- Fixed bug X

## 2026-01-10
- Initial announcement
```

## TypeScript Type Safety

The `Game` interface ensures type safety:

```typescript
// TypeScript will catch these errors:
const badGame: Game = {
  id: 'my-game',
  title: 'My Game',
  // ❌ Missing required property: shortDescription
};

// ❌ Invalid status value:
status: 'in-development'  // Should be 'wip', 'announced', or 'released'

// ❌ Wrong image path format:
images: {
  capsule: 'wrong/path.png'  // Should start with '/images/games/'
}
```

## Using Game Data in Components

### Single Game

```typescript
import { games } from '@/data/games';

export function FeaturedGame() {
  const game = games['leap-of-faith'];
  
  return (
    <div>
      <h2>{game.title}</h2>
      <p>{game.shortDescription}</p>
    </div>
  );
}
```

### All Games

```typescript
import { gamesList } from '@/data/games';

export function AllGames() {
  return (
    <div>
      {gamesList.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
```

### Filtered Games

```typescript
import { gamesList } from '@/data/games';

export function ReleasedGames() {
  const released = gamesList.filter(game => game.status === 'released');
  
  return (
    <div>
      {released.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
```

## Common Tasks

### Changing Displayed Game

To change which game appears in GameShowcase:

1. Open `src/components/sections/GameShowcase.tsx`
2. Change game ID:
```typescript
const game = games['leap-of-faith']; // Change to your game ID
```

### Hiding Steam Button

If game doesn't have Steam page yet:

```typescript
images: {
  capsule: '/images/games/my-game/capsule.png',
  // Omit steamUrl if not available
},
status: 'wip'  // or 'announced'
```

The Button component will conditionally render Steam button only if `steamUrl` exists.

### Adding Multiple Platforms

Extend the Game interface if needed:

```typescript
// src/types/game.ts
export interface Game {
  // ... existing fields
  platforms?: {
    steam?: string;
    epic?: string;
    gog?: string;
    itch?: string;
  };
}
```

## Troubleshooting

### Images Not Loading

**Problem**: Game images show broken image icon.

**Solutions**:
1. Check path starts with `/images/games/[game-id]/`
2. Verify images exist in `public/images/games/[game-id]/`
3. Check filename spelling (case-sensitive)
4. Confirm images are in `public/` folder (not `src/`)

### TypeScript Errors

**Problem**: TypeScript shows errors for game data.

**Solutions**:
1. Ensure all required properties are present
2. Check `status` is one of: `'released' | 'announced' | 'wip'`
3. Verify image paths are strings
4. Make sure features is an array of strings

### Game Not Displaying

**Problem**: Added game but it's not showing on site.

**Solutions**:
1. Check game ID matches key in `games` object
2. Verify component is using correct game ID
3. Ensure game is in `gamesList` if mapping over all games
4. Check for TypeScript errors (might prevent build)

## Related Documentation

- [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) - Project context
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical architecture
- [CODING_STANDARDS.md](./CODING_STANDARDS.md) - Code style guide
- [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md) - Component usage