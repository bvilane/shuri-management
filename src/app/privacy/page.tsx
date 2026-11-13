import { Eyebrow } from '@/components/site/ui';
import { pageMetadata } from '@/lib/metadata';
import { EMAIL, LEGAL_NAME, REG_NUMBER } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How Shuri Management Group collects, uses and protects personal information under the Protection of Personal Information Act (POPIA).',
  path: '/privacy',
});

const LAST_UPDATED = '13 November 2026';

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="container py-12 sm:py-16">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-4 text-[2.25rem] text-earth sm:text-5xl">Privacy policy</h1>
          <p className="mt-4 text-foreground/70">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <div className="prose-smg text-foreground/90">
            <p>
              This policy explains what personal information {LEGAL_NAME} (&quot;SMG&quot;,
              &quot;we&quot;, &quot;us&quot;) collects through this website, why we collect it, who
              we share it with and the rights you have under the Protection of Personal Information
              Act 4 of 2013 (POPIA). We have written it in plain language. If anything is unclear,
              email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>

            <h2>1. Who is responsible for your information</h2>
            <p>The responsible party for personal information collected on this website is:</p>
            <ul>
              <li>
                {LEGAL_NAME}, registration number {REG_NUMBER}
              </li>
              <li>Head office: 182 Oxford Rd, Illovo, Sandton, 2196, South Africa</li>
              <li>Information officer: Bavukile Vilane, Director</li>
              <li>
                Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>

            <h2>2. What we collect</h2>
            <p>We only collect the information you choose to give us through the forms on this site:</p>
            <ul>
              <li>
                <strong>Contact form:</strong> your name, email address, phone number (optional),
                country, the type and size of your property, the service you are interested in and
                your message.
              </li>
              <li>
                <strong>Book a call form:</strong> your name, email address, WhatsApp number, preferred
                way to be contacted, lodge name and location, the areas you would like help with, your
                biggest challenge, services you already use and your timeline.
              </li>
              <li>
                <strong>Newsletter sign-up:</strong> your first name and email address.
              </li>
            </ul>
            <p>
              Like most websites, our hosting provider automatically records basic technical
              information when you visit, such as your IP address, browser type and the pages you
              request. This is used to keep the site running and secure.
            </p>

            <h2>3. Why we use it</h2>
            <ul>
              <li>To reply to your enquiry and arrange a discovery call.</li>
              <li>To prepare a proposal or plan when you ask us for one.</li>
              <li>To send you our newsletter, if you have signed up for it.</li>
              <li>To keep a record of our communication with you.</li>
              <li>To keep the website secure and working properly.</li>
            </ul>
            <p>We do not sell your personal information, and we do not use it for any purpose you would not reasonably expect.</p>

            <h2>4. Our legal basis</h2>
            <p>
              We process your information because you have given it to us voluntarily and consented
              to us using it to respond to you, because it is needed to take steps you have asked for
              before entering into an agreement with us, or because we have a legitimate interest in
              running and securing our website. You can withdraw your consent at any time by emailing
              us. This does not affect anything we did lawfully before you withdrew it.
            </p>

            <h2>5. Who we share it with</h2>
            <p>
              We use a small number of trusted service providers (operators, in POPIA terms) to run
              this website. They process information only on our instructions and must keep it
              secure:
            </p>
            <ul>
              <li>
                <strong>Supabase:</strong> stores form submissions in a secure database.
              </li>
              <li>
                <strong>Resend:</strong> delivers form submissions to our team by email.
              </li>
              <li>
                <strong>Vercel:</strong> hosts the website.
              </li>
            </ul>
            <p>
              Some links on this site take you to other services that have their own privacy
              policies. If you use them, the information you give them is handled under their
              terms, not this policy:
            </p>
            <ul>
              <li>
                <strong>Calendly</strong>, when you book a call.
              </li>
              <li>
                <strong>Gumroad</strong>, when you download one of our guides.
              </li>
              <li>
                <strong>Substack</strong>, when you read or subscribe to our newsletter there.
              </li>
            </ul>
            <p>
              We may also disclose information where the law requires us to, for example in response
              to a lawful request from a regulator or court.
            </p>

            <h2>6. Information sent outside South Africa</h2>
            <p>
              Some of our service providers store or process information on servers outside South
              Africa, for example in the European Union or the United States. Where this happens we
              rely on providers that are bound by data protection laws, binding agreements or policies
              that give a level of protection substantially similar to POPIA, as section 72 of POPIA
              requires.
            </p>

            <h2>7. How long we keep it</h2>
            <p>
              We keep enquiry and call-booking information for as long as we need it to deal with
              your enquiry and any work that follows, and for up to three years after our last
              contact unless the law requires us to keep it longer. Newsletter details are kept until
              you unsubscribe. When we no longer need information, we delete it or make it
              anonymous.
            </p>

            <h2>8. How we protect it</h2>
            <p>
              We take reasonable technical and organisational measures to protect your information
              against loss, misuse and unauthorised access. The website uses encrypted (HTTPS)
              connections, form data is stored in an access-controlled database, and only people who
              need your information to do their work can see it. If we become aware of a security
              compromise that affects your information, we will notify you and the Information
              Regulator as POPIA requires.
            </p>

            <h2>9. Your rights</h2>
            <p>Under POPIA you have the right to:</p>
            <ul>
              <li>ask whether we hold personal information about you, and request a copy of it;</li>
              <li>ask us to correct information that is inaccurate, out of date or incomplete;</li>
              <li>ask us to delete information we no longer have a lawful reason to keep;</li>
              <li>object to us processing your information, including for direct marketing;</li>
              <li>withdraw your consent at any time; and</li>
              <li>complain to the Information Regulator.</li>
            </ul>
            <p>
              To use any of these rights, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We may need
              to confirm your identity before acting on a request, and we will respond within a
              reasonable time.
            </p>

            <h2>10. Direct marketing</h2>
            <p>
              We only send marketing emails to people who have signed up for them or who are existing
              contacts with a related enquiry. Every newsletter includes a way to unsubscribe, and you
              can also opt out at any time by emailing us.
            </p>

            <h2>11. Cookies</h2>
            <p>
              This website does not use advertising or analytics tracking cookies. Our pages and
              fonts are served from our own hosting, and we do not load third-party tracking scripts.
              If we change this, we will update this policy and ask for your consent where the law
              requires it.
            </p>

            <h2>12. Complaints</h2>
            <p>
              If you are unhappy with how we have handled your information, please contact us first
              so we can try to put it right. You also have the right to lodge a complaint with the
              Information Regulator of South Africa at{' '}
              <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer">
                inforegulator.org.za
              </a>
              .
            </p>

            <h2>13. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The date at the top shows when it was last
              changed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
