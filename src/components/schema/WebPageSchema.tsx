interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
}

export default function WebPageSchema({ name, description, url }: WebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `https://bridgemena.com${url}`,
    publisher: {
      '@type': 'Organization',
      name: 'Bridgemena',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bridgemena.com/logo.png',
      },
    },
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Bridgemena',
      url: 'https://bridgemena.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
