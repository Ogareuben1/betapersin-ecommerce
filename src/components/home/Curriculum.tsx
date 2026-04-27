'use client';

import { motion } from 'framer-motion';
import { Users, Scale, Key } from 'lucide-react';

const pillars = [
  {
    title: "Identity and Access Management",
    description: "Who gets access. What they can do. When it gets taken away. IAM is the foundation of how organisations control who is inside their systems at any given moment. Taught practically from inside real financial institutions. No coding required.",
    icon: <Users className="h-8 w-8 text-blue-600" />,
    footer: "Practical Training"
  },
  {
    title: "Governance, Risk and Compliance",
    description: "How organisations identify risk, build controls and prove to regulators that they are doing things right. One of the fastest growing and most in demand areas in cybersecurity right now. No technical background needed to get started.",
    icon: <Scale className="h-8 w-8 text-blue-600" />,
    footer: "High Demand"
  },
  {
    title: "Privileged Access Management",
    description: "The most sensitive accounts in any organisation need the highest level of control. PAM is about protecting the keys to the kingdom. We focus on high-impact strategies for enterprise security.",
    icon: <Key className="h-8 w-8 text-blue-600" />,
    footer: "Coming Soon",
    isComingSoon: true
  }
];

export default function Curriculum() {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-gray-900"
          >
            What We Teach
          </motion.h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1.5 w-20 rounded-full bg-blue-700"></div>
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
              <div className="mb-6 rounded-2xl bg-blue-50 p-4 ring-1 ring-blue-700/10">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight leading-tight">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {pillar.description}
              </p>
              <div className={`mt-auto text-sm font-bold tracking-widest uppercase ${pillar.isComingSoon ? 'text-gray-400' : 'text-blue-700'}`}>
                {pillar.footer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}