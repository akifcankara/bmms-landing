export default function ServiceSchema() {
  const services = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Company Formation',
      provider: {
        '@type': 'Organization',
        name: 'Bridgemena',
        url: 'https://bridgemena.com',
      },
      areaServed: ['AE', 'SA'],
      description: 'Complete company formation services including Freezone, Mainland LLC, and offshore company setup in UAE and Saudi Arabia.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceRange: '$$',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Visa Processing',
      provider: {
        '@type': 'Organization',
        name: 'Bridgemena',
        url: 'https://bridgemena.com',
      },
      areaServed: ['AE', 'SA'],
      description: 'Employment visa, investor visa, freelance visa, and family visa processing services across UAE and Saudi Arabia.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceRange: '$',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'HR & Payroll Services',
      provider: {
        '@type': 'Organization',
        name: 'Bridgemena',
        url: 'https://bridgemena.com',
      },
      areaServed: ['AE', 'SA'],
      description: 'End-to-end HR management, payroll processing, employment contracts, and labor law compliance services.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceRange: '$$',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Accounting & Tax Services',
      provider: {
        '@type': 'Organization',
        name: 'Bridgemena',
        url: 'https://bridgemena.com',
      },
      areaServed: ['AE', 'SA'],
      description: 'Bookkeeping, financial reporting, VAT registration and filing, corporate tax compliance, and audit support.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceRange: '$$',
      },
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
    </>
  );
}
