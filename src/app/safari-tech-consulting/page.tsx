import Image from 'next/image';
import {
  BarChart3,
  Car,
  Code2,
  Globe,
  Headset,
  MonitorSmartphone,
  PawPrint,
  ShieldCheck,
  Wifi,
} from 'lucide-react';
import BookCallButton from '@/components/site/BookCallButton';
import CtaBand from '@/components/site/CtaBand';
import PageHero from '@/components/site/PageHero';
import { ButtonLink, Eyebrow, Section } from '@/components/site/ui';
import { pageMetadata } from '@/lib/metadata';
import { SAFARI_TECH_URL } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Safari Tech Consulting',
  description:
    'Safari Tech Consulting is the technology arm of Shuri Management Group: connectivity, wildlife tracking, perimeter security, fleet tracking, lodge software, AI visibility and custom builds for lodges and reserves.',
  path: '/safari-tech-consulting',
});

const services = [
  {
    icon: Wifi,
    title: 'Connectivity and remote infrastructure',
    text: 'Wi-Fi across camps, links between sites and the network equipment that keeps guests and staff connected far from the nearest town.',
  },
  {
    icon: PawPrint,
    title: 'Wildlife tracking and conservation tech',
    text: 'GPS collars and camera traps, with EarthRanger and SMART integration so field data ends up in one place.',
  },
  {
    icon: ShieldCheck,
    title: 'Perimeter and security',
    text: 'Fence monitoring, CCTV, thermal detection and access control for lodges and reserve boundaries.',
  },
  {
    icon: Car,
    title: 'Vehicle and fleet tracking',
    text: 'Location and usage for game drive vehicles and service fleets, so you know where every vehicle is and how it is used.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Lodge operations software',
    text: 'Property management systems, channel managers, booking engines and guest apps, chosen and set up to work together.',
  },
  {
    icon: Globe,
    title: 'Websites, digital presence and AI visibility',
    text: 'Fast, well-built websites, and making sure your lodge is found when travellers ask ChatGPT, Claude, Perplexity or Google AI Overviews where to stay.',
  },
  {
    icon: BarChart3,
    title: 'Data, AI and automation',
    text: 'Dashboards that bring bookings, revenue and operations into one view, plus integrations that take repetitive work off your team.',
  },
  {
    icon: Code2,
    title: 'Custom and bespoke builds',
    text: 'Apps and internal tools built for your operation when nothing off the shelf does the job.',
  },
  {
    icon: Headset,
    title: 'Managed services',
    text: 'Ongoing support and monitoring, delivered remote-first, so problems are picked up and fixed without waiting for a site visit.',
  },
];

const audiences = [
  { title: 'Safari lodges', text: 'Guest connectivity, booking software, websites and security.' },
  { title: 'Private reserves', text: 'Perimeter monitoring, wildlife tracking and fleet tracking across large areas.' },
  { title: 'Conservation organisations', text: 'Field data, tracking hardware and EarthRanger or SMART integration.' },
  { title: 'Activity operators', text: 'Bookings, vehicle tracking and a digital presence that brings in guests.' },
];

export default function SafariTechPage() {
  return (
    <>
      <PageHero
        eyebrow="Our technology arm"
        title="Safari Tech Consulting"
        intro={
          <>
            <p>
              Hardware and software for safari lodges, private reserves and conservation teams,
              including custom and bespoke builds. If a safari operator or reserve needs it, from
              vehicle tracking to a new booking engine, we can design it, install it and support it.
            </p>
            <p className="mt-4">
              Everything is chosen for places where the power is unreliable and the signal drops.
            </p>
          </>
        }
        aside={
          <div className="flex aspect-[4/3] items-center justify-center rounded-sm bg-sand p-10 sm:p-16">
            <Image
              src="/images/safari-tech-consulting-logo.png"
              alt="Safari Tech Consulting by Shuri logo"
              width={560}
              height={382}
              priority
              sizes="(min-width: 1024px) 400px, 80vw"
              className="h-auto w-full max-w-[400px]"
            />
          </div>
        }
      >
        <BookCallButton>Talk to us about your site</BookCallButton>
        <ButtonLink href={SAFARI_TECH_URL} external>
          Visit safaritechconsulting.com
        </ButtonLink>
      </PageHero>

      <Section tone="ivory" labelledBy="services-heading">
        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 id="services-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
            One team for every system on the property
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            Many lodges and reserves end up with one supplier for Wi-Fi, another for cameras and a
            third for software. We design the whole picture so it works together.
          </p>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Icon className="h-6 w-6 text-primary" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-4 font-sans text-lg font-semibold text-earth">{title}</h3>
              <p className="mt-2 leading-relaxed text-foreground/80">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="earth" labelledBy="audience-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow tone="light">Who it is for</Eyebrow>
            <h2 id="audience-heading" className="mt-3 text-3xl text-white sm:text-4xl">
              Built for the bush, not the office park
            </h2>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-sm bg-white/15 sm:grid-cols-2 lg:col-span-8">
            {audiences.map((item) => (
              <div key={item.title} className="bg-earth p-6">
                <dt className="font-serif text-xl text-white">{item.title}</dt>
                <dd className="mt-2 text-[#e9dfcf]/85">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <CtaBand
        title="Planning a technology project?"
        text="Tell us about the site and what is not working. We will tell you what we would fix first, and what it would take."
        buttonLabel="Talk to us about your site"
      />
    </>
  );
}
