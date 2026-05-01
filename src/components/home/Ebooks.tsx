'use client';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Ebooks() {
  return (
    <section className="bg-brand-navy py-24 text-brand-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-black text-brand-gold">
              Cybersecurity Ebooks
            </h2>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-bold text-brand-cream">
                Go deeper. Read what the industry insiders know.
              </p>
              <p className="text-lg text-brand-cream/80 leading-relaxed">
                From identity governance to privileged access management. Our ebooks are written for professionals and career starters who want practical knowledge without the jargon.
              </p>
            </div>
          </motion.div>

          {/* Action Button Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Link 
              href="/store#ebooks-section" 
              className="group relative inline-flex items-center gap-3 rounded-xl bg-brand-gold px-10 py-5 text-lg font-black text-brand-navy transition-all hover:bg-brand-cream active:scale-95 shadow-xl"
            >
              Browse All Ebooks
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              <BookOpen className="absolute -top-2 -right-2 h-6 w-6 text-brand-gold opacity-0 transition-all group-hover:opacity-100 group-hover:-rotate-12" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}