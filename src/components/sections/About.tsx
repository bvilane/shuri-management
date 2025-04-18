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
      className="py-16 md:py-20 bg-background relative overflow-hidden"
    >
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f5f0] to-[#e5d9c7] z-0"></div>
      
      {/* Enhanced background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-bl-full blur-3xl z-[1]"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full blur-3xl z-[1]"></div>
      <div className="absolute top-1/4 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl z-[1]"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-accent/5 rounded-full blur-xl z-[1]"></div>

      {/* Safari texture overlay */}
      <div className="absolute inset-0 texture-bg opacity-5 mix-blend-overlay pointer-events-none z-[1]"></div>

      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <Animation type="fade-up">
          <span className="block text-center text-primary text-xs md:text-sm font-medium mb-3">DISCOVER OUR STORY</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center">
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
              "To build Africa's most talked-about, most profitable safari lodges by combining smart operations, bold marketing, and unforgettable guest experiences while protecting nature and uplifting local communities."
            </p>
          </div>
        </Animation>

        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <Animation type="slide-in-left">
            <div className="relative h-[250px] sm:h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-xl group">
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
            <div className="space-y-3 md:space-y-4">
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
              <div className="pt-3 md:pt-4">
                <h4 className="font-semibold mb-2 md:mb-3 text-base md:text-lg text-primary">
                  Our approach is guided by four core principles:
                </h4>
                <ul className="space-y-1.5 md:space-y-2">
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
        
        {/* Core Competencies */}
        <Animation type="fade-up" delay={150}>
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="flex justify-center mb-1">
              <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/10 text-primary font-medium mb-4 inline-block">Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center mb-6">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Lodge Management",
                  experience: "30+ years",
                  description: "Property operations, staff supervision, financial management, and guest relations"
                },
                {
                  title: "Safari Guiding",
                  experience: "20+ years",
                  description: "Wildlife expertise, guest safety, storytelling, and educational programming"
                },
                {
                  title: "Digital Marketing",
                  experience: "10+ years",
                  description: "Social media, SEO, content creation, and targeted advertising for luxury properties"
                },
                {
                  title: "Staff Training",
                  experience: "8+ years",
                  description: "Service standards, hospitality training, and professional development programs"
                }
              ].map((competency, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-serif font-bold">{competency.title}</h4>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{competency.experience}</span>
                      </div>
                      <p className="text-foreground/80">{competency.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Animation>
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
