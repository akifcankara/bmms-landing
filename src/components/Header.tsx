"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  const navLinks = [
    { id: 'nav_home', label: 'Home', href: '/' },
    {
      id: 'nav_services',
      label: 'Services',
      href: '/services',
      subMenu: [
        { label: 'Company Formation', href: '/services?filter=service&id=company-formation', description: 'Freezone, Mainland & Offshore setup' },
        { label: 'Visa Services', href: '/services?filter=service&id=visa', description: 'Employment, Investor & Family visas' },
        { label: 'HR & Payroll', href: '/services?filter=service&id=hr', description: 'Complete HR management solutions' },
        { label: 'Accounting & Tax', href: '/services?filter=service&id=accounting', description: 'Bookkeeping, VAT & Corporate Tax' },
        { label: 'PRO Services', href: '/services?filter=service&id=pro', description: 'Government liaison services' },
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
    { id: 'nav_about', label: 'About', href: '#about' },
    { id: 'nav_contact', label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href.startsWith('#')) return false;
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight hover:text-accent transition-colors uppercase text-[rgba(59,130,246,0.8)]"
        >
          <Image src={'/logo.jpg'} alt='BMMS LOGO' width={145} height={145} className='rounded-md px-5' />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <div key={link.id} className="relative group">
              <Link
                href={link.href}
                className={`flex items-center gap-1 transition-colors ${isActive(link.href)
                  ? 'text-accent font-semibold'
                  : 'hover:text-primary'
                  }`}
              >
                {link.label}
                {link.subMenu && (
                  <Icon name="ChevronDownIcon" size={14} variant="outline" className="transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* Dropdown Menu */}
              {link.subMenu && (
                <div className="fixed left-0 right-0 top-16 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-40">
                  <div className="bg-white border-t border-gray-200 shadow-xl py-8">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {link.subMenu.map((subItem, index) => (
                        <Link
                          key={index}
                          href={subItem.href}
                          className="group/item relative block p-5 rounded-xl border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-blue-50/30"
                        >
                          {/* Hover indicator */}
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-xl opacity-0 group-hover/item:opacity-100 transition-opacity" />

                          <div className="flex items-start gap-3">
                            {/* Icon circle */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover/item:bg-accent/20 transition-colors">
                              <Icon name="CheckCircleIcon" size={20} variant="outline" className="text-accent" />
                            </div>

                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 text-sm mb-1 group-hover/item:text-accent transition-colors flex items-center gap-2">
                                {subItem.label}
                                <Icon name="ArrowRightIcon" size={14} variant="outline" className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-accent" />
                              </div>
                              <div className="text-xs text-gray-600 leading-relaxed">
                                {subItem.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 btn-primary"
          >
            Get Started
            <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-white" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary hover:text-accent transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name="Bars3Icon"
              size={24}
              variant="outline"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="t-2 text-lg font-bold tracking-tight uppercase text-[rgba(59,130,246,0.8)] hover:text-accent transition-colors"
          >
            <Image src={'/logo.jpg'} alt='BMMS LOGO' width={145} height={145} className='rounded-md' />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-800 hover:text-accent transition-colors"
            aria-label="Close menu"
          >
            <Icon name="XMarkIcon" size={28} variant="outline" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-6 py-4 space-y-4 overflow-y-auto max-h-[calc(100vh-180px)]">
          {navLinks.map((link) => (
            <div key={link.id}>
              {link.subMenu ? (
                <div>
                  {/* Parent Menu Item with Submenu */}
                  <button
                    onClick={() => setExpandedMobileMenu(expandedMobileMenu === link.id ? null : link.id)}
                    className="flex items-center justify-between w-full text-base font-medium text-gray-800 hover:text-accent transition-colors"
                  >
                    {link.label}
                    <Icon
                      name="ChevronDownIcon"
                      size={16}
                      variant="outline"
                      className={`transition-transform ${expandedMobileMenu === link.id ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Submenu Items */}
                  <div
                    className={`mt-2 ml-4 space-y-2 overflow-hidden transition-all duration-300 ${expandedMobileMenu === link.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    {link.subMenu.map((subItem, index) => (
                      <Link
                        key={index}
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 border-l-2 border-gray-200 pl-4 hover:border-accent transition-colors"
                      >
                        <div className="text-sm font-semibold text-gray-700 hover:text-accent">
                          {subItem.label}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {subItem.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base font-medium transition-colors ${isActive(link.href)
                    ? 'text-accent font-semibold'
                    : 'text-gray-800 hover:text-accent'
                    }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center btn-primary mt-8"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}