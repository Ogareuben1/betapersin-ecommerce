'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Title Section */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            Clarity in Identity. <br />
            Clarity in Governance. <br />
            <span className="text-[#C9A84C]">Clarity in Growth.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8"
          >
            {["Identity and Access Management", "Governance Risk and Compliance", "Privileged Access Management"].map((item, i) => (
              <span key={i} className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                {item} {i !== 2 && <span className="ml-4 text-slate-200 hidden md:inline">|</span>}
              </span>
            ))}
          </motion.div>

          {/* Body Section */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 font-medium"
          >
            Betapersin provides practical cybersecurity training built around how <strong>IAM, GRC and PAM</strong> actually work inside real financial institutions. Designed for beginners, career switchers and professionals.
            <span className="block mt-4 text-slate-500 text-sm md:text-base italic">
              No coding required. No prior experience needed. CISSP qualified expertise.
            </span>
          </motion.p>

          {/* Updated Buttons Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            {/* Button 1: Links to /store */}
            <a 
              href="/store" 
              className="inline-flex items-center justify-center px-10 py-5 text-[25px] font-medium transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: 'rgb(201, 168, 76)',
                color: 'rgb(0, 0, 0)',
                borderRadius: '28px',
                border: '1px solid #ffffff'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.backgroundColor = 'rgba(29, 30, 32, 1)';
                target.style.color = '#ffffff';
                target.style.borderColor = 'rgba(29, 30, 32, 1)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.backgroundColor = 'rgb(201, 168, 76)';
                target.style.color = 'rgb(0, 0, 0)';
                target.style.borderColor = '#ffffff';
              }}
            >
              Explore Our Courses
            </a>

            {/* Button 2: Links to the FinalCTA section at the bottom of the page */}
            <a 
              href="#final-cta" 
              className="inline-flex items-center justify-center px-10 py-5 text-[25px] font-medium transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: 'rgb(201, 168, 76)',
                color: 'rgb(0, 0, 0)',
                borderRadius: '28px',
                border: '1px solid #ffffff'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.backgroundColor = 'rgba(29, 30, 32, 1)';
                target.style.color = '#ffffff';
                target.style.borderColor = 'rgba(29, 30, 32, 1)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.backgroundColor = 'rgb(201, 168, 76)';
                target.style.color = 'rgb(0, 0, 0)';
                target.style.borderColor = '#ffffff';
              }}
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