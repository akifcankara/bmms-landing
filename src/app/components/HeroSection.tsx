import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import strapiClient from '@/lib/strapi';
import type { HeroBadge, HeroAction, Hero, HeroImage } from '@/types/hero';

export default async function HeroSection() {
  const [badgesRes, actionsRes, heroRes, heroImageRes] = await Promise.all([
    strapiClient.get<{ data: HeroBadge[] }>('/hero-badges'),
    strapiClient.get<{ data: HeroAction[] }>('/hero-actions'),
    strapiClient.get<{ data: Hero[] }>('/heroes'),
    strapiClient.get<{ data: HeroImage[] }>('/hero-images?populate=*'),
  ]);
  const badges = badgesRes.data.sort((a, b) => a.id - b.id);
  const actions = actionsRes.data.sort((a, b) => a.id - b.id);
  const hero = heroRes.data[0];
  const heroImage = heroImageRes.data[0];

  return (
    <section className="relative min-h-screen flex items-center mesh-gradient overflow-hidden pt-32 pb-20 px-6">
      {/* Mesh Gradient Background - rendered via CSS */}

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 reveal">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-success animate-pulse-badge"></span>
              <span className="text-xs font-medium tracking-wide text-[rgba(119,158,197,1)] border-[rgba(111,127,159,1)]">
                {hero.muted}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-hero-mobile lg:text-hero font-bold tracking-tight leading-tight text-[rgba(93,153,213,1)]">
              {hero.title}
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {actions.map((action) => (
                <Link
                  key={action.id}
                  href={action.href}
                  className={`${action.type === 'primary' ? 'btn-primary' : 'btn-secondary'} flex items-center justify-center gap-2`}
                >
                  {action.label}
                  {action.type === 'primary' && (
                    <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-white" />
                  )}
                </Link>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-[rgba(138,148,173,1)]">
              {badges.map((badge) => (
                <div key={badge.id} className="space-y-1">
                  <p className="text-3xl font-bold text-[rgba(113,156,198,1)]">{badge.title}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    {badge.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative reveal">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl hover-glow">
              <AppImage
                src={`${process.env.STRAPI_URL?.replace('/api', '')}${heroImage.image.formats.large?.url ?? heroImage.image.url}`}
                alt={heroImage.image.alternativeText ?? heroImage.title}
                className="w-full h-[300px] md:h-[500px] object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 glass-card p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {heroImage.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {heroImage.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}