import { Footer, HeroSection,HistorySection, LocationsSection, MenuSection } from '../components';
import { MainLayout } from '../layouts';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection/>
      <MenuSection/>
      <HistorySection/>
      <LocationsSection/>
      <Footer/>
    </MainLayout>
  )
}
