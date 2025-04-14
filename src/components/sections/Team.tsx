'use client';

import Animation from '@/components/ui/Animation';

export default function Team() {
  return (
    <section id="team" className="py-20 bg-muted relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/5 -rotate-12 rounded-tl-3xl"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
            Team
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Meet the Team
          </p>
        </Animation>

        <div className="mt-16 max-w-4xl mx-auto">
          <Animation type="fade-up" delay={100}>
            <div className="text-center mb-12">
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

              <div className="py-4 px-6 bg-card rounded-lg border border-border">
                <p className="text-lg font-serif italic text-center">
                  Singita, Dulini, &Beyond, Wilderness Safaris, MORE Family
                  Collection – across the Sabi Sands and throughout Africa's
                  premier safari destinations.
                </p>
              </div>

              <p className="text-lg">
                Now we bring that knowledge to lodges like yours so you don't
                just keep up, you set the new standard.
              </p>
            </div>
          </Animation>

          {/* Team members grid - placeholder for future expansion */}
          <div className="mt-16 hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Team member cards would go here */}
            </div>
          </div>

          <Animation type="fade-up" delay={300}>
            <div className="mt-12 flex justify-center">
              <button className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium">
                Get Started
              </button>
            </div>
          </Animation>
        </div>
      </div>

      {/* Safari texture overlay */}
      <div className="absolute inset-0 texture-bg opacity-5 mix-blend-overlay pointer-events-none"></div>
    </section>
  );
}
