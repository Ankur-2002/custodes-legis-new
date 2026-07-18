import { MapPin, Phone, Clock } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-navy-dark py-2.5 text-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
          <a href="https://maps.app.goo.gl/9wBUHM116kxCpEHq5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
            <MapPin className="h-4 w-4 text-gold" />
            Tis Hazari, Delhi
          </a>
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gold" />
            <a href="tel:+919718302748">97183-02748</a> |
            <a href="tel:+919990476969">99904-76969</a>
          </span>
          <span className="hidden items-center gap-2 md:flex">
            <Clock className="h-4 w-4 text-gold" />
            9AM - 5PM
          </span>
        </div>
        <a
          href="#consulting"
          className="btn-outline-gold hidden py-1.5 text-xs sm:inline-block"
        >
          Schedule a Consultation
        </a>
      </div>
    </div>
  );
};

export default TopBar;
