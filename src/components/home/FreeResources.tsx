'use client';

import { motion } from 'framer-motion';
import { PlayCircle, Unlock, FileDown, Clock, ArrowRight } from 'lucide-react';

const freebies = [
  {
    id: 1,
    title: "GRC Free Module",
    description: "Start here if you want to understand governance, risk and compliance. No experience needed.",
    buttonText: "Start Free",
    icon: <PlayCircle className="h-6 w-6 text-green-600" />,
    type: "Course Preview"
  },
  {
    id: 2,
    title: "IAM Free Module",
    description: "Start here if you want to get into identity and access management. No coding required.",
    buttonText: "Start Free",
    icon: <Unlock className="h-6 w-6 text-green-600" />,
    type: "Course Preview"
  },
  {
    id: 3,
    title: "PAM Foundations",
    description: "Your free introduction to Privileged Access Management. Coming soon to Betapersin.",
    buttonText: "Join the waitlist",
    icon: <Clock className="h-6 w-6 text-orange-500" />,
    type: "Upcoming",
    isWaitlist: true
  },
  {
    id: 4,
    title: "Why Your IAM Is Failing",
    description: "For security professionals who want to identify gaps in their current IAM programme.",
    buttonText: "Download Free",
    icon: <FileDown className="h-6 w-6 text-blue-600" />,
    type: "Whitepaper"
  }
];

export default function FreeResources() {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-gray-900"
          >
            Start Here. For Free.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-600"
          >
            Not sure where to begin? These free resources will show you exactly what cybersecurity looks like from the inside before you spend a penny.
          </motion.p>
        </div>

        {/* Centered Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {freebies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center text-center justify-between rounded-2xl border border-gray-100 bg-slate-50 p-8 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="mb-6 rounded-full bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  {item.icon}
                </div>
                <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600/60">
                  {item.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* ... inside the map loop ... */}

<button 
  className={`flex items-center justify-center gap-2 w-full py-4 px-4 rounded-xl text-sm font-extrabold tracking-wide transition-all duration-300 ${
    item.isWaitlist 
    ? 'bg-transparent border-2 border-slate-200 text-slate-400 hover:border-blue-600 hover:text-blue-600' 
    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-95'
  }`}
>
  {item.buttonText.toUpperCase()}
  <ArrowRight className="h-4 w-4" />
</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}