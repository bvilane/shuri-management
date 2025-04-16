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
import Resources from '@/components/sections/Resources';
import Lodges from '@/components/sections/Lodges';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero section */}
      <div className="section-separator">
        <Hero />
      </div>
      
      {/* About section - with consistent gradient */}
      <section className="bg-section-1 relative overflow-hidden section-separator">
        <div className="absolute inset-y-0 left-0 w-full sm:w-1/3 pattern-dots opacity-[0.04] z-0"></div>
        <div className="corner-pattern corner-pattern-top-right z-0"></div>
        <About />
      </section>
      
      {/* Services section - with same gradient as Lodges section */}
      <section className="bg-section-3 relative overflow-hidden section-separator">
        <div className="absolute top-0 inset-x-0 h-32 sm:h-64 pattern-dots opacity-[0.05] z-0"></div>
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-64 pattern-safari-stripes opacity-[0.08] z-0"></div>
        <div className="absolute inset-y-0 left-0 w-1/3 pattern-animal-tracks opacity-[0.04] z-0"></div>
        <div className="corner-pattern corner-pattern-bottom-left z-0"></div>
        <Services />
      </section>
      
      {/* Why Shuri section - with consistent gradient and texture */}
      <section className="bg-section-textured-1 relative overflow-hidden section-separator">
        <div className="absolute inset-y-0 right-0 w-full sm:w-1/3 pattern-hexagons z-0"></div>
        <div className="relative z-10">
          <WhyShuri />
        </div>
      </section>
      
      {/* Lodges section - with consistent gradient */}
      <section className="bg-section-3 relative overflow-hidden section-separator">
        <div className="absolute top-0 inset-x-0 h-32 sm:h-64 pattern-dots opacity-[0.05] z-0"></div>
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-64 pattern-safari-stripes opacity-[0.08] z-0"></div>
        <div className="absolute inset-y-0 left-0 w-1/3 pattern-animal-tracks opacity-[0.04] z-0"></div>
        <div className="corner-pattern corner-pattern-bottom-left z-0"></div>
        <Lodges />
      </section>
      
      {/* Testimonials section - with consistent gradient */}
      <section className="bg-section-4 relative overflow-hidden section-separator">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 pattern-animal-tracks rounded-full z-0"></div>
        <Testimonials />
      </section>
      
      {/* Team section - with consistent gradient */}
      <section className="bg-section-5 relative overflow-hidden section-separator">
        <div className="absolute top-0 inset-x-0 h-32 sm:h-64 pattern-diagonal-lines opacity-[0.07] z-0"></div>
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-64 pattern-diagonal-lines opacity-[0.07] z-0"></div>
        <div className="absolute inset-0 pattern-savanna-dots opacity-[0.03] z-0"></div>
        <Team />
      </section>
      
      {/* Process section - with consistent gradient and texture */}
      <section className="bg-section-textured-2 relative overflow-hidden section-separator">
        <div className="absolute inset-y-0 left-0 w-1/2 sm:w-1/4 pattern-crosses z-0"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 sm:w-1/4 pattern-crosses z-0"></div>
        <div className="relative z-10">
          <Process />
        </div>
      </section>
      
      {/* Resources section - with same gradient as Lodges section */}
      <section className="bg-section-3 relative overflow-hidden section-separator">
        <div className="absolute top-0 inset-x-0 h-32 sm:h-64 pattern-dots opacity-[0.05] z-0"></div>
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-64 pattern-safari-stripes opacity-[0.08] z-0"></div>
        <div className="absolute inset-y-0 left-0 w-1/3 pattern-animal-tracks opacity-[0.04] z-0"></div>
        <div className="corner-pattern corner-pattern-bottom-left z-0"></div>
        <Resources />
      </section>
      
      {/* Contact section - with consistent gradient */}
      <section className="bg-section-3 relative overflow-hidden section-separator">
        <div className="corner-pattern corner-pattern-top-right z-0"></div>
        <div className="corner-pattern corner-pattern-bottom-left z-0"></div>
        <Contact />
      </section>
      
      {/* Newsletter section - with consistent gradient */}
      <section className="bg-section-2 relative overflow-hidden">
        <div className="absolute bottom-0 inset-x-0 h-16 sm:h-24 pattern-waves z-0"></div>
        <Newsletter useSubstack={true} />
      </section>
      
      <NewsletterPopup />
      <Footer />
    </main>
  );
}