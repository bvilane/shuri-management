'use client';

import { useState } from 'react';
import Animation from '@/components/ui/Animation';

export default function Services() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container">
        <Animation type="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
            Services
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            What We Can Do For You
          </p>
          <p className="mt-6 text-center max-w-3xl mx-auto">
            Everything it takes to keep the lodge running smoothly—behind the
            scenes and on the ground.
          </p>
        </Animation>

        <div className="mt-16 max-w-4xl mx-auto space-y-6">
          {/* Lodge Operations & Support */}
          <Animation type="fade-up" delay={100}>
            <div className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleCategory('operations')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <span className="text-xl">🏕</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold">
                      Lodge Operations & Support
                    </h3>
                    <p className="text-foreground/70 mt-1">
                      Everything you need to run your lodge&apos;s day-to-day
                      operations.
                    </p>
                  </div>
                </div>
                <div
                  className={`transition-transform duration-300 ${
                    expandedCategory === 'operations' ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedCategory === 'operations'
                    ? 'max-h-[800px] border-t border-border/50'
                    : 'max-h-0'
                }`}
              >
                <div className="p-6 space-y-4">
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
          </Animation>

          {/* Lodge Marketing & Guest Growth */}
          <Animation type="fade-up" delay={200}>
            <div className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleCategory('marketing')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <span className="text-xl">📣</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold">
                      Lodge Marketing & Guest Growth
                    </h3>
                    <p className="text-foreground/70 mt-1">
                      We don&apos;t just make your lodge look good. We bring you
                      guests.
                    </p>
                  </div>
                </div>
                <div
                  className={`transition-transform duration-300 ${
                    expandedCategory === 'marketing' ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedCategory === 'marketing'
                    ? 'max-h-[800px] border-t border-border/50'
                    : 'max-h-0'
                }`}
              >
                <div className="p-6 space-y-4">
                  <ServiceItem
                    title="Professional Photos & Video"
                    description="We handle high-quality shoots to make your lodge stand out online. Content that gets saved, shared, and booked off of."
                  />
                  <ServiceItem
                    title="Website & Booking Page Setup"
                    description="Whether you need a fresh site or just a better booking page, we've got you covered."
                  />
                  <ServiceItem
                    title="Social Media Marketing"
                    description="From content creation to posting and engagement, we manage your online presence with clear strategy."
                  />
                  <ServiceItem
                    title="Advertising Campaigns"
                    description="We run targeted digital ads to drive direct bookings and cut out OTA commissions."
                  />
                  <ServiceItem
                    title="Email & WhatsApp Marketing"
                    description="Stay top-of-mind with guests through smart, automated follow-ups and promos that bring them back."
                  />
                </div>
              </div>
            </div>
          </Animation>

          {/* Brand & Business Development */}
          <Animation type="fade-up" delay={300}>
            <div className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleCategory('development')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <span className="text-xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold">
                      Brand & Business Development
                    </h3>
                    <p className="text-foreground/70 mt-1">
                      Support to help you position your lodge for long-term
                      growth.
                    </p>
                  </div>
                </div>
                <div
                  className={`transition-transform duration-300 ${
                    expandedCategory === 'development' ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedCategory === 'development'
                    ? 'max-h-[800px] border-t border-border/50'
                    : 'max-h-0'
                }`}
              >
                <div className="p-6 space-y-4">
                  <ServiceItem
                    title="Brand Strategy & Positioning"
                    description="We help clarify what makes your lodge unique and craft messaging that connects with the right guests."
                  />
                  <ServiceItem
                    title="Guest Experience Design"
                    description="We help refine touchpoints across your guest journey—from welcome drinks to check-out—to boost reviews and referrals."
                  />
                  <ServiceItem
                    title="Performance Tracking & Reporting"
                    description="You'll get monthly dashboards showing what's working (and what needs fixing), so we keep improving your results."
                  />
                </div>
              </div>
            </div>
          </Animation>

          <Animation type="fade-up" delay={400}>
            <div className="mt-12 flex justify-center">
              <button className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium">
                Get Started
              </button>
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
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12L10 17L19 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-foreground/70 text-sm">{description}</p>
      </div>
    </div>
  );
}
