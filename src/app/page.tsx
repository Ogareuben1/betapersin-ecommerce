import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Curriculum from '@/components/home/Curriculum';
import ProductGrid from '@/components/home/ProductGrid';
import FreeResources from '@/components/home/FreeResources';
import WhyBetapersin from '@/components/home/WhyBetapersin';
import Ebooks from '@/components/home/Ebooks';
import FinalCTA from '@/components/home/FinalCTA';
import Footer from '@/components/layout/Footer'; // Add this line

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Curriculum />
      <ProductGrid />
      <FreeResources />
      <WhyBetapersin />
      <Ebooks />
      <FinalCTA />
      <Footer /> {/* The last piece of the puzzle */}
    </main>
  );
}