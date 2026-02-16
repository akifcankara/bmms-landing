import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';
import OrganizationSchema from '@/components/schema/OrganizationSchema';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Bridgemena - MENA Market Entry Experts | UAE & KSA Business Setup',
    template: '%s | Bridgemena'
  },
  description: 'Leading MENA market entry specialists. Company formation, visa processing, HR, accounting & business setup in UAE and Saudi Arabia. 500+ companies launched since 2010.',
  keywords: 'MENA market entry, UAE business setup, Saudi Arabia company formation, Dubai business, KSA expansion, Middle East business services',
  authors: [{ name: 'Bridgemena' }],
  creator: 'Bridgemena',
  publisher: 'Bridgemena',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
  verification: {
    google: 'your-google-verification-code', // TODO: Add actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body>{children}</body>
    </html>
  );
}
