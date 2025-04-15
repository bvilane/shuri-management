'use client';

import { useState } from 'react';
import Animation from '@/components/ui/Animation';

// Contact method data
const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email Us",
    info: "info@shurimanagement.com",
    link: "mailto:info@shurimanagement.com"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Call Us",
    info: "+27 63 523 7168",
    link: "tel:+27635237168"
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
    link: "#"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    lodgeType: 'existing',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit the form to your backend or a service like Formspree
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ 
      fullName: '', 
      email: '', 
      phone: '', 
      country: '', 
      message: '',
      lodgeType: 'existing'
    });
    alert("Thanks for your inquiry! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 bottom-0 w-1/4 h-1/3 bg-primary/5 blur-3xl"></div>
      <div className="absolute right-0 top-0 w-1/4 h-1/3 bg-accent/5 blur-3xl"></div>
      
      <div className="container relative z-10">
        <Animation type="fade-up">
          <span className="block text-center text-primary font-medium mb-3">GET IN TOUCH</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Let's Chat About Your Lodge
          </p>
        </Animation>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info column */}
          <div className="lg:col-span-2">
            <Animation type="fade-up" delay={100}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-4">
                    How Can We Help You?
                  </h3>
                  <p className="text-foreground/80">
                    Every safari lodge is unique. Whether you need assistance with operations, 
                    marketing, staff training, or guest experience design, we'll tailor a solution 
                    specifically for your property.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/20">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{method.title}</h4>
                        <a 
                          href={method.link} 
                          className="text-foreground/80 hover:text-primary transition-colors"
                        >
                          {method.info}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-serif font-semibold text-primary mb-3">
                    Fast Response Time
                  </h3>
                  <p className="text-foreground/80">
                    We understand that lodge operations don't wait. Our team typically responds within 
                    24 hours to all inquiries.
                  </p>
                </div>
              </div>
            </Animation>
          </div>

          {/* Contact form column */}
          <div className="lg:col-span-3">
            <Animation type="fade-up" delay={150}>
              <div className="bg-card/70 backdrop-blur-sm rounded-xl border border-border/20 p-8 shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-foreground/80 mb-1"
                      >
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground/80 mb-1"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground/80 mb-1"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-foreground/80 mb-1"
                      >
                        Country/Region*
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lodgeType"
                      className="block text-sm font-medium text-foreground/80 mb-1"
                    >
                      Lodge Type
                    </label>
                    <select
                      id="lodgeType"
                      name="lodgeType"
                      value={formData.lodgeType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="existing">Existing Lodge</option>
                      <option value="new">New Lodge Development</option>
                      <option value="other">Other Property Type</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground/80 mb-1"
                    >
                      How can we help you?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium shadow-sm"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-center text-foreground/60 mt-3">
                    By submitting this form, you agree to our <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </section>
  );
}
