import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { GameShowcase } from './components/sections/GameShowcase';
import { Philosophy } from './components/sections/Philosophy';

function App() {
  return (
    <div className="min-h-screen bg-whoopsy-black font-mono text-whoopsy-white leading-normal">
      <Header />
      <main>
        <Hero />
        <About />
        <GameShowcase />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}

export default App;