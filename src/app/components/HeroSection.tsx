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
    <section className="relative min-h-screen flex items-end overflow-hidden">

      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <AppImage
          src={`${process.env.STRAPI_URL?.replace('/api', '')}${heroImage.image.formats.large?.url ?? heroImage.image.url}`}
          alt={heroImage.image.alternativeText ?? heroImage.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-40">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-white/80 tracking-wide">{hero.muted}</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/65 max-w-xl leading-relaxed mb-10">
            {hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            {actions.map((action) => (
              <Link
                key={action.id}
                href={action.href}
                className={
                  action.type === 'primary'
                    ? 'inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-[0_0_28px_-4px_rgba(59,130,246,0.7)] text-base'
                    : 'inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm text-base'
                }
              >
                {action.label}
                {action.type === 'primary' && (
                  <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-white" />
                )}
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 pt-8 border-t border-white/15">
            {badges.map((badge) => (
              <div key={badge.id}>
                <p className="text-3xl md:text-4xl font-black text-white">{badge.title}</p>
                <p className="text-xs text-white/45 uppercase tracking-widest mt-1">{badge.subtitle}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Floating badge — sağ alt */}
      <div className="absolute bottom-8 right-6 z-10 hidden md:block">
        <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
            <Icon name="CheckBadgeIcon" size={18} variant="solid" className="text-blue-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{heroImage.title}</p>
            <p className="text-xs text-white/45">{heroImage.subtitle}</p>
          </div>
        </div>
      </div>

    </section>
  );
}
