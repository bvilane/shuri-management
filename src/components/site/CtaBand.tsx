import BookCallButton from './BookCallButton';
import { TextLink } from './ui';
import { CALENDLY_URL } from '@/lib/site';

interface CtaBandProps {
  title?: string;
  text?: string;
  buttonLabel?: string;
}

export default function CtaBand({
  title = 'Tell us about your lodge',
  text = 'Share a few details and we will set up a discovery call. No obligation, and a straight answer on whether we can help.',
  buttonLabel = 'Book a call',
}: CtaBandProps) {
  return (
    <section className="bg-primary text-white">
      <div className="container flex flex-col gap-8 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-white/85">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <BookCallButton variant="light">{buttonLabel}</BookCallButton>
          <TextLink href={CALENDLY_URL} external tone="light">
            Or pick a time on Calendly
          </TextLink>
        </div>
      </div>
    </section>
  );
}
