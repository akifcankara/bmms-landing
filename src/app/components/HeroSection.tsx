import strapiClient from '@/lib/strapi';
import type { HeroBadge, HeroAction, Hero, HeroImage } from '@/types/hero';
import HeroContent from './HeroContent';

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
  const imageUrl = `${process.env.STRAPI_URL?.replace('/api', '')}${heroImage.image.formats.large?.url ?? heroImage.image.url}`;

  return (
    <HeroContent
      hero={hero}
      heroImage={heroImage}
      badges={badges}
      actions={actions}
      imageUrl={imageUrl}
    />
  );
}
