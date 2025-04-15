'use client';

import { useState } from 'react';
import Animation from '@/components/ui/Animation';
import GetStartedButton from '@/components/ui/GetStartedButton';

export default function Services() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('operations');

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  return (
    <section id="services" className="py-24 bg-muted relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute -left-20 top-40 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-40 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <Animation type="fade-up">
          <span className="block text-center text-primary font-medium mb-3">HOW WE HELP</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
            Services
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Comprehensive Safari Lodge Management Solutions
          </p>
          <p className="mt-6 text-center max-w-3xl mx-auto text-foreground/70">
            Everything it takes to keep your lodge running smoothly—behind the
            scenes and on the ground—while maximizing bookings and guest satisfaction.
          </p>
        </Animation>

        {/* Service Category Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex bg-card/50 backdrop-blur-sm p-1 rounded-lg shadow-sm border border-border/10">
            <button 
              onClick={() => toggleCategory('operations')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                expandedCategory === 'operations' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'hover:bg-card'
              }`}
            >
              Lodge Operations
            </button>
            <button 
              onClick={() => toggleCategory('marketing')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                expandedCategory === 'marketing' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'hover:bg-card'
              }`}
            >
              Marketing
            </button>
            <button 
              onClick={() => toggleCategory('development')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                expandedCategory === 'development' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'hover:bg-card'
              }`}
            >
              Business Development
            </button>
          </div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          {/* Lodge Operations & Support */}
          <div className={`transition-all duration-500 ${expandedCategory === 'operations' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <Animation type="fade-up">
              <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center shadow-sm">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 2h4l1 6h-6l1-6z" />
                        <path d="M4 8h16a1 1 0 0 1 1 1v.5a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-.5a1 1 0 0 1 1-1z" />
                        <path d="M10 16h4" />
                        <path d="M9 20h6" />
                        <path d="M5 16h14v4a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-4z" />
                        <path d="M4.5 11.5v.5" />
                        <path d="M19.5 11.5v.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold">
                        Lodge Operations & Support
                      </h3>
                      <p className="text-foreground/70 mt-2 text-lg">
                        Everything you need to run your lodge's day-to-day operations smoothly and efficiently.
                      </p>

                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ServiceItem
                          title="Daily Lodge Management"
                          description="From housekeeping schedules to kitchen operations, we help you create smooth systems and plug in as needed."
                        />
                        <ServiceItem
                          title="Booking Systems & Automations"
                          description="We set up or improve your booking flows so guests can book online easily, and you get notified instantly."
                        />
                        <ServiceItem
                          title="Staff & Guide Training"
                          description="We train your team on hosting, guest care, and storytelling to deliver top-notch experiences that guests can't stop talking about."
                        />
                        <ServiceItem
                          title="Tech Support"
                          description="We help you integrate tools for booking, guest feedback, payments, Wi-Fi, and more—so your systems run without headaches."
                        />
                        <ServiceItem
                          title="Supply Chain Support"
                          description="Need help with ordering toiletries, uniforms, or kitchen goods? We can source and coordinate suppliers so you never run short."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          </div>

          {/* Lodge Marketing & Guest Growth */}
          <div className={`transition-all duration-500 ${expandedCategory === 'marketing' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <Animation type="fade-up">
              <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center shadow-sm">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <circle cx="12" cy="12" r="6" />
                        <path d="M12 6v6l4 2" />
                        <path d="M12 2v4" />
                        <path d="M12 18v4" />
                        <path d="M6 12H2" />
                        <path d="M22 12h-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold">
                        Lodge Marketing & Guest Growth
                      </h3>
                      <p className="text-foreground/70 mt-2 text-lg">
                        We don't just make your lodge look good. We bring you guests and help build a thriving brand.
                      </p>

                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ServiceItem
                          title="Professional Photos & Video"
                          description="We handle high-quality shoots to make your lodge stand out online. Content that gets saved, shared, and booked off of."
                        />
                        <ServiceItem
                          title="Website & Booking Page Setup"
                          description="Whether you need a fresh site or just a better booking page, we've got you covered with conversion-optimized design."
                        />
                        <ServiceItem
                          title="Social Media Marketing"
                          description="From content creation to posting and engagement, we manage your online presence with clear strategy and measurable results."
                        />
                        <ServiceItem
                          title="Targeted Advertising"
                          description="We run targeted digital ads to drive direct bookings and cut out OTA commissions while reaching your ideal guests."
                        />
                        <ServiceItem
                          title="Email & WhatsApp Marketing"
                          description="Stay top-of-mind with guests through smart, automated follow-ups and promotions that bring them back season after season."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          </div>

          {/* Brand & Business Development */}
          <div className={`transition-all duration-500 ${expandedCategory === 'development' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <Animation type="fade-up">
              <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center shadow-sm">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold">
                        Brand & Business Development
                      </h3>
                      <p className="text-foreground/70 mt-2 text-lg">
                        Strategic support to position your lodge for long-term growth and increased profitability.
                      </p>

                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ServiceItem
                          title="Brand Strategy & Positioning"
                          description="We help clarify what makes your lodge unique and craft messaging that connects with the right guests to build a premium brand."
                        />
                        <ServiceItem
                          title="Guest Experience Design"
                          description="We help refine touchpoints across your guest journey—from welcome drinks to check-out—to boost reviews and referrals."
                        />
                        <ServiceItem
                          title="Performance Tracking & Reporting"
                          description="Get clear insights on bookings, revenue, guest satisfaction and marketing performance to make data-driven decisions."
                        />
                        <ServiceItem
                          title="Pricing Strategy"
                          description="Maximize revenue with strategic pricing that reflects your value while remaining competitive in the market."
                        />
                        <ServiceItem
                          title="Sustainability Planning"
                          description="Develop eco-friendly operations that appeal to conscious travelers while preserving the natural environment."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Animation type="fade-up">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-serif font-bold mb-4">Ready to transform your safari lodge?</h3>
              <p className="mb-8 text-foreground/70">
                Book a free strategy call to discuss your specific needs and how we can help your property thrive.
              </p>
              <GetStartedButton className="shadow-lg hover:shadow-xl text-lg px-10 py-3">
                Get Started
              </GetStartedButton>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
}

interface ServiceItemProps {
  title: string;
  description: string;
}

function ServiceItem({ title, description }: ServiceItemProps) {
  return (
    <div className="group">
      <div className="flex gap-3 items-start">
        <div className="flex-shrink-0 w-5 h-5 mt-1 text-primary group-hover:scale-110 transition-transform duration-300">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-medium text-lg">{title}</h4>
          <p className="text-foreground/70 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}
