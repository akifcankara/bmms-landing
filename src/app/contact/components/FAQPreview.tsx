"use client";

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function FAQPreview() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQ[] = [
    {
      id: 'faq_1',
      question: 'How long does company formation take?',
      answer: 'Typical setup time is 2-4 weeks depending on the license type and free zone. We can expedite to 7-10 days for urgent cases.',
    },
    {
      id: 'faq_2',
      question: 'What is the cost of setting up a company in UAE?',
      answer: 'Costs vary by free zone, license type, and services needed. Freezone packages start from AED 15,000. Contact us for a detailed quote.',
    },
    {
      id: 'faq_3',
      question: 'Do I need a local sponsor for UAE company?',
      answer: 'No local sponsor is required for Freezone companies or Mainland LLCs with 100% foreign ownership (available since 2021).',
    },
    {
      id: 'faq_4',
      question: 'Can I get a residence visa with my company?',
      answer: 'Yes, company owners and employees can obtain residence visas. Visa quota depends on office size and license type.',
    },
    {
      id: 'faq_5',
      question: 'What is the difference between Freezone and Mainland?',
      answer: 'Freezone offers 0% corporate tax and easier setup but limited local market access. Mainland allows direct UAE market access but requires physical office.',
    },
    {
      id: 'faq_6',
      question: 'Do you provide ongoing support after setup?',
      answer: 'Yes, we offer comprehensive post-setup support including accounting, VAT filing, visa renewals, license renewals, and compliance management.',
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions about MENA market entry and company formation.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 reveal">
          {faqs.map((faq) => (
            <div key={faq.id} className="glass-card overflow-hidden">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-card/50 transition-colors"
              >
                <span className="text-base font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <Icon
                  name={openId === faq.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={20}
                  variant="outline"
                  className="text-accent flex-shrink-0"
                />
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12 reveal">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all">
            View All FAQs
            <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
}