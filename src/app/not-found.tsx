import { ButtonLink, Eyebrow } from '@/components/site/ui';

export default function NotFound() {
  return (
    <section className="bg-background">
      <div className="container py-20 sm:py-28">
        <Eyebrow>Page not found</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl text-earth sm:text-5xl">This track goes nowhere</h1>
        <p className="mt-5 max-w-xl text-lg text-foreground/80">
          The page you were looking for has moved or no longer exists.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/" variant="primary">
            Back to the home page
          </ButtonLink>
          <ButtonLink href="/contact">Contact us</ButtonLink>
        </div>
      </div>
    </section>
  );
}
