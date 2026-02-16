import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Feature {
  id: string;
  name: string;
  freezone: boolean;
  mainland: boolean;
}

export default function ComparisonTable() {
  const features: Feature[] = [
    { id: 'ownership', name: '100% Foreign Ownership', freezone: true, mainland: true },
    { id: 'corporate_tax', name: '0% Corporate Tax', freezone: true, mainland: false },
    { id: 'local_market', name: 'Direct UAE Market Access', freezone: false, mainland: true },
    { id: 'office_requirement', name: 'Physical Office Required', freezone: false, mainland: true },
    { id: 'visa_quota', name: 'Visa Quota Flexibility', freezone: true, mainland: false },
    { id: 'import_export', name: 'Import/Export Activities', freezone: true, mainland: true },
    { id: 'local_sponsor', name: 'No Local Sponsor Needed', freezone: true, mainland: true },
    { id: 'setup_cost', name: 'Lower Setup Cost', freezone: true, mainland: false },
  ];

  return (
    <section className="py-24 px-6 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Freezone vs Mainland Comparison
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the key differences to help you choose the right company structure.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-card overflow-hidden reveal">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 text-sm font-bold text-foreground uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="text-center p-6 text-sm font-bold text-accent uppercase tracking-wider">
                    Freezone
                  </th>
                  <th className="text-center p-6 text-sm font-bold text-accent uppercase tracking-wider">
                    Mainland (LLC)
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={feature.id}
                    className={`border-b border-border last:border-0 hover:bg-card/50 transition-colors ${index % 2 === 0 ? 'bg-card/20' : ''
                      }`}
                  >
                    <td className="p-6 text-sm text-foreground font-medium">
                      {feature.name}
                    </td>
                    <td className="p-6 text-center">
                      {feature.freezone ? (
                        <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success inline-block" />
                      ) : (
                        <Icon name="XCircleIcon" size={24} variant="solid" className="text-muted inline-block" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {feature.mainland ? (
                        <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success inline-block" />
                      ) : (
                        <Icon name="XCircleIcon" size={24} variant="solid" className="text-muted inline-block" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <Link href={'/contact'}>
          <div className="text-center mt-12 reveal">
            <p className="text-sm text-muted-foreground mb-4">
              Not sure which option is right for you?
            </p>
            <button className="btn-primary">
              Schedule a Free Consultation
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
}