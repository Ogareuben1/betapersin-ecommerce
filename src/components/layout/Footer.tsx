'use client';

import Link from 'next/link';
import { Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-blue-700" />
              <span className="text-xl font-bold tracking-tight text-gray-900">
                BETAPERSIN
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Identity & Access Management Education. <br />
              Practical training built for the modern enterprise, led by CISSP certified expertise.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Content</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-blue-700 transition">Courses</Link></li>
                <li><Link href="#" className="hover:text-blue-700 transition">Ebooks</Link></li>
                <li><Link href="#" className="hover:text-blue-700 transition">Free Modules</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Contact</h4>
              <a 
                href="mailto:hello@betapersin.com" 
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition"
              >
                <Mail className="h-4 w-4" />
                hello@betapersin.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">
            © 2026 Betapersin. Identity & Access Management Education.
          </div>
          
          <div className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-widest">
            Built for Professionals
          </div>
        </div>
      </div>
    </footer>
  );
}