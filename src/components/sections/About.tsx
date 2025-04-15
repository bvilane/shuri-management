'use client';

import Image from 'next/image';
import Animation from '@/components/ui/Animation';
import { useState } from 'react';

// Enhanced timeline data with images and icons
const timeline = [
  {
    year: '2010',
    title: 'The Beginning',
    description: 'Founded by a team of safari industry veterans with a vision to transform lodge management across Africa.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    image: '/images/lodge-2.jpg'
  },
  {
    year: '2014',
    title: 'Expansion',
    description: 'Grew our portfolio to include luxury lodges across East Africa, developing our signature management approach.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
    image: '/images/lodge-4.jpg'
  },
  {
    year: '2018',
    title: 'Digital Innovation',
    description: 'Launched our integrated digital marketing platform specifically designed for safari lodges and camps.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    image: '/images/lodge-5.jpg'
  },
  {
    year: '2023',
    title: 'Global Recognition',
    description: 'Recognized as a leading safari hospitality management company with operations in 12 African countries.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
    image: '/images/lodge-6.jpg'
  }
];

export default function About() {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Enhanced background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full blur-3xl"></div>
      <div className="absolute top-1/4 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>

      {/* Safari texture overlay */}
      <div className="absolute inset-0 texture-bg opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <Animation type="fade-up">
          <span className="block text-center text-primary text-xs md:text-sm font-medium mb-3">DISCOVER OUR STORY</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-center">
            About Shuri Management
          </h2>
          <p className="mt-4 md:mt-6 text-center max-w-3xl mx-auto text-foreground/80 text-base md:text-lg">
            Dedicated to elevating safari lodge experiences across Africa
            through expert management and marketing solutions tailored for the luxury hospitality sector.
          </p>
        </Animation>

        {/* Mission statement banner */}
        <Animation type="fade-up" delay={100}>
          <div className="mt-8 md:mt-12 max-w-4xl mx-auto bg-primary/10 py-6 md:py-8 px-6 md:px-12 rounded-xl text-center">
            <h3 className="text-lg md:text-2xl font-serif font-bold text-primary mb-2 md:mb-3">Our Mission</h3>
            <p className="text-base md:text-lg italic">
              "To transform African safari lodges into thriving, sustainable destinations that deliver exceptional guest experiences while preserving natural habitats and uplifting local communities."
            </p>
          </div>
        </Animation>

        <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <Animation type="slide-in-left">
            <div className="relative h-[250px] sm:h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-xl group">
              {/* Image gallery with two images */}
              <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0">
                <Image 
                  src="/images/giraffe.jpg" 
                  alt="Giraffe in African safari" 
                  fill 
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                <Image 
                  src="/images/lodge-2.jpg" 
                  alt="Luxury safari lodge" 
                  fill 
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
              </div>
              
              {/* Image caption */}
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 z-10">
                <h4 className="text-white text-lg sm:text-xl font-serif font-semibold">African Wilderness & Luxury</h4>
                <p className="text-white/80 text-xs sm:text-sm mt-1">The perfect balance we help our clients achieve</p>
              </div>
            </div>
          </Animation>

          <Animation type="fade-up" delay={200}>
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary">Our Story</h3>
              <p className="text-base md:text-lg">
                Shuri Management was founded by a team of safari lodge veterans
                who recognized the need for comprehensive, integrated management and
                marketing solutions specifically designed for luxury African lodges.
              </p>
              <p className="text-sm md:text-base">
                After decades of combined experience running premier safari destinations
                across the continent, we intimately understand the unique challenges that
                lodge owners face — from seasonal occupancy fluctuations to the complexities
                of providing exceptional guest experiences in remote, pristine wilderness locations.
              </p>
              <p className="text-sm md:text-base">
                Today, we apply our expertise to help lodge owners not just survive but
                thrive in an increasingly competitive market. We focus on sustainable growth
                strategies that respect both the delicate ecosystems and local communities
                while creating unforgettable, authentic experiences for guests.
              </p>
              <div className="pt-4 md:pt-6">
                <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg text-primary">
                  Our approach is guided by four core principles:
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  <AboutListItem>
                    <span className="font-medium">Deep industry expertise</span> - Decades of hands-on safari lodge management experience
                  </AboutListItem>
                  <AboutListItem>
                    <span className="font-medium">Authentic experiences</span> - Creating genuine connections between guests and Africa's natural wonders
                  </AboutListItem>
                  <AboutListItem>
                    <span className="font-medium">Sustainable growth</span> - Balancing profitability with conservation and community support
                  </AboutListItem>
                  <AboutListItem>
                    <span className="font-medium">Digital innovation</span> - Leveraging technology to enhance both operations and marketing
                  </AboutListItem>
                </ul>
              </div>
            </div>
          </Animation>
        </div>
        
        {/* Enhanced Creative Timeline section with interactive elements */}
        <div className="mt-16 md:mt-24 relative">
          <Animation type="fade-up">
            <div className="flex flex-col items-center mb-8 md:mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-3 md:mb-4">OUR JOURNEY</span>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold text-center">Safari Through Time</h3>
              <p className="text-foreground/70 text-center max-w-xl mx-auto mt-3 md:mt-4 text-sm md:text-base">
                Following the tracks of our growth through Africa's lodge management landscape
              </p>
            </div>
            
            {/* Mobile Timeline (Accordion Style) - Only visible on smaller screens */}
            <div className="block md:hidden">
              <div className="space-y-3 max-w-md mx-auto">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                      activeTimelineItem === index 
                        ? 'border-primary/30 bg-primary/5 shadow-md' 
                        : 'border-border/30 bg-card/30'
                    }`}
                  >
                    <button 
                      className="w-full px-4 py-3 flex items-center justify-between text-left"
                      onClick={() => setActiveTimelineItem(index)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                          activeTimelineItem === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                        }`}>
                          <span className="font-bold text-sm">{item.year}</span>
                        </div>
                        <h4 className="font-serif font-bold text-base">{item.title}</h4>
                      </div>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${activeTimelineItem === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div className={`grid grid-cols-1 overflow-hidden transition-all duration-300 ${
                      activeTimelineItem === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 pb-4">
                        <p className="text-foreground/70 mb-3 text-sm">{item.description}</p>
                        <div className="h-32 relative rounded-lg overflow-hidden">
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill 
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop Timeline - Only visible on larger screens */}
            <div className="hidden md:block relative">
              {/* Interactive timeline visualization */}
              <div className="relative max-w-6xl mx-auto">
                {/* Enhanced safari-themed center line with animal track textures */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10"></div>
                
                {/* Create animal tracks along the timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/4 w-4 h-4 pattern-animal-tracks opacity-30 -ml-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 w-4 h-4 pattern-animal-tracks opacity-30 ml-12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 top-3/4 w-4 h-4 pattern-animal-tracks opacity-30 -ml-8"></div>
                
                {/* Timeline items with premium styling and hover effects */}
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`mb-24 relative group ${index === timeline.length - 1 ? 'mb-12' : ''}`}
                    onMouseEnter={() => setActiveTimelineItem(index)}
                  >
                    {/* Year marker with animated hover effect */}
                    <div className={`
                      absolute left-1/2 transform -translate-x-1/2 w-16 h-16 
                      rounded-full flex items-center justify-center z-10 
                      transition-all duration-500 ease-out
                      ${activeTimelineItem === index 
                        ? 'bg-primary text-white scale-110 shadow-lg' 
                        : 'bg-primary/20 text-primary hover:bg-primary/40'}
                    `}>
                      <div className="text-center">
                        <span className="font-bold text-lg">{item.year}</span>
                      </div>
                    </div>
                    
                    {/* Animal tracks around the active year marker */}
                    {activeTimelineItem === index && (
                      <>
                        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 ml-10 mt-3 w-6 h-6 pattern-animal-tracks opacity-20"></div>
                        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 -ml-10 mt-3 w-6 h-6 pattern-animal-tracks opacity-20"></div>
                      </>
                    )}
                    
                    {/* Content cards - alternate left and right with premium styling */}
                    <div className={`
                      relative ${index % 2 === 0 ? 'ml-auto pl-10 pr-4' : 'mr-auto pr-10 pl-4'} 
                      w-full sm:w-[46%] ${index % 2 === 0 ? 'sm:ml-[54%]' : ''} mt-5
                    `}>
                      <div className={`
                        rounded-xl overflow-hidden transition-all duration-500
                        ${activeTimelineItem === index 
                          ? 'shadow-xl translate-y-0 opacity-100 scale-100 bg-card border border-primary/20' 
                          : 'shadow-md opacity-80 translate-y-2 scale-98 bg-card/80 border border-border/30'
                        }
                      `}>
                        {/* Timeline item content with image */}
                        <div className="relative h-48 w-full">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          
                          {/* Year overlay on the image */}
                          <div className="absolute top-4 right-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white/90 text-sm">
                            {item.year}
                          </div>
                          
                          {/* Title overlay on image */}
                          <div className="absolute bottom-0 left-0 w-full p-4">
                            <h4 className="text-white font-serif font-bold text-xl">{item.title}</h4>
                          </div>
                        </div>
                        
                        <div className="p-5">
                          <p className="text-foreground/80">{item.description}</p>
                          
                          {/* Connecting element back to the timeline */}
                          <div className={`absolute top-8 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-10 h-[2px] bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-primary/80 to-primary/20`}></div>
                        </div>
                        
                        {/* Timeline icon */}
                        <div className={`absolute ${index % 2 === 0 ? 'left-2 bottom-2' : 'right-2 bottom-2'} w-8 h-8 text-primary/30`}>
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Final destination marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </Animation>
        </div>
        
        {/* Value stats section - Mobile optimized */}
        <div className="mt-12 sm:mt-16 md:mt-24">
          <Animation type="fade-up">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
              <div className="bg-card/50 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-sm border border-border/10 text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:bg-card">
                <div className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">25+</div>
                <h4 className="font-medium text-xs sm:text-sm md:text-base mb-1 md:mb-2">Years Experience</h4>
                <p className="text-xs sm:text-sm text-foreground/70 line-clamp-2">Combined expertise in African safari lodge management</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-sm border border-border/10 text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:bg-card">
                <div className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">12</div>
                <h4 className="font-medium text-xs sm:text-sm md:text-base mb-1 md:mb-2">Countries</h4>
                <p className="text-xs sm:text-sm text-foreground/70 line-clamp-2">Operations across major safari destinations in Africa</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-sm border border-border/10 text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:bg-card">
                <div className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">35+</div>
                <h4 className="font-medium text-xs sm:text-sm md:text-base mb-1 md:mb-2">Lodges Managed</h4>
                <p className="text-xs sm:text-sm text-foreground/70 line-clamp-2">From boutique camps to luxury safari properties</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-sm border border-border/10 text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:bg-card">
                <div className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">1.5M+</div>
                <h4 className="font-medium text-xs sm:text-sm md:text-base mb-1 md:mb-2">Happy Guests</h4>
                <p className="text-xs sm:text-sm text-foreground/70 line-clamp-2">Unforgettable safari experiences delivered globally</p>
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
    <li className="flex items-start gap-2 md:gap-3 group">
      <div className="flex-shrink-0 w-5 md:w-6 h-5 md:h-6 mt-0.5 text-primary group-hover:scale-110 transition-transform duration-300">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="text-sm md:text-base text-foreground/90">{children}</span>
    </li>
  );
}
