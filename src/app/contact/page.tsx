import { CalendarDays, Clock, Mail, MapPin, Phone, Video } from 'lucide-react';
import ContactForm from '@/components/site/ContactForm';
import { Eyebrow, TextLink } from '@/components/site/ui';
import { pageMetadata } from '@/lib/metadata';
import { CALENDLY_URL, EMAIL, HOURS, OFFICES, PHONES } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact Shuri Management Group. Book a 30-minute call, email info@shurimanagement.com or call +27 64 793 7889. Offices in Illovo, Sandton and Hoedspruit.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="container py-12 sm:py-16 lg:py-20">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-[2.25rem] text-earth sm:text-5xl lg:text-[3.4rem]">
            Talk to us about your lodge or reserve
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Tell us what you are working on. We typically reply within 24 hours on working days, or
            you can book a call straight into our diary.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container grid gap-14 py-12 sm:py-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-2xl text-earth sm:text-3xl">Send us a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-10 lg:col-span-5" aria-label="Other ways to reach us">
            <div className="rounded-sm bg-earth p-6 text-[#f3ece0] sm:p-8">
              <CalendarDays className="h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mt-4 text-2xl text-white">Book a 30-minute call</h2>
              <p className="mt-2 text-[#e9dfcf]/85">
                Pick a time that suits you. We meet on Zoom, Microsoft Teams or WhatsApp.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-sm bg-background px-5 py-2.5 font-medium text-earth hover:bg-white"
              >
                Choose a time on Calendly
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Email and phone
              </h2>
              <ul className="mt-3 space-y-1">
                <li>
                  <a href={`mailto:${EMAIL}`} className="flex min-h-11 items-center gap-3 text-earth hover:text-primary">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                    {EMAIL}
                  </a>
                </li>
                {PHONES.map((phone) => (
                  <li key={phone.href}>
                    <a href={phone.href} className="flex min-h-11 items-center gap-3 text-earth hover:text-primary">
                      <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                      {phone.display}
                      <span className="text-sm text-foreground/60">{phone.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Offices</h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {OFFICES.map((office) => (
                  <address key={office.name} className="flex gap-3 not-italic">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <span className="block font-medium text-earth">{office.name}</span>
                      {office.lines.map((line) => (
                        <span key={line} className="block text-foreground/80">
                          {line}
                        </span>
                      ))}
                    </span>
                  </address>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Office hours (SAST)
              </h2>
              <div className="mt-4 flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <dl className="grid flex-1 grid-cols-[1fr_auto] gap-x-6 gap-y-1">
                  {HOURS.map((row) => (
                    <div key={row.days} className="contents">
                      <dt className="text-foreground/80">{row.days}</dt>
                      <dd className="text-earth">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="mt-4 flex gap-3 text-foreground/80">
                <Video className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                Remote consultations on Zoom, Microsoft Teams or WhatsApp.
              </p>
            </div>

            <TextLink href="/privacy">How we handle your information</TextLink>
          </aside>
        </div>
      </section>
    </>
  );
}
