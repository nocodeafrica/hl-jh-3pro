'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Briefcase, 
  FileText, 
  Check, 
  Award, 
  Users, 
  Phone 
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Animation (Load)
    const tl = gsap.timeline();
    tl.from('.hero-text', {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    })
    .from('.hero-cta', {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, '-=0.5');

    // 2. Trust Indicators (Fade In)
    gsap.from('.trust-item', {
      scrollTrigger: {
        trigger: '.trust-section',
        start: 'top 90%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
    });

    // 3. Services Bento Grid (Staggered Entry)
    ScrollTrigger.batch('.service-card', {
      start: 'top 85%',
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          overwrite: true,
        });
      },
    });

    // 4. About Section (Slide In)
    gsap.from('.about-img', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        scrub: 1,
        end: 'bottom 80%',
      },
      y: 100,
      opacity: 0.5,
    });
    
    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 75%',
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    // 5. Stats Counter
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach((stat) => {
      const target = parseFloat(stat.getAttribute('data-target') || '0');
      
      ScrollTrigger.create({
        trigger: stat,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(stat, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            ease: 'power1.out',
            onUpdate: function() {
               stat.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)).toString();
            }
          });
        }
      });
    });

    // 6. CTA Scale Up
    gsap.from('.cta-banner', {
      scrollTrigger: {
        trigger: '.cta-banner',
        start: 'top 90%',
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative w-full overflow-hidden bg-[#0F172A] text-slate-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=2532&auto=format&fit=crop"
            alt="Sandton Skyline Night View"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/70 to-[#0F172A] z-10" />
        </div>

        <div className="relative z-20 container mx-auto px-6 md:px-12 text-center max-w-5xl">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass-panel border border-slate-700/50 hero-text">
            <span className="text-sm font-medium text-gradient-gold tracking-wide uppercase">
              Established 2011 • Sandton, Johannesburg
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-['Manrope'] leading-tight mb-8 hero-text text-white">
            Securing Your Legacy, <br />
            <span className="text-gradient-teal">Empowering Your Growth.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed hero-text">
            Johannesburg’s premier financial consultancy for high-net-worth individuals and forward-thinking enterprises. We navigate complexity so you can focus on prosperity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-cta">
            <Link 
              href="/contact" 
              className="group relative px-8 py-4 bg-[#C5A059] text-[#0F172A] font-bold rounded-lg overflow-hidden transition-all hover:bg-[#D4AF6A]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Consultation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 glass-panel text-white font-medium rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <span className="sr-only">Scroll down</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 2. TRUST INDICATORS */}
      <section className="py-12 border-y border-slate-800/50 bg-[#0F172A] relative z-20 trust-section">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-slate-500 uppercase tracking-widest mb-8 font-medium">
            Accredited & Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {['SAICA', 'IRBA', 'FPI', 'JSE Listed', 'Sars Practitioner'].map((item, i) => (
              <div key={i} className="trust-item text-xl md:text-2xl font-bold font-['Manrope'] text-slate-400 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#C5A059]" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW (Bento Grid) */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold font-['Manrope'] mb-4">
                Holistic Financial <span className="text-gradient-gold">Architecture</span>
              </h2>
              <p className="text-slate-400 text-lg">
                We don't just balance books; we engineer financial roadmaps tailored to the unique regulatory and economic landscape of South Africa.
              </p>
            </div>
            <Link href="/services" className="text-[#2DD4BF] hover:text-[#5EEAD4] flex items-center gap-2 font-medium transition-colors">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Tax */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:border-[#C5A059]/30 transition-all duration-300 group opacity-0 translate-y-8">
              <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center mb-6 text-[#C5A059] group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-['Manrope']">Strategic Tax</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Optimized tax structuring for corporations and trusts, ensuring full SARS compliance while maximizing efficiency.
              </p>
              <span className="text-sm font-medium text-slate-300 group-hover:text-[#C5A059] transition-colors flex items-center gap-2">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </div>

            {/* Card 2: Audit */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:border-[#2DD4BF]/30 transition-all duration-300 group opacity-0 translate-y-8 lg:mt-12">
              <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center mb-6 text-[#2DD4BF] group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-['Manrope']">Forensic Audit</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Rigorous independent reviews and forensic investigations to safeguard shareholder value and corporate integrity.
              </p>
              <span className="text-sm font-medium text-slate-300 group-hover:text-[#2DD4BF] transition-colors flex items-center gap-2">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </div>

            {/* Card 3: Advisory */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:border-[#C5A059]/30 transition-all duration-300 group opacity-0 translate-y-8">
              <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center mb-6 text-[#C5A059] group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-['Manrope']">Business Advisory</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Mergers, acquisitions, and valuations. We provide the data-driven insights needed for high-stakes decision making.
              </p>
              <span className="text-sm font-medium text-slate-300 group-hover:text-[#C5A059] transition-colors flex items-center gap-2">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </div>

            {/* Card 4: Wealth */}
            <div className="service-card glass-panel p-8 rounded-2xl hover:border-[#2DD4BF]/30 transition-all duration-300 group opacity-0 translate-y-8 lg:mt-12">
              <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center mb-6 text-[#2DD4BF] group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-['Manrope']">Wealth Management</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Preserving generational wealth through diversified portfolio management and estate planning strategies.
              </p>
              <span className="text-sm font-medium text-slate-300 group-hover:text-[#2DD4BF] transition-colors flex items-center gap-2">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SNIPPET (Split Layout) */}
      <section className="py-24 relative overflow-hidden about-section">
        {/* Decorative Background Blob */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden glass-panel border-0 about-img">
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                alt="John Hlongwani Associates Sandton Office Context"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-60" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-[#0F172A]/90 backdrop-blur-md p-6 rounded-xl border border-slate-700">
                  <p className="text-sm font-medium text-slate-300 italic">
                    "In a volatile global market, local expertise is your most valuable asset. We know Johannesburg, we know the regulations, and we know how to make them work for you."
                  </p>
                  <p className="mt-4 text-[#C5A059] font-bold text-sm">— John Hlongwani, Founder</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="about-content">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#C5A059]" />
                <span className="text-[#C5A059] font-medium uppercase tracking-wider text-sm">About The Firm</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold font-['Manrope'] mb-8 leading-tight">
                Global Standards, <br />
                <span className="text-slate-400">African Heartbeat.</span>
              </h2>
              
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                Founded in 2011, John Hlongwani Associates has grown from a boutique advisory into one of Sandton's most respected financial consultancies. We bridge the gap between complex regulatory requirements and practical business growth.
              </p>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our team consists of former Big 4 auditors, tax specialists, and wealth managers who share a singular vision: to provide institutional-grade financial services with the agility and personal touch of a private partnership.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF]">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300">Level 1 B-BBEE Contributor</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF]">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300">Members of the South African Institute of Chartered Accountants (SAICA)</span>
                </li>
              </ul>

              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-white font-semibold border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors"
              >
                Read our full story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATS ROW */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-bold font-['Manrope'] text-white mb-2 flex items-baseline">
                R<span className="stat-number" data-target="500" data-currency="true">0</span>M+
              </div>
              <span className="text-[#C5A059] font-medium tracking-wide uppercase text-sm">Assets Under Management</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-bold font-['Manrope'] text-white mb-2 flex items-baseline">
                <span className="stat-number" data-target="15">0</span>+
              </div>
              <span className="text-[#C5A059] font-medium tracking-wide uppercase text-sm">Years of Excellence</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-bold font-['Manrope'] text-white mb-2 flex items-baseline">
                <span className="stat-number" data-target="200">0</span>+
              </div>
              <span className="text-[#C5A059] font-medium tracking-wide uppercase text-sm">Corporate Clients</span>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#475569] to-[#0F172A] z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0 mix-blend-overlay" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="cta-banner max-w-4xl mx-auto text-center glass-panel p-12 md:p-16 rounded-3xl border border-white/10 shadow-2xl">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#C5A059]/20 text-[#C5A059] mb-8">
              <Award className="w-6 h-6" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-['Manrope'] mb-6 text-white">
              Ready to optimize your financial position?
            </h2>
            
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Whether you are scaling a business or planning your estate, our team is ready to provide the strategic insight you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-[#0F172A] font-bold rounded-lg hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
              >
                Let's Talk
              </Link>
              <a 
                href="https://wa.me/27110000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
