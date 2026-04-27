'use client';

import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Library } from 'lucide-react';

export default function Ebooks() {
  return (
    <section className="bg-indigo-950 py-24 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Section Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 rounded-2xl bg-indigo-500/20 p-4 ring-1 ring-indigo-400/30"
          >
            <Library className="h-8 w-8 text-indigo-300" />
          </motion.div>

          {/* Heading with color differentiation */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Cybersecurity <span className="text-indigo-400">Ebooks</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl font-medium text-indigo-200"
          >
            Go deeper. Read what the industry insiders know.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-2xl"
          >
            <p className="text-lg leading-relaxed text-indigo-100/80">
              From identity governance to privileged access management. Our ebooks are written for professionals and career starters who want practical knowledge without the jargon.
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <button className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-indigo-950 transition-all hover:bg-indigo-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95">
              Browse All Ebooks
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              <BookOpen className="absolute -top-2 -right-2 h-6 w-6 text-indigo-400 opacity-0 transition-all group-hover:opacity-100 group-hover:-rotate-12" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}