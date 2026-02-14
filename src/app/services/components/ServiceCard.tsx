import Icon from '@/components/ui/AppIcon';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export default function ServiceCard({ title, description, features, icon }: ServiceCardProps) {
  return (
    <div className="glass-card p-8 hover-glow group transition-all">
      {/* Icon */}
      <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
        <Icon name={icon as any} size={28} variant="outline" className="text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-foreground">
            <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="w-full btn-primary flex items-center justify-center gap-2 text-white">
        Learn More
        <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-white" />
      </button>
    </div>
  );
}