// import heroImage from './hero-attorney.jpg';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-navy lg:min-h-[700px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/hero-attorney.jpg)` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/60" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl">
          <p className="section-subtitle mb-4 animate-fade-in-up">
            Leading Law Firm in India
          </p>
          <h1
            className="mb-8 font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.2s' }}
          >
            Professional Legal Services for Businesses & Individuals
          </h1>
          <a
            href="#consulting"
            className="btn-gold"
            style={{ animationDelay: '0.4s' }}
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
