'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Target, 
  Shield, 
  Briefcase, 
  TrendingUp, 
  Users, 
  Check, 
  ChevronRight,
  PieChart,
  Globe
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BusinessAdvisoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Entrance
    const tl = gsap.timeline();
    tl.from('.hero-text-anim', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    })
    .from('.hero-image-anim', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out'
    }, '-=0.8');

    // 2. Section Headings
    gsap.utils.toArray('.section-heading').forEach((heading: any) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    // 3. Service Cards Stagger
    ScrollTrigger.batch('.service-card', {
      start: 'top 85%',
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.2)',
          overwrite: true,
        });
      },
    });

    // 4. Feature Split Section
    gsap.from('.feature-split-left', {
      scrollTrigger: {
        trigger: '.feature-split-section',
        start: 'top 75%',
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
    
    gsap.from('.feature-split-right', {
      scrollTrigger: {
        trigger: '.feature-split-section',
        start: 'top 75%',
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    });

    // 5. CTA Scale Up
    gsap.from('.cta-box', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.4)',
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-[#0F172A] min-h-screen text-slate-200 selection:bg-[#C5A059] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 hero-image-anim">
          <Image
            src="https://images.unsplash.com/photo-1732305477382-2d597e47b4ec?w=1200&auto=format&fit=crop&q=80"
            alt="Abstract architectural detail representing structure and strategy"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/70 to-[#0F172A]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-5xl">
          {/* Breadcrumb */}
          <div className="hero-text-anim flex items-center justify-center gap-2 text-sm text-slate-400 mb-6 font-medium tracking-wide uppercase">
            <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-[#C5A059] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#C5A059]">Business Advisory</span>
          </div>

          <h1 className="hero-text-anim text-5xl md:text-6xl lg:text-7xl font-bold font-['Manrope'] leading-tight mb-6">
            Strategic Insights to <br />
            <span className="text-gradient-gold">Scale Your Enterprise</span>
          </h1>
          
          <p className="hero-text-anim text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Navigate complex regulatory landscapes, optimize your B-BBEE scorecard, and unlock sustainable growth with JHA's expert advisory services.
          </p>
          
          <div className="hero-text-anim flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="group relative px-8 py-4 bg-[#C5A059] text-[#0F172A] font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Strategy Session <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="#offerings" 
              className="px-8 py-4 bg-transparent border border-slate-600 text-white font-semibold rounded-lg hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* --- INTRODUCTION --- */}
      <section className="py-20 bg-[#0F172A] relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center section-heading">
            <h2 className="text-3xl md:text-4xl font-bold font-['Manrope'] mb-6">
              Beyond Compliance: <span className="text-gradient-teal">True Value Creation</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              In South Africa's dynamic economic environment, generic advice isn't enough. 
              We provide bespoke advisory solutions that align with your long-term vision, 
              turning regulatory requirements like B-BBEE into competitive advantages.
            </p>
          </div>
        </div>
      </section>

      {/* --- OFFERINGS (BENTO GRID) --- */}
      <section id="offerings" className="py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2DD4BF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C5A059] opacity-5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 section-heading">
            <h2 className="text-3xl md:text-4xl font-bold font-['Manrope'] mb-4">Our Advisory Portfolio</h2>
            <div className="w-20 h-1 bg-[#C5A059] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: B-BBEE (Featured Large) */}
            <div className="lg:col-span-2 service-card opacity-0 translate-y-8 group relative p-8 glass-panel rounded-2xl overflow-hidden hover:border-[#C5A059]/50 transition-colors duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-32 h-32 text-[#C5A059]" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#C5A059]/20 rounded-lg flex items-center justify-center mb-6 text-[#C5A059]">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Manrope'] text-white">B-BBEE Consulting & Strategy</h3>
                <p className="text-slate-400 mb-6 max-w-lg">
                  Transform B-BBEE from a compliance hurdle into a strategic asset. We assist with scorecard optimization, ownership structuring, and enterprise supplier development (ESD) strategies that drive real transformation.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-[#C5A059]" /> Scorecard Gap Analysis</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-[#C5A059]" /> Ownership Structures</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-[#C5A059]" /> Skills Development Planning</li>
                  <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-[#C5A059]" /> Audit Preparation</li>
                </ul>
              </div>
            </div>

            {/* Card 2: M&A */}
            <div className="service-card opacity-0 translate-y-8 group relative p-8 glass-panel rounded-2xl overflow-hidden hover:border-[#2DD4BF]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#2DD4BF]/20 rounded-lg flex items-center justify-center mb-6 text-[#2DD4BF]">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-['Manrope'] text-white">Mergers & Acquisitions</h3>
              <p className="text-slate-400 text-sm mb-6">
                Comprehensive buy-side and sell-side advisory. We handle due diligence, valuation, and deal structuring to maximize shareholder value.
              </p>
              <Link href="/contact" className="text-[#2DD4BF] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Discuss a Deal <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Risk Management */}
            <div className="service-card opacity-0 translate-y-8 group relative p-8 glass-panel rounded-2xl overflow-hidden hover:border-slate-400/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mb-6 text-slate-200">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-['Manrope'] text-white">Risk & Governance</h3>
              <p className="text-slate-400 text-sm mb-6">
                Strengthen your internal controls and governance frameworks. We identify operational risks and implement mitigation strategies tailored to your industry.
              </p>
            </div>

            {/* Card 4: Financial Modeling */}
            <div className="service-card opacity-0 translate-y-8 group relative p-8 glass-panel rounded-2xl overflow-hidden hover:border-[#C5A059]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#C5A059]/20 rounded-lg flex items-center justify-center mb-6 text-[#C5A059]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-['Manrope'] text-white">Financial Modeling</h3>
              <p className="text-slate-400 text-sm mb-6">
                Robust cash flow forecasting and scenario planning. We build dynamic models to support capital raising, budgeting, and strategic decision-making.
              </p>
            </div>

            {/* Card 5: Business Turnaround */}
            <div className="service-card opacity-0 translate-y-8 group relative p-8 glass-panel rounded-2xl overflow-hidden hover:border-[#2DD4BF]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#2DD4BF]/20 rounded-lg flex items-center justify-center mb-6 text-[#2DD4BF]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-['Manrope'] text-white">Business Restructuring</h3>
              <p className="text-slate-400 text-sm mb-6">
                Strategic interventions for distressed entities. We analyze root causes and implement turnaround strategies to restore profitability and liquidity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- FEATURE SPLIT: THE PROCESS --- */}
      <section className="py-24 bg-[#0B1120] feature-split-section overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Content */}
            <div className="lg:w-1/2 feature-split-left">
              <h2 className="text-3xl md:text-4xl font-bold font-['Manrope'] mb-6">
                The JHA <span className="text-gradient-gold">Strategic Framework</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Our advisory approach is rooted in data and driven by results. We don't just deliver reports; we partner with you to execute the strategy.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-[#0F172A] font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Discovery & Diagnostics</h4>
                    <p className="text-slate-400 text-sm">We deep-dive into your financials, operations, and market position to identify hidden opportunities and risks.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Strategy Formulation</h4>
                    <p className="text-slate-400 text-sm">Developing tailored roadmaps—whether for B-BBEE compliance, M&A integration, or cash flow optimization.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Execution & Monitoring</h4>
                    <p className="text-slate-400 text-sm">We stand by your side during implementation, monitoring KPIs and adjusting tactics to ensure success.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="lg:w-1/2 feature-split-right relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1758691736097-7f735ac5f118?w=1200&auto=format&fit=crop&q=80"
                  alt="Corporate team analyzing data in a modern boardroom"
                  width={800}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-xl backdrop-blur-xl border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-[#C5A059] uppercase tracking-wider font-bold mb-1">Success Rate</p>
                      <p className="text-2xl font-bold text-white">98%</p>
                    </div>
                    <div className="h-8 w-[1px] bg-slate-600" />
                    <div>
                      <p className="text-xs text-[#2DD4BF] uppercase tracking-wider font-bold mb-1">Capital Raised</p>
                      <p className="text-2xl font-bold text-white">R500M+</p>
                    </div>
                    <div className="h-8 w-[1px] bg-slate-600" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Clients</p>
                      <p className="text-2xl font-bold text-white">150+</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative graphic behind */}
              <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border-2 border-[#C5A059]/20 rounded-2xl" />
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative cta-section">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1642364706752-3af64cc1af5e?w=1200&auto=format&fit=crop&q=80"
            alt="Abstract floating numbers representing finance"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#0F172A]/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="cta-box max-w-4xl mx-auto glass-panel rounded-3xl p-10 md:p-16 text-center border border-[#C5A059]/30 shadow-[0_0_50px_rgba(197,160,89,0.1)]">
            <h2 className="text-3xl md:text-5xl font-bold font-['Manrope'] mb-6 text-white">
              Ready to <span className="text-gradient-gold">Elevate Your Business?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Whether you need to optimize your B-BBEE position, structure a merger, or refine your financial strategy, our experts are ready to assist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] font-bold rounded-lg hover:bg-[#D4B06A] transition-colors"
              >
                <Briefcase className="w-5 h-5" />
                Schedule a Consultation
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
