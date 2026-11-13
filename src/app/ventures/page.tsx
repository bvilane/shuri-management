import { ArrowUpRight } from 'lucide-react';
import CtaBand from '@/components/site/CtaBand';
import PageHero from '@/components/site/PageHero';
import { Section } from '@/components/site/ui';
import { pageMetadata } from '@/lib/metadata';
import { VENTURES } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Ventures',
  description:
    'The travel and destination ventures managed and operated by Shuri Management Group: The Shuri Way, The Shuri Collection, The Northern Circuit and Wild About Hoedspruit.',
  path: '/ventures',
});

export default function VenturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Shuri Management Group"
        title="Ventures we manage and operate"
        intro={
          <p>
            Alongside our work for lodge and reserve owners, we manage and operate four travel and
            destination businesses. They draw on the same team and standards we bring to clients,
            and they keep us close to how travellers search, plan and book today.
          </p>
        }
        image={{
          src: '/images/site/lodge-thatch.jpg',
          alt: 'Aerial view of a thatched lodge and pool among trees at the foot of a cliff',
        }}
      />

      <Section tone="ivory" labelledBy="ventures-list-heading">
        <h2 id="ventures-list-heading" className="sr-only">
          Our ventures
        </h2>
        <ol className="border-t border-earth/15">
          {VENTURES.map((venture, index) => (
            <li key={venture.name} className="grid gap-4 border-b border-earth/15 py-10 lg:grid-cols-12 lg:gap-10">
              <span className="font-serif text-lg text-primary lg:col-span-1">0{index + 1}</span>
              <div className="lg:col-span-4">
                <h3 className="text-3xl text-earth">{venture.name}</h3>
                <p className="mt-1 text-foreground/60">{venture.domain}</p>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg leading-relaxed text-foreground/85">{venture.description}</p>
                <a
                  href={venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-medium text-primary underline decoration-primary/40 underline-offset-[6px] hover:decoration-primary"
                >
                  Visit {venture.domain}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="Want this thinking applied to your lodge?"
        text="The same team that runs these ventures manages and markets lodges for owners. Tell us about yours."
      />
    </>
  );
}
