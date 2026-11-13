'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

const serviceOptions = [
  { value: 'operations', label: 'Lodge operations and management' },
  { value: 'marketing', label: 'Lodge marketing and bookings' },
  { value: 'reserve', label: 'Reserve management' },
  { value: 'technology', label: 'Safari Tech Consulting' },
  { value: 'training', label: 'Staff and guide training' },
  { value: 'development', label: 'New lodge or pre-opening' },
  { value: 'consulting', label: 'Something else' },
];

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  message: '',
  lodgeType: 'existing',
  serviceNeeded: '',
  lodgeSize: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass =
  'mt-2 block w-full rounded-sm border border-border bg-card px-3.5 py-3 text-base text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';
const labelClass = 'block text-sm font-medium text-earth';

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(result?.error || 'Something went wrong. Please try again.');
      }
      setFormData(initialState);
      setStatus('success');
    } catch (err) {
      const message =
        err instanceof Error && err.name === 'AbortError'
          ? 'The request timed out. Please try again.'
          : err instanceof Error
            ? err.message
            : 'Something went wrong. Please try again.';
      setError(message);
      setStatus('error');
    } finally {
      clearTimeout(timeoutId);
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-sm border border-border bg-card p-8" role="status">
        <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-2xl text-earth">Thank you, your message is with us</h3>
        <p className="mt-3 text-foreground/80">
          We typically reply within 24 hours on working days. If it is urgent, call us on the
          numbers on this page.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex min-h-11 items-center font-medium text-primary underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name <span className="text-primary">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone or WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            Country <span className="text-primary">*</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            required
            value={formData.country}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="lodgeType" className={labelClass}>
            Your property
          </label>
          <select
            id="lodgeType"
            name="lodgeType"
            value={formData.lodgeType}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="existing">An operating lodge</option>
            <option value="new">A new lodge or development</option>
            <option value="renovation">A renovation or rebrand</option>
            <option value="reserve">A reserve or multi-camp property</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="lodgeSize" className={labelClass}>
            Size
          </label>
          <select
            id="lodgeSize"
            name="lodgeSize"
            value={formData.lodgeSize}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="">Select if relevant</option>
            <option value="small">1 to 5 rooms</option>
            <option value="medium">6 to 15 rooms</option>
            <option value="large">16 rooms or more</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="serviceNeeded" className={labelClass}>
          What do you need help with?
        </label>
        <select
          id="serviceNeeded"
          name="serviceNeeded"
          value={formData.serviceNeeded}
          onChange={handleChange}
          className={fieldClass}
        >
          <option value="">Choose one</option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Where is the property, and what would you like to change?"
          className={fieldClass}
        />
      </div>

      {status === 'error' ? (
        <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-foreground/70">
          We use your details only to reply to you. See our{' '}
          <a href="/privacy" className="text-primary underline underline-offset-2">
            privacy policy
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            'Send message'
          )}
        </button>
      </div>
    </form>
  );
}
