'use client';

import { useState } from 'react';
import Link from 'next/link';
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
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* 1. LOGO */}
          <Link href="/" className="flex items-center shrink-0">
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/GaacUkLWhRTud68Z/chatgpt-image-apr-19-2026-09_11_22-pm-qfzEV37ULnkiJFnj.png" 
              alt="Betapersin logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* 2. DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-7">
            <Link href="/" className="text-sm font-bold text-gray-600 hover:text-blue-700 transition">Home</Link>
            <Link href="/about" className="text-sm font-bold text-gray-600 hover:text-blue-700 transition">About</Link>

            {/* Courses Dropdown */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setActiveDropdown('courses')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-blue-700 transition">
                Courses <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'courses' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'courses' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-72 bg-white border border-gray-100 shadow-2xl rounded-2xl p-2 overflow-hidden"
                  >
                    {courseLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition font-medium"
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
              <button className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-blue-700 transition">
                Services <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-60 bg-white border border-gray-100 shadow-2xl rounded-2xl p-2"
                  >
                    {serviceLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition font-medium"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/store" className="text-sm font-bold text-gray-600 hover:text-blue-700 transition">Store</Link>
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="ml-4 rounded-full bg-blue-700 px-6 py-2.5 text-sm font-extrabold text-white hover:bg-blue-800 transition shadow-md hover:shadow-blue-200"
            >
              Contact Betapersin
            </Link>
          </div>

          {/* 3. MOBILE TOGGLE */}
          <button 
            className="lg:hidden p-2 text-gray-600" 
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
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-5">
              <Link href="/" className="font-bold text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" className="font-bold text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              
              <div className="space-y-3">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Courses</p>
                {courseLinks.map(l => (
                  <Link key={l.name} href={l.href} className="block pl-2 text-sm font-semibold text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>
                    {l.name}
                  </Link>
                ))}
              </div>

              <Link href="/store" className="font-bold text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Store</Link>
              <Link href="/contact" className="font-bold text-blue-700 pt-2 border-t border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Betapersin
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}