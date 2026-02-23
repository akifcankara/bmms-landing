import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export default function ServiceCard({ title, description, features, icon }: ServiceCardProps) {
  return (
    <Link
      href="/contact"
      className="group p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-accent/40 hover:to-cyan-500/10 transition-all duration-300 flex flex-col"
    >
      <div className="bg-[#0f172a] rounded-2xl p-7 flex flex-col h-full">

        {/* Icon */}
        <div className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center mb-5 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all">
          <Icon name={icon as any} size={20} variant="outline" className="text-accent" />
        </div>

        {/* Title + Description */}
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-white leading-relaxed mb-5">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-white">
              <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all mt-auto">
          Get Started
          <Icon name="ArrowRightIcon" size={14} variant="outline" className="text-accent" />
        </div>

      </div>
    </Link>
  );
}
