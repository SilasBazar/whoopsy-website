import { Container } from '@/components/ui/Container';

const philosophies = [
  {
    number: '01',
    title: 'AUTHENTICITY',
    text: 'Every element comes from a place of genuine passion. No checkboxes, no trends—just what feels right.'
  },
  {
    number: '02',
    title: 'CONNECTION',
    text: 'Games should bridge the gap between creator and player, creating moments that resonate.'
  },
  {
    number: '03',
    title: 'COURAGE',
    text: 'Taking risks, embracing imperfection, and creating something that truly matters.'
  }
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-[100px]">
      <Container>
        <h2 className="font-display text-[3rem] text-whoopsy-white mb-[50px] uppercase tracking-[0.25em]">
          WHY SOUL MATTERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {philosophies.map((philosophy, index) => (
            <div
              key={index}
              className="bg-whoopsy-black rounded-whoopsy p-10 transition-all duration-300 ease-out hover:bg-whoopsy-green group"
            >
              <span className="font-display text-[4rem] text-whoopsy-green mb-5 block leading-none group-hover:text-whoopsy-black">
                {philosophy.number}
              </span>
              <h3 className="font-display text-[1.5rem] text-whoopsy-white mb-4 uppercase group-hover:text-whoopsy-black">
                {philosophy.title}
              </h3>
              <p className="text-whoopsy-white text-base leading-[1.6] group-hover:text-whoopsy-black">
                {philosophy.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}