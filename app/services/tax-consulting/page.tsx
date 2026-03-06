'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Check, 
  ArrowRight, 
  FileText, 
  Scale, 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  Briefcase,
  ChevronRight,
  Calculator,
  Phone
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TaxConsultingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animation
    const tl = gsap.timeline();
    tl.from('.hero-content > *', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Services Cards Stagger
    ScrollTrigger.batch('.service-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        });
      },
      start: 'top 85%',
    });

    // Process Steps
    const steps = gsap.utils.toArray('.process-step');
    steps.forEach((step: any, index) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
        },
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    // CTA Scale
    gsap.from('.cta-box', {
      scrollTrigger: {
        trigger: '.cta-box',
        start: 'top 90%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.2)',
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-[#0F172A] min-h-screen text-slate-300 selection:bg-[#C5A059] selection:text-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax effect via CSS/ScrollTrigger if needed, keeping simple here */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1637665662134-db459c1bbb46?w=1200&auto=format&fit=crop&q=80"
            alt="Modern corporate boardroom representing tax strategy"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/60 to-[#0F172A]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8 hero-content">
            <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-[#C5A059] transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Tax Consulting</span>
          </nav>

          <div className="max-w-4xl hero-content">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 font-['Manrope']">
              Navigating <span className="text-gradient-gold">SARS Complexity</span> With Ease.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
              Strategic tax planning and compliance for South African businesses. 
              We turn tax liabilities into optimized financial structures, ensuring you stay compliant while maximizing efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C5A059] text-[#0F172A] font-bold rounded-lg hover:bg-white transition-all duration-300 group"
              >
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 glass-panel text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTRO / CONTEXT --- */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden glass-panel border border-white/10 group">
              <Image
                src="https://images.unsplash.com/photo-1764810815228-b7f9432eec5c?w=1200&auto=format&fit=crop&q=80"
                alt="Diverse corporate team meeting"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Manrope']">
                Beyond Just Filing Returns
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                The South African tax landscape is constantly evolving. From changes in Corporate Income Tax (CIT) rates to complex VAT regulations, staying compliant requires more than just annual submissions.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                At JHA Services, we adopt a proactive approach. We don't just record history; we help shape your financial future. Our team of tax practitioners specializes in navigating the nuances of SARS regulations to protect your business and personal wealth.
              </p>
              <ul className="space-y-4">
                {[
                  'Fully accredited SARS Tax Practitioners',
                  'Expertise in provisional and retrospective tax',
                  'Strategic dispute resolution capabilities'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#2DD4BF]/10 flex items-center justify-center text-[#2DD4BF]">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="services" className="py-24 bg-[#0B1120] relative">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#C5A059]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2DD4BF] font-semibold tracking-wider text-sm uppercase">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6 font-['Manrope']">
              Comprehensive Tax Solutions
            </h2>
            <p className="text-slate-400">
              From routine compliance to complex international structuring, we cover every aspect of the tax lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:border-[#C5A059]/50 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-all">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Corporate Tax (CIT)</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Optimization of corporate tax structures, accurate IT14 submissions, and provisional tax planning to manage cash flow effectively.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full"/> Provisional Tax (IRP6)</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full"/> Annual Returns</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:border-[#C5A059]/50 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 text-emerald-400 group-hover:text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-all">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">VAT Compliance</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Ensuring accurate VAT201 returns, handling audits, and maximizing legitimate input claims to improve liquidity.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full"/> Registration & Deregistration</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full"/> Dispute Management</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:border-[#C5A059]/50 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-all">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">PAYE & Payroll Tax</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Complete management of EMP201s and EMP501 reconciliations. Structuring salary packages for tax efficiency.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full"/> ETI Claims</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full"/> IRP5 Generation</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:border-[#C5A059]/50 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 text-red-400 group-hover:text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-all">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dispute Resolution</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Expert representation during SARS audits. We handle objections (NOO) and appeals to resolve unfair assessments.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full"/> Penalty Remission</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full"/> Debt Compromise</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:border-[#C5A059]/50 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 text-indigo-400 group-hover:text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-all">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">International Tax</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Cross-border structuring for SA companies expanding abroad or foreign entities entering the SA market.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full"/> Transfer Pricing</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full"/> Expat Tax Compliance</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:border-[#C5A059]/50 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6 text-teal-400 group-hover:text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-all">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tax Clearance</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Obtaining Tax Compliance Status (TCS) PINs for tenders, foreign investment allowances, and good standing.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full"/> Tender Compliance</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#C5A059] rounded-full"/> Emigration Clearance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 md:text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Manrope']">
              How We Work
            </h2>
            <p className="text-slate-400">
              A structured, transparent approach to handling your tax affairs, minimizing risk at every step.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C5A059]/30 to-transparent" />

            <div className="space-y-12 md:space-y-24">
              {/* Step 1 */}
              <div className="process-step relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="md:w-1/2 flex justify-end">
                  <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 w-full max-w-md relative hover:bg-slate-800/80 transition-colors">
                    <div className="absolute -right-3 top-8 md:right-auto md:-right-[4.5rem] w-6 h-6 bg-[#C5A059] rounded-full z-10 hidden md:block border-4 border-[#0F172A]" />
                    <span className="text-5xl font-bold text-white/5 absolute top-4 right-6">01</span>
                    <h3 className="text-xl font-bold text-white mb-2">Assessment</h3>
                    <p className="text-slate-400 text-sm">
                      We conduct a deep dive into your current tax status via SARS eFiling, identifying outstanding returns, penalties, or risks.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 hidden md:block text-slate-600 text-sm font-mono">
                  &lt;Initialization /&gt;
                </div>
              </div>

              {/* Step 2 */}
              <div className="process-step relative flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                <div className="md:w-1/2 flex justify-start">
                  <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 w-full max-w-md relative hover:bg-slate-800/80 transition-colors">
                    <div className="absolute -left-3 top-8 md:left-auto md:-left-[4.5rem] w-6 h-6 bg-[#2DD4BF] rounded-full z-10 hidden md:block border-4 border-[#0F172A]" />
                    <span className="text-5xl font-bold text-white/5 absolute top-4 right-6">02</span>
                    <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
                    <p className="text-slate-400 text-sm">
                      We design a tax structure that minimizes liability within legal frameworks, utilizing all available deductions and allowances.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 hidden md:block text-right text-slate-600 text-sm font-mono">
                  &lt;Optimization /&gt;
                </div>
              </div>

              {/* Step 3 */}
              <div className="process-step relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="md:w-1/2 flex justify-end">
                  <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 w-full max-w-md relative hover:bg-slate-800/80 transition-colors">
                    <div className="absolute -right-3 top-8 md:right-auto md:-right-[4.5rem] w-6 h-6 bg-[#C5A059] rounded-full z-10 hidden md:block border-4 border-[#0F172A]" />
                    <span className="text-5xl font-bold text-white/5 absolute top-4 right-6">03</span>
                    <h3 className="text-xl font-bold text-white mb-2">Filing</h3>
                    <p className="text-slate-400 text-sm">
                      Accurate submission of returns (IT14, IRP6, VAT201) ensuring all data matches supporting documents to prevent audits.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 hidden md:block text-slate-600 text-sm font-mono">
                  &lt;Execution /&gt;
                </div>
              </div>

              {/* Step 4 */}
              <div className="process-step relative flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                <div className="md:w-1/2 flex justify-start">
                  <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 w-full max-w-md relative hover:bg-slate-800/80 transition-colors">
                    <div className="absolute -left-3 top-8 md:left-auto md:-left-[4.5rem] w-6 h-6 bg-[#2DD4BF] rounded-full z-10 hidden md:block border-4 border-[#0F172A]" />
                    <span className="text-5xl font-bold text-white/5 absolute top-4 right-6">04</span>
                    <h3 className="text-xl font-bold text-white mb-2">Review</h3>
                    <p className="text-slate-400 text-sm">
                      Post-assessment verification. We check the ITA34 assessment from SARS against our calculations and file corrections if needed.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 hidden md:block text-right text-slate-600 text-sm font-mono">
                  &lt;Compliance_Check /&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="cta-box glass-panel rounded-3xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 border border-[#C5A059]/30">
            {/* Background Image Overlay for CTA */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1771147372634-976f022c0033?w=1200&auto=format&fit=crop&q=80"
                alt="Office atmosphere"
                fill
                className="object-cover opacity-10 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent" />
            </div>

            <div className="relative z-10 md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Manrope']">
                Ensure Your Compliance Today
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Don't let tax complexities hold your business back. Partner with JHA Services for precise, reliable, and strategic tax consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#C5A059] text-[#0F172A] font-bold rounded-lg hover:bg-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10"
                >
                  View All Services
                </Link>
              </div>
            </div>

            <div className="relative z-10 md:w-1/3 flex justify-center">
              <div className="bg-[#1E293B] p-6 rounded-2xl border border-white/10 shadow-2xl max-w-xs transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Status</div>
                    <div className="text-white font-bold">Compliant</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[95%]" />
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Risk Level</span>
                    <span className="text-green-400">Low</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 text-center">
                  <p className="text-xs text-slate-500">Last Verified: Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
