// import case1 from './case-1.jpg';
// import case2 from './case-2.jpg';
// import case3 from './case-3.jpg';

'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const clients = [
  {
    name: 'New Age Acoustics Pvt. Ltd.',
    description:
      'A company engaged in acoustic engineering and soundproofing solutions, serving commercial, industrial, and institutional infrastructure projects with specialized acoustic products and consultancy services.',
    imageUrl: '',
  },
  {
    name: 'ASICS India Pvt. Ltd.',
    description:
      'The Indian arm of the globally recognized Japanese sportswear brand ASICS, known for premium athletic footwear, sports apparel, and performance-driven fitness products.',
    imageUrl: '',
  },
  {
    name: 'Euphoria World Travels Pvt. Ltd.',
    description:
      'A travel and tourism company offering domestic and international travel management, holiday packages, visa assistance, and corporate travel solutions.',
    imageUrl: '',
  },
  {
    name: 'PP Taxo Fab Pvt. Ltd.',
    description:
      'A manufacturing and trading enterprise engaged in textile and fabric-related products, catering to commercial and industrial supply requirements.',
    imageUrl: '',
  },
  {
    name: 'International Society for Technology in Education (ISTE)',
    description:
      'A globally recognized organization dedicated to advancing innovation in education through technology, digital learning frameworks, and professional development initiatives.',
    imageUrl: '',
  },
  {
    name: 'Limbra Graphics Pvt. Ltd.',
    description:
      'A printing and branding solutions company specializing in graphic design, commercial printing, packaging, and visual communication services.',
    imageUrl: '',
  },
  {
    name: 'M/s AJ Enterprises',
    description:
      'A business enterprise engaged in commercial trading and supply operations across multiple sectors with a focus on efficient business support and client servicing.',
    imageUrl: '',
  },
  {
    name: 'M/s Sai Impex',
    description:
      'An import-export and trading concern dealing in diversified commercial products and international trade operations.',
    imageUrl: '',
  },
  {
    name: 'M/s Divine International',
    description:
      'A business entity engaged in international trading, sourcing, and supply-chain related commercial activities across domestic and overseas markets.',
    imageUrl: '',
  },
  {
    name: 'EDC India',
    description:
      'A company engaged in business consultancy, project support, and enterprise development services across diverse industrial sectors.',
    imageUrl: '',
  },
  {
    name: 'M/s Sarkle Jewells',
    description:
      'A jewellery and precious ornaments business engaged in the design, trading, and retail of fine jewellery products.',
    imageUrl: '',
  },
  {
    name: 'M/s R.K. Engineers',
    description:
      'An engineering and technical solutions firm providing industrial, fabrication, and mechanical support services for infrastructure and commercial projects.',
    imageUrl: '',
  },
  {
    name: 'M/s Sneh Overseas',
    description:
      'An overseas trading and export-oriented business dealing in commercial merchandise and international supply operations.',
    imageUrl: '',
  },
  {
    name: 'Asian TV Network Pvt. Ltd.',
    description:
      'A media and broadcasting company engaged in television network operations, entertainment content distribution, and digital media services.',
    imageUrl: '',
  },
  {
    name: 'M/s SS Enterprises',
    description:
      'A commercial enterprise engaged in diversified business and trading activities, serving consumer markets.',
    imageUrl: '',
  },
  {
    name: 'M/s Shiv Shakti Enterprises',
    description:
      'A business organization involved in commercial supply, trading, and enterprise support services across multiple sectors.',
    imageUrl: '',
  },
  {
    name: 'M/s Ashiana Communications',
    description:
      'A communications and technology solutions provider engaged in telecom, networking, and business communication services.',
    imageUrl: '',
  },
  {
    name: 'M/s Shanti Vyas Transport',
    description:
      'A transportation and logistics company offering goods carriage, fleet management, and supply-chain transportation services.',
    imageUrl: '',
  },
  {
    name: 'M/s Kalra Generators',
    description:
      'A power solutions enterprise dealing in generator sales, rental, maintenance, and industrial power backup services.',
    imageUrl: '',
  },
  {
    name: 'M/s K.Y. Cranes',
    description:
      'A heavy equipment and crane services company providing lifting, infrastructure, and industrial handling solutions.',
    imageUrl: '',
  },
  {
    name: 'Sab Fitness & Training Centre Pvt. Ltd.',
    description:
      'A fitness and wellness company offering professional training programs, gym facilities, health coaching, and lifestyle management services.',
    imageUrl: '',
  },
  {
    name: 'SVL Multiventures Pvt. Ltd.',
    description:
      'A diversified business company engaged in investment, commercial ventures, and multi-sector enterprise operations.',
    imageUrl: '',
  },
  {
    name: 'Rishi Vastra Vyapar Pvt. Ltd.',
    description:
      'A textile and apparel trading company engaged in garment, fabric, and fashion-related commercial activities catering to wholesale and retail markets.',
    imageUrl: '',
  },
];

const Clients = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleClients = showAll ? clients : clients.slice(0, 8);

  return (
    <section id="clients" className="bg-background py-10 lg:py-15">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="section-subtitle mb-3">Our Clients</p>
          <h2 className="section-title text-foreground">
            Trusted by Leading Organisations
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleClients.map(client => (
            <div
              key={client.name}
              className="group cursor-pointer overflow-hidden bg-navy flex flex-col transition-all duration-300 hover:bg-navy hover:shadow-xl object-small-animation"
            >
              {client.imageUrl && (
                <div className="overflow-hidden">
                  <img
                    src={client.imageUrl}
                    alt={client.name}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6 flex-grow flex flex-col justify-center">
                <h3 className="font-heading text-lg font-bold text-primary-foreground mb-3">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {clients.length > 8 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center gap-2 border-2 border-navy bg-navy text-primary-foreground hover:bg-transparent hover:text-navy px-8 py-3 text-sm font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer"
            >
              {showAll ? (
                <>
                  View Less <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  View More <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;
