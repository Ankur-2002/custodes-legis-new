// import case1 from './case-1.jpg';
// import case2 from './case-2.jpg';
// import case3 from './case-3.jpg';

const cases = [
  {
    img: '/case-1.jpg',
    category: 'Corporate Law',
    title: 'Corporate Contract Dispute',
  },
  {
    img: '/case-2.jpg',
    category: 'Family Law',
    title: 'Custody & Asset Settlement',
  },
  {
    img: '/case-3.jpg',
    category: 'Property Law',
    title: 'Property Boundary Dispute',
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="section-subtitle mb-3">Our Success Stories</p>
          <h2 className="section-title text-foreground">
            Our Recent Case Studies
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map(item => (
            <div
              key={item.title}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="bg-navy p-6">
                <p className="mb-1 text-sm text-gold">{item.category}</p>
                <h3 className="font-heading text-lg font-bold text-primary-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
