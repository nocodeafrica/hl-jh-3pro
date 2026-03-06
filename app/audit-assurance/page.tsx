'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShieldCheck, 
  Search, 
  FileBarChart, 
  Briefcase, 
  Check, 
  ArrowRight, 
  ChevronRight,
  Target
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AuditAssurancePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animation
    const tl = gsap.timeline();
    tl.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    })
    .from('.hero-badge', {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, '-=0.6');

    // Section Headers
    gsap.utils.toArray('.section-header').forEach((header: any) => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    // Bento Grid Stagger
    ScrollTrigger.batch('.bento-card', {
      start: 'top 85%',
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        });
      },
    });

    // CTA Scale
    gsap.from('.cta-container', {
      scrollTrigger: {
        trigger: '.cta-container',
        start: 'top 90%',
        end: 'bottom center',
        scrub: 1,
      },
      scale: 0.92,
      opacity: 0.8,
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-[#0F172A] min-h-screen text-slate-200 selection:bg-[#C5A059] selection:text-[#0F172A]">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Parallax-like feel via absolute positioning */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
            alt="Modern corporate boardroom for audit meetings"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/60 to-[#0F172A]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav className="hero-text mb-8 flex justify-center items-center space-x-2 text-sm text-slate-400 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-[#C5A059] transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#C5A059]">Audit & Assurance</span>
          </nav>

          <h1 className="hero-text text-5xl md:text-7xl font-bold font-['Manrope'] leading-tight mb-6">
            Uncompromising <span className="text-gradient-gold">Accuracy</span><br />
            for Stakeholders.
          </h1>
          
          <p className="hero-text text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-['Inter'] leading-relaxed mb-10">
            We provide rigorous financial clarity that goes beyond compliance. 
            Empowering South African businesses with transparent insights and 
            bulletproof assurance.
          </p>

          <div className="hero-text flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-[#C5A059] text-[#0F172A] font-bold rounded-full hover:bg-[#d4b068] transition-all transform hover:scale-105 shadow-lg shadow-[#C5A059]/20 flex items-center justify-center gap-2"
            >
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#scope" 
              className="px-8 py-4 glass-panel text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SCOPE OF WORK (Bento Grid) */}
      <section id="scope" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="section-header max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Manrope'] mb-4">
              Comprehensive <span className="text-gradient-teal">Assurance</span> Services
            </h2>
            <p className="text-slate-400 text-lg">
              Our audit methodology combines deep industry knowledge with advanced data analytics 
              to deliver audits that add real value to your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            
            {/* Card 1: Statutory Audits (Large) */}
            <div className="bento-card col-span-1 lg:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group opacity-0 translate-y-10">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80" />
              <Image 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
                alt="Team analyzing data"
                fill
                className="object-cover -z-10 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="bg-[#0F172A]/50 w-fit p-3 rounded-xl backdrop-blur-md border border-slate-700">
                  <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-['Manrope'] mb-3 text-white">Statutory Audits</h3>
                  <p className="text-slate-300 mb-6 max-w-lg">
                    Full compliance audits aligned with the Companies Act 71 of 2008 and IFRS. 
                    We ensure your financial statements accurately reflect your business reality, 
                    satisfying shareholders, lenders, and SARS.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2DD4BF]" /> IFRS & IFRS for SMEs</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2DD4BF]" /> JSE Listing Requirements</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2DD4BF]" /> Public Interest Scores</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2DD4BF]" /> Risk Assessment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Internal Reviews */}
            <div className="bento-card col-span-1 glass-panel p-8 rounded-2xl relative group hover:border-[#2DD4BF]/30 transition-colors opacity-0 translate-y-10">
              <div className="bg-slate-800/50 w-fit p-3 rounded-xl mb-6">
                <FileBarChart className="w-8 h-8 text-[#2DD4BF]" />
              </div>
              <h3 className="text-xl font-bold font-['Manrope'] mb-3">Internal Reviews</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Strengthen your internal controls and operational efficiency. We identify weaknesses 
                before they become liabilities, offering actionable recommendations for process improvement.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-700/50">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Key Benefit</span>
                <p className="text-[#C5A059] text-sm mt-1">Operational Resilience</p>
              </div>
            </div>

            {/* Card 3: Due Diligence */}
            <div className="bento-card col-span-1 glass-panel p-8 rounded-2xl relative group hover:border-[#C5A059]/30 transition-colors opacity-0 translate-y-10">
              <div className="bg-slate-800/50 w-fit p-3 rounded-xl mb-6">
                <Target className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="text-xl font-bold font-['Manrope'] mb-3">Due Diligence</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Critical insights for mergers, acquisitions, and investments. We peel back the layers 
                of target entities to verify financial health and uncover hidden risks.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-700/50">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Key Benefit</span>
                <p className="text-[#C5A059] text-sm mt-1">Informed Decision Making</p>
              </div>
            </div>

            {/* Card 4: Forensic Auditing (Large) */}
            <div className="bento-card col-span-1 lg:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group opacity-0 translate-y-10">
               {/* Abstract decorative background */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#2DD4BF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
               
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1">
                  <div className="bg-slate-800/50 w-fit p-3 rounded-xl mb-6">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-['Manrope'] mb-3">Forensic Auditing</h3>
                  <p className="text-slate-400 mb-6">
                    When irregularities arise, you need precision. Our forensic team investigates fraud, 
                    misappropriation, and financial misconduct with the discretion and detail required 
                    for legal proceedings.
                  </p>
                  <Link href="/contact" className="text-[#2DD4BF] hover:text-[#5EEAD4] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Discuss a sensitive matter <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="md:w-1/3 relative h-48 w-full rounded-xl overflow-hidden border border-slate-700/50">
                   <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
                   <Image 
                    src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=1200"
                    alt="Confidential meeting room"
                    fill
                    className="object-cover"
                   />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="cta-container relative rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center text-center px-6 border border-slate-700">
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
              alt="Office environment"
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/90" />
            
            <div className="relative z-10 max-w-2xl">
              <Briefcase className="w-12 h-12 text-[#C5A059] mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold font-['Manrope'] mb-6">
                Ready for total <span className="text-white">clarity</span>?
              </h2>
              <p className="text-slate-300 text-lg mb-10">
                Whether you need a statutory audit for compliance or a forensic review for peace of mind, 
                JHA Services brings the expertise you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-white text-[#0F172A] font-bold rounded-full hover:bg-slate-200 transition-colors"
                >
                  Request Audit Proposal
                </Link>
                <Link 
                  href="https://wa.me/27123456789" 
                  className="px-8 py-4 border border-slate-500 text-white font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
