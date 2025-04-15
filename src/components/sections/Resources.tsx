'use client';

import Animation from '@/components/ui/Animation';

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-bg opacity-5 z-0"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
            Resources
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Browse Our Lodge Growth Library
          </p>
          <p className="mt-6 text-center text-foreground/70 max-w-3xl mx-auto">
            Steal the playbooks no one in the industry bothered to create—until now.
          </p>
        </Animation>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Animation type="fade-up" delay={100}>
            <div className="bg-card border border-border rounded-lg p-8 h-full hover:shadow-md transition-shadow">
              <h3 className="text-xl font-serif font-semibold mb-4">
                Our Blog
              </h3>
              <p className="text-foreground/70 mb-6">
                Quick reads on lodge growth, marketing, and guest experience.
              </p>
              <a 
                href="/blog" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Read our Blog
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </a>
            </div>
          </Animation>

          <Animation type="fade-up" delay={200}>
            <div className="bg-card border border-border rounded-lg p-8 h-full hover:shadow-md transition-shadow">
              <h3 className="text-xl font-serif font-semibold mb-4">
                Free Guides
              </h3>
              <p className="text-foreground/70 mb-6">
                Downloadable playbooks for when you're stuck or ready to grow.
              </p>
              <a 
                href="https://shurimanagement.gumroad.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Download Guides
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </a>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
} 