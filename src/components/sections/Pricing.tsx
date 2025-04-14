'use client';

import Animation from '@/components/ui/Animation';
import Card from '@/components/ui/Card';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <Animation type="fade-up">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
            Straightforward pricing
          </h2>
          <p className="mt-4 text-center text-foreground/80 max-w-2xl mx-auto">
            Everything you need to scale paid channels effectively.
          </p>
        </Animation>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pricing Card */}
          <Animation type="fade-up" delay={100}>
            <div className="lg:col-span-1 bg-primary text-white rounded-lg p-8">
              <div className="text-center">
                <p className="text-white/90 mb-2">Starts at</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-serif font-bold">$</span>
                  <span className="text-6xl font-serif font-bold">5,000</span>
                </div>
                <p className="text-white/80 mt-1">per month</p>

                <button className="mt-8 w-full py-3 bg-white text-primary font-medium rounded hover:bg-white/90 transition-colors">
                  Get started
                </button>

                <p className="text-white/80 text-sm mt-4">
                  Book a call to chat through your options.
                </p>
              </div>
            </div>
          </Animation>

          {/* What's Included */}
          <Animation type="fade-up" delay={200} className="lg:col-span-2">
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-2xl font-serif font-bold mb-8">
                Here's what's included:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <PricingFeature
                  icon="⚡"
                  title="Fast, no B.S. execution"
                  description="We work at the pace of startups."
                />

                <PricingFeature
                  icon="💰"
                  title="Fixed monthly rate"
                  description="Up to $50k in ad spend."
                />

                <PricingFeature
                  icon="🎨"
                  title="Creative production"
                  description="We take care of creating the ad copy and creative—with your approval, of course."
                />

                <PricingFeature
                  icon="📊"
                  title="Direct access"
                  description="Stay up to date with updates on Slack, and biweekly meetings on Zoom."
                />

                <PricingFeature
                  icon="👥"
                  title="Full-stack, senior team"
                  description="You get a senior strategist, media buyer, creative designer, and reporting specialist."
                />

                <PricingFeature
                  icon="🧠"
                  title="Strategic thought partner"
                  description="We're growth nerds. We love being a thought partner to fellow founders."
                />

                <PricingFeature
                  icon="📈"
                  title="Analytics and reporting"
                  description="We help you get tracking in place. And you'll always know how your ads are performing."
                />

                <PricingFeature
                  icon="🔍"
                  title="CRO and landing pages"
                  description="The landing page is as important as the ads. We'll help make yours convert."
                />
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
}

interface PricingFeatureProps {
  icon: string;
  title: string;
  description: string;
}

function PricingFeature({ icon, title, description }: PricingFeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
        <span>{icon}</span>
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-foreground/70 text-sm">{description}</p>
      </div>
    </div>
  );
}
