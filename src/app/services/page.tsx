import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesInteractive from './components/ServicesInteractive';
import ProcessTimeline from './components/ProcessTimeline';
import ComparisonTable from './components/ComparisonTable';

export const metadata: Metadata = {
  title: 'Services - Bridgemena | Company Formation, Visa, HR, Accounting & More',
  description: 'Comprehensive business services for MENA expansion: Company Formation (Freezone, Mainland), HR & Payroll, Visa Processing, Accounting, VAT, Tax, and more.',
  keywords: 'UAE services, company formation UAE, visa processing, HR payroll, accounting UAE, VAT registration, corporate tax, business setup services'
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        {/* Page Header */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[rgba(89,140,192,1)]">
              Comprehensive Business Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From company formation to ongoing operations, we provide end-to-end support for your MENA expansion. Choose from 30+ specialized services across profiles, industries, and service types.
            </p>
          </div>
        </section>

        {/* Services Grid with Filters */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <ServicesInteractive />
          </div>
        </section>

        {/* Process Timeline */}
        <ProcessTimeline />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Bottom CTA */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <div className="glass-card p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a free consultation to discuss your specific needs and get a customized service package.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Schedule Consultation
                </button>
                <button className="btn-secondary text-white border-white">
                  Download Services Brochure
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

}