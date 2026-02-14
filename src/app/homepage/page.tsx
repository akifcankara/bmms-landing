import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ExpansionRegions from './components/ExpansionRegions';
import ServicesOverview from './components/ServicesOverview';
import WhySection from './components/WhySection';
import IndustryFocus from './components/IndustryFocus';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Bridgemena - Expand Your Business to MENA | UAE & KSA Market Entry',
  description: 'Full-service market entry, company formation, and business support across UAE and Saudi Arabia. 500+ companies launched. 15+ years experience. Free consultation.',
  keywords: 'UAE company formation, Saudi Arabia business setup, MENA expansion, free zone company, mainland LLC, business visa UAE, KSA market entry',
};

export default function Homepage() {
  return (
    <>
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