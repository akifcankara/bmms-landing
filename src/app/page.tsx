import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ExpansionRegions from './components/ExpansionRegions';
import ServicesOverview from './components/ServicesOverview';
import WhySection from './components/WhySection';
import IndustryFocus from './components/IndustryFocus';
import CTASection from './components/CTASection';
import FAQSchema from '@/components/schema/FAQSchema';

export const metadata: Metadata = {
  title: 'Bridgemena - Expand Your Business to MENA | UAE & KSA Market Entry',
  description: 'Full-service market entry, company formation, and business support across UAE and Saudi Arabia. 500+ companies launched. 15+ years experience. Free consultation.',
  keywords: 'UAE company formation, Saudi Arabia business setup, MENA expansion, free zone company, mainland LLC, business visa UAE, KSA market entry',
  authors: [{ name: 'Bridgemena' }],
  creator: 'Bridgemena',
  publisher: 'Bridgemena',
  metadataBase: new URL('https://bridgemena.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Bridgemena - Expand Your Business to MENA Region',
    description: 'Full-service market entry, company formation, and business support across UAE and Saudi Arabia. 500+ companies launched. 15+ years experience.',
    siteName: 'Bridgemena',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bridgemena - MENA Market Entry Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bridgemena - Expand Your Business to MENA',
    description: 'Full-service market entry, company formation, and business support across UAE and Saudi Arabia.',
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

export default function Homepage() {
  return (
    <>
      <FAQSchema />
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ExpansionRegions />
        <ServicesOverview />
        <WhySection />
        <IndustryFocus />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}