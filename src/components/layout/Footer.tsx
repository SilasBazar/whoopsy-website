import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer id="contact" className="py-[60px] bg-whoopsy-black">
      <Container>
        <div className="flex justify-between items-center flex-wrap gap-8">
          <div className="font-display text-[1.5rem] text-whoopsy-green">
            WHOOPSY
          </div>
          <div className="flex gap-7.5 items-center">
            <Button href="https://x.com/SilasBazar" target="_blank">
              X / TWITTER
            </Button>
            <Button href="mailto:silasbazar@gmail.com">
              EMAIL
            </Button>
          </div>
          <div className="text-whoopsy-white text-xs uppercase">
            © 2026 WHOOPSY GAMES. ALL RIGHTS RESERVED.
          </div>
        </div>
      </Container>
    </footer>
  );
}