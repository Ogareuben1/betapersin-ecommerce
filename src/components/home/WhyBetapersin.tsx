'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Zap } from 'lucide-react';

export default function WhyBetapersin() {
  return (
    <section className="bg-slate-900 py-24 text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Side: The "Why" Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
              Why Learn With <span className="text-blue-400">Betapersin</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-slate-300">
              <p className="font-semibold text-white text-xl">
                Most cybersecurity training tells you what the field is. Betapersin shows you what it actually looks like from the inside.
              </p>
              <p>
                The knowledge here comes from 15 years of working inside Tier 1 financial institutions across Europe. Not theory. Not slides. Real governance frameworks, real identity programmes, real access controls built and managed inside some of the most regulated environments in the world.
              </p>
              <p className="flex items-center gap-3 font-bold text-blue-400 italic">
                <ShieldCheck className="h-6 w-6" />
                CISSP certified. Practically trained. Human in approach.
              </p>
              <p>
                This is cybersecurity taught by someone who has lived it. And built specifically for people who were told this field was not for them.
              </p>
            </div>
          </motion.div>

          {/* Right Side: The "No Jargon" Checklist */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl bg-white/5 p-8 lg:p-12 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-400" />
                The Betapersin Standard
              </h3>
              
              <ul className="space-y-6">
                {[
                  "No coding required.",
                  "No prior experience needed.",
                  "No corporate jargon.",
                  "Just clarity."
                ].map((text, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-4 text-xl font-medium"
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    {text}
                  </motion.li>
                ))}
              </ul>

              {/* Decorative "15 Years" Badge */}
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-blue-600 flex flex-col items-center justify-center text-center shadow-2xl rotate-12 border-4 border-slate-900">
                <span className="text-2xl font-black">15</span>
                <span className="text-[10px] font-bold uppercase">Years XP</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}