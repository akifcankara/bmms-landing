export default function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to set up a company in the UAE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Company formation in UAE typically takes 5-15 business days depending on the jurisdiction (Freezone vs Mainland) and license type. We handle all documentation and government approvals to expedite the process.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the costs involved in UAE company formation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Costs vary based on jurisdiction, license type, and business activities. Freezone companies typically start from AED 15,000-20,000, while Mainland LLCs range from AED 25,000-40,000. This includes government fees, office space, and our service fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a local sponsor to set up a business in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not anymore. Since 2021, the UAE allows 100% foreign ownership in most business activities on the Mainland. Freezones have always allowed 100% foreign ownership. We help you choose the best jurisdiction based on your business needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Bridgemena help with Saudi Arabia business setup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide comprehensive business setup services across Saudi Arabia including company registration, MISA licensing, commercial registration, and ongoing support in Riyadh and other major cities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What ongoing services do you provide after company formation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer complete business support including HR & Payroll, Visa processing, Accounting & Bookkeeping, VAT registration and filing, Corporate Tax compliance, PRO services, and office solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer free consultations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer free 30-minute initial consultations to understand your business needs and recommend the best market entry strategy for the MENA region.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
