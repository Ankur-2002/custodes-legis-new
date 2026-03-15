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
