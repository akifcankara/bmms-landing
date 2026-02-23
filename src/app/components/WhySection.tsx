"use client";

import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Stat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export default function WhySection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      id: 'stat_companies',
      value: '500+',
      label: 'Companies Formed',
      icon: 'BuildingOffice2Icon'
    },
    {
      id: 'stat_experience',
      value: '15+',
      label: 'Years Experience',
      icon: 'ClockIcon'
    },
    {
      id: 'stat_freezones',
      value: '50+',
      label: 'Free Zones Covered',
      icon: 'MapPinIcon'
    },
    {
      id: 'stat_rating',
      value: '4.9',
      label: 'Client Satisfaction',
      icon: 'StarIcon'
    }];


  const clientLogos = [
    {
      id: 'logo_1',
      name: 'TechCorp',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_155e8ee79-1767191628945.png",
      alt: 'TechCorp logo - modern tech company emblem with blue gradient'
    },
    {
      id: 'logo_2',
      name: 'FinanceHub',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4d9b08b-1766491526351.png",
      alt: 'FinanceHub logo - financial services company with gold accents'
    },
    {
      id: 'logo_3',
      name: 'BuildPro',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1876bb18a-1767700683150.png",
      alt: 'BuildPro logo - construction company with orange and black design'
    },
    {
      id: 'logo_4',
      name: 'MediaWave',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_100e9bc3f-1769173210098.png",
      alt: 'MediaWave logo - media company with purple and pink gradient'
    },
    {
      id: 'logo_5',
      name: 'LogiFlow',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_16eb8e846-1767762810836.png",
      alt: 'LogiFlow logo - logistics company with green arrow design'
    },
    {
      id: 'logo_6',
      name: 'RetailMax',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_17eccee32-1764669191411.png",
      alt: 'RetailMax logo - retail company with red shopping bag icon'
    }];


  // Duplicate logos for seamless marquee
  const allLogos = [...clientLogos, ...clientLogos];

  useEffect(() => {

    // Marquee animation is handled via CSS class
  }, []);
  return (
    <section className="py-24 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Why Choose Bridgemena?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by 500+ companies across Technology, FinTech, Construction, and more.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-8 mb-16 reveal">
          {stats.map((stat) =>
            <div key={stat.id} className="glass-card p-6 text-center hover-glow">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Icon name={stat.icon as any} size={24} variant="outline" className="text-accent" />
                </div>
              </div>
              <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          )}
        </div>

        {/* Client Logos */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-white/10" />
            <p className="text-xs font-semibold text-white uppercase tracking-[0.3em] whitespace-nowrap">
              Trusted by Leading Companies
            </p>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="relative overflow-hidden">
            {/* Left + Right fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Row 1 — left to right */}
            <div className="flex gap-6 animate-marquee mb-6" style={{ width: 'fit-content' }}>
              {allLogos.map((logo, index) => (
                <div
                  key={`row1_${logo.id}_${index}`}
                  className="flex-shrink-0 flex items-center gap-4 bg-white rounded-2xl px-8 py-4 h-24"
                >
                  <div className="w-36 h-full">
                    <AppImage src={logo.image} alt={logo.alt} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-base font-bold text-slate-800 whitespace-nowrap">{logo.name}</span>
                </div>
              ))}
            </div>

            {/* Row 2 — right to left */}
            <div
              className="flex gap-6 mb-6"
              style={{
                width: 'fit-content',
                animation: 'marquee 25s linear infinite reverse',
              }}
            >
              {[...allLogos].reverse().map((logo, index) => (
                <div
                  key={`row2_${logo.id}_${index}`}
                  className="flex-shrink-0 flex items-center gap-4 border border-white/10 rounded-2xl px-8 py-4 h-24"
                >
                  <div className="w-36 h-full">
                    <AppImage src={logo.image} alt={logo.alt} className="w-full h-full object-contain rounded-lg" />
                  </div>
                  <span className="text-base font-bold text-white whitespace-nowrap">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>);

}