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
    icon: Shield,
    title: 'Criminal Law',
    desc: 'Handling offenses like theft, assault, fraud, and other criminal matters.',
  },
  {
    icon: Shield,
    title: 'Civil Law',
    desc: 'Non-criminal disputes such as property, contracts, and recovery suits.',
  },
  {
    icon: Heart,
    title: 'Corporate / Business Law',
    desc: 'Company formation, compliance, mergers, and corporate governance.',
  },
  {
    icon: Briefcase,
    title: 'Family Law',
    desc: 'Legal guidance for divorce, child custody, and family-related matters.',
  },
  {
    icon: Shield,
    title: 'Constitutional Law',
    desc: 'Cases involving fundamental rights, writ petitions, and constitutional issues.',
  },
  {
    icon: Home,
    title: 'Property / Real Estate Law',
    desc: 'Land disputes, ownership issues, and real estate transactions.',
  },
  {
    icon: GraduationCap,
    title: 'Intellectual Property Law (IPR)',
    desc: 'Protection of copyrights, trademarks, patents, and creative rights.',
  },
  {
    icon: AlertTriangle,
    title: 'Taxation Law',
    desc: 'Income tax, GST, and resolution of tax-related disputes.',
  },
  {
    icon: Briefcase,
    title: 'Labour & Employment Law',
    desc: 'Workplace disputes, employee rights, and employment regulations.',
  },
  {
    icon: AlertTriangle,
    title: 'Environmental Law',
    desc: 'Cases related to pollution, environmental protection, and regulations.',
  },
  {
    icon: Shield,
    title: 'Cyber Law',
    desc: 'Legal matters involving online fraud, data privacy, and cybercrime.',
  },
  {
    icon: Heart,
    title: 'Banking & Finance Law',
    desc: 'Loans, insolvency, and financial dispute resolution.',
  },
  {
    icon: AlertTriangle,
    title: 'Consumer Protection Law',
    desc: 'Consumer rights, complaints, and unfair trade practices.',
  },
  {
    icon: GraduationCap,
    title: 'Arbitration & ADR',
    desc: 'Mediation, arbitration, and alternative dispute resolution methods.',
  },
  {
    icon: Briefcase,
    title: 'Immigration Law',
    desc: 'Visas, citizenship, and deportation-related legal services.',
  },
  {
    icon: AlertTriangle,
    title: 'Insurance Law',
    desc: 'Insurance claims, policy disputes, and coverage issues.',
  },
  {
    icon: Home,
    title: 'Maritime Law',
    desc: 'Shipping, sea-related disputes, and maritime regulations.',
  },
  {
    icon: Shield,
    title: 'Human Rights Law',
    desc: 'Protection and enforcement of fundamental human rights.',
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {practices.map(item => (
            <div
              key={item.title}
              className="group cursor-pointer border border-border bg-background p-8 transition-all duration-300 hover:bg-navy hover:shadow-xl object-small-animation"
            >
              <item.icon
                className="mb-5 h-12 w-12 text-gold transition-colors "
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
