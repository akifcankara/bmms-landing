import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export default function ServicesOverview() {
  const categories: ServiceCategory[] = [
    {
      id: 'profile',
      title: 'By Profile',
      description: 'Tailored solutions for Enterprise, SME, and Startups',
      icon: 'UserGroupIcon',
      link: '/services/profile',
    },
    {
      id: 'industry',
      title: 'By Industry',
      description: 'Specialized services for Technology, FinTech, Construction, and more',
      icon: 'BriefcaseIcon',
      link: '/services/industry',
    },
    {
      id: 'service',
      title: 'By Service',
      description: 'Company Formation, HR, Visa, Accounting, Tax, and more',
      icon: 'ClipboardDocumentListIcon',
      link: '/services/service',
    },
  ];

  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto bg-[rgba(222,115,115,0)]">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[rgba(98,145,192,1)]">
            Comprehensive Business Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From company formation to ongoing operations, we provide end-to-end support for your MENA expansion.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="glass-card p-8 hover-glow reveal group transition-all text-left"
            >
              {/* Icon */}
              <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <Icon name={category.icon as any} size={28} variant="outline" className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-white">
                {category.description}
              </p>

              {/* Link Arrow */}
              <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                Explore Services
                <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}