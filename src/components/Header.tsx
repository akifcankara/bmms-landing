"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { id: 'nav_services', label: 'Services', href: '/services' },
    { id: 'nav_resources', label: 'Resources', href: '#resources' },
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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight hover:text-accent transition-colors uppercase text-[rgba(59,130,246,0.8)]"
        >
          Bridgemena
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`transition-colors ${isActive(link.href)
                ? 'text-accent font-semibold' : 'hover:text-primary'
                }`}
            >
              {link.label}
            </Link>
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
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-bold tracking-tight uppercase text-[rgba(59,130,246,0.8)] hover:text-accent transition-colors"
          >
            Bridgemena
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
        <div className="px-6 py-4 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-accent font-semibold'
                  : 'text-gray-800 hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
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