import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="section-subtitle mb-3">About Our Law Firm</p>
            <h2 className="section-title mb-6 text-foreground">
              Professional Legal Services
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Custodes Legis is a full-service law firm committed to providing
              strategic legal solutions and effective representation to
              individuals, businesses, startups, and institutions. Guided by the
              principle of being "Guardians of the Law," we combine legal
              expertise, practical insight, and strong advocacy to protect our
              clients' rights and interests. Our team advises and represents
              clients across litigation, dispute resolution, corporate and
              commercial matters, property disputes, family law, intellectual
              property, consumer protection, banking and finance, insurance
              claims, cyber law, and startup compliance.
            </p>
            <a href="/about" className="btn-gold">
              More About Us
            </a>
          </div>
          <div className="overflow-clip">
            <Image
              width={500}
              height={500}
              src="/about-image.jpg"
              alt="Law office with legal books and scales of justice"
              className="h-full w-full object-cover shadow-2xl transition-transform duration-500 hover:scale-105 object-small-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
