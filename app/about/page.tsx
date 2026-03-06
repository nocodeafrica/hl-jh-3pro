'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  Zap, 
  Target, 
  ArrowRight, 
  Check, 
  Users,
  Briefcase
} from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Entrance
    const heroTl = gsap.timeline();
    heroTl
      .from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6')
      .from('.hero-breadcrumb', {
        opacity: 0,
        y: -10,
        duration: 0.6
      }, '-=0.8');

    // 2. Story Section (Two Column Slide-in)
    gsap.from('.story-content', {
      scrollTrigger: {
        trigger: '.story-section',
        start: 'top 80%',
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.story-image', {
      scrollTrigger: {
        trigger: '.story-section',
        start: 'top 80%',
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    });

    // 3. Values Cards (Staggered)
    ScrollTrigger.batch('.value-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 60,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'back.out(1.2)'
        });
      },
      start: 'top 85%'
    });

    // 4. CTA Scale Up
    gsap.from('.cta-container', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 85%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#0F172A] text-slate-200 overflow-hidden font-sans">
      
      {/* ------------------- HERO SECTION ------------------- */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/33622135/pexels-photo-33622135/free-photo-of-aerial-night-view-of-sandton-skyline-in-gauteng.jpeg?auto=compress&cs=tinysrgb&w=1280"
            alt="Sandton Skyline Night View"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/60 to-[#0F172A]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <div className="hero-breadcrumb mb-8 inline-flex items-center justify-center space-x-2 text-sm text-slate-400 uppercase tracking-widest bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
            <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-[#C5A059] font-medium">About Us</span>
          </div>

          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            Built on Integrity, <br />
            <span className="text-gradient-gold">Driven by Excellence.</span>
          </h1>
          
          <p className="hero-subtitle text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            John Hlongwani Associates is a premier firm bridging the gap between complex regulatory frameworks and sustainable business growth in the heart of Sandton.
          </p>
        </div>
      </section>

      {/* ------------------- STORY SECTION ------------------- */}
      <section className="story-section py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="story-content space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-[#2DD4BF] uppercase tracking-widest">Our Legacy</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white">The Genesis of JHA</h3>
              </div>
              
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                <p>
                  Established in 2012 by <strong className="text-slate-200">John Hlongwani</strong>, the firm was born from a singular vision: to create a legal and consulting partner that didn't just interpret the law, but strategically applied it to fuel African business expansion.
                </p>
                <p>
                  Operating from the financial hub of Sandton, we recognized early on that the modern corporate landscape required more than just traditional counsel. It demanded agility, foresight, and a deep understanding of the socio-economic fabric of South Africa.
                </p>
                <p>
                  Today, we stand as a beacon of trust for multinational corporations and local enterprises alike, navigating the complexities of governance with unwavering precision.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="border-l-2 border-[#C5A059] pl-4">
                  <span className="block text-3xl font-bold text-white mb-1">12+</span>
                  <span className="text-sm text-slate-400 uppercase tracking-wide">Years of Excellence</span>
                </div>
                <div className="border-l-2 border-[#2DD4BF] pl-4">
                  <span className="block text-3xl font-bold text-white mb-1">500+</span>
                  <span className="text-sm text-slate-400 uppercase tracking-wide">Cases Resolved</span>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="story-image relative h-[600px] w-full rounded-2xl overflow-hidden glass-panel p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/35642753/pexels-photo-35642753/free-photo-of-modern-architecture-in-rosebank-south-africa.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="Modern Architecture in Rosebank"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 glass-header p-6 rounded-xl border border-slate-700/50">
                  <p className="text-white italic font-medium">
                    "We don't just protect your business; we position it for the future."
                  </p>
                  <p className="text-[#C5A059] text-sm mt-2 font-bold">— John Hlongwani, Founder</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------- VALUES SECTION ------------------- */}
      <section className="py-24 bg-slate-900 relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C5A059]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#2DD4BF]/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#C5A059] uppercase tracking-widest mb-4">Core Principles</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Values That Define Us</h3>
            <p className="text-slate-400 text-lg">
              Our reputation is built on three non-negotiable pillars that guide every decision, every strategy, and every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Transparency */}
            <div className="value-card glass-panel p-8 rounded-2xl hover:border-[#C5A059]/50 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C5A059] transition-colors duration-300">
                <Shield className="w-7 h-7 text-[#C5A059] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Transparency</h4>
              <p className="text-slate-400 leading-relaxed">
                Clear counsel with no hidden clauses. We believe that trust is earned through radical honesty and open communication channels at every stage of engagement.
              </p>
            </div>

            {/* Card 2: Agility */}
            <div className="value-card glass-panel p-8 rounded-2xl hover:border-[#2DD4BF]/50 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2DD4BF] transition-colors duration-300">
                <Zap className="w-7 h-7 text-[#2DD4BF] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Agility</h4>
              <p className="text-slate-400 leading-relaxed">
                Moving at the speed of modern business. In a volatile market, our ability to pivot strategies quickly ensures our clients stay ahead of regulatory curves.
              </p>
            </div>

            {/* Card 3: Precision */}
            <div className="value-card glass-panel p-8 rounded-2xl hover:border-[#C5A059]/50 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C5A059] transition-colors duration-300">
                <Target className="w-7 h-7 text-[#C5A059] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Precision</h4>
              <p className="text-slate-400 leading-relaxed">
                Exactitude in every legal framework. We leave nothing to chance, ensuring every contract, compliance check, and advisory note is meticulous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- CTA SECTION ------------------- */}
      <section className="cta-section py-24 relative overflow-hidden">
        {/* Background Image for CTA */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/35697009/pexels-photo-35697009/free-photo-of-modern-skyscrapers-in-sandton-urban-landscape.jpeg?auto=compress&cs=tinysrgb&w=1280"
            alt="Sandton Momentum Building"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-[#0F172A]/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="cta-container glass-panel max-w-4xl mx-auto rounded-3xl p-10 md:p-16 text-center border border-slate-700/50 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet the minds behind <br/>
              <span className="text-gradient-teal">our success.</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Our team consists of industry veterans, legal scholars, and strategic advisors dedicated to your firm's prosperity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/team" 
                className="group relative px-8 py-4 bg-[#C5A059] text-slate-900 font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]"
              >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
                <span className="relative flex items-center gap-2">
                  Meet Our Team <Users className="w-5 h-5" />
                </span>
              </Link>
              
              <Link 
                href="/contact" 
                className="group px-8 py-4 bg-transparent border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
