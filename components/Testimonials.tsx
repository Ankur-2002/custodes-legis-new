'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: 'The team provided expert guidance through my corporate dispute. Their professionalism and strategic approach gave me complete confidence.',
    name: 'Aliza Anney',
    role: 'CEO, TechNova',
  },
  {
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
    name: 'Rajesh Mehta',
    role: 'CEO, TechNova',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="section-subtitle mb-3">What Our Clients Say</p>
          <h2 className="section-title text-primary-foreground">
            Client Testimonials
          </h2>
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80 italic">
            &quot;{testimonials[current].text}&quot;
          </p>
          <div className="mb-4 mx-auto h-16 w-16 overflow-hidden rounded-full bg-navy-light flex items-center justify-center">
            <span className="font-heading text-xl font-bold text-gold">
              {testimonials[current].name[0]}
            </span>
          </div>
          <h4 className="font-heading text-xl font-bold text-primary-foreground">
            {testimonials[current].name}
          </h4>
          <p className="text-sm text-gold">{testimonials[current].role}</p>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() =>
                setCurrent(p => (p === 0 ? testimonials.length - 1 : p - 1))
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-navy-dark"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() =>
                setCurrent(p => (p === testimonials.length - 1 ? 0 : p + 1))
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-navy-dark"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
