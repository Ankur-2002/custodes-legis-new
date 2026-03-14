'use client';

import { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const navLinks = [
  { label: 'HOME', href: '#' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PRACTICE AREA', href: '#practice' },
  { label: 'CASES', href: '#cases' },
  { label: 'NEWS', href: '#blog' },
  { label: 'CONTACT', href: '#consulting' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <Scale className="h-8 w-8 text-gold" />
          <span className="font-heading text-2xl font-bold text-primary-foreground">
            CUSTODES-LEGIS
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-wider text-primary-foreground/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary-foreground lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-navy-light bg-navy px-4 py-4 lg:hidden">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-semibold tracking-wider text-primary-foreground/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
