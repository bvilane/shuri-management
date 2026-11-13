import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import BookCallButton from '@/components/site/BookCallButton';
import CtaBand from '@/components/site/CtaBand';
import NewsletterBlock from '@/components/site/NewsletterBlock';
import PostList from '@/components/site/PostList';
import { Eyebrow, Section, TextLink } from '@/components/site/ui';
import { pageMetadata } from '@/lib/metadata';
import { getPosts } from '@/lib/sanity';
import { FREE_GUIDE, TAGLINE, VENTURES } from '@/lib/site';

export const revalidate = 3600; // keep in step with INSIGHTS_REVALIDATE

export const metadata = pageMetadata({
  title: 'Safari Lodge Management and Marketing | Shuri Management Group',
  absoluteTitle: true,
  description:
    'We manage and market safari lodges. Shuri Management Group runs lodge operations, marketing and bookings, operates reserves for owners, and provides safari technology through Safari Tech Consulting.',
  path: '/',
});

const pillars = [
  {
    number: '01',
    title: 'Lodge Management',
    text: 'Daily operations, SOPs, staff and guide training, procurement and booking systems. We run the lodge to a standard you can see in the numbers and in the guest reviews.',
    href: '/lodge-management',
  },
  {
    number: '02',
    title: 'Lodge Marketing',
    text: 'Brand, social media, paid ads, email and WhatsApp, on-site photo and video, and a booking path that turns interest into direct reservations.',
    href: '/lodge-management#marketing',
  },
  {
    number: '03',
    title: 'Reserve Management',
    text: 'Hospitality across every camp and lodge, reserve services coordinated, and qualified specialists brought in where the land needs them. You keep ownership. We operate.',
    href: '/reserve-management',
  },
  {
    number: '04',
    title: 'Safari Tech Consulting',
    text: 'Connectivity, wildlife and security tech, fleet tracking, lodge software and custom builds, designed for places where the signal drops.',
    href: '/safari-tech-consulting',
  },
];

const steps = [
  {
    title: 'Share your details',
    text: 'Tell us about your lodge, reserve or project through the form, or book a call directly.',
  },
  {
    title: 'Discovery call',
    text: 'A conversation about where the property is today, where you want it to be, and what is in the way.',
  },
  {
    title: 'Custom growth plan',
    text: 'A written plan across operations, marketing and technology, with clear priorities and the measures we will track.',
  },
  {
    title: 'Execution and support',
    text: 'We do the work alongside your team: on site, inside the systems and across your marketing channels.',
  },
  {
    title: 'Growth you can measure',
    text: 'Tracked performance and regular updates, so you always know what is working and what we are changing.',
  },
];

const reasons = [
  {
    title: 'Safari specialists, not generalists',
    text: 'Safari hospitality is all we do. We understand remote staffing, seasonality and guests who travel a long way for a few nights in the bush.',
  },
  {
    title: 'One partner, one point of contact',
    text: 'Operations, marketing and technology from one team, so nothing falls between three suppliers.',
  },
  {
    title: 'Paid for results',
    text: 'Our fees are linked to revenue and performance above a baseline we agree with you, not a flat retainer.',
  },
  {
    title: 'We work for the owner',
    text: 'Not for booking platforms that pay on commission. Every recommendation is made in your interest.',
  },
  {
    title: 'Transparent reporting',
    text: 'You see what we see: bookings, revenue, costs and what we are doing about each.',
  },
  {
    title: 'Lodges that give back',
    text: 'Local hiring, local procurement and local storytelling are part of how we operate, not an add-on.',
  },
  {
    title: 'Technology that works off the grid',
    text: 'Systems chosen and set up for remote, low-connectivity locations, and supported when they need attention.',
  },
];

export default async function HomePage() {
  const posts = await getPosts(3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-earth text-white">
        <Image
          src="/images/site/camp-sunset.jpg"
          alt="A safari camp lit up at dusk on a rocky ridge above the plains"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1c140e]/85 via-[#1c140e]/55 to-[#1c140e]/20" />
        <div className="container flex min-h-[78svh] flex-col justify-end pb-14 pt-24 sm:min-h-[80vh] sm:pb-20 lg:max-h-[860px]">
          <div className="max-w-2xl">
            <Eyebrow tone="light">Shuri Management Group</Eyebrow>
            <h1 className="mt-4 text-[2.6rem] leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              We Manage &amp; Market Safari Lodges
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
              One team for the running of your lodge and the filling of its rooms. We build the
              systems, train your people and bring in the guests, then stay to run it with you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <BookCallButton variant="light">Book a discovery call</BookCallButton>
              <TextLink href="#what-we-do" tone="light">
                See what we do
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning statement */}
      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-serif text-3xl leading-snug text-earth sm:text-4xl">{TAGLINE}</p>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85 lg:col-span-7">
            <p>
              Many lodges work with one company for operations, another for marketing and a third for
              their technology, then spend their own time getting the three to work together. We
              bring all of it under one roof.
            </p>
            <p>
              Shuri Management Group is a South African company that manages and markets safari
              lodges, operates reserves on behalf of their owners, and runs its own technology arm,
              Safari Tech Consulting.
            </p>
            <p className="border-l-2 border-accent pl-5 font-medium text-earth">
              We&apos;re not consultants who just give advice. We show up, build systems, train
              your team, and grow your lodge with you.
            </p>
          </div>
        </div>
      </Section>

      {/* Four pillars */}
      <Section tone="sand" id="what-we-do" labelledBy="what-we-do-heading">
        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 id="what-we-do-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
            Four ways we work with owners
          </h2>
        </div>
        <ol className="mt-10 border-t border-earth/15">
          {pillars.map((pillar) => (
            <li key={pillar.number} className="border-b border-earth/15">
              <Link
                href={pillar.href}
                className="group grid gap-3 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-8"
              >
                <span className="font-serif text-lg text-primary sm:col-span-1">{pillar.number}</span>
                <h3 className="text-2xl text-earth transition-colors group-hover:text-primary sm:col-span-4 sm:text-[1.7rem]">
                  {pillar.title}
                </h3>
                <p className="text-foreground/80 sm:col-span-6">{pillar.text}</p>
                <span className="hidden justify-end sm:col-span-1 sm:flex" aria-hidden="true">
                  <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      {/* Case study */}
      <section className="bg-background" aria-labelledby="case-study-heading">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <Image
              src="/images/site/lodge-cottage.jpg"
              alt="A thatched lodge cottage with a stone path, set among acacia trees"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center px-4 py-14 sm:px-10 lg:px-16 lg:py-20">
            <div className="max-w-lg">
              <Eyebrow>From the field</Eyebrow>
              <h2 id="case-study-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
                A new lodge, profitable in its first year
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/85">
                A new, owner-run lodge in Hoedspruit opened in 2025. We helped set up its
                operations, systems and marketing, and it reached profitability in its first year.
              </p>
              <p className="mt-4 leading-relaxed text-foreground/75">
                We keep client names private. On a discovery call we are happy to talk through how
                we approached it and what we would do for your property.
              </p>
              <div className="mt-8">
                <BookCallButton variant="outline">Talk to us about your lodge</BookCallButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <Section tone="earth" labelledBy="process-heading">
        <div className="max-w-2xl">
          <Eyebrow tone="light">How we work</Eyebrow>
          <h2 id="process-heading" className="mt-3 text-3xl text-white sm:text-4xl">
            From first call to measurable growth
          </h2>
        </div>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-white/20 pt-5">
              <span className="font-serif text-4xl text-accent">{index + 1}</span>
              <h3 className="mt-3 font-sans text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-[0.97rem] leading-relaxed text-[#e9dfcf]/85">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Why owners choose SMG */}
      <Section tone="ivory" labelledBy="why-heading">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Why owners work with us</Eyebrow>
            <h2 id="why-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
              Built around the owner, not the commission
            </h2>
            <div className="relative mt-8 hidden aspect-[3/4] overflow-hidden rounded-sm lg:block">
              <Image
                src="/images/site/guest-veranda.jpg"
                alt="A guest on a thatched veranda looking out over the bush"
                fill
                sizes="(min-width: 1200px) 360px, 30vw"
                className="object-cover"
              />
            </div>
          </div>
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
            {reasons.map((reason) => (
              <div key={reason.title}>
                <dt className="font-serif text-xl text-earth">{reason.title}</dt>
                <dd className="mt-2 leading-relaxed text-foreground/80">{reason.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Ventures teaser */}
      <section className="relative isolate overflow-hidden text-white" aria-labelledby="ventures-heading">
        <Image
          src="/images/site/elephants-camp.jpg"
          alt="A herd of elephants walking past tented safari suites"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#1c140e]/75" />
        <div className="container grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <Eyebrow tone="light">Ventures</Eyebrow>
            <h2 id="ventures-heading" className="mt-3 text-3xl text-white sm:text-4xl">
              We also run travel ventures
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              Shuri Management Group manages and operates four travel and destination
              businesses. They keep us close to how travellers search, plan and book.
            </p>
            <TextLink href="/ventures" tone="light" className="mt-6">
              About our ventures
            </TextLink>
          </div>
          <ul className="divide-y divide-white/20 border-y border-white/20 lg:col-span-6 lg:col-start-7">
            {VENTURES.map((venture) => (
              <li key={venture.name}>
                <a
                  href={venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 py-5"
                >
                  <span>
                    <span className="block font-serif text-xl text-white group-hover:text-accent">
                      {venture.name}
                    </span>
                    <span className="mt-1 block text-[0.97rem] text-white/75">{venture.summary}</span>
                  </span>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="sr-only">(opens {venture.domain} in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insights teaser */}
      <Section tone="ivory" labelledBy="insights-heading">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Insights</Eyebrow>
            <h2 id="insights-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
              Practical reading for lodge owners
            </h2>
          </div>
          <TextLink href="/insights">All insights and guides</TextLink>
        </div>
        {posts.length > 0 ? (
          <div className="mt-10">
            <PostList posts={posts} />
          </div>
        ) : (
          <div className="mt-10 grid gap-6 border-t border-border pt-8 md:grid-cols-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary md:col-span-3">
              Free guide
            </p>
            <div className="md:col-span-9">
              <h3 className="text-2xl text-earth">{FREE_GUIDE.title}</h3>
              <p className="mt-2 text-foreground/80">{FREE_GUIDE.subtitle}.</p>
              <TextLink href={FREE_GUIDE.href} external className="mt-4">
                Get the free guide
              </TextLink>
            </div>
          </div>
        )}
      </Section>

      <CtaBand />
      <NewsletterBlock />
    </>
  );
}
