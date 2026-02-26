import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Hero() {
  return (
    <section className="py-[120px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-whoopsy-green opacity-10 rotate-45" />
      <Container>
        <div className="text-center">
          <h1 className="font-display text-[clamp(4rem,15vw,10rem)] text-whoopsy-green leading-none mb-5 tracking-widest uppercase cursor-default transition-all duration-200 ease-out hover:text-whoopsy-black" style={{ textShadow: '4px 4px 0px #1d1c00' }} onMouseEnter={(e) => e.currentTarget.style.textShadow = '4px 4px 0px #86ce43'} onMouseLeave={(e) => e.currentTarget.style.textShadow = '4px 4px 0px #1d1c00'}>
            WHOOPSY
          </h1>
          <p className="text-[1.5rem] font-bold text-whoopsy-white mb-10 uppercase tracking-[0.25em]">
            GAMES WITH SOUL. ONE DEV. ONE VISION.
          </p>
          <Button href="#game">SEE OUR GAME</Button>
        </div>
      </Container>
    </section>
  );
}