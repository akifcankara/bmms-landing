import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  label: string;
  value: string;
  href: string;
}

export default function QuickContact() {
  const methods: ContactMethod[] = [
    {
      id: 'whatsapp',
      icon: 'ChatBubbleLeftRightIcon',
      label: 'WhatsApp',
      value: '+971 50 123 4567',
      href: 'https://wa.me/971501234567',
    },
    {
      id: 'email',
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: 'hello@bridgemena.com',
      href: 'mailto:hello@bridgemena.com',
    },
    {
      id: 'phone',
      icon: 'PhoneIcon',
      label: 'Phone',
      value: '+971 4 123 4567',
      href: 'tel:+97141234567',
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[rgba(84,130,176,1)] mb-6">Quick Contact</h3>

      {methods.map((method) => (
        <a
          key={method.id}
          href={method.href}
          target={method.id === 'whatsapp' ? '_blank' : undefined}
          rel={method.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
          className="glass-card p-6 flex items-center gap-4 hover-glow group transition-all"
        >
          <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
            <Icon name={method.icon as any} size={24} variant="outline" className="text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">{method.label}</p>
            <p className="text-base font-semibold text-foreground transition-colors">
              {method.value}
            </p>
          </div>
        </a>
      ))}

      {/* Working Hours */}
      <div className="glass-card p-6 mt-8">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Icon name="ClockIcon" size={24} variant="outline" className="text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-white mb-2">Working Hours</p>
            <p className="text-sm text-foreground">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
            <p className="text-sm text-foreground">Friday - Saturday: Closed</p>
            <p className="text-xs text-muted-foreground mt-2">UAE Time (GMT+4)</p>
          </div>
        </div>
      </div>
    </div>
  );
}