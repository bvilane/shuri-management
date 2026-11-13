import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { LeadFormProvider } from '@/context/LeadFormContext';
import LeadFormManager from '@/components/forms/LeadFormManager';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/site/JsonLd';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import {
  EMAIL,
  LEGAL_NAME,
  OFFICES,
  PHONES,
  SITE_NAME,
  SITE_URL,
  SOCIALS,
} from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const defaultTitle = 'Safari Lodge Management and Marketing | Shuri Management Group';
const defaultDescription =
  'Shuri Management Group manages and markets safari lodges, operates reserves for owners, and runs Safari Tech Consulting. One team for operations, marketing and technology.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_ZA',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE.url],
  },
  icons: {
    icon: '/images/logo.jpeg',
    shortcut: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
};

export const viewport: Viewport = {
  themeColor: '#faf6ef',
  width: 'device-width',
  initialScale: 1,
};

const organisationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  alternateName: 'SMG',
  url: SITE_URL,
  logo: `${SITE_URL}/images/smg.png`,
  email: EMAIL,
  telephone: PHONES[0].href.replace('tel:', ''),
  foundingDate: '2025',
  address: OFFICES.map((office) => ({
    '@type': 'PostalAddress',
    name: office.name,
    streetAddress: office.street,
    addressLocality: office.locality,
    addressRegion: office.region,
    postalCode: office.postalCode,
    addressCountry: 'ZA',
  })),
  contactPoint: PHONES.map((phone) => ({
    '@type': 'ContactPoint',
    telephone: phone.href.replace('tel:', ''),
    email: EMAIL,
    contactType: 'customer service',
    areaServed: 'Africa',
    availableLanguage: ['English'],
  })),
  sameAs: SOCIALS.map((social) => social.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={organisationJsonLd} />
        <LeadFormProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <LeadFormManager />
        </LeadFormProvider>
      </body>
    </html>
  );
}
