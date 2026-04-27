'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Award, BookOpen, Fingerprint } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Navbar />

      {/* Hero Section - About */}
      <section className="bg-slate-900 py-24 text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            About <span className="text-blue-400">Betapersin</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium">
            Bringing Clarity to Identity, Access and the Governance Behind It.
          </p>
        </motion.div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-lg text-slate-600 leading-relaxed"
            >
              <p className="text-xl font-semibold text-slate-900">
                Betapersin is built on real enterprise experience across Identity and Access Management, Privileged Access Management and Governance, Risk and Compliance.
              </p>
              <p>
                I work at the intersection of identity governance, access control, privileged access and enterprise security — helping organisations move from operational comfort to measurable clarity. And helping individuals move from confusion to career confidence.
              </p>
              <p>
                IAM, PAM and GRC are three of the most critical and most in demand specialisms in modern cybersecurity. Every organisation relies on identity systems to control who can access what, when and why. Privileged access sits at the highest risk point in that system. And GRC provides the governance framework that ties everything together — ensuring decisions are documented, defensible and compliant.
              </p>
              <p className="p-6 bg-blue-50 border-l-4 border-blue-600 italic rounded-r-xl">
                "When these three disciplines are not properly understood or governed, security risk increases dramatically. When they are — organisations become resilient and professionals become valuable."
              </p>
              <p>
                I help beginners, career switchers and professionals already working in IT or financial services understand how IAM, PAM and GRC work in real enterprise environments — not just in theory.
              </p>
              <p className="font-bold text-slate-900">
                My goal is simple. To make identity security clear, practical and accessible to anyone willing to learn.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-blue-700 mb-6">Identity and Access Management Training</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Betapersin provides structured Identity and Access Management training designed to prepare people for real IAM roles. The training focuses on practical concepts used across enterprise environments.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Identity governance", "Access control models", "Joiner Mover Leaver", 
                  "Privileged access", "Enterprise architecture", "Risk scenarios"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Fingerprint className="h-5 w-5 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <p className="text-slate-600 italic">
                "This approach helps learners move beyond certifications and understand how IAM operates in real organisations."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <Award className="h-12 w-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Real Enterprise Experience</h2>
          <p className="text-slate-600 mb-12">
            The content and training on Betapersin are built from real delivery experience in enterprise Identity and Access Management environments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["CISSP", "Microsoft SC300", "Enterprise IAM Delivery", "PAM Implementation"].map((tag) => (
              <span key={tag} className="px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Cybersecurity Section */}
      <section className="py-24 bg-indigo-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-indigo-300 mb-6">Beyond Cybersecurity</h2>
              <p className="text-indigo-100/80 leading-relaxed">
                Betapersin also explores ideas around structure, leadership, and personal clarity. We believe systems thinking applies not only to technology, but also to leadership and personal development.
              </p>
            </div>
            <div className="md:w-1/2 grid gap-4 w-full">
              {[
                { t: "Structure over chaos", i: <Shield /> },
                { t: "Responsibility over noise", i: <Target /> },
                { t: "Clarity over confusion", i: <BookOpen /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
                  <div className="text-indigo-400">{item.i}</div>
                  <span className="font-bold">{item.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">The Mission</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
              Identity is the new security perimeter.
            </p>
            <p className="text-lg text-slate-600">
              The mission of Betapersin is to bring clarity to Identity and Access Management and help more people enter one of the most important fields in modern cybersecurity.
            </p>
            <p className="text-xl font-bold text-blue-600 mt-8">
              Understanding it is no longer optional.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}