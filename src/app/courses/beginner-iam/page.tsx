'use client';

import { motion } from 'framer-motion';
import { Play, CheckCircle, ArrowRight, Fingerprint } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function BeginnerIAM() {
  return (
    <main className="min-h-screen bg-brand-cream pt-20">
      <Navbar />
      
      {/* Hero Section with Video Side-by-Side */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        {/* Brand Decoration */}
        <div className="absolute inset-0 opacity-10">
          <Fingerprint className="w-96 h-96 absolute -top-10 -left-10 text-brand-gold" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-brand-gold font-black uppercase tracking-widest text-sm mb-4">Start Your Journey</h2>
                <h1 className="text-4xl lg:text-6xl font-black text-brand-cream leading-tight mb-8 tracking-tight">
                  Start Identity & Access Management <span className="text-brand-gold">the Right Way.</span>
                </h1>
                
                <div className="space-y-5 mb-10 text-lg text-brand-cream/80 font-medium italic">
                  <p className="flex items-center gap-4">
                    <CheckCircle className="text-brand-gold h-6 w-6 shrink-0" /> 
                    No tech background required.
                  </p>
                  <p className="flex items-center gap-4">
                    <CheckCircle className="text-brand-gold h-6 w-6 shrink-0" /> 
                    No certifications needed to begin.
                  </p>
                  <p className="flex items-center gap-4">
                    <CheckCircle className="text-brand-gold h-6 w-6 shrink-0" /> 
                    Just real-world IAM explained clearly.
                  </p>
                </div>
                
                {/* Functional Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://betapersin.gumroad.com/l/FreeModule" 
                    target="_blank" 
                    rel="nofollow"
                    className="bg-brand-gold text-brand-navy px-8 py-5 rounded-2xl font-black transition-all duration-300 shadow-xl hover:bg-brand-cream hover:text-brand-navy flex items-center justify-center gap-2 border-2 border-brand-gold"
                  >
                    IAM MODULE 1 FREE
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  
                  <a 
                    href="https://betapersin.gumroad.com/l/GRCModule1Free" 
                    target="_blank" 
                    rel="nofollow"
                    className="bg-transparent text-brand-gold px-8 py-5 rounded-2xl font-black transition-all duration-300 flex items-center justify-center gap-2 border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-navy"
                  >
                    GRC MODULE 1 FREE
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Video Container */}
            <div className="lg:w-1/2 w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-cream/10 relative">
              <div className="absolute inset-0 bg-brand-gold/5 pointer-events-none"></div>
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/-W9Nk0F6je0" 
                title="IAM Beginner Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar / Social Proof */}
      <section className="py-12 bg-white border-b border-brand-gold/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-brand-navy/40 font-black uppercase tracking-[0.3em] text-xs">
            Built for Enterprise Excellence
          </p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}