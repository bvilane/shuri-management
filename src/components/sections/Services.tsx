'use client';

import { useState } from 'react';
import Image from 'next/image';
import Animation from '@/components/ui/Animation';
import GetStartedButton from '@/components/ui/GetStartedButton';
import Button from '@/components/ui/Button';

// Define service categories with enhanced data
const serviceCategories = [
  {
    id: 'operations',
    name: 'Lodge Operations',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2h4l1 6h-6l1-6z" />
        <path d="M4 8h16a1 1 0 0 1 1 1v.5a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-.5a1 1 0 0 1 1-1z" />
        <path d="M10 16h4" />
        <path d="M9 20h6" />
        <path d="M5 16h14v4a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-4z" />
      </svg>
    ),
    description: "Everything you need to run your lodge's day-to-day operations smoothly and efficiently.",
    image: "/images/lodge-2.jpg",
    services: [
      {
        title: "Daily Lodge Management",
        description: "From housekeeping schedules to kitchen operations, we help you create smooth systems and plug in as needed.",
        icon: "🏠"
      },
      {
        title: "Booking Systems & Automations",
        description: "We set up or improve your booking flows so guests can book online easily, and you get notified instantly.",
        icon: "📅"
      },
      {
        title: "Staff & Guide Training",
        description: "We train your team on hosting, guest care, and storytelling to deliver top-notch experiences that guests can't stop talking about.",
        icon: "👥"
      },
      {
        title: "Tech Support",
        description: "We help you integrate tools for booking, guest feedback, payments, Wi-Fi, and more—so your systems run without headaches.",
        icon: "💻"
      },
      {
        title: "Supply Chain Support",
        description: "Need help with ordering toiletries, uniforms, or kitchen goods? We can source and coordinate suppliers so you never run short.",
        icon: "📦"
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <circle cx="12" cy="12" r="6" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    description: "We don't just make your lodge look good. We bring you guests and help build a thriving brand.",
    image: "/images/lodge-4.jpg",
    services: [
      {
        title: "Professional Photos & Video",
        description: "We handle high-quality shoots to make your lodge stand out online. Content that gets saved, shared, and booked off of.",
        icon: "📸"
      },
      {
        title: "Website & Booking Page Setup",
        description: "Whether you need a fresh site or just a better booking page, we've got you covered with conversion-optimized design.",
        icon: "🌐"
      },
      {
        title: "Social Media Marketing",
        description: "From content creation to posting and engagement, we manage your online presence with clear strategy and measurable results.",
        icon: "📱"
      },
      {
        title: "Targeted Advertising",
        description: "We run targeted digital ads to drive direct bookings and cut out OTA commissions while reaching your ideal guests.",
        icon: "🎯"
      },
      {
        title: "Email & WhatsApp Marketing",
        description: "Stay top-of-mind with guests through smart, automated follow-ups and promotions that bring them back season after season.",
        icon: "📧"
      }
    ]
  },
  {
    id: 'development',
    name: 'Business Development',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    description: "Strategic support to position your lodge for long-term growth and increased profitability.",
    image: "/images/lodge-6.jpg",
    services: [
      {
        title: "Brand Strategy & Positioning",
        description: "We help clarify what makes your lodge unique and craft messaging that connects with the right guests to build a premium brand.",
        icon: "🔍"
      },
      {
        title: "Guest Experience Design",
        description: "We help refine touchpoints across your guest journey—from welcome drinks to check-out—to boost reviews and referrals.",
        icon: "✨"
      },
      {
        title: "Performance Tracking & Reporting",
        description: "Get clear insights on bookings, revenue, guest satisfaction and marketing performance to make data-driven decisions.",
        icon: "📊"
      },
      {
        title: "Pricing Strategy",
        description: "Maximize revenue with strategic pricing that reflects your value while remaining competitive in the market.",
        icon: "💰"
      },
      {
        title: "Sustainability Planning",
        description: "Develop eco-friendly operations that appeal to conscious travelers while preserving the natural environment.",
        icon: "🌿"
      }
    ]
  }
];

export default function Services() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('operations');
  const [selectedService, setSelectedService] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle category tab changes with animation
  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      return;
    }
    
    setIsAnimating(true);
    setTimeout(() => {
      setExpandedCategory(category);
      setSelectedService(0);
      setIsAnimating(false);
    }, 300);
  };

  // Get current category data
  const currentCategory = serviceCategories.find(cat => cat.id === expandedCategory) || serviceCategories[0];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute -left-20 top-40 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-40 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Safari-themed decorative patterns */}
      <div className="absolute left-10 top-1/4 w-12 h-12 pattern-animal-track transform rotate-12 opacity-5"></div>
      <div className="absolute right-10 bottom-1/3 w-16 h-16 pattern-animal-track transform -rotate-15 opacity-5"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 pattern-dots opacity-5"></div>
      
      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <Animation type="fade-up">
          <span className="inline-block px-3 py-1 text-xs md:text-sm rounded-full bg-primary/10 text-primary font-medium mb-4 mx-auto text-center">OUR EXPERTISE</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-center">
            Services & Solutions
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 md:mt-6"></div>
          <p className="mt-4 md:mt-6 text-center max-w-3xl mx-auto text-foreground/80 text-base md:text-lg">
            Everything it takes to keep your lodge running smoothly—behind the
            scenes and on the ground—while maximizing bookings and guest satisfaction.
          </p>
        </Animation>

        {/* Enhanced Service Category Tabs with Illustrations */}
        <div className="mt-10 md:mt-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {serviceCategories.map((category) => (
              <Animation key={category.id} type="fade-up" delay={100}>
                <button 
                  onClick={() => toggleCategory(category.id)}
                  className={`group flex flex-col items-center text-center p-4 md:p-6 rounded-xl transition-all duration-500 border-2 touch-manipulation ${
                    expandedCategory === category.id 
                      ? 'bg-primary text-white border-primary/90 shadow-lg shadow-primary/20' 
                      : 'bg-card border-border/20 hover:border-primary/30 hover:shadow-md active:bg-card/80'
                  }`}
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 transition-all duration-300 ${
                    expandedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-primary/10 text-primary group-hover:scale-110'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-bold mb-1 md:mb-2">{category.name}</h3>
                  <p className={`text-xs md:text-sm line-clamp-2 max-w-[200px] ${expandedCategory === category.id ? 'text-white/80' : 'text-foreground/70'}`}>
                    {category.description}
                  </p>
                </button>
              </Animation>
            ))}
          </div>
          
          {/* Premium Interactive Service Display - Mobile optimized */}
          <div className={`mt-8 md:mt-12 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <Animation type="fade-up" delay={150}>
              <div className="bg-card rounded-2xl border border-border/20 shadow-xl overflow-hidden">
                {/* Header with Image Background - Responsive height */}
                <div className="relative h-48 sm:h-56 md:h-80">
                  <Image 
                    src={currentCategory.image}
                    alt={currentCategory.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1080px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
                  
                  {/* Safari-themed decorative overlay */}
                  <div className="absolute inset-0 pattern-safari-stripes opacity-[0.05] mix-blend-overlay"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-10 text-white">
                    <div className="flex items-center mb-2 md:mb-3">
                      <div className="mr-3 md:mr-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-white">
                        {currentCategory.icon}
                      </div>
                      <h3 className="text-xl md:text-3xl font-serif font-bold">{currentCategory.name}</h3>
                    </div>
                    <p className="text-sm md:text-lg max-w-3xl text-white/90">
                      {currentCategory.description}
                    </p>
                  </div>
                </div>
                
                {/* Service Navigation and Content - Responsive layout */}
                <div className="p-4 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12">
                  {/* Service Navigation Sidebar - Full width on mobile */}
                  <div className="w-full md:w-1/3">
                    <h4 className="text-base md:text-lg font-medium mb-3 md:mb-4 text-primary">Our Services:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {currentCategory.services.map((service, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedService(index)}
                          className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center touch-manipulation ${
                            selectedService === index
                              ? 'bg-primary/10 text-primary font-medium shadow-sm'
                              : 'hover:bg-muted/60 active:bg-muted/40 text-foreground/80'
                          }`}
                        >
                          <span className="mr-3 text-xl md:text-2xl">{service.icon}</span>
                          <span className="text-sm md:text-base line-clamp-1">{service.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Detailed Service Content - Full width on mobile */}
                  <div className="w-full md:w-2/3 bg-gradient-to-br from-background/40 to-muted/30 rounded-xl p-4 md:p-8 border border-border/10">
                    <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                      <div className="flex items-center">
                        <span className="text-2xl md:text-3xl mr-3">{currentCategory.services[selectedService].icon}</span>
                        <h4 className="text-lg md:text-xl font-serif font-bold">{currentCategory.services[selectedService].title}</h4>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary self-start sm:self-auto">
                        {currentCategory.name}
                      </span>
                    </div>
                    
                    <p className="mt-3 md:mt-4 text-sm md:text-base text-foreground/80">
                      {currentCategory.services[selectedService].description}
                    </p>
                    
                    <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
                      <Button className="text-sm md:text-base bg-primary/10 text-primary hover:bg-primary/20 active:bg-primary/30 border-none">
                        <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                        Learn More
                      </Button>
                      
                      <GetStartedButton className="text-sm md:text-base shadow-md">
                        Request This Service
                      </GetStartedButton>
                    </div>
                    
                    {/* Service benefit pills - Overflow scrolling on small screens */}
                    <div className="mt-4 md:mt-6 flex flex-nowrap md:flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
                      <span className="text-xs whitespace-nowrap px-3 py-1 rounded-full bg-muted text-foreground/70">Fast Implementation</span>
                      <span className="text-xs whitespace-nowrap px-3 py-1 rounded-full bg-muted text-foreground/70">Proven Results</span>
                      <span className="text-xs whitespace-nowrap px-3 py-1 rounded-full bg-muted text-foreground/70">Expert Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>

        {/* Enhanced CTA with Visual Elements - Mobile optimized */}
        <div className="mt-16 md:mt-24">
          <Animation type="fade-up">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm p-5 md:p-10 rounded-xl border border-primary/10 shadow-xl relative overflow-hidden">
              {/* Safari-themed decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-[0.03]"></div>
              
              {/* Paw print accent */}
              <div className="absolute bottom-4 right-4 w-16 h-16 text-primary/5">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/><circle cx="16" cy="15" r="2"/><circle cx="8" cy="15" r="2"/><circle cx="21" cy="18" r="2"/><circle cx="3" cy="18" r="2"/></svg>
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl md:text-3xl font-serif font-bold mb-3 md:mb-4">
                      Ready to transform your safari lodge?
                    </h3>
                    <p className="text-sm md:text-base text-foreground/80">
                      Book a free 30-minute strategy call with our team to discuss your specific needs and how our services can help your property thrive in today's competitive safari market.
                    </p>
                    
                    {/* Features list - 1 column on mobile, 2 on desktop */}
                    <div className="mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-xs md:text-sm">No-obligation consultation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-xs md:text-sm">Customized recommendations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-xs md:text-sm">Flexible service options</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-xs md:text-sm">Transparent pricing</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="text-center w-full md:w-auto">
                      <GetStartedButton className="w-full md:w-auto shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base">
                        <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        Schedule Free Call
                      </GetStartedButton>
                      <p className="mt-3 md:mt-4 text-xs text-foreground/60 max-w-[200px] mx-auto">
                        Join 35+ safari lodges already growing with Shuri Management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
}
