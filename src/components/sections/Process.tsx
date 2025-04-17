'use client';

import Animation from '@/components/ui/Animation';
import Image from 'next/image';
import { useState } from 'react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      number: 1,
      title: 'Share Your Contact Info',
      description:
        'Just give us your name, email, and phone number so we know how to reach you.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      image: '/images/lodge-2.jpg'
    },
    {
      number: 2,
      title: 'Discovery Call',
      description:
        'We reach out to set up a quick call where we learn more about your lodge, your goals, and where you need support.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      image: '/images/lodge-3.jpg'
    },
    {
      number: 3,
      title: 'Custom Growth Plan',
      description:
        'We create a proposal with the right mix of services and a tailored plan based on what you actually need.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      image: '/images/lodge-4.jpg'
    },
    {
      number: 4,
      title: 'Execution & Support',
      description:
        'We take over operations, media, marketing, or all of the above.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      image: '/images/lodge-5.jpg'
    },
    {
      number: 5,
      title: 'Growth You Can Measure',
      description:
        'We track performance, give regular updates, and improve month by month so you can focus on guests, not graphs.',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <line x1="2" y1="20" x2="22" y2="20"></line>
        </svg>
      ),
      image: '/images/lodge-6.jpg'
    },
  ];

  return (
    <section
      id="process"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f3eb] to-[#e4d7c2] z-0"></div>
      
      {/* Background texture */}
      <div className="absolute inset-0 texture-bg opacity-5 z-[1]"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-3 md:mb-4">OUR APPROACH</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
              Process
            </h2>
            <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
              How It Works
            </p>
            <p className="mt-2 text-center max-w-3xl mx-auto">
              Our process is simple, flexible, and built around you.
            </p>
          </div>
        </Animation>

        {/* Mobile Timeline (Accordion Style) - Only visible on smaller screens */}
        <div className="block md:hidden mt-12">
          <div className="space-y-3 max-w-md mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  activeStep === index 
                    ? 'border-primary/30 bg-primary/5 shadow-md' 
                    : 'border-border/30 bg-card/30'
                }`}
              >
                <button 
                  className="w-full px-4 py-3 flex items-center justify-between text-left"
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      activeStep === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                    }`}>
                      <span className="font-bold text-sm">{step.number}</span>
                    </div>
                    <h4 className="font-serif font-bold text-base">{step.title}</h4>
                  </div>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${activeStep === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`grid grid-cols-1 overflow-hidden transition-all duration-300 ${
                  activeStep === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 pb-4">
                    <p className="text-foreground/70 mb-3 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop Timeline - Only visible on larger screens */}
        <div className="hidden md:block relative mt-16">
          {/* Interactive timeline visualization */}
          <div className="relative max-w-6xl mx-auto">
            {/* Center line with safari theme */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10"></div>
            
            {/* Animal track decorations */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-1/4 w-4 h-4 pattern-animal-tracks opacity-30 -ml-12"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 w-4 h-4 pattern-animal-tracks opacity-30 ml-12"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-3/4 w-4 h-4 pattern-animal-tracks opacity-30 -ml-8"></div>

            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`mb-24 relative group ${index === steps.length - 1 ? 'mb-12' : ''}`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Timeline node */}
                <div className={`
                  absolute left-1/2 transform -translate-x-1/2 w-16 h-16 
                  rounded-full flex items-center justify-center z-10 
                  transition-all duration-500 ease-out
                  ${activeStep === index 
                    ? 'bg-primary text-white scale-110 shadow-lg' 
                    : 'bg-primary/20 text-primary hover:bg-primary/40'}
                `}>
                  <div className="text-center">
                    <span className="font-bold text-lg">{step.number}</span>
                  </div>
                </div>

                {/* Decorative elements for active step */}
                {activeStep === index && (
                  <>
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 ml-10 mt-3 w-6 h-6 pattern-animal-tracks opacity-20"></div>
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 -ml-10 mt-3 w-6 h-6 pattern-animal-tracks opacity-20"></div>
                  </>
                )}

                {/* Content card - alternating sides */}
                <div className={`
                  relative ${index % 2 === 0 ? 'ml-auto pl-10 pr-4' : 'mr-auto pr-10 pl-4'} 
                  w-full sm:w-[46%] ${index % 2 === 0 ? 'sm:ml-[54%]' : ''} mt-5
                `}>
                  <div className={`
                    rounded-xl overflow-hidden transition-all duration-500
                    ${activeStep === index 
                      ? 'shadow-xl translate-y-0 opacity-100 scale-100 bg-card border border-primary/20' 
                      : 'shadow-md opacity-80 translate-y-2 scale-98 bg-card/80 border border-border/30'
                    }
                  `}>
                    {/* Title header */}
                    <div className="p-4 border-b border-border/20 bg-primary/5">
                      <h4 className="font-serif font-bold text-xl text-primary">{step.title}</h4>
                      <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
                        Step {step.number}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="p-5">
                      <p className="text-foreground/80">{step.description}</p>
                    </div>

                    {/* Icon at bottom right corner */}
                    <div className="absolute right-3 bottom-3 w-6 h-6 text-primary opacity-30">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* End marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

