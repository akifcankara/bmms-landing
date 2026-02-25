"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

const navLinks = [
  { id: 'nav_home', label: 'Home', href: '/' },
  {
    id: 'nav_services',
    label: 'Services',
    href: '/services/profile',
    subMenu: [
      { label: 'By Profile', href: '/services/profile', description: 'Enterprise, SME & Startup packages' },
      { label: 'By Industry', href: '/services/industry', description: 'Tech, FinTech, Construction & more' },
      { label: 'By Service', href: '/services/service', description: 'Formation, Visa, HR & Accounting' },
    ],
  },
  {
    id: 'nav_resources',
    label: 'Resources',
    href: '#resources',
    subMenu: [
      { label: 'UAE Free Zones', href: '#uae-freezones', description: 'Compare all UAE free zones' },
      { label: 'KSA Guide', href: '#ksa-guide', description: 'Saudi Arabia business setup guide' },
      { label: 'Cost Calculator', href: '#calculator', description: 'Estimate setup costs' },
      { label: 'Blog', href: '#blog', description: 'Latest market insights' },
    ],
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      {/* Floating pill header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
        <div className="bg-[#0f172a]/95 backdrop-blur-md border border-white/10 rounded-2xl px-5 h-16 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Bridgemena"
              width={120}
              height={36}
              className="brightness-0 invert"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.id} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-white bg-white/10'
                      : 'text-white/60 hover:text-white hover:bg-white/8'
                  }`}
                >
                  {link.label}
                  {link.subMenu && (
                    <Icon name="ChevronDownIcon" size={13} variant="outline" className="transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown */}
                {link.subMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/60 min-w-[260px]">
                      {link.subMenu.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                        >
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent/20 transition-colors">
                            <Icon name="CheckCircleIcon" size={15} variant="outline" className="text-accent" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground group-hover/item:text-accent transition-colors">{item.label}</p>
                            <p className="text-xs text-white mt-0.5">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-2">
            <Link
              href="/get-consultation"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-white bg-accent hover:bg-accent/90 px-4 py-2 rounded-xl transition-all duration-200 shadow-[0_0_16px_-4px_rgba(59,130,246,0.6)]"
            >
              Get Consultation
              <Icon name="ArrowRightIcon" size={13} variant="outline" className="text-white" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Icon name="Bars3Icon" size={20} variant="outline" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#0f172a] border-l border-white/10 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <Image src="/logo.png" alt="Bridgemena" width={110} height={35} className="brightness-0 invert" />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Icon name="XMarkIcon" size={20} variant="outline" />
          </button>
        </div>

        <div className="p-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.id}>
              {link.subMenu ? (
                <div>
                  <button
                    onClick={() => setExpandedMobileMenu(expandedMobileMenu === link.id ? null : link.id)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/8 transition-colors"
                  >
                    {link.label}
                    <Icon name="ChevronDownIcon" size={14} variant="outline" className={`transition-transform duration-200 ${expandedMobileMenu === link.id ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`ml-3 mt-1 space-y-0.5 overflow-hidden transition-all duration-300 ${expandedMobileMenu === link.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {link.subMenu.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2.5 rounded-xl text-sm text-white/55 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {sub.label}
                        <span className="block text-xs text-white/25 mt-0.5">{sub.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.href) ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/8'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-4 right-4">
          <Link
            href="/get-consultation"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full btn-primary"
          >
            Get Consultation
            <Icon name="ArrowRightIcon" size={15} variant="outline" className="text-white" />
          </Link>
        </div>
      </div>
    </>
  );
}
