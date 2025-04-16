'use client';

import { useState } from 'react';
import Image from 'next/image';
import Animation from '@/components/ui/Animation';

// Contact method data with enhanced icons
const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email Us",
    info: "info@shurimanagement.com",
    link: "mailto:info@shurimanagement.com",
    hoverColor: "hover:bg-blue-50 hover:border-blue-100 dark:hover:bg-blue-950/20 dark:hover:border-blue-900/30"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Call Us",
    info: "+27 63 523 7168",
    link: "tel:+27635237168",
    hoverColor: "hover:bg-green-50 hover:border-green-100 dark:hover:bg-green-950/20 dark:hover:border-green-900/30"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Remote Consultations",
    info: "Zoom, Teams, or WhatsApp",
    link: "#",
    hoverColor: "hover:bg-amber-50 hover:border-amber-100 dark:hover:bg-amber-950/20 dark:hover:border-amber-900/30"
  }
];

// Service categories for the contact form dropdown
const serviceCategories = [
  { value: "operations", label: "Lodge Operations & Management" },
  { value: "marketing", label: "Marketing & Guest Acquisition" },
  { value: "training", label: "Staff Training & Development" },
  { value: "technology", label: "Technology Solutions" },
  { value: "development", label: "New Lodge Development" },
  { value: "consulting", label: "General Consulting" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    lodgeType: 'existing',
    serviceNeeded: '',
    lodgeSize: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission with a delay
    setTimeout(() => {
      // Here you would typically submit the form to your backend or a service like Formspree
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      setFormData({ 
        fullName: '', 
        email: '', 
        phone: '', 
        country: '', 
        message: '',
        lodgeType: 'existing',
        serviceNeeded: '',
        lodgeSize: '',
      });
      
      setFormStatus('success');
      
      // Reset status after showing success message
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-primary/5 blur-3xl"></div>
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-accent/5 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
      
      {/* Safari texture overlay */}
      <div className="absolute inset-0 bg-pattern-dots opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background/40 to-transparent"></div>
      
      {/* Safari-themed decorative elements */}
      <div className="absolute -left-8 top-1/3 w-16 h-16 pattern-animal-tracks opacity-[0.08] transform rotate-12"></div>
      <div className="absolute right-12 bottom-24 w-20 h-20 pattern-animal-tracks opacity-[0.08] transform -rotate-12"></div>
      
      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <Animation type="fade-up">
          <div className="flex justify-center">
            <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/10 text-primary font-medium mb-4 inline-block">GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-center">
            Contact Us
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 md:mt-6"></div>
          <p className="mt-4 md:mt-6 text-center max-w-3xl mx-auto text-foreground/80 text-base md:text-lg">
            Let's discuss how we can help your safari lodge thrive with tailored management solutions designed for your unique needs.
          </p>
        </Animation>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Enhanced Contact info column */}
          <div className="lg:col-span-2">
            <Animation type="fade-up" delay={100}>
              <div className="space-y-6 md:space-y-8">
                {/* Image with safari theme - Taller on mobile for better impact */}
                <div className="relative h-60 sm:h-64 md:h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/images/giraffe.jpg" 
                    alt="Safari landscape" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <h3 className="text-xl font-serif font-semibold">
                      How Can We Help You?
                    </h3>
                    <p className="text-white/90 text-sm mt-2">
                      Every safari lodge is unique. We'll tailor a solution specifically for your property.
                    </p>
                  </div>
                </div>

                {/* Enhanced contact methods with hover effects - More touch-friendly on mobile */}
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a 
                      href={method.link}
                      key={index} 
                      className={`flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-card/70 backdrop-blur-sm rounded-xl border border-border/30 transition-all duration-300 ${method.hoverColor} hover:shadow-md active:scale-[0.98] touch-manipulation group`}
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-base md:text-lg text-foreground group-hover:text-primary transition-colors">{method.title}</h4>
                        <p className="text-sm md:text-base text-foreground/70">
                          {method.info}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Enhanced feature callout - Simplified for mobile */}
                <div className="p-4 md:p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 shadow-sm">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-semibold text-primary">
                        Fast Response Time
                      </h3>
                      <p className="text-sm md:text-base text-foreground/80 mt-2">
                        We understand that lodge operations don't wait. Our team typically responds within 
                        24 hours to all inquiries.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Office hours - Compact on mobile */}
                <div className="p-4 md:p-6 bg-card/70 backdrop-blur-sm rounded-xl border border-border/20">
                  <h4 className="font-medium mb-3 flex items-center gap-2 text-base">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Office Hours
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Monday - Friday:</span>
                      <span>8:00 AM - 5:00 PM SAST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Saturday:</span>
                      <span>9:00 AM - 1:00 PM SAST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          </div>

          {/* Enhanced Contact form column - Better mobile layout */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            <Animation type="fade-up" delay={150}>
              <div className="bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm rounded-xl border border-border/30 p-5 md:p-8 shadow-lg relative overflow-hidden">
                {/* Safari-themed background accents */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
                
                {/* Safari tracks decorative elements */}
                <div className="absolute top-8 right-8 w-12 h-12 text-primary/5">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/><circle cx="16" cy="15" r="2"/><circle cx="8" cy="15" r="2"/><circle cx="21" cy="18" r="2"/><circle cx="3" cy="18" r="2"/></svg>
                </div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 md:mr-4">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold">Send Us a Message</h3>
                  </div>
                  
                  {/* Success message displayed after form submission */}
                  {formStatus === 'success' && (
                    <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded dark:bg-green-950/30 dark:border-green-500/50">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium text-green-800 dark:text-green-300">Message sent successfully!</span>
                      </div>
                      <p className="mt-2 text-sm text-green-700 dark:text-green-400">
                        Thank you for reaching out. We'll be in touch shortly.
                      </p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                    {/* Stack fields in single column on small screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-1 md:space-y-2">
                        <label
                          htmlFor="fullName"
                          className="block text-xs md:text-sm font-medium text-foreground flex items-center"
                        >
                          Full Name<span className="text-primary ml-1">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 text-base bg-background/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                        />
                      </div>

                      <div className="space-y-1 md:space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-xs md:text-sm font-medium text-foreground flex items-center"
                        >
                          Email<span className="text-primary ml-1">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Your email address"
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 text-base bg-background/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-1 md:space-y-2">
                        <label
                          htmlFor="phone"
                          className="block text-xs md:text-sm font-medium text-foreground"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 text-base bg-background/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                        />
                      </div>

                      <div className="space-y-1 md:space-y-2">
                        <label
                          htmlFor="country"
                          className="block text-xs md:text-sm font-medium text-foreground flex items-center"
                        >
                          Country/Region<span className="text-primary ml-1">*</span>
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          placeholder="Country where your lodge is located"
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 text-base bg-background/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-1 md:space-y-2">
                        <label
                          htmlFor="lodgeType"
                          className="block text-xs md:text-sm font-medium text-foreground"
                        >
                          Lodge Type
                        </label>
                        <select
                          id="lodgeType"
                          name="lodgeType"
                          value={formData.lodgeType}
                          onChange={handleChange}
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 text-base bg-background/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors appearance-none bg-select-arrow bg-no-repeat bg-[position:right_1rem_center]"
                        >
                          <option value="existing">Existing Lodge</option>
                          <option value="new">New Lodge Development</option>
                          <option value="campsite">Luxury Campsite</option>
                          <option value="resort">Safari Resort</option>
                          <option value="other">Other Property Type</option>
                        </select>
                      </div>
                      
                      <div className="space-y-1 md:space-y-2">
                        <label
                          htmlFor="lodgeSize"
                          className="block text-xs md:text-sm font-medium text-foreground"
                        >
                          Lodge Size
                        </label>
                        <select
                          id="lodgeSize"
                          name="lodgeSize"
                          value={formData.lodgeSize}
                          onChange={handleChange}
                          className="w-full px-3 md:px-4 py-2.5 md:py-3 text-base bg-background/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors appearance-none bg-select-arrow bg-no-repeat bg-[position:right_1rem_center]"
                        >
                          <option value="">Select size (if applicable)</option>
                          <option value="small">Small (1-10 rooms)</option>
                          <option value="medium">Medium (11-25 rooms)</option>
                          <option value="large">Large (26+ rooms)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-1 md:space-y-2">
                      <label
                        htmlFor="serviceNeeded"
                        className="block text-xs md:text-sm font-medium text-foreground"
                      >
                        Service Needed
                      </label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-base bg-background/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors appearance-none bg-select-arrow bg-no-repeat bg-[position:right_1rem_center]"
                      >
                        <option value="">Select a service category</option>
                        {serviceCategories.map(category => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-xs md:text-sm font-medium text-foreground flex items-center"
                      >
                        How can we help you?<span className="text-primary ml-1">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your specific needs or questions..."
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-base bg-background/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4 md:px-6 py-3 md:py-3.5 bg-primary text-white rounded-lg hover:bg-primary/90 active:bg-primary/90 transition-all duration-300 font-medium shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed text-base"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-3 md:mt-4 text-xs text-foreground/60 gap-2 md:gap-0">
                      <p>
                        <span className="text-primary">*</span> Required fields
                      </p>
                      <p className="text-xs">
                        By submitting, you agree to our <a href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </section>
  );
}
