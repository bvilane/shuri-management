import Image from 'next/image';
import CtaBand from '@/components/site/CtaBand';
import { Eyebrow, Section, TextLink } from '@/components/site/ui';
import { pageMetadata } from '@/lib/metadata';
import { FOUNDATION_URL, LEGAL_NAME, REG_NUMBER, TAGLINE } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'About',
  description:
    'Shuri Management Group manages and markets safari lodges, operates reserves and runs Safari Tech Consulting. Our story, mission, beliefs and the advisory network behind the team.',
  path: '/about',
});

const beliefs = [
  {
    title: 'Representation that reflects Africa',
    text: 'Africans as storytellers, stewards and stakeholders in safari tourism, at every level of the industry.',
  },
  {
    title: 'Lodges that uplift community',
    text: 'A lodge should be good news for the people who live around it: local jobs, local suppliers and local stories told with care.',
  },
  {
    title: 'World-class hospitality that honours the wild',
    text: 'Service to the highest standard, delivered in a way that protects the places guests travel so far to see.',
  },
];

const roles = [
  'Former lodge managers',
  'Operations directors',
  'Field guides and trackers',
  'HR leads',
  'Food and beverage specialists',
  'Leadership specialists',
];

export default function AboutPage() {
  return (
    <>
      {/* Story */}
      <section className="border-b border-border bg-background">
        <div className="container grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
          <div className="lg:col-span-7">
            <Eyebrow>About us</Eyebrow>
            <h1 className="mt-4 text-[2.25rem] text-earth sm:text-5xl lg:text-[3.4rem]">
              It started with a friend&apos;s lodge
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>
                A friend from Japan had bought a safari lodge, and he asked our founder, Bavukile
                Vilane, to help him run it. That request became Shuri Management Group.
              </p>
              <p>
                Bavu brought two backgrounds to the job. He studied software engineering, and safari
                was already in the family: his father was a field guide, trained by one of the
                region&apos;s established safari companies.
              </p>
              <p>
                Running that first lodge showed what owners need most: one partner who handles
                operations, marketing and technology together, and who answers to the owner.
                Shuri Management Group was registered in 2025 to be that partner.
              </p>
              <p>
                Today we manage and market safari lodges, operate reserves on behalf of their owners,
                run our technology arm, Safari Tech Consulting, and manage and operate four travel
                ventures.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sand">
              <Image
                src="/images/site/lodge-canopy.jpg"
                alt="Aerial view of thatched lodge rooms and a pool among dense green trees"
                fill
                priority
                sizes="(min-width: 1200px) 460px, (min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-6 font-serif text-2xl leading-snug text-earth">{TAGLINE}</p>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <Section tone="earth" labelledBy="mission-heading">
        <h2 id="mission-heading" className="sr-only">
          Mission and vision
        </h2>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow tone="light">Our mission</Eyebrow>
            <p className="mt-4 font-serif text-2xl leading-snug text-white sm:text-[1.7rem]">
              To build Africa&apos;s most talked-about, most profitable safari lodges by combining
              smart operations, bold marketing, and unforgettable guest experiences while protecting
              nature and uplifting local communities.
            </p>
          </div>
          <div>
            <Eyebrow tone="light">Our vision</Eyebrow>
            <p className="mt-4 font-serif text-2xl leading-snug text-white sm:text-[1.7rem]">
              To transform safari tourism into an experience that resonates with today&apos;s
              travellers and future generations through equity, community upliftment, and
              sustainable hospitality.
            </p>
          </div>
        </div>
      </Section>

      {/* Beliefs */}
      <Section tone="ivory" labelledBy="beliefs-heading">
        <div className="max-w-2xl">
          <Eyebrow>What we believe</Eyebrow>
          <h2 id="beliefs-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
            Three beliefs behind every decision
          </h2>
        </div>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {beliefs.map((belief, index) => (
            <li key={belief.title} className="border-t-2 border-accent pt-5">
              <span className="font-serif text-lg text-primary">0{index + 1}</span>
              <h3 className="mt-2 text-2xl text-earth">{belief.title}</h3>
              <p className="mt-3 leading-relaxed text-foreground/80">{belief.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* How we work */}
      <Section tone="sand" labelledBy="how-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>How we work</Eyebrow>
            <h2 id="how-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
              On site, in the systems, alongside your team
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85 lg:col-span-7">
            <p className="font-serif text-2xl leading-snug text-earth">
              We&apos;re not consultants who just give advice. We show up, build systems, train your
              team, and grow your lodge with you.
            </p>
            <p>
              Every engagement starts with a discovery call and a written plan. From there we work
              inside the operation: setting standards, training people, running the marketing and
              reporting on results. Our fees are linked to performance above an agreed baseline, so
              we only do well when the lodge does.
            </p>
            <TextLink href="/lodge-management#engagement">Ways to work with us</TextLink>
          </div>
        </div>
      </Section>

      {/* Advisory network */}
      <Section tone="ivory" labelledBy="network-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Advisory network</Eyebrow>
            <h2 id="network-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
              150+ years of combined safari and hospitality experience
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-foreground/85">
              Behind our team is an advisory and consulting network of people who have run lodges
              and led teams in the field. Members have individually worked for some of Africa&apos;s
              biggest safari operators, in South Africa, Kenya, Zambia, Botswana and Tanzania.
            </p>
            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {roles.map((role) => (
                <li key={role} className="border-b border-border py-3 text-earth">
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Impact */}
      <section className="relative isolate overflow-hidden text-white" aria-labelledby="impact-heading">
        <Image
          src="/images/site/elephants-camp.jpg"
          alt="Elephants walking past a tented camp"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#1c140e]/75" />
        <div className="container py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <Eyebrow tone="light">Impact</Eyebrow>
            <h2 id="impact-heading" className="mt-3 text-3xl text-white sm:text-4xl">
              Giving back through The Shuri Foundation
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              Our impact work runs through The Shuri Foundation, which funds community, conservation
              and inclusive-access projects. That includes guiding opportunities for young people and
              bringing local students into the bush for the first time.
            </p>
            <TextLink href={FOUNDATION_URL} external tone="light" className="mt-6">
              Visit theshurifoundation.org
            </TextLink>
          </div>
        </div>
      </section>

      <Section tone="muted" className="!py-10">
        <p className="text-sm text-foreground/70">
          {LEGAL_NAME}, registration number {REG_NUMBER}. Head office in Illovo, Sandton, with an
          office in Hoedspruit, Limpopo.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
