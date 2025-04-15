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
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <LeadFormProvider>
          {children}
          <LeadFormManager />
        </LeadFormProvider>
      </body>
    </html>
  );
}
