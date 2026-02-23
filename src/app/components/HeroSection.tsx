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
    <section className="relative min-h-screen bg-[#080f1e] flex items-center overflow-hidden pt-28 pb-20 px-6">

      {/* Subtle blue glow top-left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      {/* Subtle glow top-right */}
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Content */}
          <div className="space-y-8">

            {/* Live badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-white/70 tracking-wide">
                {hero.muted}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/55 max-w-xl leading-relaxed">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {actions.map((action) => (
                <Link
                  key={action.id}
                  href={action.href}
                  className={
                    action.type === 'primary'
                      ? 'inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-[0_0_24px_-4px_rgba(59,130,246,0.6)] hover:shadow-[0_0_32px_-4px_rgba(59,130,246,0.8)]'
                      : 'inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200'
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
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/8">
              {badges.map((badge) => (
                <div key={badge.id}>
                  <p className="text-3xl font-black text-white">{badge.title}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest mt-1">
                    {badge.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-4 bg-blue-500/15 rounded-3xl blur-2xl" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <AppImage
                src={`${process.env.STRAPI_URL?.replace('/api', '')}${heroImage.image.formats.large?.url ?? heroImage.image.url}`}
                alt={heroImage.image.alternativeText ?? heroImage.title}
                className="w-full h-[320px] md:h-[520px] object-cover"
              />
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating info card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckBadgeIcon" size={22} variant="solid" className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {heroImage.title}
                    </p>
                    <p className="text-xs text-white/50 mt-0.5">
                      {heroImage.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
