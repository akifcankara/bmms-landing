import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from './components/ContactForm';
import FAQPreview from './components/FAQPreview';
import Icon from '@/components/ui/AppIcon';
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import WebPageSchema from '@/components/schema/WebPageSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Bridgemena | Schedule Free Consultation',
  description: 'Get in touch with Bridgemena for MENA market entry consultation. Offices in Dubai, Abu Dhabi, and Riyadh. 24-hour response time guaranteed.',
  keywords: 'contact bridgemena, UAE business consultation, Dubai office, Riyadh office, free consultation, market entry support',
  authors: [{ name: 'Bridgemena' }],
  creator: 'Bridgemena',
  publisher: 'Bridgemena',
  metadataBase: new URL('https://bridgemena.com'),
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/contact',
    title: 'Contact Bridgemena - Schedule Free MENA Market Entry Consultation',
    description: 'Get in touch with Bridgemena for MENA market entry consultation. Offices in Dubai, Abu Dhabi, and Riyadh. 24-hour response time guaranteed.',
    siteName: 'Bridgemena',
    images: [{ url: '/og-contact.jpg', width: 1200, height: 630, alt: 'Contact Bridgemena' }],
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

const highlights = [
  { icon: 'ClockIcon', text: '24-hour response time' },
  { icon: 'ChatBubbleLeftRightIcon', text: 'Free 30-min consultation' },
  { icon: 'GlobeAltIcon', text: 'UAE & KSA offices' },
];

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <>
      <WebPageSchema
        name="Contact Bridgemena - Schedule Free Consultation"
        description="Get in touch with Bridgemena for MENA market entry consultation. Offices in Dubai, Abu Dhabi, and Riyadh. 24-hour response time guaranteed."
        url="/contact"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header />

      <main className="min-h-screen pt-32">

        {/* Hero + Form Section */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Left — Image + Info */}
              <div>
                {/* Image */}
                <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80"
                    alt="Dubai skyline — Bridgemena MENA expansion"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">Bridgemena</p>
                    <p className="text-white font-bold text-lg">UAE & KSA Market Entry Experts</p>
                  </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[rgba(84,130,176,1)]">
                  Let's Discuss Your<br />MENA Expansion
                </h1>
                <p className="text-foreground/70 text-base leading-relaxed mb-8 max-w-md">
                  Reach out to our team across UAE and Saudi Arabia. We'll get back to you quickly and offer a free initial consultation.
                </p>

                {/* Highlights */}
                <div className="flex flex-col gap-3">
                  {highlights.map((item) => (
                    <div key={item.icon} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} size={16} variant="outline" className="text-accent" />
                      </div>
                      <span className="text-black text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Form */}
              <div className="bg-[#1e293b] rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-foreground mb-8">Send Us a Message</h2>
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQPreview />

        {/* Bottom CTA */}
        <section className="relative py-32 px-6 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
              alt="Dubai business district"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Free Consultation</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Prefer to Talk?
            </h2>
            <p className="text-white text-lg mb-10 max-w-xl mx-auto">
              Schedule a 30-minute video call with our market entry experts at a time that works for you.
            </p>
            <Link href="/contact">
              <button className="btn-primary flex items-center justify-center gap-2 mx-auto text-base px-8 py-4">
                Book 30-min Consultation
                <Icon name="CalendarIcon" size={18} variant="outline" className="text-white" />
              </button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
