'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import type { HeroBadge, HeroAction, Hero, HeroImage } from '@/types/hero';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeDown = (delay = 0) => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

function CountUp({ target, duration = 2000 }: { target: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;

    const numericMatch = target.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplay(target);
      return;
    }

    const numericPart = parseFloat(numericMatch[0]);
    const prefix = target.slice(0, numericMatch.index);
    const suffix = target.slice((numericMatch.index ?? 0) + numericMatch[0].length);
    const isFloat = numericMatch[0].includes('.');
    const decimals = isFloat ? numericMatch[0].split('.')[1].length : 0;

    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = numericPart * eased;
      setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return <span ref={ref}>{display}</span>;
}

interface Props {
  hero: Hero;
  heroImage: HeroImage;
  badges: HeroBadge[];
  actions: HeroAction[];
  imageUrl: string;
}

export default function HeroContent({ hero, heroImage, badges, actions, imageUrl }: Props) {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">

      {/* Full-bleed background with Ken Burns */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={heroImage.image.alternativeText ?? heroImage.title}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-40">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div {...fadeDown(0.3)}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-white/80 tracking-wide">{hero.muted}</span>
            </div>
          </motion.div>

          {/* Headline — word-by-word stagger */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
            }}
          >
            {hero.title.split(' ').map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -20 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/65 max-w-xl leading-relaxed mb-10"
            {...fadeUp(0.9)}
          >
            {hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-16"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 1.1 } },
            }}
          >
            {actions.map((action) => (
              <motion.div
                key={action.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
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
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-10 pt-8 border-t border-white/15"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 1.4 } },
            }}
          >
            {badges.map((badge) => (
              <motion.div
                key={badge.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <p className="text-3xl md:text-4xl font-black text-white">
                  <CountUp target={badge.title} />
                </p>
                <p className="text-xs text-white/45 uppercase tracking-widest mt-1">{badge.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        className="absolute bottom-8 right-6 z-10 hidden md:block"
        {...fadeRight(1.6)}
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
            <Icon name="CheckBadgeIcon" size={18} variant="solid" className="text-blue-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{heroImage.title}</p>
            <p className="text-xs text-white/45">{heroImage.subtitle}</p>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
