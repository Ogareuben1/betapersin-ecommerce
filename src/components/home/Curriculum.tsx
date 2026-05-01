'use client';

import { motion } from 'framer-motion';
import { Users, Scale, Key } from 'lucide-react';

const pillars = [
  {
    title: "Identity and Access Management",
    description: "Who gets access. What they can do. When it gets taken away. IAM is the foundation of how organisations control who is inside their systems. Taught practically from inside real financial institutions.",
    icon: <Users className="h-8 w-8 text-brand-gold" />,
    footer: "Practical Training"
  },
  {
    title: "Governance, Risk and Compliance",
    description: "How organisations identify risk, build controls and prove to regulators that they are doing things right. One of the fastest growing areas in cybersecurity right now.",
    icon: <Scale className="h-8 w-8 text-brand-gold" />,
    footer: "High Demand"
  },
  {
    title: "Privileged Access Management",
    description: "The most sensitive accounts need the highest level of control. PAM is about protecting the keys to the kingdom. We focus on high-impact strategies for enterprise security.",
    icon: <Key className="h-8 w-8 text-brand-gold" />,
    footer: "Coming Soon",
    isComingSoon: true
  }
];

export default function Curriculum() {
  return (
    /* Section background set to Cream #FAF7F2 */
    <section className="bg-brand-cream py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            /* Text set to Navy #0D1B2A */
            className="text-4xl font-bold tracking-tight text-brand-navy"
          >
            What We Teach
          </motion.h2>
          <div className="mt-4 flex justify-center">
            {/* Accent bar set to Gold #C9A84C */}
            <div className="h-1.5 w-20 rounded-full bg-brand-gold"></div>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              {/* Icon container: Navy #0D1B2A bg with subtle Gold #C9A84C ring */}
              <div className="mb-6 rounded-2xl bg-brand-navy p-4 ring-1 ring-brand-gold/20">
                {pillar.icon}
              </div>
              
              {/* Pillar Title: Navy #0D1B2A */}
              <h3 className="text-2xl font-bold text-brand-navy mb-4 uppercase tracking-tight leading-tight">
                {pillar.title}
              </h3>
              
              {/* Description: Navy #0D1B2A with 70% opacity for readability */}
              <p className="text-brand-navy/70 leading-relaxed mb-6">
                {pillar.description}
              </p>
              
              {/* Footer text: Gold #C9A84C unless it is 'Coming Soon' */}
              <div className={`mt-auto text-sm font-bold tracking-widest uppercase ${pillar.isComingSoon ? 'opacity-40 text-brand-navy' : 'text-brand-gold'}`}>
                {pillar.footer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}