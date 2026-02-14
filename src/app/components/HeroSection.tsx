"use client";

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export default function HeroSection() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

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
                500+ Companies Launched in MENA
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-hero-mobile lg:text-hero font-bold tracking-tight leading-tight text-[rgba(93,153,213,1)]">
              Expand Your Business to{' '}
              <span className="gradient-text">MENA</span> with Confidence
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Full-service market entry, company formation, and business support across UAE and Saudi Arabia. From setup to operations, we handle everything.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                Start Your Expansion
                <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-white" />
              </Link>
              <Link href="/services" className="btn-secondary flex items-center justify-center gap-2">
                View Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-[rgba(138,148,173,1)]">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-[rgba(113,156,198,1)]">15+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Years Experience
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-[rgba(113,156,198,1)]">50+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Free Zones
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-[rgba(113,156,198,1)]">24h</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Response Time
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative reveal">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl hover-glow">
              <AppImage
                src="https://images.unsplash.com/photo-1617559057121-5ccad3b7571b"
                alt="Modern Dubai skyline at sunset with Burj Khalifa tower and illuminated skyscrapers reflecting in water"
                className="w-full h-[300px] md:h-[500px] object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" />


              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 glass-card p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Trusted Partner
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Government Approved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}