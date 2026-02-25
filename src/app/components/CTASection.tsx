import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center reveal">
        {/* Gradient Background Effect */}
        <div className="relative glass-card p-12 md:p-16 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Ready to Expand to MENA?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a free 30-minute consultation with our market entry experts. We'll analyze your business and recommend the best expansion strategy.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/get-consultation" className="btn-primary flex items-center justify-center gap-2">
                Schedule Free Consultation
                <Icon name="CalendarIcon" size={16} variant="outline" className="text-white" />
              </Link>
              <Link href="/services" className="btn-secondary flex items-center justify-center gap-2">
                Explore All Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="ClockIcon" size={16} variant="outline" className="text-accent" />
                <span>24-hour response time</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="ShieldCheckIcon" size={16} variant="outline" className="text-accent" />
                <span>Government approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckBadgeIcon" size={16} variant="solid" className="text-accent" />
                <span>500+ companies launched</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}