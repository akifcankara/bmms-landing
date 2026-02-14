export default function LocalBusinessSchema() {
  const businesses = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://bridgemena.com/#dubai',
      name: 'Bridgemena - Dubai Office',
      image: 'https://bridgemena.com/offices/dubai.jpg',
      description: 'Professional business setup and company formation services in Dubai, UAE',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dubai Office Address',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        postalCode: '00000',
        addressCountry: 'AE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.2048,
        longitude: 55.2708,
      },
      url: 'https://bridgemena.com',
      telephone: '+971-4-XXX-XXXX',
      email: 'dubai@bridgemena.com',
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      areaServed: {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://bridgemena.com/#riyadh',
      name: 'Bridgemena - Riyadh Office',
      image: 'https://bridgemena.com/offices/riyadh.jpg',
      description: 'Professional business setup and company formation services in Riyadh, Saudi Arabia',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Riyadh Office Address',
        addressLocality: 'Riyadh',
        addressRegion: 'Riyadh',
        postalCode: '00000',
        addressCountry: 'SA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 24.7136,
        longitude: 46.6753,
      },
      url: 'https://bridgemena.com',
      telephone: '+966-XXX-XXX-XXXX',
      email: 'riyadh@bridgemena.com',
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      areaServed: {
        '@type': 'Country',
        name: 'Saudi Arabia',
      },
    },
  ];

  return (
    <>
      {businesses.map((business, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
        />
      ))}
    </>
  );
}
