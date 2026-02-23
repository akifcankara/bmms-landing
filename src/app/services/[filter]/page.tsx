import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesInteractive from '../components/ServicesInteractive';
import ProcessTimeline from '../components/ProcessTimeline';
import ComparisonTable from '../components/ComparisonTable';
import ServiceSchema from '@/components/schema/ServiceSchema';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import WebPageSchema from '@/components/schema/WebPageSchema';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { FilterType } from '../components/ServiceFilters';

type Props = {
  params: { filter: string };
};

const filterMeta: Record<FilterType, {
  label: string;
  title: string;
  description: string;
  heading: string;
  subheading: string;
  image: string;
  stats: { value: string; label: string }[];
}> = {
  profile: {
    label: 'By Profile',
    title: 'Services by Profile - Enterprise, SME & Startup Solutions | Bridgemena',
    description: 'Tailored business services for Enterprise, SME, and Startups expanding to UAE and MENA region.',
    heading: 'Solutions for Every Business Profile',
    subheading: 'Whether you\'re a global enterprise, a growing SME, or an ambitious startup — we have a tailored package for you.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    stats: [
      { value: '500+', label: 'Companies Served' },
      { value: '3', label: 'Business Profiles' },
      { value: '15+', label: 'Years Experience' },
    ],
  },
  industry: {
    label: 'By Industry',
    title: 'Services by Industry - Technology, FinTech, Construction & More | Bridgemena',
    description: 'Industry-specific business services for Technology, FinTech, Construction, Logistics, and Professional Services in UAE.',
    heading: 'Industry-Specific Expertise',
    subheading: 'Deep domain knowledge across Technology, FinTech, Construction, Logistics, and more.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80',
    stats: [
      { value: '6+', label: 'Industries Covered' },
      { value: '50+', label: 'Free Zones' },
      { value: '24h', label: 'Response Time' },
    ],
  },
  service: {
    label: 'By Service Type',
    title: 'Business Services - Company Formation, Visa, HR & Accounting | Bridgemena',
    description: 'Complete business services: Company Formation, Visa Processing, HR & Payroll, Accounting, VAT, Corporate Tax, and PRO Services.',
    heading: 'End-to-End Business Services',
    subheading: 'From company formation to ongoing compliance — everything your business needs in one place.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80',
    stats: [
      { value: '30+', label: 'Services Available' },
      { value: '100%', label: 'Foreign Ownership' },
      { value: '4.9★', label: 'Client Rating' },
    ],
  },
};

const validFilters: FilterType[] = ['profile', 'industry', 'service'];

export async function generateStaticParams() {
  return validFilters.map((filter) => ({ filter }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!validFilters.includes(params.filter as FilterType)) return {};
  const meta = filterMeta[params.filter as FilterType];
  return {
    title: meta.title,
    description: meta.description,
    authors: [{ name: 'Bridgemena' }],
    creator: 'Bridgemena',
    publisher: 'Bridgemena',
    metadataBase: new URL('https://bridgemena.com'),
    alternates: {
      canonical: `/services/${params.filter}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `/services/${params.filter}`,
      title: meta.title,
      description: meta.description,
      siteName: 'Bridgemena',
      images: [
        {
          url: '/og-services.jpg',
          width: 1200,
          height: 630,
          alt: 'Bridgemena Business Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-services.jpg'],
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
}

export default function ServicesFilterPage({ params }: Props) {
  if (!validFilters.includes(params.filter as FilterType)) {
    notFound();
  }

  const filter = params.filter as FilterType;
  const meta = filterMeta[filter];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: meta.label, url: `/services/${filter}` },
  ];

  return (
    <>
      <WebPageSchema
        name={meta.title}
        description={meta.description}
        url={`/services/${filter}`}
      />
      <ServiceSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="relative h-[60vh] min-h-[480px] flex items-end">
          <Image
            src={meta.image}
            alt={meta.heading}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6 pb-16 w-full">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              {meta.label}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-3xl">
              {meta.heading}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mb-10">
              {meta.subheading}
            </p>
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {meta.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-white/50 text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid with Filters */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <Suspense fallback={
              <div className="flex justify-center items-center py-20">
                <div className="text-foreground/40">Loading services...</div>
              </div>
            }>
              <ServicesInteractive initialFilter={filter} />
            </Suspense>
          </div>
        </section>

        {/* Process Timeline */}
        <ProcessTimeline />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Bottom CTA */}
        <section className="relative py-32 px-6 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80"
            alt="Dubai skyline"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/65" />

          <div className="relative max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Free Consultation</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Schedule a free consultation to discuss your specific needs and get a customized service package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-primary flex items-center gap-2">
                  Schedule Consultation
                  <Icon name="CalendarIcon" size={16} variant="outline" className="text-white" />
                </button>
              </Link>
              <button className="btn-secondary">
                Download Services Brochure
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
