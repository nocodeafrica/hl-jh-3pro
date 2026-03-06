'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  FileText, 
  Briefcase, 
  Check, 
  Globe 
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const servicesData = [
  {
    id: 'tax',
    title: 'Tax Compliance & Strategy',
    description: 'Navigating the South African Revenue Service (SARS) landscape requires precision and foresight. We move beyond simple compliance to strategic tax planning that optimizes your liabilities while ensuring full regulatory adherence.',
    features: [
      'Corporate & Personal Income Tax',
      'VAT Registration & Submission',
      'Tax Dispute Resolution',
      'International Tax Structuring'
    ],
    icon: <FileText className="w-6 h-6 text-teal-400" />,
    image: 'https://images.unsplash.com/photo-1699456540859-87da1ecbac8e?w=1200&auto=format&fit=crop&q=80',
    alt: 'Macro detail of financial document abstraction'
  },
  {
    id: 'audit',
    title: 'Audit & Assurance',
    description: 'Trust is the currency of business. Our independent audit services provide stakeholders with the confidence they need. We employ data-driven methodologies to assess risk, verify accuracy, and enhance internal controls.',
    features: [
      'Statutory Audits (IFRS & IFRS for SMEs)',
      'Internal Control Reviews',
      'Forensic Auditing',
      'Risk Management Assessments'
    ],
    icon: <Shield className="w-6 h-6 text-amber-400" />,
    image: 'https://images.unsplash.com/photo-1654150501793-b5c7c6ef1b84?w=1200&auto=format&fit=crop&q=80',
    alt: 'Abstract visualization of complex data flows'
  },
  {
    id: 'advisory',
    title: 'Business Advisory',
    description: 'In a volatile global economy, static strategies fail. We partner with South African enterprises to drive growth, manage mergers, and navigate B-BBEE regulations effectively.',
    features: [
      'Mergers & Acquisitions (M&A)',
      'B-BBEE Consulting & Verification',
      'Business Valuation',
      'Turnaround Strategies'
    ],
    icon: <Briefcase className="w-6 h-6 text-teal-400" />,
    image: 'https://images.unsplash.com/photo-1686417365235-e459f10bb3f4?w=1200&auto=format&fit=crop&q=80',
    alt: 'Strategic business planning abstract concept'
  },
  {
    id: 'wealth',
    title: 'Wealth Management',
    description: 'Preserving capital for future generations. Our wealth management division offers bespoke investment strategies tailored to high-net-worth individuals and corporate entities seeking long-term value preservation.',
    features: [
      'Estate Planning & Trusts',
      'Retirement Annuities',
      'Offshore Investment Structuring',
      'Portfolio Management'
    ],
    icon: <TrendingUp className="w-6 h-6 text-amber-400" />,
    image: 'https://images.unsplash.com/photo-1767481626718-d9a54ead5501?w=1200&auto=format&fit=crop&q=80',
    alt: 'Golden diamond shape representing wealth'
  }
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animation
    const tl = gsap.timeline();
    tl.from('.hero-content > *', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    })
    .from('.hero-image', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out'
    }, '-=0.8');

    // Service Sections Animation
    const sections = gsap.utils.toArray<HTMLElement>('.service-section');
    sections.forEach((section, index) => {
      const isEven = index % 2 === 0;
      const textCol = section.querySelector('.service-text');
      const imgCol = section.querySelector('.service-image');

      gsap.from(textCol, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        x: isEven ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from(imgCol, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        x: isEven ? 50 : -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
      });
    });

    // CTA Animation
    gsap.from('.cta-container', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 85%'
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.4)'
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-slate-950 min-h-screen relative overflow-hidden selection:bg-teal-500/30">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content order-2 lg:order-1">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-teal-400">Services</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold font-manrope text-white leading-tight mb-6">
              Comprehensive <br />
              <span className="text-gradient-gold">Financial Solutions</span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              Tailored strategies for the dynamic South African market. From regulatory compliance to wealth preservation, we architect financial stability for businesses and individuals.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="group relative px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#overview" 
                className="px-8 py-4 glass-panel text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-image order-1 lg:order-2 relative h-[300px] lg:h-[500px] w-full rounded-2xl overflow-hidden glass-panel p-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1686417365235-e459f10bb3f4?w=1200&auto=format&fit=crop&q=80"
              alt="Abstract financial growth visualization"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Overview List */}
      <div id="overview" className="relative z-10 pb-24 space-y-24 lg:space-y-32">
        {servicesData.map((service, index) => (
          <section 
            key={service.id} 
            className={`service-section px-6 lg:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Text Content */}
            <div className={`service-text ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  {service.icon}
                </div>
                <span className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  Service 0{index + 1}
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold font-manrope text-white mb-6">
                {service.title}
              </h2>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 mt-1 shrink-0" />
                    <span className="text-slate-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href={`/contact?service=${service.id}`}
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Image Content */}
            <div className={`service-image ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden glass-panel group">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 right-4 p-4 glass-header rounded-xl z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium text-sm">Expert Consultation</span>
                    <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-slate-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="cta-section relative py-24 px-6 lg:px-12 z-10">
        <div className="cta-container max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-slate-900/40 blur-xl rounded-3xl" />
          
          <div className="relative glass-panel rounded-3xl p-12 lg:p-16 text-center border border-teal-500/20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="w-64 h-64 bg-teal-400 rounded-full blur-[100px] absolute -top-32 -left-32" />
              <div className="w-64 h-64 bg-amber-400 rounded-full blur-[100px] absolute -bottom-32 -right-32" />
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold font-manrope text-white mb-6">
              Ready to Optimize Your <br />
              <span className="text-gradient-teal">Financial Future?</span>
            </h2>
            
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Whether you need complex audit assurance or personalized wealth management, 
              John Hlongwani Associates is your partner in sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-200 font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Partner With Us
              </Link>
              <Link 
                href="tel:+27110000000" 
                className="px-8 py-4 border border-slate-600 hover:border-teal-500 text-white hover:text-teal-400 font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4" />
                Global & Local Reach
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
