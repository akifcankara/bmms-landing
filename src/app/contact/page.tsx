import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from './components/ContactForm';
import QuickContact from './components/QuickContact';
import OfficeLocations from './components/OfficeLocations';
import FAQPreview from './components/FAQPreview';
import Icon from '@/components/ui/AppIcon';
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';


export const metadata: Metadata = {
  title: 'Contact Us - Bridgemena | Schedule Free Consultation',
  description: 'Get in touch with Bridgemena for MENA market entry consultation. Offices in Dubai, Abu Dhabi, and Riyadh. 24-hour response time guaranteed.',
  keywords: 'contact bridgemena, UAE business consultation, Dubai office, Riyadh office, free consultation, market entry support',
  authors: [{ name: 'Bridgemena' }],
  creator: 'Bridgemena',
  publisher: 'Bridgemena',
  metadataBase: new URL('https://bridgemena.com'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/contact',
    title: 'Contact Bridgemena - Schedule Free MENA Market Entry Consultation',
    description: 'Get in touch with Bridgemena for MENA market entry consultation. Offices in Dubai, Abu Dhabi, and Riyadh. 24-hour response time guaranteed.',
    siteName: 'Bridgemena',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Bridgemena',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Bridgemena - Free MENA Market Entry Consultation',
    description: 'Get in touch with our team across UAE and Saudi Arabia. 24-hour response time guaranteed.',
    images: ['/og-contact.jpg'],
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

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        {/* Page Header */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[rgba(84,130,176,1)]">
              Let's Discuss Your MENA Expansion
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Reach out to our team across UAE and Saudi Arabia. We respond within 24 hours and offer free 30-minute consultations.
            </p>
          </div>
        </section>

        {/* Contact Form + Quick Contact */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Form (2 columns) */}
              <div className="md:col-span-2 reveal">
                <ContactForm />
              </div>

              {/* Quick Contact (1 column) */}
              <div className="reveal">
                <QuickContact />
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <OfficeLocations />

        {/* FAQ Preview */}
        <FAQPreview />

        {/* Bottom CTA */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <div className="glass-card p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Prefer to Talk?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a 30-minute video call with our market entry experts at a time that works for you.
              </p>
              <button className="btn-primary flex items-center justify-center gap-2 mx-auto">
                Book 30-min Consultation
                <Icon name="CalendarIcon" size={16} variant="outline" className="text-white" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

}