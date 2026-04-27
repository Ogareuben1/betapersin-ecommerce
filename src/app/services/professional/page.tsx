'use client';

import { motion } from 'framer-motion';
// Changed Linkedin to Share2 to fix the build error
import { FileText, Edit3, Share2, Users, Target, MessageCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const services = [
  {
    title: "CV Review",
    price: "£75",
    description: "A detailed review of your existing CV with written feedback on structure, language, relevance and impact.",
    features: ["Written feedback report", "Relevance & Impact check", "3 working days turnaround"],
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    buttonText: "BOOK A CV REVIEW"
  },
  {
    title: "CV Rewrite",
    price: "£150",
    description: "A complete rewrite of your CV tailored to IAM, GRC or PAM roles in financial services.",
    features: ["Tailored for Financial Services", "Speaks to hiring managers", "Includes 1 round of revisions", "5 working days turnaround"],
    icon: <Edit3 className="h-8 w-8 text-blue-600" />,
    buttonText: "BOOK A CV REWRITE",
    highlight: true
  },
  {
    title: "CV + LinkedIn",
    price: "£200",
    description: "Everything in the CV Rewrite plus a full LinkedIn profile overhaul to attract recruiters.",
    features: ["Headline & About rewrite", "Experience entry optimization", "Skills & Keywords alignment", "Complete professional presence"],
    icon: <Share2 className="h-8 w-8 text-blue-600" />, // Now using Share2
    buttonText: "BOOK A CV PLUS LINKEDIN"
  },
  {
    title: "Interview Coaching",
    price: "£150",
    priceSub: "per session",
    description: "One-to-one coaching tailored to the role you are applying for. Move from theory to confidence.",
    features: ["Real-world answer structuring", "Concept explanation practice", "Confidential 1-to-1 session"],
    icon: <Users className="h-8 w-8 text-blue-600" />,
    buttonText: "BOOK INTERVIEW COACHING"
  },
  {
    title: "Mock Interview",
    price: "£100",
    priceSub: "per session",
    description: "A full simulated interview based on a real job advert. The closest thing to the real thing.",
    features: ["Real-time feedback", "Confidence & Language check", "Performance score report"],
    icon: <Target className="h-8 w-8 text-blue-600" />,
    buttonText: "BOOK A MOCK INTERVIEW"
  }
];

export default function ProfessionalServices() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Professional <span className="text-blue-400">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Breaking into IAM, GRC or PAM is one thing. Getting hired is another. These services are built for professionals who are serious about making the move and want to show up to the market looking like they already belong there.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col bg-white p-8 rounded-3xl shadow-sm border ${service.highlight ? 'border-blue-500 ring-4 ring-blue-50' : 'border-slate-200'}`}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-black text-slate-900">{service.price}</span>
                  {service.priceSub && <span className="text-sm text-slate-500 font-medium">{service.priceSub}</span>}
                </div>
                <p className="text-slate-600 mb-8 flex-grow">{service.description}</p>
                
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-black text-sm transition-all ${service.highlight ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' : 'bg-slate-900 text-white hover:bg-black'}`}>
                  {service.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto p-12 bg-blue-50 rounded-[3rem] border border-blue-100">
            <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Not sure which service is right for you?</h2>
            <p className="text-lg text-slate-600 mb-10">
              Send a message and we will point you in the right direction. No pressure. No sales pitch. Just honest advice on what will move the needle for your career.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-200"
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