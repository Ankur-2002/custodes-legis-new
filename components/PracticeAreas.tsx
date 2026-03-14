import {
  Heart,
  Shield,
  Briefcase,
  AlertTriangle,
  GraduationCap,
  Home,
} from 'lucide-react';

const practices = [
  {
    icon: Heart,
    title: 'Corporate Law',
    desc: 'Legal support for businesses, contracts, compliance, and corporate governance.',
  },
  {
    icon: Shield,
    title: 'Civil Litigation',
    desc: 'Professional representation in civil disputes and court proceedings.',
  },
  {
    icon: Briefcase,
    title: 'Family Law',
    desc: 'Legal guidance for divorce, child custody, and family-related matters.',
  },
  {
    icon: AlertTriangle,
    title: 'Business Disputes',
    desc: 'Strategic legal solutions for resolving commercial and partnership conflicts.',
  },
  {
    icon: GraduationCap,
    title: 'Contract Law',
    desc: 'Drafting, reviewing, and enforcing legally binding agreements.',
  },
  {
    icon: Home,
    title: 'Property Law',
    desc: 'Legal assistance for property transactions, ownership, and disputes.',
  },
];

const PracticeAreas = () => {
  return (
    <section id="practice" className="bg-cream py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="section-subtitle mb-3">Areas of Practice</p>
          <h2 className="section-title text-foreground">
            Expert Legal Services Across Key Practice Areas
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map(item => (
            <div
              key={item.title}
              className="group cursor-pointer border border-border bg-background p-8 transition-all duration-300 hover:bg-navy hover:shadow-xl"
            >
              <item.icon
                className="mb-5 h-12 w-12 text-gold transition-colors"
                strokeWidth={1.2}
              />
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
