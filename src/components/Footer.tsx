import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { id: 'footer_home', label: 'Home', href: '/' },
    { id: 'footer_contact', label: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { id: 'footer_all_services', label: 'All Services', href: '/services' },
    { id: 'footer_by_profile', label: 'By Profile', href: '/services?filter=profile' },
    { id: 'footer_by_industry', label: 'By Industry', href: '/services?filter=industry' },
    { id: 'footer_by_service', label: 'By Service', href: '/services?filter=service' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Single Row Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-3 text-sm">
            <Image src={'/logo-footer.png'} alt='BMMS LOGO' width={145} height={145} />
            <span className="text-muted">|</span>
            <span className="text-muted-foreground">EST. 2010</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {/* Quick Links */}
            {quickLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Service Links */}
            {serviceLinks.map((link) => (
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
          {/* <div className="flex gap-4">
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
          </div> */}
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