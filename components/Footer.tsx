import { Scale, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Scale className="h-7 w-7 text-gold" />
              <span className="font-heading text-xl font-bold text-primary-foreground">BARRISTAR</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/60">
              We fight for your justice as like a friend. Professional legal services you can trust.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:border-gold hover:text-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-heading text-lg font-bold text-primary-foreground">Quick Links</h3>
            {["About Us", "Practice Area", "Our Cases", "Latest News", "Contact Us"].map((link) => (
              <a key={link} href="#" className="mb-2 block text-sm text-primary-foreground/60 transition-colors hover:text-gold">
                {link}
              </a>
            ))}
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="mb-5 font-heading text-lg font-bold text-primary-foreground">Practice Area</h3>
            {["Family Law", "Criminal Law", "Business Law", "Personal Injury", "Education Law"].map((area) => (
              <a key={area} href="#" className="mb-2 block text-sm text-primary-foreground/60 transition-colors hover:text-gold">
                {area}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-heading text-lg font-bold text-primary-foreground">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="text-sm text-primary-foreground/60">121 King Street, Melbourne, Australia</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <p className="text-sm text-primary-foreground/60">3164-5456854</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <p className="text-sm text-primary-foreground/60">info@barristar.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/40">
            © 2024 Barristar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
