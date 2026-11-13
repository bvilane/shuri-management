import Image from 'next/image';
import BookCallButton from '@/components/site/BookCallButton';
import CtaBand from '@/components/site/CtaBand';
import PageHero from '@/components/site/PageHero';
import { Eyebrow, Section, TextLink } from '@/components/site/ui';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Reserve Management',
  description:
    'Shuri Management Group operates game reserves and multi-camp hospitality on behalf of owners: camp and lodge operations, reserve services, specialist partners, community partnerships and technology.',
  path: '/reserve-management',
});

const scope = [
  {
    title: 'Hospitality operations across camps and lodges',
    text: 'One operating standard across every camp and lodge on the reserve: staffing, training, guest experience, reservations and marketing.',
  },
  {
    title: 'Coordination of reserve services',
    text: 'Day-to-day coordination of the services a reserve depends on, so the owner deals with one operating partner instead of many separate contractors.',
  },
  {
    title: 'Conservation, security and ecology, with qualified specialists',
    text: 'We work with you and with qualified specialists on conservation, security and ecological management. The specialists lead in their fields. We make sure the work is planned, joined up and reported.',
  },
  {
    title: 'Community partnerships',
    text: 'Local hiring, local suppliers and working relationships with neighbouring communities, built into how the reserve operates.',
  },
  {
    title: 'Technology across the reserve',
    text: 'Connectivity, wildlife tracking, perimeter security and vehicle tracking through Safari Tech Consulting, our technology arm.',
  },
];

const ownerTerms = [
  {
    title: 'Ownership stays with you',
    text: 'You keep the land, the assets and the final say on strategy. We operate on your behalf.',
  },
  {
    title: 'One operating partner',
    text: 'Hospitality, reserve services and technology run by one team, with one point of contact.',
  },
  {
    title: 'Regular, honest reporting',
    text: 'Clear updates on hospitality performance, operations and the work of specialists on the reserve.',
  },
];

export default function ReserveManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Reserve management"
        title="You own the reserve. We run the operation."
        intro={
          <p>
            A private reserve with several camps or lodges is a hospitality business, a conservation
            responsibility and a community commitment, all at once. We operate it on your behalf
            across all three, while ownership stays with you.
          </p>
        }
        image={{
          src: '/images/site/giraffe-waterhole.jpg',
          alt: 'Giraffes gathered at a waterhole in the late afternoon light',
        }}
      >
        <BookCallButton>Talk to us about your reserve</BookCallButton>
      </PageHero>

      <Section tone="ivory" labelledBy="scope-heading">
        <div className="max-w-2xl">
          <Eyebrow>What we take on</Eyebrow>
          <h2 id="scope-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
            Everything the owner needs run, under one operator
          </h2>
        </div>
        <ol className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {scope.map((item, index) => (
            <li key={item.title} className="flex gap-5">
              <span className="font-serif text-3xl leading-none text-primary">{index + 1}</span>
              <div>
                <h3 className="text-xl text-earth sm:text-[1.4rem]">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-foreground/80">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <section className="bg-sand" aria-labelledby="owners-heading">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-4 py-14 sm:px-10 lg:order-1 lg:px-16 lg:py-20">
            <div className="max-w-lg">
              <Eyebrow>For owners</Eyebrow>
              <h2 id="owners-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
                How it works for you
              </h2>
              <dl className="mt-8 space-y-6">
                {ownerTerms.map((term) => (
                  <div key={term.title} className="border-l-2 border-primary pl-5">
                    <dt className="font-serif text-xl text-earth">{term.title}</dt>
                    <dd className="mt-1 leading-relaxed text-foreground/80">{term.text}</dd>
                  </div>
                ))}
              </dl>
              <TextLink href="/safari-tech-consulting" className="mt-8">
                See the technology we bring
              </TextLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] lg:order-2 lg:aspect-auto lg:min-h-[560px]">
            <Image
              src="/images/site/lodge-aerial.jpg"
              alt="Aerial view of a lodge with a pool and suites set in wide open bush"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Planning the future of a reserve?"
        text="Whether you are taking over a reserve, adding camps or looking for a new operator, we are glad to talk it through in confidence."
        buttonLabel="Talk to us about your reserve"
      />
    </>
  );
}
