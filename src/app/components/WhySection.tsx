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

        {/* Client Logo Marquee */}
        <div className="reveal">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
            Trusted by Leading Companies
          </p>
          <div className="relative overflow-hidden">
            <div
              ref={marqueeRef}
              className="flex gap-12 animate-marquee"
              style={{ width: 'fit-content' }}>

              {allLogos.map((logo, index) =>
                <div
                  key={`${logo.id}_${index}`}
                  className="flex-shrink-0 w-32 h-16 glass-card p-4 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">

                  <AppImage
                    src={logo.image}
                    alt={logo.alt}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all" />

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}