'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, HardDrive, AlertTriangle, Terminal, Book, Briefcase, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function IAMAnalyst() {
  return (
    <main className="min-h-screen bg-slate-900 text-white pt-20">
      <Navbar />
      
      {/* Header Section */}
      <section className="py-24 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            Become IAM Analyst Ready With <span className="text-blue-400">Real Enterprise Confidence.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            A structured foundations programme built for professionals ready to break into financial services.
          </p>
          
          <div className="inline-block bg-white text-slate-900 p-8 rounded-3xl shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-widest mb-2 text-blue-600">Limited Time Offer</p>
            <p className="text-4xl font-black mb-4">£299 <span className="text-lg font-normal text-slate-500">One Time</span></p>
            
            {/* Primary Buy Button */}
            <a 
              href="https://betapersin.gumroad.com/l/lmrncj" 
              target="_blank" 
              rel="nofollow"
              className="inline-flex items-center justify-center bg-[#C9A84C] text-white px-10 py-4 rounded-xl font-black hover:bg-[#1D1E20] transition duration-300 w-full"
            >
              BUY THE FULL COURSE
            </a>
          </div>
        </div>
      </section>

      {/* IAM & PAM Career Course Details */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-slate-900 rounded-3xl border border-blue-500/30">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">IAM & PAM Career Course</h2>
              <p className="text-slate-300 mb-6">Everything you need to go from zero knowledge to job ready.</p>
              <h3 className="text-lg font-bold text-white mb-4 underline decoration-blue-500">Module 1 Contents:</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>• Cybersecurity basics & why IAM matters</li>
                <li>• IAM across 8 CISSP domains</li>
                <li>• Core Vocabulary: RBAC, MFA, SSO, Zero Trust</li>
                <li>• Full Identity Lifecycle Case Study</li>
                <li>• Interview questions with model answers</li>
              </ul>
            </div>
            
            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-700">
              <div className="flex items-center gap-3 mb-4 text-orange-400">
                <Terminal /> <h2 className="text-2xl font-bold">Tools of IAM</h2>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Tour the platforms you will use every day: <br/>
                <span className="text-white font-bold">Microsoft Entra ID, Okta, SailPoint, CyberArk, Delinea and Ping Identity.</span>
                <br/><br/>Learn what each tool does and how they connect to the core concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Microsoft Entra ID - 11 Days */}
      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-12 text-center text-blue-700">Microsoft Entra ID — 11 Days of Hands-On Practice</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Day 1 - Identity Foundations", "Day 2 - Entra ID User Lifecycle", 
              "Day 3 - Access and Governance", "Day 4 - Conditional Access", 
              "Day 5 - Privileged Access", "Day 6 - Zero Trust in Action",
              "Day 7 - Portal Walkthrough", "Day 8 - Hybrid Identity",
              "Day 9 - Automation & PowerShell", "Day 10 - Capstone", 
              "Day 11 - Job Readiness"
            ].map((day, i) => (
              <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold flex items-center gap-3">
                <span className="text-blue-600">{(i+1).toString().padStart(2, '0')}</span> {day}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-600 text-center">
         <h2 className="text-3xl font-black mb-6 text-white">One bundle. Everything included.</h2>
         <p className="mb-10 font-medium text-blue-50">No prior IT experience required. Just a decision to invest in your career.</p>
         
         <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
            {/* Button 1: Free Module */}
            <a 
              href="https://betapersin.gumroad.com/l/FreeModule" 
              target="_blank" 
              rel="nofollow"
              className="bg-[#C9A84C] text-white px-10 py-4 rounded-xl font-black hover:bg-[#1D1E20] transition duration-300 flex items-center justify-center gap-2"
            >
              GET FREE MODULE 1
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* Button 2: Full Course */}
            <a 
              href="https://betapersin.gumroad.com/l/Zero2IAM" 
              target="_blank" 
              rel="nofollow"
              className="bg-[#C9A84C] text-white px-10 py-4 rounded-xl font-black hover:bg-[#1D1E20] transition duration-300 flex items-center justify-center gap-2"
            >
              BUY THE FULL COURSE
              <ArrowRight className="h-4 w-4" />
            </a>
         </div>
      </section>

      <Footer />
    </main>
  );
}