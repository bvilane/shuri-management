'use client';

import Animation from '@/components/ui/Animation';
import GetStartedButton from '@/components/ui/GetStartedButton';

// Define resource items
const resources = [
  {
    id: 1,
    title: "Our Blog",
    description: "Quick reads on lodge growth, marketing, and guest experience.",
    link: "/blog",
    linkText: "Read our Blog",
    icon: (
      <svg className="w-12 h-12 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Free Guides",
    description: "Downloadable playbooks for when you're stuck or ready to grow.",
    link: "https://shurimanagement.gumroad.com/",
    linkText: "Download Guides",
    isExternal: true,
    icon: (
      <svg className="w-12 h-12 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-1/4 w-1/4 h-1/3 bg-primary/5 blur-3xl"></div>
      <div className="absolute right-0 bottom-1/3 w-1/3 h-1/3 bg-accent/5 blur-3xl"></div>
      
      {/* Background texture */}
      <div className="absolute inset-0 texture-bg opacity-5 z-0"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <span className="block text-center text-primary font-medium mb-3">KNOWLEDGE LIBRARY</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
            Safari Management Resources
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Everything We've Learned Running Iconic Safari Properties
          </p>
          <p className="mt-6 text-center text-foreground/70 max-w-3xl mx-auto">
            Steal the playbooks no one in the industry bothered to create—until now.
          </p>
        </Animation>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resources.map((resource) => (
            <Animation key={resource.id} type="fade-up" delay={100 + (resource.id * 50)}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 h-full hover:shadow-md transition-all group">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 flex-grow">
                    {resource.description}
                  </p>
                  <a 
                    href={resource.link}
                    target={resource.isExternal ? "_blank" : undefined}
                    rel={resource.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center text-primary font-medium group-hover:underline"
                  >
                    {resource.linkText}
                    <svg 
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
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
              </div>
            </Animation>
          ))}
        </div>

        <Animation type="fade-up" delay={300}>
          <div className="mt-16 bg-primary/10 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-2">
                  Want Custom Advice?
                </h3>
                <p className="text-foreground/80">
                  While our resources offer general best practices, our team can provide personalized guidance for your specific safari property needs.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <GetStartedButton className="whitespace-nowrap shadow-md px-8 py-3">
                  Book a Strategy Call
                </GetStartedButton>
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </section>
  );
} 