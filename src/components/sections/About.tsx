'use client';

import Image from 'next/image';
import Animation from '@/components/ui/Animation';

// Define timeline data
const timeline = [
  {
    year: '2010',
    title: 'The Beginning',
    description: 'Founded by a team of safari industry veterans with a vision to transform lodge management across Africa.'
  },
  {
    year: '2014',
    title: 'Expansion',
    description: 'Grew our portfolio to include luxury lodges across East Africa, developing our signature management approach.'
  },
  {
    year: '2018',
    title: 'Digital Innovation',
    description: 'Launched our integrated digital marketing platform specifically designed for safari lodges and camps.'
  },
  {
    year: '2023',
    title: 'Global Recognition',
    description: 'Recognized as a leading safari hospitality management company with operations in 12 African countries.'
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Enhanced background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full blur-3xl"></div>
      <div className="absolute top-1/4 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>

      {/* Safari texture overlay */}
      <div className="absolute inset-0 texture-bg opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <span className="block text-center text-primary font-medium mb-3">DISCOVER OUR STORY</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
            About Shuri Management
          </h2>
          <p className="mt-6 text-center max-w-3xl mx-auto text-foreground/80 text-lg">
            Dedicated to elevating safari lodge experiences across Africa
            through expert management and marketing solutions tailored for the luxury hospitality sector.
          </p>
        </Animation>

        {/* Mission statement banner */}
        <Animation type="fade-up" delay={100}>
          <div className="mt-12 max-w-4xl mx-auto bg-primary/10 py-8 px-8 md:px-12 rounded-xl text-center">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">Our Mission</h3>
            <p className="text-lg italic">
              "To transform African safari lodges into thriving, sustainable destinations that deliver exceptional guest experiences while preserving natural habitats and uplifting local communities."
            </p>
          </div>
        </Animation>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Animation type="slide-in-left">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl group">
              {/* Image gallery with two images */}
              <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0">
                <Image 
                  src="/images/giraffe.jpg" 
                  alt="Giraffe in African safari" 
                  fill 
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                <Image 
                  src="/images/lodge.jpg" 
                  alt="Luxury safari lodge" 
                  fill 
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
              </div>
              
              {/* Image caption */}
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 z-10">
                <h4 className="text-white text-lg sm:text-xl font-serif font-semibold">African Wilderness & Luxury</h4>
                <p className="text-white/80 text-xs sm:text-sm mt-1">The perfect balance we help our clients achieve</p>
              </div>
            </div>
          </Animation>

          <Animation type="fade-up" delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary">Our Story</h3>
              <p className="text-lg">
                Shuri Management was founded by a team of safari lodge veterans
                who recognized the need for comprehensive, integrated management and
                marketing solutions specifically designed for luxury African lodges.
              </p>
              <p>
                After decades of combined experience running premier safari destinations
                across the continent, we intimately understand the unique challenges that
                lodge owners face — from seasonal occupancy fluctuations to the complexities
                of providing exceptional guest experiences in remote, pristine wilderness locations.
              </p>
              <p>
                Today, we apply our expertise to help lodge owners not just survive but
                thrive in an increasingly competitive market. We focus on sustainable growth
                strategies that respect both the delicate ecosystems and local communities
                while creating unforgettable, authentic experiences for guests.
              </p>
              <div className="pt-6">
                <h4 className="font-semibold mb-4 text-lg text-primary">
                  Our approach is guided by four core principles:
                </h4>
                <ul className="space-y-3">
                  <AboutListItem>
                    <span className="font-medium">Deep industry expertise</span> - Decades of hands-on safari lodge management experience
                  </AboutListItem>
                  <AboutListItem>
                    <span className="font-medium">Authentic experiences</span> - Creating genuine connections between guests and Africa's natural wonders
                  </AboutListItem>
                  <AboutListItem>
                    <span className="font-medium">Sustainable growth</span> - Balancing profitability with conservation and community support
                  </AboutListItem>
                  <AboutListItem>
                    <span className="font-medium">Digital innovation</span> - Leveraging technology to enhance both operations and marketing
                  </AboutListItem>
                </ul>
              </div>
            </div>
          </Animation>
        </div>
        
        {/* Timeline section */}
        <div className="mt-16 sm:mt-24">
          <Animation type="fade-up">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-center mb-6 sm:mb-10">Our Journey</h3>
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line - hidden on mobile, shown on larger screens */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
              
              {/* Timeline items - stacked on mobile, side-by-side on larger screens */}
              <div className="space-y-8 sm:space-y-16">
                {timeline.map((item, index) => (
                  <Animation key={item.year} type="fade-up" delay={100 * (index + 1)}>
                    <div className={`relative flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                      <div className="hidden sm:block sm:flex-1"></div>
                      
                      {/* Timeline node - positioned differently on mobile */}
                      <div className="flex items-center mb-3 sm:mb-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center z-10">
                          <span className="text-white font-bold text-xs">{item.year}</span>
                        </div>
                        <div className="sm:hidden h-0.5 flex-grow ml-3 bg-primary/30"></div>
                      </div>
                      
                      {/* Content - full width on mobile */}
                      <div className="sm:flex-1 sm:px-6">
                        <div className={`bg-card/70 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-border/10 shadow-sm text-left ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                          <h4 className="font-serif font-bold text-base sm:text-lg">{item.title}</h4>
                          <p className="text-sm sm:text-base text-foreground/80 mt-2">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </Animation>
                ))}
              </div>
            </div>
          </Animation>
        </div>
        
        {/* Value stats section */}
        <div className="mt-16 sm:mt-24">
          <Animation type="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              <div className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-sm border border-border/10 text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:bg-card">
                <div className="text-primary text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">25+</div>
                <h4 className="font-medium text-sm sm:text-base mb-1 sm:mb-2">Years Experience</h4>
                <p className="text-xs sm:text-sm text-foreground/70">Combined expertise in African safari lodge management</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-sm border border-border/10 text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:bg-card">
                <div className="text-primary text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">12</div>
                <h4 className="font-medium text-sm sm:text-base mb-1 sm:mb-2">Countries</h4>
                <p className="text-xs sm:text-sm text-foreground/70">Operations across major safari destinations in Africa</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-sm border border-border/10 text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:bg-card">
                <div className="text-primary text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">35+</div>
                <h4 className="font-medium text-sm sm:text-base mb-1 sm:mb-2">Lodges Managed</h4>
                <p className="text-xs sm:text-sm text-foreground/70">From boutique camps to luxury safari properties</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-sm border border-border/10 text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:bg-card">
                <div className="text-primary text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">1.5M+</div>
                <h4 className="font-medium text-sm sm:text-base mb-1 sm:mb-2">Happy Guests</h4>
                <p className="text-xs sm:text-sm text-foreground/70">Unforgettable safari experiences delivered globally</p>
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
}

function AboutListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 group">
      <div className="flex-shrink-0 w-6 h-6 mt-0.5 text-primary group-hover:scale-110 transition-transform duration-300">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="text-foreground/90">{children}</span>
    </li>
  );
}
