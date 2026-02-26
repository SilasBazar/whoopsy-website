import { Container } from '@/components/ui/Container';

export function About() {
  return (
    <section id="about" className="py-[100px]">
      <Container>
        <h2 className="font-display text-[3rem] text-whoopsy-white mb-[50px] uppercase tracking-[0.25em] pb-2.5">
          THE SOLO STUDIO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-whoopsy-white rounded-whoopsy shadow-3d p-10">
            <h3 className="font-display text-[1.8rem] text-whoopsy-black mb-5 uppercase">
              ONE PERSON, ENDLESS PASSION
            </h3>
            <p className="text-whoopsy-black text-[1.1rem] leading-[1.8] mb-10">
              Whoopsy is a one-person game studio driven by an obsession with creating games that have soul. Every pixel, every mechanic, every moment is crafted with intention. No corporate influence, no compromise—just pure, unfiltered creativity.
            </p>
            <div className="flex gap-[30px]">
              <div className="bg-whoopsy-green rounded-whoopsy p-5 px-[30px] text-center shadow-3d-black">
                <span className="font-display text-[3rem] text-whoopsy-black block leading-none">
                  1
                </span>
                <span className="text-[0.9rem] font-bold text-whoopsy-black uppercase">
                  DEVELOPER
                </span>
              </div>
              <div className="bg-whoopsy-green rounded-whoopsy p-5 px-[30px] text-center shadow-3d-black">
                <span className="font-display text-[3rem] text-whoopsy-black block leading-none">
                  ∞
                </span>
                <span className="text-[0.9rem] font-bold text-whoopsy-black uppercase">
                  SOUL
                </span>
              </div>
            </div>
          </div>
          <div className="bg-whoopsy-white rounded-whoopsy shadow-3d p-10">
            <h3 className="font-display text-[1.8rem] text-whoopsy-black mb-5 uppercase">
              THE MISSION
            </h3>
            <p className="text-whoopsy-black text-[1.1rem] leading-[1.8]">
              In a world of formulaic games and endless sequels, Whoopsy exists to break the mold. We believe games should make you feel something—whether it's wonder, challenge, or just pure joy. Every project is an experiment in pushing boundaries and finding new ways to connect with players.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}