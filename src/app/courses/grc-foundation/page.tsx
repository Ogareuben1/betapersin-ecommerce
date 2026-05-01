'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Star, Award, Briefcase, Users, ArrowRight, PlayCircle, Fingerprint } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function GRCCourse() {
  return (
    <main className="min-h-screen bg-brand-cream pt-20">
      <Navbar />
      
      {/* GRC Hero */}
      <section className="bg-brand-navy py-24 text-brand-cream relative overflow-hidden">
        {/* Brand Decoration */}
        <div className="absolute inset-0 opacity-10">
          <Fingerprint className="w-96 h-96 absolute -top-20 -left-20 text-brand-gold" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-brand-gold font-black uppercase tracking-widest text-sm mb-4">Enterprise Career Readiness</h2>
            <h1 className="text-4xl lg:text-7xl font-black mb-6 tracking-tight">
              From Zero to Job Ready. <br/>
              <span className="text-brand-gold italic">The GRC and IAM Course Built Around a Real Job Advert.</span>
            </h1>
            <p className="text-xl text-brand-cream/80 max-w-3xl mx-auto mb-10 font-medium italic">
              Eleven modules plus a Bonus Module built around a real financial services job advert. No coding required.
            </p>
            <a 
              href="https://betapersin.gumroad.com/l/GRCModule1Free" 
              target="_blank" 
              rel="nofollow"
              className="bg-brand-gold text-brand-navy px-12 py-5 rounded-2xl font-black text-lg hover:bg-brand-cream hover:text-brand-navy transition duration-300 shadow-xl"
            >
              GET FREE MODULE 1
            </a>
          </motion.div>
        </div>
      </section>

      {/* Is this course for you? + Video */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-black text-brand-navy mb-8">Is This Course For You?</h2>
                <div className="space-y-4">
                  {[
                    "You want to break into cybersecurity but feel overwhelmed.",
                    "You work in IAM and want to add GRC knowledge.",
                    "You've been told you need to code (You do not).",
                    "You want to be job ready for a GRC Specialist role."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-brand-gold/20 shadow-sm">
                      <CheckCircle2 className="text-brand-gold shrink-0 mt-1" />
                      <p className="font-bold text-brand-navy/80 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative z-10">
                 <iframe 
                    className="w-full h-full" 
                    src="https://www.youtube.com/embed/FVCo5k0mOWk" 
                    title="GRC Course Introduction"
                    allowFullScreen
                  ></iframe>
              </div>
            </div>
        </div>
      </section>

      {/* What Makes This Course Different */}
      <section className="py-24 bg-white border-y border-brand-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold font-black uppercase tracking-widest text-xs mb-4">Why Betapersin?</h2>
            <h3 className="text-4xl font-black text-brand-navy tracking-tight">What Makes This Course Different</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-cream p-10 rounded-[3rem] shadow-sm border border-brand-gold/10 hover:border-brand-gold transition-colors">
              <div className="bg-brand-navy w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-gold">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-black text-brand-navy mb-4">Built Around a Real Job Advert</h3>
              <p className="text-slate-600 leading-relaxed font-medium">Every module maps to a specific requirement from a real GRC Specialist IAM Controls job advert. You do not just learn the theory; you learn exactly what a Tier 1 employer is asking for.</p>
            </div>
            <div className="bg-brand-cream p-10 rounded-[3rem] shadow-sm border border-brand-gold/10 hover:border-brand-gold transition-colors">
              <div className="bg-brand-navy w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-gold">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-black text-brand-navy mb-4">Real World Scenarios</h3>
              <p className="text-slate-600 leading-relaxed font-medium">This course draws on many years of experience inside some of the most regulated financial institutions in the world. The scenarios are anonymised, but the lessons are enterprise-grade.</p>
            </div>
            <div className="bg-brand-cream p-10 rounded-[3rem] shadow-sm border border-brand-gold/10 hover:border-brand-gold transition-colors">
              <div className="bg-brand-navy w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-gold">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-black text-brand-navy mb-4">No Tech Background Needed</h3>
              <p className="text-slate-600 leading-relaxed font-medium">No Coding. No Networking. No Prior GRC Experience. This course starts from zero and assumes nothing. It ramps up deliberately to take you all the way to job-ready confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Module List Section */}
      <section className="py-24 bg-brand-navy text-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold font-black uppercase tracking-widest text-sm mb-4">Curriculum Breakdown</h2>
            <h3 className="text-4xl font-black tracking-tight">What You Will Learn</h3>
            <p className="text-brand-cream/60 mt-4 font-medium italic">Eleven modules plus a Bonus Module. Built specifically for financial services requirements.</p>
          </div>
          
          <div className="grid gap-4 mb-16">
              {[
                "Module 1: What Is GRC and Why Does It Exist",
                "Module 2: Governance Frameworks. ISO 27001, NIST and COBIT",
                "Module 3: Risk Management from the Ground Up",
                "Module 4: Segregation of Duties and Toxic Access",
                "Module 5: Compliance and Regulatory Frameworks. GDPR, FCA, PRA and SOX",
                "Module 6: Access Certification and IAM Control Reviews",
                "Module 7: Governance Reporting and Control Documentation",
                "Module 8: Audit Preparation and Regulatory Reviews",
                "Module 9: Embedding Security into Project Delivery",
                "Module 10: GRC Tools. SailPoint, ServiceNow, Archer, CyberArk",
                "Module 11: Real World Scenarios from Financial Services",
                "Bonus Module: How to Land This Job. CV, Interview and Prep"
              ].map((m, i) => (
                <div key={i} className="p-5 bg-brand-cream/5 border border-brand-gold/10 rounded-2xl flex items-center gap-4 hover:border-brand-gold transition-colors font-bold italic">
                  <span className="text-brand-gold bg-brand-cream/10 px-3 py-1 rounded-lg text-xs font-black not-italic">{(i+1).toString().padStart(2, '0')}</span>
                  {m}
                </div>
              ))}
          </div>
          <p className="text-center text-brand-gold font-black bg-brand-gold/10 py-6 rounded-3xl border border-brand-gold/20 italic">
            "Module 1 is completely free. No card. No catch."
          </p>
        </div>
      </section>

      {/* Pricing / Get Started Section */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">Get Started Today</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Free Option */}
            <div className="bg-white p-12 rounded-[3rem] border border-brand-gold/10 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-brand-navy mb-2">Module 1 Free</h3>
                <p className="text-brand-gold font-black mb-8 uppercase tracking-widest text-xs tracking-widest">Kickstart Your Journey</p>
                <p className="text-slate-600 mb-10 font-medium">Download Module 1 of the GRC course completely free and see the quality for yourself before you commit to anything.</p>
              </div>
              <a 
                href="https://betapersin.gumroad.com/l/GRCModule1Free" 
                target="_blank" 
                className="w-full bg-brand-cream text-brand-navy border-2 border-brand-navy py-4 rounded-xl font-black text-center hover:bg-brand-navy hover:text-brand-cream transition duration-300 shadow-md"
              >
                ACCESS FREE MODULE
              </a>
            </div>

            {/* Full GRC */}
            <div className="bg-white p-12 rounded-[3rem] border-4 border-brand-gold shadow-2xl flex flex-col justify-between relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest">Most Recommended</div>
              <div>
                <h3 className="text-2xl font-black text-brand-navy mb-2">GRC Foundations with IAM Controls</h3>
                <p className="text-5xl font-black text-brand-navy mb-8">£249</p>
                <ul className="space-y-4 mb-10 text-brand-navy/70 font-bold">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-gold" /> Eleven modules plus Bonus</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-gold" /> Full access. Download all PDFs</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-gold" /> Watch all video lessons</li>
                </ul>
              </div>
              <a 
                href="https://betapersin.gumroad.com/l/grc-full-module-iam-controls" 
                target="_blank" 
                className="w-full bg-brand-gold text-brand-navy py-5 rounded-xl font-black text-center hover:bg-brand-navy hover:text-brand-gold transition duration-300 shadow-lg"
              >
                BUY GRC COURSE
              </a>
            </div>

            {/* Bundle */}
            <div className="bg-brand-navy p-12 rounded-[3rem] shadow-2xl flex flex-col justify-between text-brand-cream relative overflow-hidden">
               <Fingerprint className="absolute -right-4 -bottom-4 h-48 w-48 opacity-10" />
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-2 text-brand-gold">GRC and IAM Bundle</h3>
                <p className="text-5xl font-black mb-8">£399</p>
                <p className="text-brand-cream/70 font-medium mb-10 leading-relaxed italic">The complete career combination. GRC Foundations plus From Zero to IAM Analyst with Microsoft Entra ID. Makes you rare in the market.</p>
                
              </div>
              <a 
                href="https://betapersin.gumroad.com/l/Bundle" 
                target="_blank" 
                className="w-full bg-brand-gold text-brand-navy py-5 rounded-xl font-black text-center hover:bg-brand-cream hover:text-brand-navy transition duration-300 relative z-10 shadow-lg"
              >
                SECURE THE BUNDLE
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-navy text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-cream mb-8 tracking-tight">Ready to Transition?</h2>
          <p className="text-xl text-brand-cream/60 mb-12 leading-relaxed italic max-w-2xl mx-auto font-medium">
            Start completely free. Download Module 1 today and see exactly what this course delivers before you spend a penny.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://betapersin.gumroad.com/l/GRCModule1Free" 
              target="_blank" 
              className="bg-brand-cream text-brand-navy px-10 py-5 rounded-2xl font-black hover:bg-brand-gold transition duration-300 flex items-center justify-center gap-2 shadow-xl"
            >
              FREE MODULE 1 <PlayCircle size={20} />
            </a>
            <a 
              href="https://betapersin.gumroad.com/l/grc-full-module-iam-controls" 
              target="_blank" 
              className="bg-brand-gold text-brand-navy px-10 py-5 rounded-2xl font-black hover:bg-brand-cream transition duration-300 flex items-center justify-center gap-2 shadow-xl"
            >
               BUY FULL COURSE <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}