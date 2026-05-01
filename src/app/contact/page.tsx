'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Shield } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-cream pt-20">
      <Navbar />

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Branding & Info */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-6">
                  <Shield className="h-4 w-4 text-brand-gold" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy">Professional Services</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-brand-navy mb-6 tracking-tighter">
                  Contact <span className="text-brand-gold">Betapersin</span>
                </h1>
                
                <p className="text-xl text-brand-navy/70 font-bold mb-8 italic">
                  Bridging the gap in IAM Expertise.
                </p>
                
                <p className="text-brand-navy/60 leading-relaxed max-w-md font-medium">
                  Whether you are looking to enroll in our specialized training, need enterprise IAM consultancy, 
                  or require professional GRC auditing—our experts are ready to assist.
                </p>
              </motion.div>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-5 group">
                  <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-brand-gold transition-colors duration-300">
                    <Mail className="h-6 w-6 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em]">Email Our Office</p>
                    <p className="text-lg font-bold text-brand-navy">hello@betapersin.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group">
                  <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-brand-gold transition-colors duration-300">
                    <MessageSquare className="h-6 w-6 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em]">Response Time</p>
                    <p className="text-lg font-bold text-brand-navy">Within 24 working hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-brand-navy p-8 md:p-12 rounded-[3rem] shadow-2xl border border-brand-gold/10"
            >
              <form action="#" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest ml-1">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane"
                      className="w-full bg-white/5 px-6 py-4 rounded-2xl border border-white/10 text-white placeholder:text-white/20 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest ml-1">Last name</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="w-full bg-white/5 px-6 py-4 rounded-2xl border border-white/10 text-white placeholder:text-white/20 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest ml-1">Work email*</label>
                  <input 
                    required
                    type="email" 
                    placeholder="jane@enterprise.com"
                    className="w-full bg-white/5 px-6 py-4 rounded-2xl border border-white/10 text-white placeholder:text-white/20 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest ml-1">Message*</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Describe your requirements..."
                    className="w-full bg-white/5 px-6 py-4 rounded-2xl border border-white/10 text-white placeholder:text-white/20 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition outline-none resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-gold text-brand-navy py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
                >
                  Submit <Send className="h-4 w-4" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}