'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="bg-brand-navy py-20 lg:py-24 overflow-hidden relative">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-gold rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cream rounded-full blur-3xl opacity-5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 px-4 py-1.5 rounded-full text-sm font-bold text-brand-gold mb-8"
          >
            <Sparkles className="h-4 w-4 text-brand-gold" />
            <span>NO CREDIT CARD REQUIRED</span>
          </motion.div>

          {/* Heading - Now Cybersecurity Ebooks in Gold */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6"
          >
            <span className="text-brand-gold">Cybersecurity Ebooks.</span>
          </motion.h2>
          
          {/* Subheader - Now Industry Insider text in All White */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl leading-relaxed text-white mb-12 max-w-3xl mx-auto font-medium"
          >
            Go deeper. Read what the industry insiders know.
          </motion.p>

          {/* Dual Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a 
              href="https://betapersin.gumroad.com/l/FreeModule" 
              target="_blank" 
              rel="nofollow"
              className="group w-full sm:w-auto bg-brand-gold text-brand-navy px-10 py-5 rounded-xl font-black text-lg shadow-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              Start IAM Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a 
              href="https://betapersin.gumroad.com/l/GRCModule1Free" 
              target="_blank" 
              rel="nofollow"
              className="group w-full sm:w-auto bg-transparent text-brand-cream px-10 py-5 rounded-xl font-black text-lg transition-all border border-brand-gold/50 flex items-center justify-center gap-3 active:scale-95 hover:bg-brand-gold/10"
            >
              Start GRC Free
              <ShieldCheck className="h-5 w-5 text-brand-gold transition-transform group-hover:scale-110" />
            </a>
          </motion.div>

          {/* Bottom text - Now in White */}
          <p className="mt-8 text-white text-sm font-medium">
            Instant access. No strings attached.
          </p>
        </div>
      </div>
    </section>
  );
}