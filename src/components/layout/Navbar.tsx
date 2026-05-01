'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

// Link Definitions
const courseLinks = [
  { name: "Start IAM as a Beginner", href: "/courses/beginner-iam" },
  { name: "Identity & Access Management", href: "/courses/iam" },
  { name: "GRC Foundation with IAM Controls", href: "/courses/grc-foundation" },
];

const serviceLinks = [
  { name: "Professional Services", href: "/services/professional" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-brand-gold/10 bg-brand-cream/95 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* 1. OFFICIAL LOGO SECTION */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="relative h-16 w-48 transition-transform group-hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="BetapersinIAM Logo" 
                  fill
                  className="object-contain"
                  priority
                />
            </div>
          </Link>

          {/* 2. DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-brand-navy/70 hover:text-brand-navy transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-bold text-brand-navy/70 hover:text-brand-navy transition-colors">About</Link>

            {/* Courses Dropdown */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setActiveDropdown('courses')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-bold text-brand-navy/70 hover:text-brand-navy transition-colors">
                Courses <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'courses' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'courses' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-1 w-72 bg-white border border-brand-gold/10 shadow-2xl rounded-2xl p-2 overflow-hidden"
                  >
                    {courseLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        className="block px-4 py-3 text-sm text-brand-navy/70 hover:bg-brand-cream hover:text-brand-navy rounded-xl transition-all font-medium"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-bold text-brand-navy/70 hover:text-brand-navy transition-colors">
                Services <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-1 w-60 bg-white border border-brand-gold/10 shadow-2xl rounded-2xl p-2"
                  >
                    {serviceLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        className="block px-4 py-3 text-sm text-brand-navy/70 hover:bg-brand-cream hover:text-brand-navy rounded-xl transition-all font-medium"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/store" className="text-sm font-bold text-brand-navy/70 hover:text-brand-navy transition-colors">Store</Link>
            
            <Link 
              href="/contact" 
              className="ml-4 rounded-xl bg-brand-navy px-6 py-3 text-xs font-black uppercase tracking-widest text-brand-gold hover:bg-black transition-all shadow-lg hover:shadow-brand-gold/10 active:scale-95"
            >
              Contact Betapersin
            </Link>
          </div>

          {/* 3. MOBILE TOGGLE */}
          <button 
            className="lg:hidden p-2 text-brand-navy" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-brand-cream border-b border-brand-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              <Link href="/" className="font-black text-brand-navy" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" className="font-black text-brand-navy" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              
              <div className="space-y-4">
                <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em]">Our Courses</p>
                {courseLinks.map(l => (
                  <Link key={l.name} href={l.href} className="block pl-2 text-sm font-bold text-brand-navy/60" onClick={() => setIsMobileMenuOpen(false)}>
                    {l.name}
                  </Link>
                ))}
              </div>

              <Link href="/store" className="font-black text-brand-navy" onClick={() => setIsMobileMenuOpen(false)}>Store</Link>
              <Link 
                href="/contact" 
                className="inline-block w-full text-center bg-brand-navy text-brand-gold py-4 rounded-xl font-black uppercase tracking-widest text-xs" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Betapersin
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}