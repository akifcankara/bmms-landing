import Icon from '@/components/ui/AppIcon';

interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export default function IndustryFocus() {
  const industries: Industry[] = [
    {
      id: 'tech',
      name: 'Technology & SaaS',
      icon: 'ComputerDesktopIcon',
      description: 'Software, Cloud, AI, and Tech Startups',
    },
    {
      id: 'fintech',
      name: 'FinTech',
      icon: 'CurrencyDollarIcon',
      description: 'Payments, Banking, Crypto, and Financial Services',
    },
    {
      id: 'construction',
      name: 'Construction',
      icon: 'WrenchScrewdriverIcon',
      description: 'Engineering, Real Estate, and Infrastructure',
    },
    {
      id: 'logistics',
      name: 'Logistics',
      icon: 'TruckIcon',
      description: 'Supply Chain, Freight, and Transportation',
    },
    {
      id: 'professional',
      name: 'Professional Services',
      icon: 'BriefcaseIcon',
      description: 'Consulting, Legal, and Advisory Services',
    },
    {
      id: 'media',
      name: 'Marketing & Media',
      icon: 'MegaphoneIcon',
      description: 'Advertising, PR, and Content Creation',
    },
  ];

  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[rgba(98,145,192,1)]">
            Industry-Specific Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the unique requirements of different industries and provide tailored solutions.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="glass-card p-6 hover-glow reveal group cursor-pointer transition-all"
            >
              {/* Icon */}
              <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Icon name={industry.icon as any} size={24} variant="outline" className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}