'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  Check, 
  Globe, 
  PieChart, 
  Briefcase,
  Award,
  Target
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WealthManagementPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Entrance Timeline
    const tl = gsap.timeline();
    tl.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    })
    .from('.hero-image', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
    }, '-=0.8');

    // 2. Philosophy Section Split
    gsap.from('.philosophy-content', {
      scrollTrigger: {
        trigger: '.philosophy-section',
        start: 'top 80%',
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.philosophy-image', {
      scrollTrigger: {
        trigger: '.philosophy-section',
        start: 'top 80%',
      },
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
    });

    // 3. Service Cards Stagger
    ScrollTrigger.batch('.service-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.2)',
        });
      },
      start: 'top 85%',
    });

    // 4. CTA Scale Up
    gsap.from('.cta-box', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-slate-950 min-h-screen text-slate-200 selection:bg-teal-500/30">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 hero-image">
          <Image
            src="https://images.unsplash.com/photo-1660063235699-113ca63bde9a?w=1200&auto=format&fit=crop&q=80"
            alt="Abstract golden finance waves representing wealth growth"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="absolute top-0 left-6 lg:left-0 -mt-24 hero-text">
            <nav className="flex items-center text-sm text-slate-400 space-x-2">
              <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <Link href="/services" className="hover:text-teal-400 transition-colors">Services</Link>
              <span className="text-slate-600">/</span>
              <span className="text-teal-500 font-medium">Wealth Management</span>
            </nav>
          </div>

          <div className="max-w-4xl mx-auto text-center mt-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/30 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide uppercase mb-6 hero-text backdrop-blur-sm">
              <Award className="w-3 h-3" />
              <span>Premium Advisory</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight hero-text font-manrope">
              Preserving Capital for <br />
              <span className="text-gradient-gold">Future Generations</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed hero-text">
              Strategic wealth structuring, bespoke investment portfolios, and legacy planning designed for South Africa's high-net-worth individuals and families.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-text">
              <Link 
                href="/contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg overflow-hidden shadow-lg shadow-amber-900/20 hover:shadow-amber-900/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
              
              <Link 
                href="#philosophy" 
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-md border border-slate-700 text-slate-200 font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-300"
              >
                Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- PHILOSOPHY SECTION ----------------- */}
      <section id="philosophy" className="py-24 philosophy-section relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Content Left */}
            <div className="lg:w-1/2 philosophy-content">
              <h2 className="text-3xl md:text-4xl font-bold font-manrope mb-6">
                Holistic Financial Planning <br />
                <span className="text-slate-400">Beyond Just Returns</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                At JHA Services, we understand that true wealth is about more than just numbers on a balance sheet. It is about freedom, legacy, and the ability to impact the world around you. Our approach integrates tax efficiency, estate planning, and global investment strategies tailored to the unique South African economic landscape.
              </p>

              <div className="space-y-4">
                {[
                  "Bespoke Portfolio Construction",
                  "Local & Offshore Trust Structures",
                  "Tax-Efficient Estate Planning",
                  "Philanthropy & Legacy Advisory"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-teal-900/50 flex items-center justify-center border border-teal-500/20 group-hover:border-teal-500/50 transition-colors">
                      <Check className="w-4 h-4 text-teal-400" />
                    </div>
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:w-1/2 philosophy-image relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/50">
                <Image
                  src="https://images.unsplash.com/photo-1594077810908-9ffd89d704ac?w=1200&auto=format&fit=crop&q=80"
                  alt="Financial advisor analyzing investment data"
                  width={800}
                  height={600}
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-xl border border-slate-600/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Assets Under Advisory</p>
                      <p className="text-2xl font-bold text-white font-manrope">R 4.2 Billion+</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- SERVICES GRID (BENTO) ----------------- */}
      <section className="py-24 bg-slate-900/50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-manrope mb-4">
              Comprehensive <span className="text-gradient-teal">Wealth Solutions</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Navigating complex financial landscapes with precision and foresight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Investment Management */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <PieChart className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Investment Management</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Data-driven asset allocation strategies balancing growth and preservation. We utilize both active and passive instruments to optimize risk-adjusted returns.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex gap-2"><div className="w-1 h-1 bg-blue-400 rounded-full mt-2"/>Global Equities & Bonds</li>
                <li className="flex gap-2"><div className="w-1 h-1 bg-blue-400 rounded-full mt-2"/>Alternative Investments</li>
              </ul>
            </div>

            {/* Card 2: Fiduciary & Estate */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Fiduciary Services</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Structuring your assets to ensure seamless generational transfer. We specialize in drafting complex wills and administering local and offshore trusts.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex gap-2"><div className="w-1 h-1 bg-amber-400 rounded-full mt-2"/>Trust Administration</li>
                <li className="flex gap-2"><div className="w-1 h-1 bg-amber-400 rounded-full mt-2"/>Executor Services</li>
              </ul>
            </div>

            {/* Card 3: Global Structuring */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-colors group">
              <div className="w-12 h-12 bg-teal-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Offshore Structuring</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Diversify jurisdiction risk by externalizing assets. We guide you through SARB allowances, tax clearance, and international banking relationships.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex gap-2"><div className="w-1 h-1 bg-teal-400 rounded-full mt-2"/>Forex Clearance</li>
                <li className="flex gap-2"><div className="w-1 h-1 bg-teal-400 rounded-full mt-2"/>International Tax Compliance</li>
              </ul>
            </div>

            {/* Card 4: Retirement Planning */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-colors group">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Retirement Planning</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Ensuring your lifestyle is maintained post-career. We analyze cash flow needs, longevity risk, and inflation protection strategies.
              </p>
            </div>

            {/* Card 5: Business Assurance */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-colors group">
              <div className="w-12 h-12 bg-rose-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Business Assurance</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Protecting business continuity through Buy & Sell agreements, Key Person insurance, and contingent liability cover for business owners.
              </p>
            </div>

            {/* Card 6: Family Office */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-colors group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">Family Office</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  A dedicated team managing the complete financial affairs of ultra-high-net-worth families, from bill payments to philanthropic endeavors.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- CTA SECTION ----------------- */}
      <section className="py-24 relative overflow-hidden cta-section">
         {/* Background Image for CTA */}
         <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/35697009/pexels-photo-35697009/free-photo-of-modern-skyscrapers-in-sandton-urban-landscape.jpeg?auto=compress&cs=tinysrgb&w=1280"
            alt="Modern skyscrapers in Sandton urban landscape"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="cta-box glass-panel max-w-4xl mx-auto rounded-3xl p-10 md:p-16 text-center border border-slate-700/50 shadow-2xl bg-slate-900/40 backdrop-blur-xl">
            <h2 className="text-3xl md:text-5xl font-bold font-manrope mb-6">
              Start Your <span className="text-gradient-gold">Wealth Journey</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Secure your financial future with a partner who understands the nuances of wealth preservation in South Africa and abroad.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-teal-900/30 hover:shadow-teal-900/50 flex items-center justify-center gap-2"
              >
                Become a Client <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="https://wa.me/27123456789" 
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-500 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
              >
                Chat on WhatsApp
              </Link>
            </div>
            
            <p className="mt-8 text-sm text-slate-500">
              JHA Services is an authorised Financial Services Provider (FSP 12345).
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
