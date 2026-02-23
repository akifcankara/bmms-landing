import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
}

const industries: Industry[] = [
  {
    id: 'tech',
    name: 'Technology & SaaS',
    icon: 'ComputerDesktopIcon',
    description: 'Software, Cloud, AI, and Tech Startups',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
  {
    id: 'fintech',
    name: 'FinTech',
    icon: 'CurrencyDollarIcon',
    description: 'Payments, Banking, Crypto, and Financial Services',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  },
  {
    id: 'construction',
    name: 'Construction',
    icon: 'WrenchScrewdriverIcon',
    description: 'Engineering, Real Estate, and Infrastructure',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 'logistics',
    name: 'Logistics',
    icon: 'TruckIcon',
    description: 'Supply Chain, Freight, and Transportation',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  },
  {
    id: 'professional',
    name: 'Professional Services',
    icon: 'BriefcaseIcon',
    description: 'Consulting, Legal, and Advisory Services',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    id: 'media',
    name: 'Marketing & Media',
    icon: 'MegaphoneIcon',
    description: 'Advertising, PR, and Content Creation',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80',
  },
];

export default function IndustryFocus() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Industries</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Industry-Specific<br />Expertise
            </h2>
          </div>
          <p className="text-white max-w-sm text-base leading-relaxed md:text-right">
            We understand the unique requirements of different industries and provide tailored solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href="/services/industry"
              className="group relative rounded-2xl overflow-hidden h-64 cursor-pointer"
            >
              {/* Background image */}
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Icon top-right */}
                <div className="self-end w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Icon name={industry.icon as any} size={18} variant="outline" className="text-white" />
                </div>

                {/* Text bottom */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-white/70">
                    {industry.description}
                  </p>
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
