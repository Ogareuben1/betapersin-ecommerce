'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ShoppingCart, Download, Briefcase } from 'lucide-react';
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
    // Save your first uploaded image as 'iam-course.png' in the public folder
    image: "/iam-course.png",
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
    // Save your second uploaded image as 'grc-course.png' in the public folder
    image: "/grc-course.png",
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
    <main className="min-h-screen bg-brand-cream pt-20">
      <Navbar />

      {/* Store Header */}
      <section className="bg-brand-navy border-b border-brand-gold/20 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">Betapersin Store</h2>
          <h1 className="text-3xl md:text-6xl font-black text-brand-cream mb-6">Courses, Resources and Tools.</h1>
          <p className="text-lg md:text-xl text-brand-cream/70 max-w-3xl mx-auto leading-relaxed">
            Everything you need to start and grow your career in Identity and Access Management and GRC.
          </p>
        </div>
      </section>

      {/* Courses & Bundle Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto space-y-24 md:space-y-32">
          {courses.map((course) => (
            <div key={course.id} className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
              <div className="space-y-8">
                {/* Image Container with object-contain to prevent cutting */}
                <div className={`relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 ${course.highlight ? 'border-brand-gold' : 'border-white'} bg-brand-navy`}>
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-auto object-contain" 
                  />
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-brand-navy text-brand-gold px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl shadow-xl font-black text-xl md:text-2xl border border-brand-gold/30">
                    {course.price}
                  </div>
                </div>
                {course.trialImage && (
                  <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4 md:gap-6">
                    <img src={course.trialImage} className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shrink-0" alt="Trial" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base">Try Module 1 for free</h4>
                      <a href={course.trialLink} target="_blank" rel="nofollow" className="text-xs md:text-sm font-black text-brand-gold flex items-center gap-1 mt-1 hover:text-brand-navy transition-colors">
                        TEST IT FIRST <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="pt-2 md:pt-4">
                <h2 className="text-2xl md:text-3xl font-black text-brand-navy mb-2 leading-tight">{course.title}</h2>
                <p className="text-base md:text-lg font-bold text-brand-gold mb-6 italic">{course.subtitle}</p>
                <div className="prose prose-slate mb-8 max-w-none">
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{course.description}</p>
                  <p className="text-brand-navy font-semibold text-sm md:text-base">{course.subtext}</p>
                </div>
                <div className="bg-brand-navy rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 text-brand-cream mb-8 md:10">
                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-gold mb-4 md:6">What you get:</h4>
                  <ul className="grid gap-3 md:gap-4">
                    {course.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-xs md:text-sm text-brand-cream/80 leading-snug">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-brand-gold shrink-0" /> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={course.link} 
                  target="_blank" 
                  rel="nofollow"
                  className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl shadow-xl transition-all flex items-center justify-center gap-3 ${course.highlight ? 'bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-brand-gold' : 'bg-brand-navy text-brand-gold hover:bg-black'}`}
                >
                  <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" /> {course.highlight ? "BUY THE BUNDLE" : "BUY THE FULL COURSE"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ebooks Section */}
      <section id="ebooks-section" className="py-24 bg-brand-navy text-brand-cream overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-brand-gold">Cybersecurity Ebooks</h2>
            <p className="text-brand-cream/70 text-sm md:text-base italic">Practical guides that break down identity security in plain English.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Ebook 1 */}
            <div className="relative group rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-[450px] border border-brand-gold/10">
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=699,fit=crop/GaacUkLWhRTud68Z/identity_security_explained_cover-TQf4I2wKM3Wq5cqP.png" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Identity Explained" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-black mb-2">Identity Security Explained</h3>
                <p className="text-brand-cream/80 text-sm mb-6">Fundamentals for beginners. The perfect entry point starting from zero.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-brand-gold">£24.99</span>
                  <a href="https://betapersin.gumroad.com/l/wztnj" target="_blank" rel="nofollow" className="bg-brand-gold text-brand-navy px-8 py-3 rounded-xl font-black text-sm hover:bg-brand-cream transition shadow-lg">BUY NOW</a>
                </div>
              </div>
            </div>

            {/* Ebook 2 */}
            <div className="relative group rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-[450px] border border-brand-gold/10">
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/GaacUkLWhRTud68Z/chatgpt-image-apr-19-2026-03_28_57-pm-PzFcQafE9h0s87Fn.png" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Identity on Autopilot" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-black mb-2">Identity on Autopilot</h3>
                <p className="text-brand-cream/80 text-sm mb-6">The complete guide to automating identity lifecycle in Tier 1 environments.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-brand-gold">£97</span>
                  <a href="https://betapersin.gumroad.com/l/zvrukk" target="_blank" rel="nofollow" className="bg-brand-gold text-brand-navy px-8 py-3 rounded-xl font-black text-sm hover:bg-brand-cream transition shadow-lg">BUY NOW</a>
                </div>
              </div>
            </div>

            {/* Ebook 3 */}
            <div className="relative group rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-[450px] border border-brand-gold/10">
              <img src="https://public-files.gumroad.com/s6dfdiv7pcgv0e7mszrnfn7unnek" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Hired Identity Engineer" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-black mb-2">HIRED: Identity Engineer</h3>
                <p className="text-brand-cream/80 text-sm mb-6">The blueprint to landing your first or next role as an Identity Engineer.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-brand-gold">£49.99</span>
                  <a href="https://betapersin.gumroad.com/l/hired-iam-engineer" target="_blank" rel="nofollow" className="bg-brand-gold text-brand-navy px-8 py-3 rounded-xl font-black text-sm hover:bg-brand-cream transition shadow-lg">BUY NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resource & Services */}
      <section className="py-24 bg-brand-cream px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="p-8 md:p-12 bg-white rounded-[2rem] md:rounded-[3rem] border border-brand-gold/20 shadow-sm relative overflow-hidden">
              <span className="text-brand-gold font-black text-[10px] md:text-xs uppercase tracking-widest mb-4 block">Free Resource</span>
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-brand-navy">Why Your IAM Is Failing</h3>
              <p className="text-slate-600 mb-8 text-sm md:text-base italic">A free diagnostic ebook with fictional case studies and a self-scoring assessment.</p>
              <a href="https://betapersin.gumroad.com/l/ddbjmp" target="_blank" rel="nofollow" className="inline-flex items-center gap-2 font-black text-brand-navy border-b-4 border-brand-gold pb-1 hover:gap-4 transition-all text-sm md:text-base">
                DOWNLOAD FREE <Download className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>

            <div className="p-8 md:p-12 bg-brand-navy rounded-[2rem] md:rounded-[3rem] text-brand-cream shadow-xl">
              <span className="text-brand-gold font-black text-[10px] md:text-xs uppercase tracking-widest mb-4 block">Career Services</span>
              <h3 className="text-2xl md:text-3xl font-black mb-4">Ready to Land the Role?</h3>
              <p className="text-brand-cream/70 mb-8 text-sm md:text-base italic">CV Reviews, LinkedIn Optimization, and Mock Interviews from a Tier 1 professional.</p>
              <Link href="/services/professional" className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black hover:bg-brand-cream transition text-sm md:text-base shadow-lg">
                VIEW ALL SERVICES <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}