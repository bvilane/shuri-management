'use client';

import Animation from '@/components/ui/Animation';

export default function Process() {
  const steps = [
    {
      number: 1,
      title: 'Share Your Contact Info',
      description:
        'Just give us your name, email, and phone number so we know how to reach you.',
    },
    {
      number: 2,
      title: 'Discovery Call',
      description:
        'We reach out to set up a quick call where we learn more about your lodge, your goals, and where you need support.',
    },
    {
      number: 3,
      title: 'Custom Growth Plan',
      description:
        'We create a proposal with the right mix of services and a tailored plan based on what you actually need.',
    },
    {
      number: 4,
      title: 'Execution & Support',
      description:
        'We take over operations, media, marketing, or all of the above.',
    },
    {
      number: 5,
      title: 'Growth You Can Measure',
      description:
        'We track performance, give regular updates, and improve month by month so you can focus on guests, not graphs.',
    },
  ];

  return (
    <section
      id="process"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 texture-bg opacity-5 z-0"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
            Process
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            How It Works
          </p>
          <p className="mt-6 text-center max-w-3xl mx-auto">
            Our process is simple, flexible, and built around you.
          </p>
        </Animation>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line connecting the process steps */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-primary/20 z-0 hidden md:block"></div>

            {/* Process steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <Animation key={step.number} type="fade-up" delay={100 * index}>
                  <ProcessStep
                    number={step.number}
                    title={step.title}
                    description={step.description}
                  />
                </Animation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 group">
      <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
        <span className="text-2xl md:text-3xl font-serif font-bold text-primary transition-colors duration-300 group-hover:text-white">
          {number}
        </span>
      </div>

      <div className="pt-2">
        <h3 className="text-xl md:text-2xl font-serif font-semibold">
          {title}
        </h3>
        <p className="mt-2 text-foreground/70">{description}</p>
      </div>
    </div>
  );
}
