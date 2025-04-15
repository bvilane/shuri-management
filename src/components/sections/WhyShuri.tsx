'use client';

import Animation from '@/components/ui/Animation';
import GetStartedButton from '@/components/ui/GetStartedButton';

export default function WhyShuri() {
  return (
    <section
      id="why-shuri"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background texture/pattern */}
      <div className="absolute inset-0 texture-bg opacity-5 z-0"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
            Why Shuri
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Why Work With Us
          </p>
          <p className="mt-6 text-center max-w-3xl mx-auto">
            We keep it simple, smart, and tied to results.
          </p>
        </Animation>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Animation type="fade-up" delay={100}>
            <div className="bg-card border border-border rounded-lg p-8 h-full">
              <FeatureItem
                title="Pay When You See Results"
                description="We structure many of our services with flexible pricing so you're not paying upfront for things that don't deliver. Everything we do ties back to your guest experience, occupancy rates, and profitability."
              />
            </div>
          </Animation>

          <Animation type="fade-up" delay={200}>
            <div className="bg-card border border-border rounded-lg p-8 h-full">
              <FeatureItem
                title="All-in-One Lodge Partner"
                description="No more juggling 5 agencies and vendors. We handle operations, marketing, and support under one roof. One team. One dashboard."
              />
            </div>
          </Animation>

          <Animation type="fade-up" delay={300}>
            <div className="bg-card border border-border rounded-lg p-8 h-full">
              <FeatureItem
                title="Built by People Who've Run Lodges"
                description="Our team has managed, marketed, and grown some of Africa's most iconic lodges. We know how this industry works because we've lived it."
              />
            </div>
          </Animation>

          <Animation type="fade-up" delay={400}>
            <div className="bg-card border border-border rounded-lg p-8 h-full">
              <FeatureItem
                title="We Care About Conservation & Community"
                description="We help you grow while uplifting the community around you through jobs and sustainable initiatives. We don't believe in growth at any cost."
              />
            </div>
          </Animation>

          <Animation type="fade-up" delay={500} className="md:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8">
              <FeatureItem
                title="Real Support. Not Just Promises."
                description="We're hands-on, responsive, and proactive. We understand the local challenges and global standards."
              />
            </div>
          </Animation>
        </div>

        <Animation type="fade-up" delay={600}>
          <div className="mt-12 flex justify-center">
            <GetStartedButton />
          </div>
        </Animation>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  title: string;
  description: string;
}

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-accent/20 text-accent flex items-center justify-center">
        <svg
          width="16"
          height="16"
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
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="mt-2 text-foreground/70">{description}</p>
      </div>
    </div>
  );
}
