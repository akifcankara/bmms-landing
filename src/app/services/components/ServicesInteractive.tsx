"use client";

import { useRouter } from 'next/navigation';
import ServiceFilters, { FilterType } from './ServiceFilters';
import ServiceCard from './ServiceCard';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  categories: FilterType[];
}

interface ServicesInteractiveProps {
  initialFilter?: FilterType;
}

export default function ServicesInteractive({ initialFilter = 'profile' }: ServicesInteractiveProps) {
  const router = useRouter();
  const activeFilter: FilterType = initialFilter;

  const handleFilterChange = (filter: FilterType) => {
    router.push(`/services/${filter}`, { scroll: false });
  };

  const services: Service[] = [
    // By Profile Services
    {
      id: 'enterprise_solutions',
      title: 'Enterprise Solutions',
      description: 'Comprehensive market entry packages for large corporations and Fortune 500 companies.',
      features: [
        'Dedicated account manager',
        'Multi-jurisdiction setup',
        'Government relations support',
        'Priority processing',
      ],
      icon: 'BuildingOffice2Icon',
      categories: ['profile'],
    },
    {
      id: 'sme_packages',
      title: 'SME Growth Packages',
      description: 'Tailored solutions for small and medium enterprises expanding to MENA.',
      features: [
        'Cost-effective setup',
        'Flexible payment plans',
        'Ongoing compliance support',
        'Business advisory',
      ],
      icon: 'ChartBarIcon',
      categories: ['profile'],
    },
    {
      id: 'startup_accelerator',
      title: 'Startup Accelerator',
      description: 'Fast-track packages designed for startups and high-growth businesses.',
      features: [
        'Quick company formation',
        'Incubation support',
        'Investor visa processing',
        'Co-working space access',
      ],
      icon: 'RocketLaunchIcon',
      categories: ['profile'],
    },

    // By Industry Services
    {
      id: 'tech_saas',
      title: 'Technology & SaaS',
      description: 'Specialized services for software, cloud, AI, and technology companies.',
      features: [
        'Free zone selection',
        'IP protection setup',
        'Tech visa processing',
        'Data compliance advisory',
      ],
      icon: 'ComputerDesktopIcon',
      categories: ['industry'],
    },
    {
      id: 'fintech_services',
      title: 'FinTech Services',
      description: 'Regulatory compliance and licensing support for financial technology companies.',
      features: [
        'DFSA/ADGM licensing',
        'Banking relationships',
        'Regulatory advisory',
        'Payment gateway setup',
      ],
      icon: 'CurrencyDollarIcon',
      categories: ['industry'],
    },
    {
      id: 'construction_engineering',
      title: 'Construction & Engineering',
      description: 'Complete setup for construction, real estate, and infrastructure companies.',
      features: [
        'Trade license processing',
        'Municipality approvals',
        'Labor visa bulk processing',
        'Equipment import support',
      ],
      icon: 'WrenchScrewdriverIcon',
      categories: ['industry'],
    },
    {
      id: 'logistics_transport',
      title: 'Logistics & Transportation',
      description: 'Comprehensive services for supply chain, freight, and transportation businesses.',
      features: [
        'Warehouse licensing',
        'Vehicle registration',
        'Customs clearance setup',
        'Driver visa processing',
      ],
      icon: 'TruckIcon',
      categories: ['industry'],
    },
    {
      id: 'professional_services',
      title: 'Professional Services',
      description: 'Setup support for consulting, legal, accounting, and advisory firms.',
      features: [
        'Professional license',
        'Office space solutions',
        'Partner visa processing',
        'Client contract templates',
      ],
      icon: 'BriefcaseIcon',
      categories: ['industry'],
    },
    {
      id: 'marketing_media',
      title: 'Marketing & Media',
      description: 'Licensing and setup for advertising, PR, and content creation agencies.',
      features: [
        'Media license processing',
        'Studiospace setup',
        'Content approval guidance',
        'Influencer visa support',
      ],
      icon: 'MegaphoneIcon',
      categories: ['industry'],
    },

    // By Service Type
    {
      id: 'company_formation',
      title: 'Company Formation',
      description: 'Complete business setup including Freezone, Mainland, and Offshore options.',
      features: [
        'Freezone company setup',
        'Mainland LLC formation',
        'Offshore company registration',
        'Branch office setup',
      ],
      icon: 'DocumentTextIcon',
      categories: ['service'],
    },
    {
      id: 'hr_payroll',
      title: 'HR & Payroll',
      description: 'Full-service human resources and payroll management solutions.',
      features: [
        'Payroll processing',
        'Benefits administration',
        'HR policy development',
        'Employee contracts',
      ],
      icon: 'UserGroupIcon',
      categories: ['service'],
    },
    {
      id: 'visa_processing',
      title: 'Visa Processing',
      description: 'Fast and reliable visa services for employees, investors, and dependents.',
      features: [
        'Employment visa',
        'Investor visa',
        'Dependent visa',
        'Golden visa assistance',
      ],
      icon: 'IdentificationIcon',
      categories: ['service'],
    },
    {
      id: 'gro_services',
      title: 'Government Relations (GRO)',
      description: 'Expert liaison services with government authorities and regulatory bodies.',
      features: [
        'License renewals',
        'Authority liaisons',
        'Compliance management',
        'Document attestation',
      ],
      icon: 'BuildingLibraryIcon',
      categories: ['service'],
    },
    {
      id: 'pro_services',
      title: 'Public Relations Officer (PRO)',
      description: 'Professional PRO services for all government-related documentation.',
      features: [
        'Document processing',
        'Immigration services',
        'License amendments',
        'Authority coordination',
      ],
      icon: 'ClipboardDocumentCheckIcon',
      categories: ['service'],
    },
    {
      id: 'serviced_offices',
      title: 'Serviced Offices & Coworking',
      description: 'Premium office spaces and coworking solutions across UAE and KSA.',
      features: [
        'Private offices',
        'Hot desks',
        'Meeting rooms',
        'Virtual offices',
      ],
      icon: 'BuildingOfficeIcon',
      categories: ['service'],
    },
    {
      id: 'bank_account',
      title: 'Corporate Bank Account',
      description: 'Assistance with opening corporate bank accounts with major UAE and KSA banks.',
      features: [
        'Bank introductions',
        'Documentation support',
        'Account opening assistance',
        'Multi-currency accounts',
      ],
      icon: 'BanknotesIcon',
      categories: ['service'],
    },
    {
      id: 'accounting',
      title: 'Accounting Services',
      description: 'Professional bookkeeping, financial reporting, and accounting support.',
      features: [
        'Bookkeeping',
        'Financial statements',
        'Budget planning',
        'Audit support',
      ],
      icon: 'CalculatorIcon',
      categories: ['service'],
    },
    {
      id: 'vat_tax',
      title: 'VAT & Tax Consultancy',
      description: 'Expert VAT registration, filing, and tax advisory services.',
      features: [
        'VAT registration',
        'VAT return filing',
        'Tax planning',
        'Compliance advisory',
      ],
      icon: 'DocumentChartBarIcon',
      categories: ['service'],
    },
    {
      id: 'corporate_tax',
      title: 'Corporate Tax Registration',
      description: 'Assistance with UAE Corporate Tax registration and compliance.',
      features: [
        'Tax registration',
        'Tax return preparation',
        'Transfer pricing',
        'Tax optimization',
      ],
      icon: 'ScaleIcon',
      categories: ['service'],
    },
  ];

  const filteredServices = services.filter((service) =>
    service.categories.includes(activeFilter)
  );

  return (
    <div>
      <ServiceFilters activeFilter={activeFilter} onFilterChange={handleFilterChange} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            features={service.features}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}