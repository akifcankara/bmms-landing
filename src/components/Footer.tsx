import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const currentYear = 2026;

  const footerLinks = [
    { id: 'footer_company', label: 'Company', href: '#about' },
    { id: 'footer_services', label: 'Services', href: '/services' },
    { id: 'footer_resources', label: 'Resources', href: '#resources' },
    { id: 'footer_careers', label: 'Careers', href: '#careers' },
    { id: 'footer_contact', label: 'Contact', href: '/contact' },
    { id: 'footer_privacy', label: 'Privacy', href: '#privacy' },
    { id: 'footer_terms', label: 'Terms', href: '#terms' },
  ];

  const socialLinks = [
    { id: 'social_linkedin', icon: 'BuildingOffice2Icon', href: '#', label: 'LinkedIn' },
    { id: 'social_twitter', icon: 'ChatBubbleLeftRightIcon', href: '#', label: 'Twitter' },
    { id: 'social_instagram', icon: 'PhotoIcon', href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Single Row Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-3 text-sm">
            <span className="font-bold tracking-tight text-foreground uppercase">
              Bridgemena
            </span>
            <span className="text-muted">|</span>
            <span className="text-muted-foreground">EST. 2010</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {footerLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Icon name={social.icon as any} size={20} variant="outline" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright Row */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Bridgemena. All rights reserved. Simplifying MENA market entry since 2010.
          </p>
        </div>
      </div>
    </footer>
  );
}