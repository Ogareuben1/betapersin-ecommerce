'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Branding & Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                  Contact <span className="text-blue-700">Betapersin</span>
                </h1>
                <p className="text-xl text-slate-600 font-medium mb-8">
                  IAM Training & Professional Services
                </p>
                <p className="text-slate-500 leading-relaxed max-w-md">
                  Whether you have a question about a specific course, need a custom professional service, 
                  or just want to discuss your career pathway—send a message and let's start the conversation.
                </p>
              </motion.div>

              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition">
                    <Mail className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-lg font-bold text-slate-900">hello@betapersin.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition">
                    <MessageSquare className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Response Time</p>
                    <p className="text-lg font-bold text-slate-900">Within 24 working hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm"
            >
              <form action="#" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 transition outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Last name</label>
                    <input 
                      type="text" 
                      placeholder="Enter last name"
                      className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 transition outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your email*</label>
                  <input 
                    required
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 transition outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message*</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 transition outline-none resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  Submit <Send className="h-5 w-5" />
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