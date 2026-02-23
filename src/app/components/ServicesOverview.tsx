import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const categories = [
  {
    id: 'profile',
    label: 'By Profile',
    title: 'Enterprise, SME & Startup Solutions',
    description: 'Whether you\'re a Fortune 500 company, a growing SME, or an ambitious startup — we have the right package for your stage.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80',
    link: '/services/profile',
    stat: { value: '3', label: 'Profiles' },
    tags: ['Enterprise', 'SME', 'Startup'],
  },
  {
    id: 'industry',
    label: 'By Industry',
    title: 'Deep Industry Expertise',
    description: 'From Technology and FinTech to Construction and Logistics — we speak your industry\'s language and know its regulations.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
    link: '/services/industry',
    stat: { value: '6+', label: 'Industries' },
    tags: ['Tech', 'FinTech', 'Logistics'],
  },
  {
    id: 'service',
    label: 'By Service',
    title: 'End-to-End Business Services',
    description: 'Company formation, visa processing, HR, accounting, VAT, and more — everything under one roof.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80',
    link: '/services/service',
    stat: { value: '30+', label: 'Services' },
    tags: ['Formation', 'Visa', 'Accounting'],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight max-w-lg">
              Comprehensive Business Services
            </h2>
            <Link href="/services/profile" className="flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all shrink-0">
              View All Services
              <Icon name="ArrowRightIcon" size={15} variant="outline" className="text-accent" />
            </Link>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Big card — first category */}
          <Link
            href={categories[0].link}
            className="group relative rounded-3xl overflow-hidden h-[480px] md:row-span-2"
          >
            <Image
              src={categories[0].image}
              alt={categories[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {categories[0].label}
                </span>
                <span className="text-xs font-bold text-white bg-accent/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {categories[0].stat.value} {categories[0].stat.label}
                </span>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories[0].tags.map(tag => (
                    <span key={tag} className="text-xs text-white/70 bg-white/10 px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{categories[0].title}</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-5">{categories[0].description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                  Explore <Icon name="ArrowRightIcon" size={14} variant="outline" className="text-white" />
                </div>
              </div>
            </div>
          </Link>

          {/* Two smaller cards */}
          {categories.slice(1).map((cat) => (
            <Link
              key={cat.id}
              href={cat.link}
              className="group relative rounded-3xl overflow-hidden h-[225px]"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {cat.label}
                  </span>
                  <span className="text-xs font-bold text-white bg-accent/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {cat.stat.value} {cat.stat.label}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{cat.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tags.map(tag => (
                        <span key={tag} className="text-xs text-white/60 bg-white/10 px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-2.5 transition-all shrink-0 ml-4">
                      Explore <Icon name="ArrowRightIcon" size={13} variant="outline" className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
