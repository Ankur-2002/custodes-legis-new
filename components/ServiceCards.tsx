import { Scale, Users, CircleArrowOutDownRight } from 'lucide-react';

const services = [
  {
    icon: CircleArrowOutDownRight,
    subtitle: 'Success Full Cases',
    value: '4800+',
  },
  { icon: Scale, subtitle: 'Years of Legal Excellence', value: '30+' },
  { icon: Users, subtitle: 'Practice Areas Covered', value: '15+' },
];

const ServiceCards = () => {
  return (
    <section className="relative z-20 -mt-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-0 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.value}
              className={`flex items-center gap-4 px-8 py-8 transition-all hover:bg-navy-dark ${
                i === 1 ? 'bg-navy' : 'bg-navy-light'
              }`}
            >
              <service.icon
                className="h-12 w-12 shrink-0 text-gold"
                strokeWidth={1.2}
              />
              <div>
                <p className="text-sm text-gold">{service.subtitle}</p>
                <h3 className="font-heading text-xl font-bold text-primary-foreground">
                  {service.value}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
