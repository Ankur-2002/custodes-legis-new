import AboutSection from '@/components/AboutSection';
import AttorneysSection from '@/components/AttorneysSection';
import BlogSection from '@/components/BlogSection';
import CaseStudies from '@/components/CaseStudies';
import ConsultingForm from '@/components/ConsultingForm';
import HeroSection from '@/components/HeroSection';
import PracticeAreas from '@/components/PracticeAreas';
import ServiceCards from '@/components/ServiceCards';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceCards />
      <AboutSection />
      <PracticeAreas />
      <CaseStudies />
      <Testimonials />
      <AttorneysSection />
      <ConsultingForm />
      {/* <StatsSection /> */}
      <BlogSection />
    </div>
  );
}
// change the location  as well
const pagesSlugs = [
  'best-attorneys-in-delhi',
  'best-lawyers-in-delhi',
  'best-criminal-lawyers-in-delhi',
  'best-family-lawyers-in-delhi',
  'best-constitutional-lawyers-in-delhi',
  'best-property-lawyers-in-delhi',
  'best-international-lawyers-in-delhi',
  'best-business-lawyers-in-delhi',
  'best-consumer-lawyers-in-jaipur',
  // generate 20 pages
  'best-employment-lawyers-in-delhi',
  'best-estate-lawyers-in-delhi',
  'best-health-lawyers-in-delhi',
  'best-immigration-lawyers-in-delhi',
  'best-intellectual-property-lawyers-in-delhi',
  'best-privacy-lawyers-in-delhi',
  'best-security-lawyers-in-delhi',
  'best-tax-lawyers-in-delhi',
  'best-traffic-lawyers-in-delhi',
  'best-wills-and-trusts-lawyers-in-delhi',
  // Generate for jaipur
  'best-lawyers-in-jaipur',
  'best-criminal-lawyers-in-jaipur',
  'best-family-lawyers-in-jaipur',
  'best-constitutional-lawyers-in-jaipur',
  'best-property-lawyers-in-jaipur',
  'best-international-lawyers-in-jaipur',
  'best-business-lawyers-in-jaipur',
  'best-consumer-lawyers-in-jaipur',
  'best-employment-lawyers-in-jaipur',
  'best-estate-lawyers-in-jaipur',
  'best-health-lawyers-in-jaipur',
  'best-immigration-lawyers-in-jaipur',
  'best-intellectual-property-lawyers-in-jaipur',
  'best-privacy-lawyers-in-jaipur',
  'best-security-lawyers-in-jaipur',
  'best-tax-lawyers-in-jaipur',
  'best-traffic-lawyers-in-jaipur',
  'best-wills-and-trusts-lawyers-in-jaipur',
];
export function generateStaticParams() {
  return pagesSlugs.map(slugs => ({ slugs }));
}
