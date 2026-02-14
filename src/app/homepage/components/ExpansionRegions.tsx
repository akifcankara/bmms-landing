"use client";

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Region {
  id: string;
  name: string;
  country: string;
  icon: string;
  benefits: string[];
  highlight: string;
}

export default function ExpansionRegions() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions: Region[] = [
    {
      id: 'uae',
      name: 'United Arab Emirates',
      country: 'UAE',
      icon: 'BuildingOffice2Icon',
      benefits: [
        '40+ Free Zones available',
        '0% Corporate Tax in Free Zones',
        '100% Foreign Ownership',
        'No Currency Restrictions',
      ],
      highlight: 'Most Popular',
    },
    {
      id: 'ksa',
      name: 'Kingdom of Saudi Arabia',
      country: 'KSA',
      icon: 'GlobeAltIcon',
      benefits: [
        'Vision 2030 Opportunities',
        'Large Consumer Market (35M+)',
        'Strategic Location',
        'Government Incentives',
      ],
      highlight: 'Emerging Market',
    },
  ];

  return (
    <section className="py-24 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Choose Your Expansion Region
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in UAE and Saudi Arabia market entry. Select a region to explore opportunities.
          </p>
        </div>

        {/* Region Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {regions.map((region) => (
            <div
              key={region.id}
              className={`glass-card p-8 cursor-pointer hover-glow reveal transition-all ${
                selectedRegion === region.id ? 'border-accent' : ''
              }`}
              onClick={() => setSelectedRegion(region.id === selectedRegion ? null : region.id)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Icon name={region.icon as any} size={28} variant="outline" className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {region.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{region.country}</p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                  {region.highlight}
                </span>
              </div>

              {/* Benefits List */}
              <ul className="space-y-3 mb-6">
                {region.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-success flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="w-full btn-secondary flex items-center justify-center gap-2">
                Explore {region.country} Services
                <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-accent" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}