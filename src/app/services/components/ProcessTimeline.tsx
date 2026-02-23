import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  image: string;
  bullets: string[];
}

const steps: Step[] = [
  {
    id: 'step_1',
    number: '01',
    title: 'Free Consultation',
    description: 'We start with a deep-dive into your business goals, target market, and expansion strategy to recommend the perfect setup.',
    icon: 'ChatBubbleLeftRightIcon',
    duration: 'Day 1',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80',
    bullets: ['Business needs analysis', 'Free zone vs. Mainland advisory', 'Cost & timeline estimate'],
  },
  {
    id: 'step_2',
    number: '02',
    title: 'Company Formation',
    description: 'Our team handles every aspect of your company registration, license procurement, and government approvals end-to-end.',
    icon: 'DocumentTextIcon',
    duration: 'Week 1–2',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80',
    bullets: ['Trade license processing', 'MOA & shareholder agreements', 'Government approvals'],
  },
  {
    id: 'step_3',
    number: '03',
    title: 'Operations Setup',
    description: 'From bank accounts to visas and office space — we get everything operational so you can focus on your business.',
    icon: 'WrenchScrewdriverIcon',
    duration: 'Week 2–3',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    bullets: ['Corporate bank account', 'Visa & immigration processing', 'Office & workspace setup'],
  },
  {
    id: 'step_4',
    number: '04',
    title: 'Launch & Beyond',
    description: 'We hand over a fully operational business and stay by your side with ongoing compliance, HR, and accounting support.',
    icon: 'RocketLaunchIcon',
    duration: 'Week 4',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80',
    bullets: ['Full document handover', 'Ongoing compliance support', 'HR, payroll & accounting'],
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 px-6 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight max-w-lg">
            From Idea to Launch in 4 Steps
          </h2>
        </div>

        {/* Steps — alternating layout */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={step.id}
                className={`group grid md:grid-cols-2 rounded-3xl overflow-hidden border border-white/5 hover:border-accent/20 transition-colors duration-300 ${isEven ? '' : ''}`}
              >
                {/* Image side */}
                <div className={`relative h-64 md:h-auto min-h-[280px] ${isEven ? 'md:order-2' : ''}`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  {/* Big number overlay */}
                  <span className="absolute bottom-4 right-5 text-8xl font-black text-white/10 leading-none select-none">
                    {step.number}
                  </span>
                  {/* Duration badge */}
                  <span className="absolute top-4 left-4 text-xs font-bold text-white bg-accent/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {step.duration}
                  </span>
                </div>

                {/* Content side */}
                <div className={`bg-[#0f172a] p-8 md:p-12 flex flex-col justify-center ${isEven ? 'md:order-1' : ''}`}>
                  <div className="w-11 h-11 rounded-xl border border-accent/20 bg-accent/10 flex items-center justify-center mb-6">
                    <Icon name={step.icon as any} size={20} variant="outline" className="text-accent" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm text-white/80">
                        <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-accent flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
