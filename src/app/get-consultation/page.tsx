import { Metadata } from 'next';
import ConsultationWizard from './ConsultationWizard';

export const metadata: Metadata = {
  title: 'Get Your Free Business Setup Proposal | Bridgemena UAE',
  description:
    'Set up your company in Dubai in 3–5 business days. Answer 5 quick questions and receive a tailored business setup cost estimate — free, no commitment.',
  keywords:
    'UAE company formation, Dubai business setup, free zone company, mainland LLC, business visa UAE, company formation cost, Dubai free zone, DMCC, DIFC setup',
  authors: [{ name: 'Bridgemena' }],
  creator: 'Bridgemena',
  publisher: 'Bridgemena',
  metadataBase: new URL('https://bridgemena.com'),
  alternates: { canonical: '/get-consultation' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/get-consultation',
    title: 'Get Your Free Dubai Business Setup Proposal | Bridgemena',
    description:
      'Answer 5 quick questions and get a tailored company formation cost estimate for Dubai — free, delivered in under 24 hours.',
    siteName: 'Bridgemena',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Bridgemena — Dubai Business Setup' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Your Free Dubai Business Setup Proposal | Bridgemena',
    description: 'Answer 5 quick questions and get a tailored company formation cost estimate — free.',
    images: ['/og-image.jpg'],
    creator: '@bridgemena',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function GetConsultationPage() {
  return <ConsultationWizard />;
}
