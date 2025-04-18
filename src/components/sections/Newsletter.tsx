'use client';

import { useState, useEffect } from 'react';
import Animation from '@/components/ui/Animation';

export default function Newsletter({ useSubstack = true }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', { firstName, email });
    setIsSubmitted(true);
    setEmail('');
    setFirstName('');
    // Here you would typically submit to your newsletter service
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Animation type="fade-up">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-center">
              Subscribe to Our Newsletter
            </h3>
            <p className="mt-4 text-center text-foreground/80">
              👉 Join other lodge professionals already learning how to grow
              smarter, not harder.
            </p>
          </Animation>

          <div className="mt-8">
            {useSubstack ? (
              <Animation type="fade-up" delay={100}>
                <div className="flex justify-center">
                  <iframe
                    src="https://lodgedispatch.substack.com/embed"
                    width="480"
                    height="320"
                    style={{ 
                      border: '1px solid #e2d5c0', 
                      background: '#f8f5f0',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                    frameBorder="0"
                    scrolling="no"
                    title="Lodge Dispatch Newsletter"
                    className="mx-auto max-w-full"
                  ></iframe>
                </div>
              </Animation>
            ) : (
              <Animation type="fade-up" delay={100}>
                <div className="bg-card rounded-lg border border-border p-6">
                  {isSubmitted ? (
                    <div className="text-center py-4">
                      <svg
                        className="w-16 h-16 text-accent mx-auto mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <h4 className="text-xl font-semibold mb-2">
                        Thank you for subscribing!
                      </h4>
                      <p>You'll receive our next newsletter in your inbox.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium whitespace-nowrap"
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>
              </Animation>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Optional popup version that appears after X time
export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', { firstName, email });
    setIsSubmitted(true);
    // Here you would typically submit to your newsletter service
  };

  // Show popup after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4">
      <div className="relative bg-card rounded-lg shadow-lg max-w-md w-full p-6">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-foreground/50 hover:text-foreground"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Close</span>
        </button>

        <h3 className="text-xl font-serif font-bold text-center">
          Join The Lodge Dispatch
        </h3>
        <p className="mt-2 text-center text-sm text-foreground/80">
          Get exclusive lodge management tips and strategies sent directly to
          your inbox.
        </p>

        {isSubmitted ? (
          <div className="text-center py-4 mt-4">
            <svg
              className="w-16 h-16 text-accent mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h4 className="text-lg font-semibold mb-2">
              Thank you for subscribing!
            </h4>
            <p className="text-sm">
              You'll receive our next newsletter in your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              className="w-full px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
