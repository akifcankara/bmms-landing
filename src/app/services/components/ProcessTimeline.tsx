import Icon from '@/components/ui/AppIcon';

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export default function ProcessTimeline() {
  const steps: Step[] = [
    {
      id: 'step_1',
      number: '01',
      title: 'Consultation',
      description: 'Free 30-minute consultation to understand your business needs and recommend the best expansion strategy.',
      icon: 'ChatBubbleLeftRightIcon'
    },
    {
      id: 'step_2',
      number: '02',
      title: 'Formation',
      description: 'Complete company formation including license, registration, and all required government approvals.',
      icon: 'DocumentTextIcon'
    },
    {
      id: 'step_3',
      number: '03',
      title: 'Setup',
      description: 'Office setup, bank account opening, visa processing, and all operational requirements.',
      icon: 'WrenchScrewdriverIcon'
    },
    {
      id: 'step_4',
      number: '04',
      title: 'Launch',
      description: 'Final handover with all documents, ongoing support, and compliance management.',
      icon: 'RocketLaunchIcon'
    }];


  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[rgba(78,130,183,1)]">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined 4-step process from consultation to launch, typically completed in 2-4 weeks.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) =>
            <div key={step.id} className="relative reveal">
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 &&
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border"></div>
              }

              {/* Step Card */}
              <div className="relative glass-card p-6 text-center hover-glow min-h-[300px]">
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4 mt-6 pt-1">
                  <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Icon name={step.icon as any} size={24} variant="outline" className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}