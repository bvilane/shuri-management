import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { LeadFormProvider } from '@/context/LeadFormContext';
import LeadFormManager from '@/components/forms/LeadFormManager';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Shuri Safari Lodge Management',
  description:
    'Premium safari lodge management services for an unforgettable experience',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <LeadFormProvider>
          {children}
          <LeadFormManager />
        </LeadFormProvider>
      </body>
    </html>
  );
}
