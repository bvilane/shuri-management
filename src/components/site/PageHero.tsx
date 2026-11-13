import Image from 'next/image';
import { Eyebrow } from './ui';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  image?: { src: string; alt: string; position?: string };
  aside?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Inner-page hero: text left, photo right on large screens; photo
 * below the text on phones. Sits on the ivory background.
 */
export default function PageHero({ eyebrow, title, intro, image, aside, children }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="container grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-20">
        <div className="lg:col-span-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-[2.25rem] text-earth sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          <div className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">{intro}</div>
          {children ? <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">{children}</div> : null}
        </div>
        {image ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand lg:col-span-6 lg:aspect-[5/4]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1200px) 560px, (min-width: 1024px) 48vw, 100vw"
              className="object-cover"
              style={image.position ? { objectPosition: image.position } : undefined}
            />
          </div>
        ) : aside ? (
          <div className="lg:col-span-6">{aside}</div>
        ) : null}
      </div>
    </section>
  );
}
