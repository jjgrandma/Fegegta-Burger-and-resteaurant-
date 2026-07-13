import HeroSection from '../components/HeroSection';
import CategoryMenu from '../components/CategoryMenu';
import FeaturedDishes from '../components/FeaturedDishes';
import ChefsSection from '../components/ChefsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutPreview from '../components/AboutPreview';
import GallerySection from '../components/GallerySection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CategoryMenu />
      <FeaturedDishes />
      <ChefsSection />
      <TestimonialsSection />
      <AboutPreview />
      <GallerySection />
    </div>
  );
}
