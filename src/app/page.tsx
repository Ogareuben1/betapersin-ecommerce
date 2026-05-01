import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Curriculum from '@/components/home/Curriculum';
import ProductGrid from '@/components/home/ProductGrid';
import FreeResources from '@/components/home/FreeResources';
import WhyBetapersin from '@/components/home/WhyBetapersin';
import Ebooks from '@/components/home/Ebooks';
import FinalCTA from '@/components/home/FinalCTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream">
      {/* 1. Header & Hero: Navy & Gold */}
      <div className="bg-brand-navy border-b border-brand-gold/10">
        <Navbar />
        <Hero />
      </div>

      {/* 2. Curriculum: Cream Background */}
      <section className="bg-brand-cream">
        <Curriculum />
      </section>

      {/* 3. Products/Empowerment: Navy Background */}
      <section className="bg-brand-navy py-12">
        <ProductGrid />
      </section>

      {/* 4. Resources: Cream Background */}
      <section className="bg-brand-cream">
        <FreeResources />
      </section>

      {/* 5. Trust/Authority: Navy Background */}
      <section className="bg-brand-navy py-12">
        <WhyBetapersin />
      </section>

      {/* 6. Knowledge/Ebooks: Cream Background */}
      <section className="bg-brand-cream">
        <Ebooks />
      </section>

      {/* 7. Final Push: Navy & Gold */}
      <section className="bg-brand-navy">
        <FinalCTA />
      </section>

      {/* 8. Footer: Cream (or keep it Navy for a dark footer) */}
      <footer className="bg-brand-cream">
        <Footer />
      </footer>
    </main>
  );
}