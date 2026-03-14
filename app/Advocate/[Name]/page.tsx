import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Phone,
  Mail,
  // Fax,
  Award,
  BookOpen,
  Languages,
  Book,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const data = [
  {
    Name: 'Rakesh',
    name: 'Rakesh Kumar',
    position: 'Senior Associate - Custodes Legis | Government Panel Counsel',
    practiceArea: [
      'Civil Litigation',
      'Criminal Litigation',
      'Matrimonial and Family Disputes',
      'Property and Real Estate Disputes',
      'Cheque Bounce (Section 138 NI Act)',
      'Recovery and Execution Proceedings',
      'MCD Licensing and Municipal Law',
      'Corporate and Commercial Advisory',
      'Startup Legal Compliance',
      'Cyber Crime Matters',
      'Legal Metrology',
      'Business Licensing Consultancy',
      'Drafting of Agreements and Legal Documents',
      'Surrogacy (Regulation) Act Advisory and Litigation',
    ],
    experience: '10+ Years',
    address: 'Delhi High Court & District Courts, Delhi, India',
    phone: 'N/A',
    email: 'N/A',
    personalExperience: `Adv. Rakesh Kumar is a Senior Associate at Custodes Legis – Guardians of the Law, and also serves as a Government Panel Counsel. Appearing regularly before the Delhi High Court, District Courts, Tribunals, and quasi-judicial authorities across Delhi, he represents clients in a wide spectrum of legal matters including civil and criminal litigation, matrimonial and family disputes, property and real estate conflicts, cheque bounce matters under Section 138 of the Negotiable Instruments Act, and recovery proceedings.

His legal practice also extends to corporate and commercial advisory, startup legal compliance, cyber crime matters, municipal and licensing laws, legal metrology, and drafting of agreements and legal documentation. Through Custodes Legis, he also provides business licensing consultancy, assisting individuals, entrepreneurs, and startups in securing regulatory approvals, trade licenses, and statutory compliances required to operate lawfully and efficiently.

Known for his structured legal strategy and client-focused approach, he specializes in simplifying complex legal frameworks into clear, practical guidance. A notable matter handled under his representation concerning the Surrogacy (Regulation) Act gained national recognition and was featured by the Indian Express, reflecting the real-world impact of his legal practice.`,
    education: [
      'Bachelor of Laws (LLB)',
      'Bachelor of Business Administration (BBA)',
      'Post Graduate Diploma in Human Rights',
      'National Certificate Course on the Art of Contesting Civil Matters',
    ],
    languages: ['English (fluent)', 'Hindi (fluent)'],
    participatedCases: [
      'Surrogacy (Regulation) Act landmark matter featured in Indian Express',
    ],
  },
  {
    Name: 'Puneet',
    name: 'Puneet Kumar',
    position: 'Senior Litigation Counsel',
    practiceArea: [
      'Civil Litigation',
      'Criminal Defence',
      'Commercial Disputes',
      'Property and Real Estate Disputes',
      'Cheque Bounce Cases (Negotiable Instruments Act)',
      'Matrimonial Disputes',
      'Consumer Litigation',
    ],
    experience: '17+ Years',
    address: 'Delhi NCR, India',
    phone: '9718302748',
    email: 'puneetkumar@custodeslegis.com',
    personalExperience: `Puneet Kumar is a seasoned litigation advocate with more than 17 years of extensive experience in civil, criminal, commercial, and property litigation. He represents clients before the Delhi High Court, District Courts across Delhi NCR, and various tribunals and commissions in Delhi, Haryana, and Uttar Pradesh.

Enrolled with the Bar Council of Delhi in 2009, he is known for strategic litigation planning, persuasive courtroom advocacy, and result-oriented dispute resolution. His practice includes advising corporate entities, institutions, entrepreneurs, and individuals in complex legal disputes.

Throughout his career, he has handled matters related to civil litigation, commercial disputes, criminal defence, property disputes, cheque bounce cases under the Negotiable Instruments Act, matrimonial disputes, and consumer litigation.

He currently serves as Panel Counsel for the Delhi Development Authority (DDA) and the Delhi Transport Corporation (DTC). He has also been empanelled with the Delhi State Legal Services Authority on the North District Civil Panel and the Central District (District Judge Panel).

He completed his LL.B. (Hons.) from Guru Gobind Singh Indraprastha University, Delhi, and has been actively practicing since 2009. During his career, he has worked with reputed legal organizations such as S. N. Gupta & Co. and Juris Cradle Legal Services & Solutions LLP.

Apart from his legal practice, he has contributed to public interest initiatives through legal work with Satark Nagrik Sangathan, supporting transparency and accountability in governance.

At Custodes Legis, he strengthens the firm’s litigation practice by providing strategic legal advice, strong courtroom representation, and practical solutions to complex legal challenges.`,
    education: [
      'LL.B. (Hons.), Guru Gobind Singh Indraprastha University, Delhi',
    ],
    languages: [],
    participatedCases: [],
  },
  {
    Name: 'Vipul',
    name: 'Vipul Kumar',
    position: 'Founder & Litigation Counsel',
    practiceArea: [
      'Commercial Dispute Resolution',
      'Contract Drafting',
      'Startup Legal Advisory',
      'Civil Litigation',
      'Matrimonial & Family Disputes',
      'Property & Real Estate Litigation',
      'Cheque Bounce Cases (Negotiable Instruments Act)',
      'Consumer Litigation',
      'Criminal Defence',
    ],
    experience: '5+ Years',
    address: '', // Not provided in dataset
    phone: '9015535897',
    email: 'advvipulkumar88@gmail.com',
    personalExperience: `Vipul Kumar is a practising advocate and the founder of Custodeslegis, with more than five years of professional experience in litigation, commercial dispute resolution, contract drafting, and startup legal advisory. He represents clients before courts and legal forums in matters involving civil, commercial, and matrimonial disputes, while also advising startups and businesses on strategic legal structuring and contractual frameworks.

Enrolled with the Bar Council, Mr. Kumar has developed a practice focused on combining litigation strategy with proactive legal advisory, enabling clients to effectively resolve disputes while also building legally secure business operations. His work involves advising and representing startups, entrepreneurs, institutions, and individual clients across a wide range of legal matters.

Over the course of his legal practice, Mr. Kumar has handled diverse matters including commercial and contractual disputes, property and real estate litigation, cheque bounce cases under the Negotiable Instruments Act, matrimonial and family disputes, consumer litigation, and criminal defence matters.

Alongside litigation practice, Mr. Kumar actively advises startups and emerging businesses on contract drafting and legal structuring. He has assisted more than 100 startups across the globe in drafting legally enforceable agreements, structuring business relationships, and ensuring compliance with applicable regulatory frameworks.

Mr. Kumar also serves as Panel Counsel for the Indian Society for Technical Education (ISTE) and Entrepreneurship Development Cell (EDC India), where he provides legal advisory support relating to institutional collaborations, innovation initiatives, and startup ecosystems.`,
    education: [
      'Bachelor of Laws (LL.B.), Chaudhary Charan Singh University',
      'Diploma in Law Firm Practice Management – LawSikho',
      'Diploma in English Communication for Legal Professionals – LawSikho',
      'Diploma in International Contract Negotiation, Drafting and Enforcement – LawSikho',
    ],
    languages: [], // Not specified
    participatedCases: [], // Empty for now
    imageUrl: '/attorney-4.jpg',
  },
];

const AdvocatePage = async ({
  params,
}: {
  params: Promise<{ Name: string }>;
}) => {
  // For now, hardcoded data for Alecgander Harry
  const { Name } = await params;
  const advocate = data.find(d => d.Name === Name);
  const rightContent = [
    {
      key: 'Position',
      value: advocate?.position,
    },
    {
      key: 'Experience',
      value: advocate?.experience,
    },
    {
      key: 'Practice Area',
      value: advocate?.practiceArea.slice(0, 5).join(', '),
    },
    {
      key: 'Phone',
      value: advocate?.phone,
    },
    {
      key: 'Email',
      value: advocate?.email,
    },
    {
      key: 'Address',
      value: advocate?.address,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="text-white py-16 min-h-[500px] gradient min-w-full">
        <Image src="/blog-2.jpg" width={100} height={100} alt="Image" />
        <div className="container px-4 flex justify-center min-h-[400px] min-w-full items-center">
          <div className="flex gap-4">
            <h3 className="text-2xl font-semibold text-primary-foreground/80">
              Advocate
            </h3>
            <h2 className="text-3xl font-bold">/</h2>
            <h1 className="text-4xl font-bold">{advocate?.name}</h1>
          </div>
        </div>
      </div>

      <div className="container px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-12 mx-auto max-w-6xl">
        {/* Create grid for 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 overflow-hidden flex flex-col max-h-6xl min-h-[600px] ">
            <div className="flex flex-col items-center justify-center px-8 sm:px-8 lg:px-12 min-h-[500px]">
              <Image
                src={advocate?.imageUrl as string}
                alt="Attorney"
                // border-radius: 50%, center image
                className="w-[400px] h-[400px] object-cover object-top border-20 border-primary-foreground rounded-full "
                width={500}
                height={400}
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-4 bg-gray-300">
              <h1 className="text-4xl font-bold">{advocate?.name}</h1>
            </div>
          </div>
          <div className="bg-gray-200 overflow-hidden flex flex-col max-h-6xl min-h-[600px] ">
            <div className="flex-1 flex items-center justify-center p-4 bg-gray-300">
              <h1 className="text-4xl font-bold">Important Information</h1>
            </div>
            <div className="flex flex-col min-h-[500px]">
              <div className="grid grid-cols-[150px_1fr] gap-y-5 gap-x-4 px-4 py-4">
                {rightContent.map((item, index) => (
                  <React.Fragment key={index}>
                    <span className="font-bold text-gray-600 text-xl">
                      {item.key}:
                    </span>
                    <span className="text-gray-900">{item.value}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Experience */}
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl">Personal Experience</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {advocate?.personalExperience}
              </p>
            </div>

            {/* Education & Court Admissions */}
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl">Education & Court Admissions</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Book className="h-5 w-5 text-grey-600" />
                    <span className="font-semibold">Education</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    {advocate?.education.map((edu, index) => (
                      <li key={index} className="text-gray-700 text-lg">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Languages className="h-5 w-5 text-grey-600" />
                    <span className="font-semibold ">Languages</span>
                  </div>
                  <p className="text-gray-700 text-lg">
                    {advocate?.languages.join(', ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Participated Cases */}
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl">Participated Cases</h3>
              <div className="space-y-4">
                {(advocate?.participatedCases as string[])?.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1">
                    {advocate?.participatedCases.map((case_, index) => (
                      <li key={index} className="text-gray-700 ">
                        {case_}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No cases listed yet.</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-4xl">Practice Area</h3>
              <div className="space-y-4">
                {(advocate?.practiceArea as string[])?.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1">
                    {advocate?.practiceArea.map((area, index) => (
                      <li key={index} className="text-gray-700 ">
                        {area}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No cases listed yet.</p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                {/* No bold, No semibold */}
                <CardTitle className="text-4xl ">Contact Me</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Your Phone</Label>
                    <Input id="phone" placeholder="Enter your phone" />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Enter your address" />
                  </div>
                  <div>
                    <Label htmlFor="description">Case Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your case..."
                    />
                  </div>
                  <Button className="w-full">Appointment</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvocatePage;

export function generateStaticParams() {
  return data.map(advocate => ({ Name: advocate.Name }));
}
