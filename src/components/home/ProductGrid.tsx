'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Gift, Lock, Settings, Layers, ArrowRight, Mail } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "GRC Foundations with IAM Controls",
    subtitle: "Learn how organisations build and manage governance, risk and compliance frameworks with identity controls built in.",
    details: "Twelve modules. Real world case studies. No coding required.",
    price: "£249",
    icon: <Shield className="h-6 w-6 text-brand-gold" />,
    tag: "Core Training",
    buttonText: "BUY THE COURSE",
    link: "https://betapersin.gumroad.com/l/grc-full-module-iam-controls"
  },
  {
    id: 2,
    title: "From Zero to IAM Analyst with Microsoft Entra ID",
    subtitle: "A practical journey into identity and access management using Microsoft Entra ID.",
    details: "Built for beginners and career switchers with no technical background required.",
    price: "£299",
    icon: <Users className="h-6 w-6 text-brand-gold" />,
    tag: "Best Seller",
    buttonText: "BUY THE COURSE",
    link: "https://betapersin.gumroad.com/l/Zero2IAM"
  },
  {
    id: 3,
    title: "GRC and IAM Complete Bundle",
    subtitle: "Get both courses together and save. The most complete introduction to identity security available at this level.",
    details: "Includes a free CV review and mock interview for the first ten buyers.",
    price: "£399",
    icon: <Gift className="h-6 w-6 text-brand-gold" />,
    tag: "Best Value",
    buttonText: "BUY THE BUNDLE",
    link: "https://betapersin.gumroad.com/l/Bundle"
  },
  {
    id: 4,
    title: "PAM Foundations",
    subtitle: "Your introduction to Privileged Access Management. Learn how organisations identify, control and monitor their most sensitive accounts.",
    details: "Introduction to vaulted credentials, session recording, and JIT access.",
    price: "",
    icon: <Lock className="h-6 w-6 text-brand-gold/40" />,
    tag: "COURSE PREVIEW",
    buttonText: "START FREE",
    isWaitlist: false,
    link: "https://betapersin.gumroad.com/l/pam-foundations-module-1"
  },
  {
    id: 5,
    title: "PAM Engineering",
    subtitle: "Go deeper into PAM implementation, tooling and architecture. Built for professionals ready to design and engineer solutions.",
    details: "Focus on hands-on deployment strategies for financial environments.",
    price: "Coming Soon",
    icon: <Settings className="h-6 w-6 text-brand-gold/40" />,
    tag: "Advanced",
    buttonText: "Join the Waitlist",
    isWaitlist: true,
    link: "mailto:hello@betapersin.com"
  },
  {
    id: 6,
    title: "PAM Complete Bundle",
    subtitle: "Get both PAM courses together. From foundations through to engineering. The complete PAM learning pathway.",
    details: "Includes exclusive access to our private PAM implementation roadmap.",
    price: "Coming Soon",
    icon: <Layers className="h-6 w-6 text-brand-gold/40" />,
    tag: "Waitlist",
    buttonText: "Join the Waitlist",
    isWaitlist: true,
    link: "mailto:hello@betapersin.com"
  }
];

export default function ProductGrid() {
  return (
    <section className="bg-brand-navy py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          {/* Title - Now Gold */}
          <h2 className="text-4xl font-black tracking-tight text-brand-gold uppercase">Our Courses</h2>
          {/* Subtitle - Now White */}
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto font-medium">
            No coding required. No prior experience needed. Just real knowledge from inside real institutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              /* All grids now have the Cream background */
              className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:scale-[1.02] bg-brand-cream border-brand-gold/20 shadow-lg ${
                course.id === 3 ? 'ring-4 ring-brand-gold' : ''
              }`}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-xl p-3 bg-brand-navy/5">
                  {course.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-brand-gold/20 text-brand-navy">
                  {course.tag}
                </span>
              </div>

              <h3 className="text-xl font-black mb-4 text-brand-navy">
                {course.title}
              </h3>
              
              <p className="text-sm leading-relaxed mb-6 text-brand-navy/80">
                {course.subtitle}
              </p>

              <div className="mt-auto p-4 rounded-xl text-xs font-bold border mb-6 italic bg-brand-navy/5 text-brand-navy/60 border-brand-navy/10">
                {course.details}
              </div>

              <div className="flex flex-col gap-4">
                <span className={`text-2xl font-black ${course.isWaitlist ? 'text-brand-navy/40' : 'text-brand-navy'}`}>
                  {course.price}
                </span>
                
                <a 
                  href={course.link}
                  target={course.link.startsWith('http') ? "_blank" : "_self"}
                  rel="nofollow"
                  className={`w-full text-center py-4 rounded font-black text-sm transition-all flex items-center justify-center gap-2 ${
                    course.isWaitlist 
                    ? 'bg-transparent border border-brand-navy/30 text-brand-navy hover:bg-brand-navy hover:text-brand-cream' 
                    : 'bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-brand-gold shadow-md'
                  }`}
                >
                  {course.buttonText}
                  {course.isWaitlist ? <Mail className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
