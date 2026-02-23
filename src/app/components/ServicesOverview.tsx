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
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From company formation to ongoing operations, we provide end-to-end support for your MENA expansion.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.link}
              className="group p-[1px] rounded-2xl bg-gradient-to-br from-accent/30 via-white/5 to-transparent hover:from-accent/60 hover:to-cyan-500/20 transition-all duration-300"
            >
              <div className="rounded-2xl p-8 h-full flex flex-col bg-background hover:-translate-y-1 transition-transform duration-300">

                {/* Number + Icon row */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-5xl font-black text-white group-hover:text-accent/20 transition-colors leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="h-11 w-11 rounded-xl border border-accent/20 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                    <Icon name={category.icon as any} size={22} variant="outline" className="text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-white leading-relaxed flex-1 mb-6">
                  {category.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                  Explore Services
                  <Icon name="ArrowRightIcon" size={15} variant="outline" className="text-accent" />
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}