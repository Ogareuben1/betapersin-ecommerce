// src/app/about/AboutClient.tsx
'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Award, BookOpen, Fingerprint, CheckCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AboutClient() {
  return (
    <main className="min-h-screen bg-brand-cream pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-brand-navy py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Fingerprint className="w-96 h-96 absolute -top-20 -left-20 text-brand-gold" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-4xl relative z-10"
        >
          <h2 className="text-brand-gold font-black uppercase tracking-widest text-sm mb-4">The Story Behind the Mission</h2>
          <h1 className="text-4xl md:text-7xl font-black text-brand-cream mb-6 tracking-tight">
            About <span className="text-brand-gold">Betapersin</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-cream/80 font-medium max-w-2xl mx-auto">
            Bringing Clarity to Identity, Access and the Governance Behind It.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-lg text-slate-700 leading-relaxed max-w-none"
            >
              <p className="text-2xl font-black text-brand-navy leading-tight">
                Betapersin is built on real enterprise experience across Identity and Access Management (IAM), Privileged Access Management (PAM) and Governance, Risk and Compliance (GRC).
              </p>
              <div className="h-1 w-20 bg-brand-gold my-8"></div>
              <p>
                I work at the intersection of identity governance, access control, privileged access and enterprise security — helping organisations move from operational comfort to measurable clarity. And helping individuals move from confusion to career confidence.
              </p>
              
              <div className="my-12 p-8 bg-brand-navy rounded-[2rem] text-brand-cream relative italic shadow-2xl">
                <span className="text-6xl text-brand-gold absolute top-4 left-4 opacity-20 font-serif">"</span>
                <p className="relative z-10 text-xl font-medium">
                  When these three disciplines are not properly understood or governed, security risk increases dramatically. When they are — organisations become resilient and professionals become valuable.
                </p>
              </div>

              <p>
                I help beginners, career switchers and professionals already working in IT or financial services understand how IAM, PAM and GRC work in real enterprise environments — not just in theory.
              </p>
              <p className="text-xl font-black text-brand-navy">
                My goal is simple: To make identity security clear, practical and accessible to anyone willing to learn.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-24 bg-white border-y border-brand-gold/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-brand-navy leading-tight">
                Identity and Access Management Training
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Betapersin provides structured training designed to prepare people for real-world roles. We don't just teach for exams; we teach for the first day on the job.
              </p>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Identity governance", "Access control models", "Joiner Mover Leaver", 
                  "Privileged access", "Enterprise architecture", "Risk scenarios"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-brand-navy font-bold">
                    <CheckCircle className="h-5 w-5 text-brand-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-navy p-10 rounded-[3rem] shadow-2xl border-4 border-brand-gold/30 rotate-1 lg:rotate-2">
              <p className="text-brand-cream text-xl italic font-medium leading-relaxed">
                "This approach helps learners move beyond certifications and understand how IAM operates in real organisations like Tier 1 Banks and Global Fintechs."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px w-8 bg-brand-gold"></div>
                <span className="text-brand-gold font-black uppercase tracking-widest text-xs">The Betapersin Method</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Tags */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <Award className="h-16 w-16 text-brand-gold mx-auto mb-8" />
          <h2 className="text-4xl font-black text-brand-navy mb-6">Real Enterprise Experience</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["CISSP Certified", "Microsoft SC-300", "Tier 1 Banking Delivery", "Enterprise PAM Implementation"].map((tag) => (
              <span key={tag} className="px-8 py-4 bg-brand-navy text-brand-gold rounded-2xl text-sm font-black shadow-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}