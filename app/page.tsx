import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import Stats from '@/src/components/Stats';
import Benefits from '@/src/components/Benefits';
import HowItWorks from '@/src/components/HowItWorks';
import Testimonials from '@/src/components/Testimonials';
import CTA from '@/src/components/CTA';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}