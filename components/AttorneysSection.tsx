import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Link from 'next/link';

const attorneys = [
  {
    img: '/attorney-1.jpg',
    name: 'Puneet Kumar',
    role: 'Family Lawyer',
    Name: 'Puneet',
  },
  {
    img: '/attorney-2.jpg',
    name: 'Rakesh Kumar',
    role: 'Divorce Lawyer',
    Name: 'Rakesh',
  },
  {
    img: '/attorney-4.jpg',
    name: 'Vipul Kumar',
    role: 'Criminal Lawyer',
    Name: 'Vipul',
  },
];

const AttorneysSection = () => {
  return (
    <section
      className="bg-background py-20 lg:py-28"
      // style={{
      //   border: '1px solid red',
      // }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="section-subtitle mb-3">Meet Our Expert Lawyers</p>
          <h2 className="section-title text-foreground">
            Our Team of Skilled Lawyers
          </h2>
        </div>

        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
        {/* </div> */}
        <Carousel className="w-4/5 md:w-full max-w-5xl mx-auto">
          <CarouselContent>
            {attorneys.map(attorney => (
              <CarouselItem
                key={attorney.name}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Link href={`/Advocate/${attorney.Name}`}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <Image
                        src={attorney.img}
                        alt={attorney.name}
                        className="h-60 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        width={200}
                        height={200}
                      />
                      <div className="absolute inset-0 bg-navy/0 transition-all duration-300 group-hover:bg-navy/40" />
                    </div>
                    <div className="bg-navy p-5 text-center transition-colors group-hover:bg-navy-dark">
                      <h3 className="font-heading text-lg font-bold text-primary-foreground">
                        {attorney.name}
                      </h3>
                      <p className="text-sm text-gold">{attorney.role}</p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default AttorneysSection;
