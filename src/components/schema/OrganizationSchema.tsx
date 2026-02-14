export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bridgemena',
    alternateName: 'Bridge MENA',
    url: 'https://bridgemena.com',
    logo: 'https://bridgemena.com/logo.png',
    description: 'Full-service market entry, company formation, and business support across UAE and Saudi Arabia. 500+ companies launched. 15+ years experience.',
    foundingDate: '2009',
    email: 'info@bridgemena.com',
    telephone: '+971-4-XXX-XXXX',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Dubai Office Address',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Riyadh Office Address',
        addressLocality: 'Riyadh',
        addressRegion: 'Riyadh',
        addressCountry: 'SA',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/bridgemena',
      'https://twitter.com/bridgemena',
      'https://www.facebook.com/bridgemena',
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
      {
        '@type': 'Country',
        name: 'Saudi Arabia',
      },
    ],
    serviceType: [
      'Company Formation',
      'Business Setup',
      'Visa Services',
      'HR & Payroll',
      'Accounting Services',
      'Tax Consulting',
      'Market Entry Strategy',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
