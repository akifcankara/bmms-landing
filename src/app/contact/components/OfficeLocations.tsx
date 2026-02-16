import Icon from '@/components/ui/AppIcon';

interface Office {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  mapLink: string;
}

export default function OfficeLocations() {
  const offices: Office[] = [
    {
      id: 'dubai',
      city: 'Dubai',
      country: 'United Arab Emirates',
      address: 'Office 2301, Burj Khalifa Boulevard, Downtown Dubai, Dubai, UAE',
      phone: '+971 4 123 4567',
      mapLink: 'https://maps.app.goo.gl/M48kXM2UkzuKeacx7'
    },
    {
      id: 'abudhabi',
      city: 'Abu Dhabi',
      country: 'United Arab Emirates',
      address: 'Office 1205, Al Maryah Island, Abu Dhabi Global Market, Abu Dhabi, UAE',
      phone: '+971 2 234 5678',
      mapLink: 'https://maps.app.goo.gl/afAUCXTpNZ5wyLeTA'
    },
    {
      id: 'riyadh',
      city: 'Riyadh',
      country: 'Kingdom of Saudi Arabia',
      address: 'Office 3402, King Fahd Road, Olaya District, Riyadh, Saudi Arabia',
      phone: '+966 11 345 6789',
      mapLink: 'https://maps.app.goo.gl/1Fw6XfWzSKjwDGDX7'
    }];


  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[rgba(105,150,195,1)]">
            Our Office Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us at any of our regional offices across UAE and Saudi Arabia.
          </p>
        </div>

        {/* Office Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office) =>
            <div key={office.id} className="glass-card p-8 hover-glow reveal">
              {/* City Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Icon name="MapPinIcon" size={24} variant="solid" className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{office.city}</h3>
                  <p className="text-sm text-muted-foreground">{office.country}</p>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Icon name="BuildingOffice2Icon" size={18} variant="outline" className="text-muted-foreground flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground leading-relaxed">{office.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="PhoneIcon" size={18} variant="outline" className="text-muted-foreground flex-shrink-0" />
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-sm text-foreground transition-colors">
                    {office.phone}
                  </a>
                </div>
              </div>

              {/* Map Link */}
              <a
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-white border-white w-full flex items-center justify-center gap-2 hover:text-white">

                View on Map
                <Icon name="MapIcon" size={16} variant="outline" className="text-white" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>);

}