'use client';

import { useState } from 'react';
import Animation from '@/components/ui/Animation';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Our stay at Shuri's riverside lodge was nothing short of magical. The attention to detail, from the architecture that blends with the surroundings to the personalized service, created an experience that connected us to Africa in a profound way.",
      name: "Emily & Michael Thompson",
      location: "London, UK",
      role: "Travelers"
    },
    {
      id: 2,
      quote: "Since partnering with Shuri Management, our occupancy has increased by 35% and guest satisfaction scores have never been higher. Their marketing expertise and operational improvements have transformed our lodge's performance.",
      name: "David Kariuki",
      location: "Nairobi, Kenya",
      role: "Lodge Owner"
    },
    {
      id: 3,
      quote: "Shuri doesn't just manage our property—they've elevated every aspect of our guest experience. From reimagining our dining concept to training our guides, they've helped us create truly memorable safari moments.",
      name: "Sarah & James Williams",
      location: "Cape Town, South Africa",
      role: "Lodge Proprietors"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden bg-card">
      {/* Background elements */}
      <div className="absolute -left-36 top-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -right-36 bottom-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute inset-0 texture-bg opacity-5"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
            Testimonials
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            What Our Clients Say
          </p>
        </Animation>

        <div className="mt-16 max-w-4xl mx-auto relative">
          {/* Quote mark */}
          <div className="absolute -top-12 left-0 md:left-8 text-primary/10 pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
            </svg>
          </div>

          <div className="flex overflow-hidden relative bg-card rounded-2xl shadow-xl border border-border/20">
            {/* Main testimonial card */}
            <div className="w-full p-8 md:p-12">
              <Animation key={activeIndex} type="fade-in">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl italic leading-relaxed text-foreground/90">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  
                  <div className="flex items-center pt-4 border-t border-border/20">
                    <div className="ml-3">
                      <p className="font-serif font-bold text-lg text-foreground">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-foreground/70 text-sm">
                        {testimonials[activeIndex].location} • {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </Animation>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-3">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            {/* Indicator dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'w-6 h-2 bg-primary' 
                      : 'w-2 h-2 bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 