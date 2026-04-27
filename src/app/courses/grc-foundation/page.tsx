'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Star, Award, Briefcase, Users, ArrowRight, PlayCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function GRCCourse() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Navbar />
      
      {/* GRC Hero */}
      <section className="bg-indigo-950 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            From Zero to Job Ready. <br/>
            <span className="text-indigo-400">The GRC and IAM Course Built Around a Real Job Advert.</span>
          </h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-10 italic">
            Eleven modules plus a Bonus Module built around a real financial services job advert. No coding required.
          </p>
          <a 
            href="https://betapersin.gumroad.com/l/GRCModule1Free" 
            target="_blank" 
            rel="nofollow"
            className="bg-[#C9A84C] text-black px-10 py-5 rounded-full font-black text-lg hover:bg-[#1D1E20] hover:text-white transition inline-block"
          >
            GET FREE MODULE 1
          </a>
        </div>
      </section>

      {/* Is this course for you? + Video */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-indigo-950 mb-6 underline decoration-indigo-500 decoration-4">Is This Course For You?</h2>
                <div className="space-y-4">
                  {[
                    "You want to break into cybersecurity but feel overwhelmed.",
                    "You work in IAM and want to add GRC knowledge.",
                    "You've been told you need to code (You do not).",
                    "You want to be job ready for a GRC Specialist role."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="text-indigo-600 shrink-0" />
                      <p className="font-medium text-slate-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-100">
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
      <section className="py-24 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center text-indigo-950 mb-16">What Makes This Course Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-indigo-100">
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Built Around a Real Job Advert</h3>
              <p className="text-slate-600 leading-relaxed">Every module maps to a specific requirement from a real GRC Specialist IAM Controls job advert. You do not just learn the theory. You learn exactly what an employer is asking for and how to speak to it in an interview.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-indigo-100">
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Real World Scenarios</h3>
              <p className="text-slate-600 leading-relaxed">From Inside Tier 1 Banks. This course draws on over 15 years of experience inside some of the most regulated financial institutions in the world. The scenarios are anonymised but the lessons are real.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-indigo-100">
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">No Tech Background Needed</h3>
              <p className="text-slate-600 leading-relaxed">No Coding. No Networking. No Prior GRC Experience. This course starts from zero and assumes nothing. It ramps up deliberately and takes you all the way to job ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Module List Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-4 text-center text-indigo-400">What You Will Learn</h2>
          <p className="text-center text-slate-400 mb-12">Eleven modules plus a Bonus Module. Each one built around a real job advert requirement.</p>
          <div className="grid gap-3 mb-12">
              {[
                "Module 1: What Is GRC and Why Does It Exist",
                "Module 2: Governance Frameworks Explained. ISO 27001, NIST and COBIT",
                "Module 3: Risk Management from the Ground Up",
                "Module 4: Segregation of Duties and Toxic Access Combinations",
                "Module 5: Compliance and Regulatory Frameworks. GDPR, FCA, PRA and SOX",
                "Module 6: Access Certification and IAM Control Reviews",
                "Module 7: Governance Reporting and Control Documentation",
                "Module 8: Audit Preparation and Regulatory Reviews",
                "Module 9: Embedding Security into Project Delivery",
                "Module 10: GRC Tools and Platforms. SailPoint, ServiceNow, Archer, Purview, CyberArk",
                "Module 11: Real World Scenarios from Financial Services",
                "Bonus Module: How to Land This Job. The advert mapped, the CV built, the interview prepared"
              ].map((m, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-4">
                  <span className="text-indigo-400 font-mono">{(i+1).toString().padStart(2, '0')}</span>
                  {m}
                </div>
              ))}
          </div>
          <p className="text-center text-indigo-300 font-bold bg-indigo-500/10 py-4 rounded-2xl border border-indigo-500/20">
            Module 1 is completely free. No card. No catch.
          </p>
        </div>
      </section>

      {/* Who Built This Course */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200">
            <h2 className="text-3xl font-black text-indigo-950 mb-8">Who Built This Course?</h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>This course was built by a <span className="font-bold text-indigo-600">CISSP certified</span> Identity and Access Management professional with over 15 years of experience inside Tier 1 financial institutions across Europe. Including Lloyds Banking Group, HSBC, BNP Paribas, Euroclear and the Bank of International Settlements.</p>
              <p>A Microsoft certified identity and access administrator. A practitioner who has been in the room when FCA auditors arrive. Who has managed access certification campaigns at enterprise scale. Who has built SoD controls, prepared audit evidence and reported to risk committees.</p>
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                  <Award className="mx-auto mb-2 text-indigo-600" />
                  <p className="text-sm font-bold">CISSP Certified</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                  <ShieldCheck className="mx-auto mb-2 text-indigo-600" />
                  <p className="text-sm font-bold">Microsoft Certified</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                  <Star className="mx-auto mb-2 text-indigo-600" />
                  <p className="text-sm font-bold">13+ Years Tier 1 Finance</p>
                </div>
              </div>
              <p className="text-sm italic pt-6 text-slate-500">Not a course built from textbooks. Built from real experience. In real regulated environments. With real consequences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started / Pricing Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16">Get Started Today</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Free Option */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-200 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Module 1 Free</h3>
                <p className="text-indigo-600 font-bold mb-6 italic">Start here. No card. No catch.</p>
                <p className="text-slate-600 mb-8 text-sm">Download Module 1 of the GRC course completely free and see the quality for yourself before you commit to anything.</p>
              </div>
              <a 
                href="https://betapersin.gumroad.com/l/GRCModule1Free" 
                target="_blank" 
                rel="nofollow"
                className="w-full bg-[#C9A84C] text-black py-4 rounded-xl font-black text-center hover:bg-[#1D1E20] hover:text-white transition"
              >
                Module 1 Free
              </a>
            </div>

            {/* Full GRC */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border-2 border-indigo-100 flex flex-col justify-between relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-indigo-950">GRC Foundations with IAM Controls</h3>
                <p className="text-4xl font-black mb-6">£249</p>
                <ul className="space-y-4 mb-8 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Eleven modules plus Bonus</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Full access. Download all PDFs</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Watch all video lessons</li>
                </ul>
              </div>
              <a 
                href="https://betapersin.gumroad.com/l/grc-full-module-iam-controls" 
                target="_blank" 
                rel="nofollow"
                className="w-full bg-[#C9A84C] text-black py-4 rounded-xl font-black text-center hover:bg-[#1D1E20] hover:text-white transition"
              >
                BUY GRC COURSE
              </a>
            </div>

            {/* Bundle */}
            <div className="bg-indigo-600 p-10 rounded-3xl shadow-2xl flex flex-col justify-between text-white">
              <div>
                <h3 className="text-2xl font-bold mb-2">GRC and IAM Bundle</h3>
                <p className="text-4xl font-black mb-6">£399</p>
                <p className="text-indigo-100 text-sm mb-6 leading-relaxed">Both courses together: GRC Foundations with IAM Controls plus From Zero to IAM Analyst with Microsoft Entra ID. The complete combination that makes you rare in the market.</p>
                <p className="text-xs text-yellow-400 font-bold mb-8 uppercase tracking-widest">First 10 buyers receive a free CV review and mock interview. After 10 this offer closes.</p>
              </div>
              <a 
                href="https://betapersin.gumroad.com/l/Bundle" 
                target="_blank" 
                rel="nofollow"
                className="w-full bg-white text-indigo-600 py-4 rounded-xl font-black text-center hover:bg-[#1D1E20] hover:text-white transition"
              >
                BUY THE BUNDLE
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Ready to Get Started Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-indigo-950 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Start completely free. Download Module 1 today and see exactly what this course delivers before you spend a penny. If you are ready to go all in, the full course and bundle are waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://betapersin.gumroad.com/l/GRCModule1Free" 
              target="_blank" 
              rel="nofollow"
              className="bg-[#C9A84C] text-black px-8 py-4 rounded-xl font-black hover:bg-[#1D1E20] hover:text-white transition flex items-center justify-center gap-2"
            >
              GET FREE MODULE 1 <PlayCircle size={18} />
            </a>
            <a 
              href="https://betapersin.gumroad.com/l/grc-full-module-iam-controls" 
              target="_blank" 
              rel="nofollow"
              className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black hover:bg-black transition flex items-center justify-center gap-2"
            >
              BUY THE FULL COURSE <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}