import ConsultingForm from '@/components/ConsultingForm';
import ServiceCards from '@/components/ServiceCards';
import { HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Card = ({
  title,
  number,
  description,
}: {
  title: string;
  number: number;
  description: string;
}) => {
  return (
    <div
      className={`w-full min-h-full flex justify-${number % 2 ? 'center' : 'center'} items-center`}
    >
      <div className="flex flex-col gap-0 border border-gray-300 rounded-lg p-6 w-[350px] h-[200px]  backdrop-blur-[1px] hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer ">
        <h1 className="text-2xl font-bold text-foreground ">{title}</h1>
        <div className="flex gap-4 h-full w-full items-center">
          <HeartHandshake className="w-[5rem] h-[5rem] text-navy" style={{}} />
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Section */}
      <div className="text-white py-16 min-h-[500px] gradient min-w-full">
        <Image src="/blog-2.jpg" width={500} height={500} alt="Image" />
        <div className="container px-4 flex justify-center min-h-[400px] min-w-full items-center">
          <div className="flex gap-4">
            <h3 className="text-2xl font-semibold text-primary-foreground/80">
              Custodes-Legis
            </h3>
            <h2 className="text-3xl font-bold">/</h2>
            <h1 className="text-4xl font-bold">{'About us'}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto sm:px-4 mb-16 bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2 m-4 sm:m-8 md:m-12 py-8">
          <div>
            <h2 className="section-title mb-6 text-foreground">
              Professional Legal Services
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground text-balance">
              We are CUSTODESLEGIS, a law firm serving clients across India with
              a commitment to excellence, integrity, and results-driven legal
              solutions. Our team of experienced lawyers provides strategic
              legal guidance across corporate law, litigation, family law, and
              business disputes, ensuring clear advice and strong representation
              at every stage.
            </p>

            <p className="mb-4 italic text-muted-foreground text-balance">
              “CUSTODESLEGIS symbolises our role as custodians of justice, where
              every matter entrusted to us is handled with diligence, precision,
              and the highest respect for the rule of law.”
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground text-balance">
              We believe in delivering personalised attention and practical
              legal solutions tailored to each client’s unique needs. By
              combining deep legal expertise with a client-focused approach, we
              work to protect your rights, resolve complex challenges, and
              support your long-term success, wherever you are in India.
            </p>
            <a href="#" className="btn-gold">
              Schedule a Consultation
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
      <ServiceCards />

      <div className="container bg-cream min-h-screen overflow-hidden relative min-w-full p-0">
        <div className="border-dot-in-center"></div>
        <div className="grid gap-12 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 min-h-screen justify-items-center sm:p-4 md:p-8 p-4">
          <Card
            title="Client-Centric"
            number={1}
            description="We shape our work around your needs"
          />
          <Card
            title="Approachable"
            number={2}
            description="We are easy to reach and ready to help."
          />
          <Card
            title="Trust"
            number={3}
            description="We handle every case with care and honesty."
          />
          <Card
            title="Transparency"
            number={4}
            description="We speak clearly and give honest advice."
          />
        </div>
      </div>

      <ConsultingForm bgClass="bg-white" />
    </div>
  );
};

export default page;
