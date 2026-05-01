'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    /* Background set to Navy #0D1B2A */
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-navy overflow-hidden">
      
      {/* Subtle Background Glow - Using Gold #C9A84C at low opacity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Title Section - Gold #C9A84C */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-brand-gold leading-[1.1] tracking-tight mb-6"
          >
            Clarity in Identity. <br />
            Clarity in Governance. <br />
            Clarity in Growth.
          </motion.h1>

          {/* Sub-headline Tags - Pure Cream #FAF7F2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8"
          >
            {["Identity and Access Management", "Governance Risk and Compliance", "Privileged Access Management"].map((item, i) => (
              <span key={i} className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-brand-cream">
                {item} {i !== 2 && <span className="ml-4 text-brand-cream/20 hidden md:inline">|</span>}
              </span>
            ))}
          </motion.div>

          {/* Body Section - Cream #FAF7F2 with opacity for readability */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brand-cream/80 leading-relaxed max-w-3xl mx-auto mb-12 font-medium"
          >
            Betapersin provides practical cybersecurity training built around how <strong className="text-brand-gold font-bold">IAM, GRC and PAM</strong> actually work inside real financial institutions. Designed for beginners, career switchers and professionals.
            
            {/* Disclaimer with Fainted Navy Background */}
            <span className="inline-block mt-6 px-6 py-2 rounded-full bg-black/20 border border-brand-gold/20 text-brand-cream text-sm md:text-base italic backdrop-blur-sm">
              No coding required. No prior experience needed. CISSP qualified expertise.
            </span>
          </motion.p>

          {/* Buttons Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary Action: Gold background, Navy text */}
            <a 
              href="/store" 
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-xl bg-brand-gold text-brand-navy transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Explore Our Courses
            </a>

            {/* Secondary Action: Gold border and text */}
            <a 
              href="#final-cta" 
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-xl border-2 border-brand-gold text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-brand-navy active:scale-95 w-full sm:w-auto"
            >
              START FREE
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;