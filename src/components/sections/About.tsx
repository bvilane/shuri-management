'use client';

import Image from 'next/image';
import Animation from '@/components/ui/Animation';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
            About Shuri Management
          </h2>
          <p className="mt-6 text-center max-w-3xl mx-auto">
            Dedicated to elevating safari lodge experiences across Africa
            through expert management and marketing solutions.
          </p>
        </Animation>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Animation type="slide-in-left">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for an actual image */}
              <div className="absolute inset-0 bg-[url('/images/hero-bg-placeholder.jpg')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent"></div>
            </div>
          </Animation>

          <Animation type="fade-up" delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold">Our Story</h3>
              <p>
                Shuri Management was founded by a team of safari lodge veterans
                who saw the need for better, more integrated management and
                marketing solutions in the industry.
              </p>
              <p>
                After years of running lodges ourselves, we understood the
                unique challenges that lodge owners face. From seasonal
                fluctuations to the complexities of providing exceptional
                experiences in remote locations, we've lived it all.
              </p>
              <p>
                Today, we bring our combined expertise to help lodge owners
                thrive. We focus on sustainable growth that respects both the
                local ecosystems and communities while creating unforgettable
                experiences for guests.
              </p>
              <div className="pt-4">
                <h4 className="font-semibold mb-3">
                  Our approach is guided by:
                </h4>
                <ul className="space-y-2">
                  <AboutListItem>Deep industry expertise</AboutListItem>
                  <AboutListItem>
                    Commitment to authentic experiences
                  </AboutListItem>
                  <AboutListItem>Sustainable, responsible growth</AboutListItem>
                  <AboutListItem>Technology-driven solutions</AboutListItem>
                </ul>
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
    <li className="flex items-start gap-3">
      <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-primary">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span>{children}</span>
    </li>
  );
}
