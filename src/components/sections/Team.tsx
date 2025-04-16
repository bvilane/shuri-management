'use client';

import Animation from '@/components/ui/Animation';
import GetStartedButton from '@/components/ui/GetStartedButton';

// Define expertise areas
const expertiseAreas = [
  {
    id: 1,
    title: "Operational Excellence",
    icon: "⚙️",
    description: "Our operational experts have managed luxury safari properties across Africa, developing systems that maximize efficiency while enhancing guest experiences."
  },
  {
    id: 2,
    title: "Guest Experience Design",
    icon: "✨",
    description: "Former safari guides and hospitality specialists who create memorable guest journeys from arrival to departure."
  },
  {
    id: 3,
    title: "Strategic Marketing",
    icon: "📊",
    description: "Digital marketing specialists with proven success in promoting luxury travel experiences and sustainable tourism."
  },
  {
    id: 4,
    title: "Staff Development",
    icon: "👥",
    description: "HR and training professionals who have implemented world-class service standards across premier safari destinations."
  }
];

// Define core competencies
const coreCompetencies = [
  {
    title: "Lodge Management",
    experience: "15+ years",
    description: "Property operations, staff supervision, financial management, and guest relations"
  },
  {
    title: "Safari Guiding",
    experience: "12+ years",
    description: "Wildlife expertise, guest safety, storytelling, and educational programming"
  },
  {
    title: "Digital Marketing",
    experience: "10+ years",
    description: "Social media, SEO, content creation, and targeted advertising for luxury properties"
  },
  {
    title: "Staff Training",
    experience: "8+ years",
    description: "Service standards, hospitality training, and professional development programs"
  }
];

// Define partner logos
const partnerLogos = [
  {
    name: "Singita",
    logo: "/images/partner-1.svg"
  },
  {
    name: "Wilderness Safaris",
    logo: "/images/partner-2.svg"
  },
  {
    name: "&Beyond",
    logo: "/images/partner-3.svg"
  },
  {
    name: "Dulini",
    logo: "/images/partner-4.svg"
  },
  {
    name: "MORE Family Collection",
    logo: "/images/partner-5.svg"
  }
];

// Define global presence
const globalPresence = [
  "South Africa",
  "Kenya",
  "Tanzania",
  "United Kingdom",
  "Botswana"
];

export default function Team() {
  return (
    <section id="expertise" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-primary/5 blur-[100px] rotate-12"></div>
      <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-accent/5 blur-[100px] -rotate-12"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <div className="flex justify-center">
            <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/10 text-primary font-medium mb-4 inline-block">OUR EXPERTISE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
            Safari Management Expertise
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Industry Leaders in Safari Operations & Guest Experience
          </p>
        </Animation>

        {/* Experience Counter */}
        <Animation type="fade-up" delay={100}>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-serif font-bold text-primary mb-2">150+</div>
              <div className="text-sm uppercase tracking-wider font-medium text-foreground/70">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-serif font-bold text-primary mb-2">30+</div>
              <div className="text-sm uppercase tracking-wider font-medium text-foreground/70">Properties Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-serif font-bold text-primary mb-2">5</div>
              <div className="text-sm uppercase tracking-wider font-medium text-foreground/70">Countries</div>
            </div>
          </div>
        </Animation>
        
        {/* Core Competencies */}
        <Animation type="fade-up" delay={150}>
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="flex justify-center">
              <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/10 text-primary font-medium mb-4 inline-block">CAPABILITIES</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-center mb-10">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreCompetencies.map((competency, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-serif font-bold">{competency.title}</h4>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{competency.experience}</span>
                      </div>
                      <p className="text-foreground/80">{competency.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Animation>

        {/* Expertise areas */}
        <Animation type="fade-up" delay={200}>
          <div className="mt-24 max-w-6xl mx-auto">
            <div className="flex justify-center">
              <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/10 text-primary font-medium mb-4 inline-block">SERVICES</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-center mb-10">
              Our Service Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertiseAreas.map((area) => (
                <div key={area.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="p-6 border-l-4 border-primary flex gap-5">
                    <div className="shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors duration-300">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors duration-300">{area.title}</h4>
                      <p className="text-foreground/80">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Animation>

        {/* Global Presence */}
        <Animation type="fade-up" delay={250}>
          <div className="mt-24 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex justify-center">
                <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/10 text-primary font-medium mb-4 inline-block">LOCATIONS</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-center mb-8">Global Presence</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {globalPresence.map((country, index) => (
                  <div key={index} className="px-6 py-3 bg-primary/5 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">{country}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center text-sm text-foreground/70">
                We bring together international standards with deep local knowledge
              </div>
            </div>
          </div>
        </Animation>

        {/* Partner logos section */}
        <Animation type="fade-up" delay={300}>
          <div className="mt-24 max-w-5xl mx-auto">
            <div className="flex justify-center">
              <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/10 text-primary font-medium mb-4 inline-block">EXPERIENCE</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-center mb-6">
              We've Worked With Africa's Top Brands
            </h3>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
              Our team brings experience from the continent's most prestigious safari companies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
              {partnerLogos.map((partner) => (
                <div key={partner.name} className="group bg-white/80 hover:bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-24 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-foreground/90 font-medium text-lg">{partner.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Animation>

        {/* CTA */}
        <Animation type="fade-up" delay={350}>
          <div className="mt-24 bg-primary/10 p-8 md:p-10 rounded-xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-primary">
                  Ready to elevate your safari business?
                </h3>
                <p className="text-foreground/80">
                  Our consultants specialize in every aspect of safari lodge operations, from guest experience and staff training to marketing and revenue management.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <GetStartedButton className="whitespace-nowrap shadow-md px-8 py-4 text-lg w-full">
                  Book a Consultation
                </GetStartedButton>
              </div>
            </div>
          </div>
        </Animation>
      </div>

      {/* Safari texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/texture-bg.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
    </section>
  );
}
