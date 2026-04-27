'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    // 🟢 ADDED id="final-cta" HERE to make the Hero link work
    <section id="final-cta" className="bg-blue-600 py-20 lg:py-24 overflow-hidden relative">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-700 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-700/50 border border-white/20 px-4 py-1.5 rounded-full text-sm font-bold text-blue-50 mb-8"
          >
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span>NO CREDIT CARD REQUIRED</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6"
          >
            Your Journey <span className="text-blue-200">Starts Here</span>
          </motion.h2>
          
          {/* Subheader */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl leading-relaxed text-blue-50/90 mb-12 max-w-3xl mx-auto font-medium"
          >
            Module 1 of both the GRC Foundations and IAM courses is completely free. No card. No coding. No prior experience required. Just come and see what this field actually looks like from the inside.
          </motion.p>

          {/* Dual Buttons with Links Added */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* 🟢 Updated IAM Link */}
            <a 
              href="https://betapersin.gumroad.com/l/FreeModule" 
              target="_blank" 
              rel="nofollow"
              className="group w-full sm:w-auto bg-white text-blue-700 px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              Start IAM Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* 🟢 Updated GRC Link */}
            <a 
              href="https://betapersin.gumroad.com/l/GRCModule1Free" 
              target="_blank" 
              rel="nofollow"
              className="group w-full sm:w-auto bg-blue-900 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-slate-900 transition-all border border-blue-400/30 flex items-center justify-center gap-3 active:scale-95"
            >
              Start GRC Free
              <ShieldCheck className="h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
          </motion.div>

          <p className="mt-8 text-blue-200/60 text-sm font-medium">
            Instant access. No strings attached.
          </p>
        </div>
      </div>
    </section>
  );
}