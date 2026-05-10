'use client';

import { motion } from 'framer-motion';
import { PlayCircle, Unlock, FileDown, Clock, ArrowRight } from 'lucide-react';

const freebies = [
  {
    id: 1,
    title: "GRC Free Module",
    description: "Start here if you want to understand governance, risk and compliance. No experience needed.",
    buttonText: "Start Free",
    href: "https://betapersin.gumroad.com/l/GRCModule1Free",
    icon: <PlayCircle className="h-6 w-6 text-brand-gold" />,
    type: "Course Preview"
  },
  {
    id: 2,
    title: "IAM Free Module",
    description: "Start here if you want to get into identity and access management. No coding required.",
    buttonText: "Start Free",
    href: "https://betapersin.gumroad.com/l/FreeModule",
    icon: <Unlock className="h-6 w-6 text-brand-gold" />,
    type: "Course Preview"
  },
  {
    id: 3,
    title: "PAM Foundations",
    description: "Your free introduction to Privileged Access Management. Coming soon to Betapersin.",
    buttonText: "Join the waitlist",
    href: "#",
    icon: <Clock className="h-6 w-6 text-brand-gold/40" />,
    type: "Upcoming",
    isWaitlist: true
  },
  {
    id: 4,
    title: "Why Your IAM Is Failing",
    description: "For security professionals who want to identify gaps in their current IAM programme.",
    buttonText: "Download Free",
    href: "https://betapersin.gumroad.com/l/why-iam-failing",
    icon: <FileDown className="h-6 w-6 text-brand-gold" />,
    type: "FREE GUIDE"
  }
];

export default function FreeResources() {
  return (
    <section className="bg-brand-cream py-24">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <span className="text-brand-gold">Start Here.</span> 
            <span className="bg-brand-navy text-white px-6 py-2 rounded-full inline-block shadow-md">
              For Free.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-lg text-brand-navy font-semibold max-w-2xl mx-auto"
          >
            Not sure where to begin? These free resources will show you exactly what cybersecurity looks like from the inside.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {freebies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center text-center justify-between rounded-xl border border-brand-gold/10 bg-brand-navy p-8 hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="mb-6 rounded-full bg-brand-navy/50 p-4 shadow-sm ring-1 ring-brand-gold/30">
                  {item.icon}
                </div>
                <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                  {item.type}
                </span>
                <h3 className="text-xl font-bold text-brand-cream mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-cream/70 leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Link Component */}
              <a 
                href={item.href}
                target={item.isWaitlist ? "_self" : "_blank"}
                rel="nofollow noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-4 px-4 rounded text-sm font-extrabold tracking-wide transition-all duration-300 ${
                  item.isWaitlist 
                  ? 'bg-transparent border border-brand-gold/30 text-brand-gold/50 cursor-not-allowed pointer-events-none' 
                  : 'bg-brand-gold text-brand-navy hover:bg-white hover:text-brand-navy active:scale-95 shadow-lg'
                }`}
              >
                {item.buttonText.toUpperCase()}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
