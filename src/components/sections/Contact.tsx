'use client';

import { useState } from 'react';
import Animation from '@/components/ui/Animation';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit the form to your backend or a service like Formspree
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ fullName: '', email: '', phone: '', country: '' });
    alert("Thanks for your inquiry! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <Animation type="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Let's Chat About Your Lodge
          </p>
          <p className="mt-6 text-center max-w-3xl mx-auto">
            Every lodge is different. Whether you need help with operations,
            marketing, or both, we'll tailor a solution to your exact needs.
          </p>
        </Animation>

        <div className="mt-12 max-w-2xl mx-auto">
          <Animation type="fade-up" delay={100}>
            <div className="bg-card rounded-lg border border-border p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-foreground/80 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground/80 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

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
                    required
                    className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-foreground/80 mb-1"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
}
