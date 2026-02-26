import { Game } from '@/types/game';
import capsuleImage from '/images/games/leap-of-faith/LibraryCapsule.png';
import headerImage from '/images/games/leap-of-faith/HeaderCapsule.png';
import libraryImage from '/images/games/leap-of-faith/MainCapsule.png';

export const games: Record<string, Game> = {
  'leap-of-faith': {
    id: 'leap-of-faith',
    title: 'LEAP OF FAITH',
    shortDescription: 'Unlimited local multiplayer chaos! Connect infinite controllers, control wobbly giraffes, dodge physics-based obstacles, and fight to reach the rocket ship first. The more players, the more chaos!',
    longDescription: `The Party Game Where Everyone Plays
Forget passing the controller or taking turns. Leap of Faith is the chaotic local multiplayer racer that asks the important question: "How many giraffes can we fit on one screen?"

The answer: All of them!

In this physics-based party platformer, you and an unlimited number of friends take control of wobbly, ragdoll giraffes. Your goal is simple: survive the obstacle course, outrun your friends, and be the first to reach the Rocket Ship before it blasts off.

A Stampede of Chaos
Being a giraffe isn't easy. You are tall, you are wobbly, and you are surrounded by dozens of other giraffes trying to get you killed.

Physics Mayhem: Master the "jank." Use your momentum to swing across gaps, or simply flop over and hope for the best.

Deadly Obstacles: Dodge chomping gators, leap over deadly gaps, and avoid "friendly-fire".

Neck-and-Neck Racing: Use your long neck to nudge opponents off ledges or scramble over the pile to take the lead.

Infinite Local Multiplayer
The lobby size in Leap of Faith is limited only by how many people you can fit in your living room. Whether it's a quiet 1v1 duel or a roaring party of 50 people, the game scales the chaos to match your crowd.

Use Anything to Play Connect as many gamepads as your PC can handle—there is no limit. Run out of controllers? No problem.

Hybrid Input Support: Seamlessly mix and match any gamepad and smart devices for maximum player support.

Everyone Joins: Players without a controller can simply scan a QR code to turn their phone or tablet into a gamepad instantly. If they are in the room, they are in the race.`,
    tagline: 'Unlimited local multiplayer chaos!',
    features: [
      'Unlimited Local Players: If they have a browser, they are in the game. No player limits, no taking turns.',
      'Ragdoll Physics: Hilarious, wobbly movement that makes every jump a gamble and every failure funny.',
      'The Rocket Awaits: Intense racing mechanics where only the fastest survive the countdown.',
      'Seamless Drop-in/Drop-out: Late to the party? Scan the code and spawn in mid-round.',
      'Infinite Levels: Keep playing forever! The world is set up to generate every playthrough, so no matter what there is always a new twist or turn!'
    ],
    images: {
      capsule: capsuleImage,
      header: headerImage,
      library: libraryImage
    },
    steamUrl: 'https://store.steampowered.com/app/3628800/Leap_Of_Faith/',
    status: 'announced'
  }
};

export const gamesList = Object.values(games);
