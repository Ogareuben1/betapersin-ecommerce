'use client';

import { motion } from 'framer-motion';
import { FileText, Edit3, Share2, Users, Target, MessageCircle, Fingerprint } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const services = [
  {
    title: "CV Review",
    price: "£75",
    description: "A detailed review of your existing CV with written feedback on structure, language, relevance and impact.",
    features: ["Written feedback report", "Relevance & Impact check", "3 working days turnaround"],
    icon: <FileText className="h-8 w-8 text-brand-gold" />,
    buttonText: "BOOK A CV REVIEW"
  },
  {
    title: "CV Rewrite",
    price: "£150",
    description: "A complete rewrite of your CV tailored to IAM, GRC or PAM roles in financial services.",
    features: ["Tailored for Financial Services", "Speaks to hiring managers", "Includes 1 round of revisions", "5 working days turnaround"],
    icon: <Edit3 className="h-8 w-8 text-brand-gold" />,
    buttonText: "BOOK A CV REWRITE",
    highlight: true
  },
  {
    title: "CV + LinkedIn",
    price: "£200",
    description: "Everything in the CV Rewrite plus a full LinkedIn profile overhaul to attract recruiters.",
    features: ["Headline & About rewrite", "Experience entry optimization", "Skills & Keywords alignment", "Complete professional presence"],
    icon: <Share2 className="h-8 w-8 text-brand-gold" />,
    buttonText: "BOOK A CV PLUS LINKEDIN"
  },
  {
    title: "Interview Coaching",
    price: "£150",
    priceSub: "per session",
    description: "One-to-one coaching tailored to the role you are applying for. Move from theory to confidence.",
    features: ["Real-world answer structuring", "Concept explanation practice", "Confidential 1-to-1 session"],
    icon: <Users className="h-8 w-8 text-brand-gold" />,
    buttonText: "BOOK INTERVIEW COACHING"
  },
  {
    title: "Mock Interview",
    price: "£100",
    priceSub: "per session",
    description: "A full simulated interview based on a real job advert. The closest thing to the real thing.",
    features: ["Real-time feedback", "Confidence & Language check", "Performance score report"],
    icon: <Target className="h-8 w-8 text-brand-gold" />,
    buttonText: "BOOK A MOCK INTERVIEW"
  }
];

export default function ProfessionalServices() {
  return (
    <main className="min-h-screen bg-brand-cream pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-brand-navy py-24 text-brand-cream relative overflow-hidden">
        {/* Brand Decoration */}
        <div className="absolute inset-0 opacity-10">
          <Fingerprint className="w-96 h-96 absolute -top-20 -left-20 text-brand-gold" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold font-black uppercase tracking-widest text-sm mb-4"
          >
            Career Acceleration
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tight"
          >
            Professional <span className="text-brand-gold italic">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-cream/80 max-w-3xl mx-auto leading-relaxed font-medium italic"
          >
            Breaking into IAM, GRC or PAM is one thing. Getting hired is another. These services are built for professionals who want to show up to the market looking like they already belong there.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col bg-white p-10 rounded-[3rem] shadow-sm border transition-all duration-300 ${service.highlight ? 'border-brand-gold ring-4 ring-brand-gold/5 shadow-2xl scale-105 z-10' : 'border-brand-gold/10'}`}
              >
                <div className="mb-6 p-4 bg-brand-navy rounded-2xl w-fit shadow-lg italic">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-brand-navy mb-2">{service.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-brand-navy">{service.price}</span>
                  {service.priceSub && <span className="text-sm text-brand-navy/50 font-black italic uppercase tracking-wider">{service.priceSub}</span>}
                </div>
                <p className="text-slate-600 mb-8 flex-grow font-medium leading-relaxed italic">{service.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-xs font-black text-brand-navy/60 uppercase tracking-widest flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-brand-gold shadow-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  className={`w-full py-5 rounded-2xl font-black text-center text-sm transition-all shadow-lg ${service.highlight ? 'bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-brand-gold' : 'bg-brand-navy text-brand-gold hover:bg-brand-gold hover:text-brand-navy'}`}
                >
                  {service.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white border-t border-brand-gold/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto p-16 bg-brand-cream rounded-[4rem] border border-brand-gold/20 shadow-2xl relative overflow-hidden">
            <Fingerprint className="absolute -right-10 -bottom-10 h-64 w-64 opacity-5 text-brand-gold" />
            
            <MessageCircle className="h-16 w-16 text-brand-gold mx-auto mb-8" />
            <h2 className="text-4xl font-black text-brand-navy mb-6 tracking-tight">Not sure which service is right for you?</h2>
            <p className="text-lg text-slate-600 mb-12 font-medium italic max-w-2xl mx-auto">
              Send a message and we will point you in the right direction. No pressure. No sales pitch. Just honest advice on what will move the needle for your career.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-brand-navy text-brand-gold px-12 py-6 rounded-2xl font-black text-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}