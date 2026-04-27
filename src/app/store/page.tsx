'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ShoppingCart, Download, ExternalLink, Briefcase } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const courses = [
  {
    id: 'iam-full',
    title: "From Zero to IAM Analyst with Microsoft Entra ID",
    subtitle: "Become IAM analyst ready with real enterprise confidence",
    price: "£299",
    link: "https://betapersin.gumroad.com/l/Zero2IAM", 
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1000,fit=crop/GaacUkLWhRTud68Z/chatgpt-image-apr-16-2026-01_10_24-pm-DOjFIGbYhFhild6L.png",
    description: "A structured Identity and Access Management foundations programme built for professionals who are ready to break into one of the most in demand specialisms in financial services.",
    subtext: "You do not need a background in IT to start this course. You need the decision to begin.",
    bullets: [
      "Core concepts: Authentication, Authorisation, Least Privilege and Zero Trust",
      "Full Identity Lifecycle: Joiner, Mover, Leaver",
      "Microsoft Entra ID: Conditional Access, PIM, and Automation",
      "PAM: Why privileged accounts are the highest risk",
      "Career Prep: IAM CV building and Interview answers",
      "SC-900 and SC-300 certification guidance"
    ],
    trialImage: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1000,fit=crop/GaacUkLWhRTud68Z/chatgpt-image-apr-17-2026-06_01_07-am-pVomycIk5QRKbZcu.png",
    trialLink: "https://betapersin.gumroad.com/l/FreeModule"
  },
  {
    id: 'grc-full',
    title: "GRC Foundations with IAM Controls",
    subtitle: "From governance to access. A practical guide for security professionals.",
    price: "£249",
    link: "https://betapersin.gumroad.com/l/grc-full-module-iam-controls", 
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1000,fit=crop/GaacUkLWhRTud68Z/chatgpt-image-apr-17-2026-03_48_00-am-n2VhlfZZAeWvGUJR.png",
    description: "Built for those in IAM moving to senior governance roles or cybersecurity professionals wanting to master the compliance and audit side of enterprise security.",
    subtext: "Finally understand what GRC actually means in a real-world, regulated environment.",
    bullets: [
      "Module 1-3: GRC Foundations, Risk Management & Frameworks (ISO 27001, NIST)",
      "Module 4: Segregation of Duties & Toxic Access Combinations",
      "Module 5-6: Compliance (GDPR, FCA, SOX) and Access Certifications",
      "Module 7-8: Governance Reporting & Audit Evidence Preparation",
      "Module 9-10: Security Business Partnering & GRC Tools (SailPoint, Archer)",
      "Module 11: Real-world scenarios from 15 years inside Tier 1 Banks"
    ],
    trialImage: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1000,fit=crop/GaacUkLWhRTud68Z/grc-1-al53UX3J3bParlkT.webp",
    trialLink: "https://betapersin.gumroad.com/l/GRCModule1Free"
  },
  {
    id: 'bundle',
    title: "GRC and IAM Complete Bundle",
    subtitle: "Both courses. One complete cybersecurity career pathway.",
    price: "£399",
    link: "https://betapersin.gumroad.com/l/Bundle",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1000,fit=crop/GaacUkLWhRTud68Z/chatgpt-image-apr-16-2026-02_11_36-pm-aqBS19MO2AZr3jGw.png",
    description: "This bundle gives you both complete courses together for one price. Take your career from zero background to confident in both technical and governance sides of identity.",
    subtext: "This is the full career pathway, not half of it.",
    bullets: [
      "IAM course: 21 modules + 11 hands-on days in Entra ID",
      "GRC course: 11 modules covering frameworks, risk, and audit",
      "Career Launch Bonus: Job advert mapping and CV templates",
      "Free Module 1 of both courses included",
      "Cybersecurity Ebooks included"
    ],
    highlight: true
  }
];

export default function StorePage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Navbar />

      {/* Store Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Betapersin Store</h2>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Courses, Resources and Tools.</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to start and grow your career in Identity and Access Management and GRC.
          </p>
        </div>
      </section>

      {/* Courses & Bundle Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 space-y-32">
          {courses.map((course) => (
            <div key={course.id} className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className={`relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 ${course.highlight ? 'border-[#C9A84C]' : 'border-white'}`}>
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute top-6 right-6 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-xl font-black text-2xl">
                    {course.price}
                  </div>
                </div>
                {course.trialImage && (
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-6">
                    <img src={course.trialImage} className="w-20 h-20 rounded-xl object-cover shrink-0" alt="Trial" />
                    <div>
                      <h4 className="font-bold text-slate-900">Try Module 1 for free</h4>
                      <a href={course.trialLink} target="_blank" rel="nofollow" className="text-sm font-black text-[#C9A84C] flex items-center gap-1 mt-1 hover:text-slate-900 transition-colors">
                        TEST IT FIRST <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="pt-4">
                <h2 className="text-3xl font-black text-slate-900 mb-2 leading-tight">{course.title}</h2>
                <p className="text-lg font-bold text-blue-600 mb-6 italic">{course.subtitle}</p>
                <div className="prose prose-slate mb-8">
                  <p className="text-slate-600 leading-relaxed">{course.description}</p>
                  <p className="text-slate-900 font-semibold">{course.subtext}</p>
                </div>
                <div className="bg-slate-900 rounded-[2rem] p-8 text-white mb-10">
                  <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6">What you get:</h4>
                  <ul className="grid gap-4">
                    {course.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-300 leading-snug">
                        <CheckCircle className="h-5 w-5 text-green-400 shrink-0" /> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={course.link} 
                  target="_blank" 
                  rel="nofollow"
                  className={`w-full py-5 rounded-2xl font-black text-xl shadow-xl transition-all flex items-center justify-center gap-3 ${course.highlight ? 'bg-[#C9A84C] text-black hover:bg-[#1D1E20] hover:text-white' : 'bg-slate-900 text-white hover:bg-black'}`}
                >
                  <ShoppingCart className="h-6 w-6" /> {course.highlight ? "BUY THE BUNDLE" : "BUY THE FULL COURSE"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ebooks Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Cybersecurity Ebooks</h2>
            <p className="text-slate-400">Practical guides that break down identity security in plain English.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Ebook 1 */}
            <div className="relative group rounded-[2rem] overflow-hidden h-[400px]">
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=699,fit=crop/GaacUkLWhRTud68Z/identity_security_explained_cover-TQf4I2wKM3Wq5cqP.png" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Identity Explained" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-2xl font-black mb-2">Identity Security Explained</h3>
                <p className="text-slate-300 mb-6">Fundamentals for beginners. The perfect entry point starting from zero.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black">£24.99</span>
                  <a href="https://betapersin.gumroad.com/l/wztnj" target="_blank" rel="nofollow" className="bg-[#C9A84C] text-black px-8 py-3 rounded-xl font-black hover:bg-white transition">BUY NOW</a>
                </div>
              </div>
            </div>

            {/* Ebook 2 */}
            <div className="relative group rounded-[2rem] overflow-hidden h-[400px]">
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/GaacUkLWhRTud68Z/chatgpt-image-apr-19-2026-03_28_57-pm-PzFcQafE9h0s87Fn.png" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Identity on Autopilot" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-2xl font-black mb-2">Identity on Autopilot</h3>
                <p className="text-slate-300 mb-6">The complete guide to automating identity lifecycle in Tier 1 environments.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black">£97</span>
                  <a href="https://betapersin.gumroad.com/l/zvrukk" target="_blank" rel="nofollow" className="bg-[#C9A84C] text-black px-8 py-3 rounded-xl font-black hover:bg-white transition">BUY NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resource & Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-200">
              <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Free Resource</span>
              <h3 className="text-3xl font-black mb-4">Why Your IAM Is Failing</h3>
              <p className="text-slate-600 mb-8">A free diagnostic ebook with fictional case studies and a self-scoring assessment.</p>
              <a href="https://betapersin.gumroad.com/l/ddbjmp" target="_blank" rel="nofollow" className="inline-flex items-center gap-2 font-black text-slate-900 border-b-4 border-[#C9A84C] pb-1 hover:gap-4 transition-all">
                DOWNLOAD FREE <Download className="h-5 w-5" />
              </a>
            </div>

            <div className="p-12 bg-blue-600 rounded-[3rem] text-white">
              <span className="text-blue-200 font-black text-xs uppercase tracking-widest mb-4 block">Career Services</span>
              <h3 className="text-3xl font-black mb-4">Ready to Land the Role?</h3>
              <p className="text-blue-100 mb-8">CV Reviews, LinkedIn Optimization, and Mock Interviews from a Tier 1 professional.</p>
              <Link href="/services/professional" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-black hover:bg-blue-50 transition">
                VIEW ALL SERVICES <Briefcase className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}