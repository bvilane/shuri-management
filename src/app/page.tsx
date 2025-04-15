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
      <Hero />
      
      {/* About section - light cream background with gradient */}
      <div className="bg-gradient-to-b from-section-1/90 to-section-1 relative">
        <div className="absolute inset-y-0 left-0 w-full sm:w-1/3 pattern-dots opacity-[0.04]"></div>
        <div className="corner-pattern corner-pattern-top-right"></div>
        <About />
      </div>
      
      {/* Services section - soft beige background with gradient */}
      <div className="bg-gradient-to-b from-section-2/90 to-section-2 relative">
        <div className="absolute top-0 inset-x-0 h-24 sm:h-40 pattern-waves"></div>
        <Services />
      </div>
      
      {/* Why Shuri section - textured background with gradient */}
      <div className="bg-gradient-to-b from-section-textured-1/95 to-section-textured-1 relative">
        <div className="absolute inset-y-0 right-0 w-full sm:w-1/3 pattern-hexagons"></div>
        <WhyShuri />
      </div>
      
      {/* Lodges section - warm eggshell background with gradient */}
      <div className="bg-gradient-to-b from-section-3/90 to-section-3 relative">
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-64 pattern-safari-stripes"></div>
        <div className="corner-pattern corner-pattern-bottom-left"></div>
        <Lodges />
      </div>
      
      {/* Testimonials section - sandy tan background with gradient */}
      <div className="bg-gradient-to-b from-section-4/90 to-section-4 relative line-pattern-horizontal">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 pattern-animal-tracks rounded-full"></div>
        <Testimonials />
      </div>
      
      {/* Team section - light khaki background with gradient */}
      <div className="bg-gradient-to-b from-section-5/90 to-section-5 relative">
        <div className="absolute top-0 inset-x-0 h-24 sm:h-40 pattern-diagonal-lines"></div>
        <div className="absolute bottom-0 inset-x-0 h-24 sm:h-40 pattern-diagonal-lines"></div>
        <Team />
      </div>
      
      {/* Process section - textured background with gradient */}
      <div className="bg-gradient-to-b from-section-textured-2/95 to-section-textured-2 relative">
        <div className="absolute inset-y-0 left-0 w-1/2 sm:w-1/4 pattern-crosses"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 sm:w-1/4 pattern-crosses"></div>
        <Process />
      </div>
      
      {/* Resources section - back to cream background with gradient */}
      <div className="bg-gradient-to-b from-section-1/90 to-section-1 relative">
        <div className="absolute inset-0 pattern-dots opacity-[0.03]"></div>
        <Resources />
      </div>
      
      {/* Contact section - warm eggshell background with gradient */}
      <div className="bg-gradient-to-b from-section-3/90 to-section-3 relative line-pattern-horizontal">
        <div className="corner-pattern corner-pattern-top-right"></div>
        <div className="corner-pattern corner-pattern-bottom-left"></div>
        <Contact />
      </div>
      
      {/* Newsletter section - soft beige background with gradient */}
      <div className="bg-gradient-to-b from-section-2/90 to-section-2 relative">
        <div className="absolute bottom-0 inset-x-0 h-16 sm:h-24 pattern-waves"></div>
        <Newsletter useSubstack={true} />
      </div>
      
      <NewsletterPopup />
      <Footer />
    </main>
  );
}
