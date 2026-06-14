import AboutSection from '@/components/AboutSection';
import AttorneysSection from '@/components/AttorneysSection';
import BlogSection from '@/components/BlogSection';
import Clients from '@/components/Clients';
import ConsultingForm from '@/components/ConsultingForm';
import HeroSection from '@/components/HeroSection';
import PracticeAreas from '@/components/PracticeAreas';
import ServiceCards from '@/components/ServiceCards';
import { redirect } from 'next/navigation';

export default function Home() {
  // redirect('/index');
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceCards />
      <AboutSection />
      <PracticeAreas />
      <Clients />
      {/* <Testimonials /> */}
      <AttorneysSection />
      <ConsultingForm />
      {/* <StatsSection /> */}
      <BlogSection />
    </div>
  );
}
