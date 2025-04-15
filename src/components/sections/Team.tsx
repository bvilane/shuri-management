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

export default function Team() {
  return (
    <section id="team" className="py-24 bg-muted relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-primary/5 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-accent/5 blur-3xl"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <span className="block text-center text-primary font-medium mb-3">OUR EXPERTISE</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Seasoned Safari Industry Professionals
          </p>
        </Animation>

        <div className="mt-16 max-w-4xl mx-auto">
          <Animation type="fade-up" delay={100}>
            <div className="text-center mb-12 bg-primary/10 py-6 px-8 rounded-xl inline-block mx-auto">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                150+ Years of Combined Lodge & Travel Experience
              </h3>
            </div>
          </Animation>

          <Animation type="fade-up" delay={200}>
            <div className="space-y-8">
              <p className="text-lg">
                Our team and advisor network includes lodge managers, guides,
                hospitality consultants, and brand strategists who've helped
                shape some of the most iconic safari experiences on the
                continent.
              </p>

              <p className="text-lg">
                We've led everything from guest operations and marketing to
                staff training, HR systems, guiding standards, and lodge
                redesigns, working with brands such as:
              </p>

              {/* Partner logos */}
              <div className="flex flex-wrap justify-center items-center gap-3 my-8">
                {partnerLogos.map((partner) => (
                  <div key={partner.name} className="transition-all duration-300">
                    <div className="h-10 px-6 bg-gray-100 rounded flex items-center justify-center">
                      <span className="font-serif text-gray-600 text-sm">{partner.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-lg">
                We've worked with premier brands like Singita, Dulini, &Beyond, Wilderness Safaris, 
                and MORE Family Collection – across the Sabi Sands and throughout Africa's premier
                safari destinations.
              </p>

              <p className="text-lg">
                Now we bring that knowledge to lodges like yours so you don't
                just keep up, you set the new standard.
              </p>
            </div>
          </Animation>

          {/* Team expertise grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-center mb-10">Our Core Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertiseAreas.map((area) => (
                <Animation key={area.id} type="fade-up" delay={200 + (area.id * 100)}>
                  <div className="bg-card/40 backdrop-blur-sm rounded-xl overflow-hidden border border-border/20 group hover:shadow-lg transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                          {area.icon}
                        </div>
                        <h4 className="text-xl font-serif font-bold">{area.title}</h4>
                      </div>
                      <p className="text-foreground/80">{area.description}</p>
                    </div>
                  </div>
                </Animation>
              ))}
            </div>
          </div>
          
          {/* Team diversity section */}
          <Animation type="fade-up" delay={250}>
            <div className="mt-16 p-8 rounded-xl bg-primary/5 border border-primary/10">
              <h3 className="text-xl font-serif font-bold mb-4">A Global Team with Local Expertise</h3>
              <p>
                Our team members come from diverse backgrounds across Africa and beyond, bringing together
                international hospitality standards with deep local knowledge. This unique blend allows us
                to create authentic experiences that resonate with luxury travelers while respecting and
                celebrating African cultures and environments.
              </p>
            </div>
          </Animation>

          <Animation type="fade-up" delay={300}>
            <div className="mt-16 bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/10 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3">
                    Ready to work with our team?
                  </h3>
                  <p className="text-foreground/80">
                    Our consultants specialize in every aspect of safari lodge operations, from guest experience and staff training to marketing and revenue management.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <GetStartedButton className="whitespace-nowrap shadow-md px-8 py-3">
                    Schedule a Consultation
                  </GetStartedButton>
                </div>
              </div>
            </div>
          </Animation>
        </div>
      </div>

      {/* Safari texture overlay */}
      <div className="absolute inset-0 texture-bg opacity-5 mix-blend-overlay pointer-events-none"></div>
    </section>
  );
}
