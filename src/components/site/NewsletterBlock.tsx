'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { SUBSTACK_URL } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NewsletterBlock() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) throw new Error('Subscription failed');
      setFirstName('');
      setEmail('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="border-t border-border bg-muted" aria-labelledby="newsletter-heading">
      <div className="container grid gap-8 py-14 sm:py-16 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <h2 id="newsletter-heading" className="text-3xl text-earth">
            Notes for lodge owners
          </h2>
          <p className="mt-3 text-foreground/80">
            Occasional emails on lodge operations, marketing and safari tech. No spam, and you can
            unsubscribe at any time. You can also read past issues on{' '}
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2"
            >
              our Substack
            </a>
            .
          </p>
        </div>
        <div className="lg:col-span-7">
          {status === 'success' ? (
            <p className="rounded-sm border border-border bg-card px-5 py-4 text-earth" role="status">
              Thank you. You are on the list.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="nl-first-name">
                First name
              </label>
              <input
                id="nl-first-name"
                type="text"
                required
                autoComplete="given-name"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="min-h-12 w-full rounded-sm border border-border bg-card px-4 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:w-44"
              />
              <label className="sr-only" htmlFor="nl-email">
                Email
              </label>
              <input
                id="nl-email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-h-12 w-full flex-1 rounded-sm border border-border bg-card px-4 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-earth px-6 font-medium text-white transition-colors hover:bg-primary disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : null}
                Subscribe
              </button>
            </form>
          )}
          {status === 'error' ? (
            <p className="mt-3 text-sm text-red-800" role="alert">
              That did not go through. Please try again, or email us instead.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
