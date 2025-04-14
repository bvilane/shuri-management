import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import WhyShuri from '@/components/sections/WhyShuri';
import Team from '@/components/sections/Team';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';
import Newsletter from '@/components/sections/Newsletter';
import { NewsletterPopup } from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyShuri />
      <Team />
      <Process />
      <Contact />
      <Newsletter useSubstack={true} />
      <NewsletterPopup />
      <Footer />
    </main>
  );
}
