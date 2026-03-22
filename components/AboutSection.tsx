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
              Our law firm is dedicated to providing reliable and professional
              legal services to individuals, businesses, and organisations. With
              a team of experienced lawyers, we offer strategic legal guidance
              across corporate law, litigation, family law, and business
              disputes, ensuring that our clients receive clear advice and
              strong representation.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              We believe that every client deserves personalised attention and
              practical legal solutions. By combining deep legal knowledge with
              a client-focused approach, our firm works diligently to protect
              your rights, resolve complex legal challenges, and support your
              long-term success.
            </p>
            <a href="#" className="btn-gold">
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
