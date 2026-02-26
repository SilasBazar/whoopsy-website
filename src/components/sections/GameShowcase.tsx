import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { games } from '@/data/games';

export function GameShowcase() {
  const game = games['leap-of-faith'];

  return (
    <section id="game" className="py-[100px]">
      <Container>
        <h2 className="font-display text-[3rem] text-whoopsy-white mb-[50px] uppercase tracking-[0.25em]">
          NOW AVAILABLE
        </h2>
        <div className="bg-whoopsy-green rounded-whoopsy p-4 text-center mb-12">
          <span className="font-display text-[2rem] text-whoopsy-black uppercase tracking-[0.5em]">
            // PROJECT: {game.title} ///
          </span>
        </div>
        <div className="bg-whoopsy-black rounded-whoopsy p-[60px] relative">
          <div className="absolute -top-4 left-5 bg-whoopsy-black px-4 text-[0.9rem] text-whoopsy-green">
            [ GAME_ID: 001 ]
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="flex-shrink-0">
              <img
                src={game.images.capsule}
                alt={game.title}
                className="h-[400px] w-auto object-cover object-top rounded-whoopsy shadow-3d"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-display text-[3.5rem] text-whoopsy-green mb-5 uppercase tracking-[0.25em]">
                {game.title}
              </h2>
              <p className="text-[1.5rem] text-whoopsy-green font-bold mb-[30px] leading-[1.4]">
                {game.tagline}
              </p>
              <p className="text-[1.2rem] text-whoopsy-white mb-10 leading-[1.7]">
                {game.shortDescription}
              </p>
              {game.steamUrl && (
                <Button href={game.steamUrl} target="_blank">
                  WISHLIST ON STEAM
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}