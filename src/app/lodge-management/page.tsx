import Image from 'next/image';
import BookCallButton from '@/components/site/BookCallButton';
import CtaBand from '@/components/site/CtaBand';
import PageHero from '@/components/site/PageHero';
import { Eyebrow, Section, TextLink } from '@/components/site/ui';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Lodge Management and Marketing',
  description:
    'Safari lodge management and marketing from one team: operations, SOPs, staff training, booking systems, social media, paid ads, media production and direct bookings, with results-linked fees.',
  path: '/lodge-management',
});

const operations = [
  {
    title: 'Daily lodge management',
    text: 'Hands-on running of the lodge, from front of house and housekeeping to food and beverage and the activity schedule.',
  },
  {
    title: 'Booking systems and automations',
    text: 'Reservations, confirmations and payments set up so that no enquiry sits unanswered in an inbox.',
  },
  {
    title: 'SOP design and implementation',
    text: 'Written standards for every department, trained in and checked, so quality does not depend on who is on shift.',
  },
  {
    title: 'Staff and guide training',
    text: 'Practical training for hospitality and guiding teams, built around your lodge and the guests you host.',
  },
  {
    title: 'Procurement and logistics',
    text: 'Suppliers, stock and deliveries managed for a remote location, with local suppliers first wherever possible.',
  },
  {
    title: 'Tech support',
    text: 'Day-to-day help with the systems your team relies on, backed by our technology arm, Safari Tech Consulting.',
  },
];

const marketing = [
  {
    title: 'Brand and marketing strategy',
    text: 'Who your guests are, what they are looking for, and how your lodge should speak to them.',
  },
  {
    title: 'Social media',
    text: 'Consistent, on-brand content and community management on the channels your guests actually use.',
  },
  {
    title: 'Paid ads on Meta and Google',
    text: 'Campaigns aimed at bookings rather than likes, with spend and results reported plainly.',
  },
  {
    title: 'Email and WhatsApp marketing',
    text: 'Staying in touch with past guests and warm enquiries, which is where repeat and referral bookings come from.',
  },
  {
    title: 'Website and booking-page optimisation',
    text: 'Clear pages, fast load times and a short path from browsing to a confirmed booking.',
  },
  {
    title: 'Media production',
    text: 'On-site photography and video, reels, drone footage and wildlife footage, shot for how travellers browse today.',
  },
  {
    title: 'Direct bookings',
    text: 'Growing the share of reservations that come straight to you, so less of every booking goes to commission.',
  },
];

const development = [
  {
    title: 'Pricing and positioning',
    text: 'Rates, packages and seasonality set against your market and what makes your lodge different.',
  },
  {
    title: 'Guest experience design',
    text: 'The full stay mapped from first enquiry to farewell, with the moments guests talk about designed in.',
  },
  {
    title: 'Sustainability planning',
    text: 'Practical plans for energy, water and waste that suit the site and the budget.',
  },
  {
    title: 'Community projects and CSI',
    text: 'Partnerships with neighbouring communities that are meaningful to them and honest in how they are told.',
  },
  {
    title: 'Performance tracking and reporting',
    text: 'Occupancy, revenue, costs and guest feedback in one regular report, with what we are doing about each.',
  },
];

const engagements = [
  {
    name: 'Full Lodge Management',
    line: 'You own and oversee. We operate.',
    text: 'We take responsibility for running the lodge day to day, including staffing, training, marketing and bookings, and report to you on performance.',
  },
  {
    name: 'Operational Partner',
    line: 'We run the operation. You keep marketing and bookings.',
    text: 'We run daily operations, staffing and training, while your team keeps control of marketing and reservations.',
  },
  {
    name: 'Advisory and Systems',
    line: 'We design it. Your manager runs it.',
    text: 'We design the SOPs, training and pricing, and support your lodge manager as they put them into practice.',
  },
];

function ServiceList({
  items,
  tone = 'dark',
}: {
  items: { title: string; text: string }[];
  tone?: 'dark' | 'light';
}) {
  const light = tone === 'light';
  return (
    <ul className={`divide-y border-y ${light ? 'divide-white/15 border-white/15' : 'divide-earth/15 border-earth/15'}`}>
      {items.map((item) => (
        <li key={item.title} className="grid gap-1 py-5 sm:grid-cols-12 sm:gap-6">
          <h3
            className={`font-sans text-lg font-semibold sm:col-span-5 ${light ? 'text-white' : 'text-earth'}`}
          >
            {item.title}
          </h3>
          <p className={`sm:col-span-7 ${light ? 'text-[#e9dfcf]/85' : 'text-foreground/80'}`}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default function LodgeManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Lodge management and marketing"
        title="We run your lodge and we fill it"
        intro={
          <p>
            A lodge does well when the operation and the marketing pull in the same direction. We
            take on both, so the stay you promise online is the stay your guests get, and the rooms
            are full enough to pay for it.
          </p>
        }
        image={{
          src: '/images/site/guest-veranda.jpg',
          alt: 'A guest on a thatched lodge veranda overlooking the bush',
        }}
      >
        <BookCallButton>Book a discovery call</BookCallButton>
        <TextLink href="#engagement">How we can work together</TextLink>
      </PageHero>

      {/* Operations */}
      <Section tone="ivory" id="operations" labelledBy="operations-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Lodge management</Eyebrow>
            <h2 id="operations-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
              Operations and systems
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              The daily work that guests never see and always feel. We set it up properly, write it
              down and train your team to run it.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ServiceList items={operations} />
          </div>
        </div>
      </Section>

      {/* Marketing: equal weight, distinct dark band */}
      <section id="marketing" aria-labelledby="marketing-heading" className="bg-earth text-[#f3ece0]">
        <div className="grid lg:grid-cols-12">
          <div className="relative aspect-[16/10] lg:col-span-5 lg:aspect-auto">
            <Image
              src="/images/site/lodge-deck.jpg"
              alt="A raised timber lodge deck on red sand with a giraffe sculpture beside the stairs"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="px-4 py-14 sm:px-10 lg:col-span-7 lg:px-14 lg:py-20">
            <Eyebrow tone="light">Lodge marketing</Eyebrow>
            <h2 id="marketing-heading" className="mt-3 text-3xl text-white sm:text-4xl">
              Marketing and growth
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#e9dfcf]/90">
              Marketing is as central to our work as operations. We build your brand, make the content,
              run the campaigns and fix the booking path, then report on bookings, not impressions.
            </p>
            <div className="mt-8">
              <ServiceList items={marketing} tone="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Business development */}
      <Section tone="sand" id="development" labelledBy="development-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Business development</Eyebrow>
            <h2 id="development-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
              Building a lodge that lasts
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              Beyond this season&apos;s bookings: the pricing, guest experience and community work
              that make a lodge worth more every year.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ServiceList items={development} />
          </div>
        </div>
      </Section>

      {/* Engagement levels */}
      <Section tone="ivory" id="engagement" labelledBy="engagement-heading">
        <div className="max-w-2xl">
          <Eyebrow>Ways to work with us</Eyebrow>
          <h2 id="engagement-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
            Choose how much you hand over
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            Every lodge is different, so we offer three levels of involvement. We will recommend one
            after the discovery call, and you can change it as the lodge grows.
          </p>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {engagements.map((item, index) => (
            <li key={item.name} className="bg-card p-6 sm:p-8">
              <span className="font-serif text-lg text-primary">0{index + 1}</span>
              <h3 className="mt-3 text-2xl text-earth">{item.name}</h3>
              <p className="mt-2 font-medium text-primary">{item.line}</p>
              <p className="mt-4 leading-relaxed text-foreground/80">{item.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="border-t-2 border-accent pt-6">
            <h3 className="text-2xl text-earth">Opening a new lodge?</h3>
            <p className="mt-3 leading-relaxed text-foreground/80">
              We can start before the first guest arrives. Pre-opening support covers recruitment
              planning, training design, brand and marketing strategy, and operational setup, so the
              lodge opens with a team, a system and a pipeline of bookings.
            </p>
          </div>
          <div className="border-t-2 border-accent pt-6">
            <h3 className="text-2xl text-earth">Results-linked pricing</h3>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Our fees are tied to revenue and performance above a baseline we agree with you at the
              start, rather than a flat monthly retainer. When the lodge does better, so do we. We set
              out the detail for your property after the discovery call.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Let's look at your lodge together"
        text="Tell us where the lodge is today and where you want it to be. We will come back with a straight view of what we would change first."
        buttonLabel="Book a discovery call"
      />
    </>
  );
}
