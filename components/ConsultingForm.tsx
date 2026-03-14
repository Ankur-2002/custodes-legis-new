'use client';
import { useState } from 'react';

const practiceOptions = [
  'Litigation',
  'Family Law',
  'Business Disputes',
  'Contract Law',
  'Property Law',
  'Civil Law',
  'Criminal Law',
  'Legal Consultation',
  'Dispute Resolution',
];

const ConsultingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <section id="consulting" className="bg-cream py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="section-subtitle mb-3">Book a Consultation</p>
            <h2 className="section-title mb-6 text-foreground">
              Speak with our expert lawyers today for trusted legal guidance
            </h2>
            {/* <p className="mb-4 text-lg font-semibold text-foreground">
              Call us 24/7 at <span className="text-gold">(888) 123-4567</span>{' '}
              or fill out the form.
            </p> */}
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Whether you need advice on corporate law, litigation, family
              matters, or business disputes, our experienced legal team is here
              to provide personalised solutions. Schedule a consultation today
              and take the first step toward resolving your legal challenges
              with confidence and clarity.
            </p>
            <div className="flex flex-wrap gap-3">
              {practiceOptions.map(opt => (
                <span
                  key={opt}
                  className="rounded-sm border border-border bg-background px-4 py-2 text-sm text-foreground"
                >
                  {opt}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-navy p-8">
            <h3 className="mb-4 font-heading text-2xl font-bold text-primary-foreground">
              Request Legal Advice
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-navy-light bg-navy-light px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-gold focus:outline-none"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-navy-light bg-navy-light px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-gold focus:outline-none"
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-navy-light bg-navy-light px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-gold focus:outline-none"
              value={formData.phone}
              onChange={e =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <select
              className="w-full border border-navy-light bg-navy-light px-4 py-3 text-sm text-primary-foreground/50 focus:border-gold focus:outline-none"
              value={formData.caseType}
              onChange={e =>
                setFormData({ ...formData, caseType: e.target.value })
              }
            >
              <option value="">Select Case Type</option>
              {practiceOptions.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border border-navy-light bg-navy-light px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-gold focus:outline-none"
              value={formData.message}
              onChange={e =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button type="submit" className="btn-gold w-full text-center">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultingForm;
