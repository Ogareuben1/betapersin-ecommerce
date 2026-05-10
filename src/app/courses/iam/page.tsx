'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  HardDrive, 
  AlertTriangle, 
  Terminal, 
  Book, 
  Briefcase, 
  ArrowRight, 
  Fingerprint, 
  CheckCircle 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function IAMAnalyst() {
  return (
    <main className="min-h-screen bg-brand-cream pt-20">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-brand-navy py-24 text-center px-4 relative overflow-hidden">
        {/* Brand Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Fingerprint className="w-96 h-96 absolute -top-20 -left-20 text-brand-gold" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-brand-gold font-black uppercase tracking-widest text-sm mb-4">Enterprise Career Training</h2>
            <h1 className="text-4xl lg:text-7xl font-black text-brand-cream mb-6 tracking-tight">
              Become IAM Analyst Ready With <span className="text-brand-gold">Real Enterprise Confidence.</span>
            </h1>
            <p className="text-xl text-brand-cream/80 max-w-3xl mx-auto mb-10 font-medium italic">
              A structured foundations programme built for professionals ready to break into financial services and Tier 1 banking roles.
            </p>
            
            <div className="inline-block bg-brand-cream text-brand-navy p-10 rounded-[2.5rem] shadow-2xl border-4 border-brand-gold/30">
              <p className="text-sm font-black uppercase tracking-widest mb-2 text-brand-navy/60">Full Program Enrollment</p>
              <p className="text-5xl font-black mb-6 text-brand-navy">£299</p>
              
              <a 
                href="https://betapersin.gumroad.com/l/lmrncj" 
                target="_blank" 
                rel="nofollow"
                className="inline-flex items-center justify-center bg-brand-gold text-brand-navy px-12 py-5 rounded-2xl font-black hover:bg-brand-navy hover:text-brand-gold transition-all duration-300 w-full shadow-lg"
              >
                SECURE YOUR SPOT
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Module 1 Box */}
            <div className="p-10 bg-brand-navy rounded-[3rem] border border-brand-gold/20 shadow-2xl">
              <h2 className="text-2xl font-black text-brand-gold mb-6 uppercase tracking-tight">IAM & PAM Career Course</h2>
              <p className="text-brand-cream/70 mb-8 font-medium">From zero knowledge to job ready using enterprise grade frameworks.</p>
              
              <h3 className="text-sm font-black text-brand-gold mb-6 uppercase tracking-widest flex items-center gap-2">
                <span className="h-px w-8 bg-brand-gold">.</span> Module 1 Roadmap
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Cybersecurity basics & why IAM matters",
                  "IAM across 8 CISSP domains",
                  "Core Vocabulary: RBAC, MFA, SSO, Zero Trust",
                  "Full Identity Lifecycle Case Study",
                  "Interview questions with model answers"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-brand-cream font-bold">
                    <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tools Box */}
            <div className="flex flex-col gap-8">
              <div className="p-10 bg-white rounded-[3rem] border border-brand-gold/20 shadow-xl">
                <div className="flex items-center gap-3 mb-6 text-brand-navy">
                  <Terminal className="text-brand-gold h-8 w-8"/> 
                  <h2 className="text-2xl font-black uppercase tracking-tight">Tools of IAM</h2>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">
                  Experience the platforms used in modern security operations centers:
                </p>
                <div className="flex flex-wrap gap-2 font-black text-xs uppercase">
                  {["Entra ID", "Okta", "SailPoint", "CyberArk", "Delinea", "Ping"].map(tool => (
                    <span key={tool} className="px-3 py-1 bg-brand-cream text-brand-navy border border-brand-gold/30 rounded-lg">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-10 bg-brand-gold rounded-[3rem] text-brand-navy shadow-xl relative overflow-hidden group">
                 <Briefcase className="absolute -right-4 -bottom-4 h-32 w-32 opacity-10 group-hover:scale-110 transition-transform duration-500" />
                 <h3 className="text-xl font-black mb-2 italic">Job-Ready Focus</h3>
                 <p className="font-bold leading-snug text-brand-navy/80">
                   We bypass pure theory and focus on the practical implementation skills recruiters look for in financial services.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on Practice */}
      <section className="py-24 bg-white border-y border-brand-gold/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold font-black uppercase tracking-widest text-xs mb-4">Practical Curriculum</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
              Microsoft Entra ID 11 Days of Practice
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Identity Foundations", "User Lifecycle Management", 
              "Access and Governance", "Conditional Access Policies", 
              "Privileged Access Management", "Zero Trust Architectures",
              "Azure Portal Walkthrough", "Hybrid Identity Setup",
              "Automation & PowerShell", "Final Capstone Project", 
              "Job Interview Readiness"
            ].map((day, i) => (
              <div key={i} className="p-5 bg-brand-cream border border-brand-gold/10 rounded-2xl font-black text-brand-navy flex items-center gap-4 hover:border-brand-gold transition-colors group">
                <span className="text-brand-gold bg-brand-navy px-3 py-1 rounded-lg text-xs font-black">
                  {(i+1).toString().padStart(2, '0')}
                </span> 
                <span className="group-hover:translate-x-1 transition-transform italic">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-brand-navy text-center relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-brand-cream tracking-tight">Ready to Transition Your Career?</h2>
           <p className="mb-12 font-medium text-brand-gold text-xl max-w-2xl mx-auto italic">
             Build the foundations required for the next generation of identity security roles.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
             <a 
               href="https://betapersin.gumroad.com/l/FreeModule" 
               target="_blank" 
               className="bg-brand-cream text-brand-navy border-2 border-brand-gold px-10 py-5 rounded-2xl font-black hover:bg-brand-gold transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
             >
               GET FREE MODULE
               <ArrowRight className="h-4 w-4" />
             </a>

             <a 
               href="https://betapersin.gumroad.com/l/Zero2IAM" 
               target="_blank" 
               className="bg-brand-gold text-brand-navy px-10 py-5 rounded-2xl font-black hover:bg-brand-navy hover:text-brand-gold border-2 border-brand-gold transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
             >
               BUY FULL COURSE
               <ArrowRight className="h-4 w-4" />
             </a>
           </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
