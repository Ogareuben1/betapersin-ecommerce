'use client';

import Link from 'next/link';
// We are using generic icons that are guaranteed to exist in any version
import { Mail, Shield, MessageSquare, Share2, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-brand-cream border-t border-brand-gold/20 pt-10 pb-6">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          
          {/* Brand Column */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="bg-brand-gold p-1 rounded-md">
                <Shield className="h-5 w-5 text-brand-navy" />
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                BETAPERSIN
              </span>
            </div>
            <p className="text-brand-cream/60 leading-relaxed text-xs md:text-sm">
              Identity & Access Management training built for the modern enterprise.
            </p>
            
            <div className="flex gap-3">
              <a href="mailto:hello@betapersin.com" className="p-1.5 rounded-full border border-brand-gold/20 hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Mail className="h-4 w-4" />
              </a>
              {/* Temporary generic icons to fix the build error */}
              <a href="#" className="p-1.5 rounded-full border border-brand-gold/20 hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Share2 className="h-4 w-4" />
              </a>
              <a href="#" className="p-1.5 rounded-full border border-brand-gold/20 hover:bg-brand-gold hover:text-brand-navy transition-all">
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-12 sm:gap-16">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-3">Learning</h4>
              <ul className="space-y-2">
                <li><Link href="/store" className="text-xs text-brand-cream/70 hover:text-brand-gold transition flex items-center group">Courses <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
                <li><Link href="/store#ebooks-section" className="text-xs text-brand-cream/70 hover:text-brand-gold transition flex items-center group">Ebooks <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[9px] text-brand-cream/40 font-bold uppercase tracking-widest">
            © {currentYear} Betapersin Ltd.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[9px] text-brand-gold/60 font-black uppercase tracking-widest">
              CISSP CERTIFIED LEADERSHIP
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}