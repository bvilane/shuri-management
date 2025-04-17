'use client';

import Animation from '@/components/ui/Animation';
import GetStartedButton from '@/components/ui/GetStartedButton';
import { CheckCircle2, X, ArrowRight } from 'lucide-react';

// Define key differences
const keyDifferences = [
  {
    id: 1,
    title: "Results-Based Pricing",
    description: "Pay when you see actual performance improvements.",
    traditional: "Fixed monthly retainers regardless of results",
    smg: "Performance-based pricing tied to occupancy & revenue",
    icon: "💰"
  },
  {
    id: 2,
    title: "All-in-One Solution",
    description: "One team for all your management and marketing needs.",
    traditional: "Multiple vendors with fragmented communication",
    smg: "Single point of contact for operations, marketing & more",
    icon: "🔄"
  },
  {
    id: 3,
    title: "Safari-Specific Expertise",
    description: "Specialists who understand the unique safari industry.",
    traditional: "Generic hospitality consultants adapting to safari",
    smg: "Team with extensive on-the-ground safari experience",
    icon: "🦁"
  },
  {
    id: 4,
    title: "24/7 Responsive Support",
    description: "Always available when you need us, regardless of time zone.",
    traditional: "Limited office hours support with delayed responses",
    smg: "Round-the-clock support from global team members",
    icon: "🌍"
  }
];

// Define additional benefits
const additionalBenefits = [
  {
    id: 1,
    title: "Tech-Enabled Solutions",
    description: "Custom technology that works even in remote areas with limited connectivity",
    icon: "💻"
  },
  {
    id: 2,
    title: "Conservation Integration",
    description: "Strategies that balance commercial success with conservation efforts",
    icon: "🌿"
  },
  {
    id: 3,
    title: "Community Development",
    description: "Programs that uplift surrounding communities while growing your business",
    icon: "👥"
  }
];

export default function WhySMG() {
  return (
    <section
      id="why-smg"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f4ee] to-[#e5d7c3] z-0"></div>
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-[1]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-[1]"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <div className="flex justify-center">
            <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/10 text-primary font-medium mb-4 inline-block">WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
            The SMG Difference
          </h2>
          <p className="mt-4 text-lg md:text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            How We Stand Apart From Traditional Management Companies
          </p>
        </Animation>

        {/* Comparison Table Section */}
        <div className="mt-12 max-w-6xl mx-auto">
          <Animation type="fade-up" delay={100}>
            {/* Mobile Comparison Cards - Visible only on small screens */}
            <div className="block md:hidden space-y-4">
              {keyDifferences.map((difference, index) => (
                <div key={difference.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-primary/5">
                  <div className="bg-primary text-white p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl shrink-0">
                      {difference.icon}
                    </div>
                    <h3 className="font-serif font-bold">{difference.title}</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-foreground/70 mb-4">{difference.description}</p>
                    
                    <div className="space-y-3">
                      <div className="bg-muted/10 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <X className="shrink-0 text-red-500 mt-0.5" size={16} />
                          <div>
                            <p className="text-xs font-medium text-foreground/60 mb-1">Traditional Approach:</p>
                            <p className="text-sm">{difference.traditional}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-primary/5 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="shrink-0 text-primary mt-0.5" size={16} />
                          <div>
                            <p className="text-xs font-medium text-primary/60 mb-1">SMG Approach:</p>
                            <p className="text-sm font-medium">{difference.smg}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop Comparison Table - Hidden on small screens */}
            <div className="hidden md:block bg-muted/30 rounded-2xl overflow-hidden shadow-lg border border-primary/5">
              {/* Table Header */}
              <div className="grid grid-cols-7 bg-primary text-white">
                <div className="col-span-3 p-6 font-serif text-xl font-medium">Key Differences</div>
                <div className="col-span-2 p-6 font-serif text-xl font-medium text-center border-l border-white/20">
                  <div className="flex flex-col items-center">
                    <span>Traditional</span>
                    <span className="text-sm font-normal opacity-80">Management Companies</span>
                  </div>
                </div>
                <div className="col-span-2 p-6 font-serif text-xl font-medium text-center bg-primary-dark border-l border-white/20">
                  <div className="flex flex-col items-center">
                    <span>SMG</span>
                    <span className="text-sm font-normal opacity-80">Our Approach</span>
                  </div>
                </div>
              </div>

              {/* Table Rows */}
              {keyDifferences.map((difference, index) => (
                <div key={difference.id} className={`grid grid-cols-7 ${index % 2 === 0 ? 'bg-white' : 'bg-muted/10'}`}>
                  <div className="col-span-3 p-6 border-b border-muted/20">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl shrink-0">
                        {difference.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold mb-1">{difference.title}</h3>
                        <p className="text-sm text-foreground/70">{difference.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 p-6 flex items-center border-l border-b border-muted/20">
                    <div className="flex items-start gap-3">
                      <X className="shrink-0 text-red-500 mt-0.5" size={18} />
                      <p className="text-sm text-foreground/80">{difference.traditional}</p>
                    </div>
                  </div>
                  <div className="col-span-2 p-6 flex items-center border-l border-b border-muted/20 bg-primary/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="shrink-0 text-primary mt-0.5" size={18} />
                      <p className="text-sm font-medium">{difference.smg}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Animation>
        </div>

        {/* Additional Benefits */}
        <div className="mt-12 md:mt-16 max-w-6xl mx-auto">
          <Animation type="fade-up" delay={300}>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-6 md:mb-8">
              Additional Benefits
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalBenefits.map((benefit) => (
                <div key={benefit.id} className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-full">
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-5 bg-primary/5"></div>
                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="relative p-6 md:p-8">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg mb-4 md:mb-6 flex items-center justify-center text-2xl md:text-3xl">
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg md:text-xl font-serif font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="text-sm md:text-base text-foreground/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Animation>
        </div>

        {/* Testimonial Highlight */}
        <Animation type="fade-up" delay={400}>
          <div className="mt-12 md:mt-16 max-w-5xl mx-auto bg-primary/5 rounded-2xl p-6 md:p-10 relative overflow-hidden">
            {/* Quote decorations */}
            <div className="absolute top-3 left-3 md:top-5 md:left-5 text-primary/20 text-5xl md:text-8xl font-serif">❝</div>
            <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 text-primary/20 text-5xl md:text-8xl font-serif">❞</div>
            
            <div className="relative">
              <blockquote className="text-lg md:text-2xl font-serif text-center italic text-foreground/90 mb-4 md:mb-6">
                "It takes a village to run a legendary lodge. We started the SMG Management Group to be that village for ambitious lodge owners."
              </blockquote>
              <div className="text-center">
                <p className="font-bold">Bavukile Vilane</p>
                <p className="text-sm text-foreground/70">Managing Director, SMG</p>
              </div>
            </div>
          </div>
        </Animation>

        {/* Why Clients Choose Us */}
        <Animation type="fade-up" delay={500}>
          <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-6 md:mb-8">
              Why Lodge Owners Choose SMG
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-6 md:gap-x-16 w-full">
              <div className="flex gap-3 md:gap-4 w-full">
                <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-base md:text-lg mb-1">Occupancy Focused</h4>
                  <p className="text-sm text-foreground/70">We know emptier lodges mean lost revenue that can never be recovered</p>
                </div>
              </div>
              
              <div className="flex gap-3 md:gap-4 w-full">
                <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-base md:text-lg mb-1">Safari Specialists</h4>
                  <p className="text-sm text-foreground/70">Not generalists trying to adapt—we've lived and breathed safari for decades</p>
                </div>
              </div>
              
              <div className="flex gap-3 md:gap-4 w-full">
                <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-base md:text-lg mb-1">Owner-Centered Approach</h4>
                  <p className="text-sm text-foreground/70">We work for you, not for commission-paying booking platforms</p>
                </div>
              </div>
              
              <div className="flex gap-3 md:gap-4 w-full">
                <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-base md:text-lg mb-1">Transparent Reporting</h4>
                  <p className="text-sm text-foreground/70">Clear metrics and regular updates, no hidden numbers or surprise fees</p>
                </div>
              </div>
            </div>
          </div>
        </Animation>

        {/* CTA Section */}
        <Animation type="fade-up" delay={600}>
          <div className="mt-16 md:mt-24 max-w-5xl mx-auto bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="w-full md:w-2/3">
                <h3 className="text-xl md:text-3xl font-serif font-bold mb-3 md:mb-4 text-center md:text-left">
                  Ready to experience the difference?
                </h3>
                <p className="mb-4 md:mb-6 text-foreground/80 text-center md:text-left text-sm md:text-base">
                  Book a free consultation with our team to discuss your lodge's specific needs and discover how our unique approach can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <GetStartedButton className="w-full sm:w-auto shadow-lg hover:shadow-xl text-base md:text-lg px-6 md:px-8 py-3">
                    Book a Free Call
                  </GetStartedButton>
                  <a 
                    href="#case-studies"
                    className="w-full sm:w-auto bg-white/70 hover:bg-white text-primary border border-primary/20 shadow-sm px-6 md:px-8 py-3 rounded-md font-medium transition-all duration-300 text-center"
                  >
                    View Success Stories
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/20 flex items-center justify-center text-4xl md:text-6xl">
                  🦒
                </div>
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </section>
  );
}
