import { Container } from '@/components/ui/Container';

export function Header() {
  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'GAME', href: '#game' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="py-5">
      <Container>
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="font-display text-2xl text-whoopsy-green decoration-transparent hover:text-whoopsy-black hover:decoration-[3px] hover:decoration-solid hover:underline-offset-4"
          >
            WHOOPSY
          </a>
          <div className="hidden md:flex gap-7.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-whoopsy-white font-bold transition-colors hover:text-whoopsy-green"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}