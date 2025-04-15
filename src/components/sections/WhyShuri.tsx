'use client';

import Animation from '@/components/ui/Animation';
import GetStartedButton from '@/components/ui/GetStartedButton';

export default function WhyShuri() {
  return (
    <section
      id="why-shuri"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <span className="block text-center text-primary font-medium mb-3">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
            The Shuri Difference
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Our Unique Approach to Safari Lodge Management
          </p>
          <p className="mt-6 text-center max-w-3xl mx-auto text-foreground/70">
            We keep it simple, smart, and tied to results—focusing on what truly matters for your lodge's success.
          </p>
        </Animation>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Animation type="fade-up" delay={100}>
            <div className="group bg-card border border-border/50 hover:border-primary/20 rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg mb-6 flex items-center justify-center text-primary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                Pay When You See Results
              </h3>
              <p className="text-foreground/70 flex-grow">
                We structure many of our services with flexible pricing so you're not paying upfront for things that don't deliver. Everything we do ties back to your guest experience, occupancy rates, and profitability.
              </p>
            </div>
          </Animation>

          <Animation type="fade-up" delay={200}>
            <div className="group bg-card border border-border/50 hover:border-primary/20 rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg mb-6 flex items-center justify-center text-primary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                All-in-One Lodge Partner
              </h3>
              <p className="text-foreground/70 flex-grow">
                No more juggling 5 agencies and vendors. We handle operations, marketing, and support under one roof. One team. One dashboard. One point of contact for everything your lodge needs.
              </p>
            </div>
          </Animation>

          <Animation type="fade-up" delay={300}>
            <div className="group bg-card border border-border/50 hover:border-primary/20 rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg mb-6 flex items-center justify-center text-primary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                Built by Lodge Operators
              </h3>
              <p className="text-foreground/70 flex-grow">
                Our team has managed, marketed, and grown some of Africa's most iconic lodges. We know how this industry works because we've lived it, facing the same challenges you do every day.
              </p>
            </div>
          </Animation>

          <Animation type="fade-up" delay={400}>
            <div className="group bg-card border border-border/50 hover:border-primary/20 rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg mb-6 flex items-center justify-center text-primary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                24/7 Support System
              </h3>
              <p className="text-foreground/70 flex-grow">
                We're hands-on, responsive, and proactive. With teams across multiple time zones, we provide round-the-clock support when issues arise, understanding both local challenges and global standards.
              </p>
            </div>
          </Animation>

          <Animation type="fade-up" delay={500}>
            <div className="group bg-card border border-border/50 hover:border-primary/20 rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg mb-6 flex items-center justify-center text-primary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                Tech-Enabled Solutions
              </h3>
              <p className="text-foreground/70 flex-grow">
                We leverage the latest technology to streamline operations, improve guest experiences, and maximize revenue—while ensuring these solutions work reliably even in remote locations with limited connectivity.
              </p>
            </div>
          </Animation>

          <Animation type="fade-up" delay={600}>
            <div className="group bg-card border border-border/50 hover:border-primary/20 rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg mb-6 flex items-center justify-center text-primary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                Conservation & Community
              </h3>
              <p className="text-foreground/70 flex-grow">
                We help you grow while uplifting surrounding communities through job creation and sustainable initiatives. Our approach balances commercial success with conservation efforts and community development.
              </p>
            </div>
          </Animation>
        </div>

        <Animation type="fade-up" delay={800}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Ready to elevate your safari lodge?</h3>
            <p className="mb-8 text-foreground/70 max-w-2xl mx-auto">
              Book a free consultation to discuss your specific needs and how we can help your property thrive.
            </p>
            <GetStartedButton className="shadow-lg hover:shadow-xl text-lg px-10 py-3">
              Schedule Your Free Consultation
            </GetStartedButton>
          </div>
        </Animation>
      </div>
    </section>
  );
}
