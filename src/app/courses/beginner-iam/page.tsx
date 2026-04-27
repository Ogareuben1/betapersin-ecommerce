'use client';
import { motion } from 'framer-motion';
import { Play, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function BeginnerIAM() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Navbar />
      
      {/* Hero Section with Video Side-by-Side */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                Start Identity & Access Management <span className="text-blue-600">the Right Way.</span>
              </h1>
              <div className="space-y-4 mb-8 text-lg text-slate-600">
                <p className="flex items-center gap-3"><CheckCircle className="text-green-500 h-5 w-5" /> No tech background required.</p>
                <p className="flex items-center gap-3"><CheckCircle className="text-green-500 h-5 w-5" /> No certifications needed to begin.</p>
                <p className="flex items-center gap-3"><CheckCircle className="text-green-500 h-5 w-5" /> Just real-world IAM explained clearly.</p>
              </div>
              
              {/* Functional Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://betapersin.gumroad.com/l/FreeModule" 
                  target="_blank" 
                  rel="nofollow"
                  className="bg-[#C9A84C] text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:bg-[#1D1E20] hover:text-white flex items-center justify-center gap-2"
                >
                  IAM MODULE 1 FREE
                  <ArrowRight className="h-4 w-4" />
                </a>
                
                <a 
                  href="https://betapersin.gumroad.com/l/GRCModule1Free" 
                  target="_blank" 
                  rel="nofollow"
                  className="bg-[#C9A84C] text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:bg-[#1D1E20] hover:text-white flex items-center justify-center gap-2"
                >
                  GRC MODULE 1 FREE
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/-W9Nk0F6je0" 
                title="IAM Beginner Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}