'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Award, 
  Briefcase, 
  Users, 
  Check, 
  ChevronRight,
  Home
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const partners = [
  {
    name: 'John Hlongwani',
    role: 'Managing Partner',
    qualifications: 'CA(SA), MCom Taxation',
    bio: 'With over 20 years of experience in corporate finance and forensic auditing, John founded the firm to bring Tier-1 expertise to emerging South African enterprises. He sits on the board of three JSE-listed companies.',
    specialties: ['Strategic Planning', 'Corporate Governance', 'Mergers & Acquisitions'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80&align=top' 
  },
  {
    name: 'Sarah Naidoo',
    role: 'Senior Tax Partner',
    qualifications: 'CA(SA), HDip Tax',
    bio: 'Sarah leads our taxation division, specializing in cross-border structuring and SARS dispute resolution. Her proactive approach has saved clients millions in compliance efficiencies.',
    specialties: ['International Tax', 'Estate Planning', 'VAT Compliance'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80&align=top'
  },
  {
    name: 'David Van Der Merwe',
    role: 'Head of Audit & Assurance',
    qualifications: 'RA, CA(SA)',
    bio: 'David brings a meticulous eye for detail from his tenure at Big 4 firms. He ensures that our audit processes not only meet regulatory standards but also provide actionable business insights.',
    specialties: ['External Audit', 'Risk Management', 'IFRS Reporting'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=80&align=top'
  }
];

const staff = [
  { name: 'Lerato Mokoena', role: 'Senior Financial Advisor', dept: 'Advisory' },
  { name: 'Sipho Nkosi', role: 'Forensic Accountant', dept: 'Audit' },
  { name: 'Priya Govender', role: 'Tax Compliance Officer', dept: 'Taxation' },
  { name: 'Johan Smit', role: 'Business Analyst', dept: 'Consulting' },
  { name: 'Thandiwe Zulu', role: 'Payroll Manager', dept: 'Accounting' },
  { name: 'Michael Pillay', role: 'Junior Associate', dept: 'Audit' },
  { name: 'Elena Rossi', role: 'Client Relations Manager', dept: 'Operations' },
  { name: 'Kabelo Molefe', role: 'IT Systems Auditor', dept: 'Risk' }
];

export default function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animation
    const tl = gsap.timeline();
    tl.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    }).from('.hero-image', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out'
    }, '-=0.8');

    // Partners Grid Animation
    ScrollTrigger.batch('.partner-card', {
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

    // Staff List Animation
    gsap.from('.staff-row', {
      scrollTrigger: {
        trigger: '.staff-section',
        start: 'top 80%'
      },
      x: -30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    });

    // CTA Animation
    gsap.from('.cta-box', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 85%'
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-slate-950 min-h-screen text-slate-200 selection:bg-[#C5A059] selection:text-slate-900">
      
      {/* Breadcrumb */}
      <div className="pt-24 pb-8 px-6 lg:px-12 max-w-7xl mx-auto flex items-center text-sm text-slate-400">
        <Link href="/" className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
          <Home className="w-4 h-4" /> Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-slate-200 font-medium">Our Team</span>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 pb-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-6 hero-text">
            <Users className="w-3 h-3" />
            Executive Leadership
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-['Manrope'] text-white leading-tight mb-6 hero-text">
            The minds behind your <span className="text-gradient-gold">financial success.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed hero-text">
            Meet the chartered accountants, tax specialists, and strategic advisors dedicated to navigating the complexities of the South African financial landscape for you.
          </p>
          <div className="flex gap-6 hero-text">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">25+</span>
              <span className="text-sm text-slate-500">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">100%</span>
              <span className="text-sm text-slate-500">Certified Experts</span>
            </div>
          </div>
        </div>
        
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden glass-panel hero-image">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
            alt="Professional team collaborating in a modern office"
            fill
            className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-white font-medium text-lg">"Excellence is not an act, but a habit."</p>
            <p className="text-[#C5A059] text-sm mt-1">— John Hlongwani Associates</p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 px-6 lg:px-12 bg-slate-900/50 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-['Manrope'] text-white mb-4">Partners & Directors</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our leadership team combines decades of Big 4 experience with a personalized, hands-on approach to client service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, idx) => (
              <div key={idx} className="partner-card group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-[#C5A059]/50 transition-colors duration-300">
                {/* Image Area */}
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src={partner.image} 
                    alt={partner.name}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                    <p className="text-[#C5A059] font-medium">{partner.role}</p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 relative">
                  <div className="flex items-center gap-2 mb-4 text-xs font-mono text-slate-500">
                    <Award className="w-4 h-4 text-[#2DD4BF]" />
                    {partner.qualifications}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {partner.bio}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {partner.specialties.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                        {spec}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                    <a href="#" className="text-slate-400 hover:text-[#0077B5] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-[#C5A059] transition-colors flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4" /> Contact
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff List Section */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto staff-section">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Visual & Intro */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-['Manrope'] text-white mb-4">Our Associates</h2>
              <p className="text-slate-400">
                Behind every audit, tax return, and advisory report is a team of dedicated professionals committed to accuracy and integrity.
              </p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden glass-panel hidden lg:block">
              <Image 
                src="https://images.unsplash.com/photo-1696087225391-eb97abf5ba20?w=1200&auto=format&fit=crop&q=80"
                alt="Workspace desk setup"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <Briefcase className="w-8 h-8 text-[#2DD4BF] mx-auto mb-2" />
                  <span className="text-white font-medium">Careers at JHA</span>
                  <Link href="/contact" className="block text-xs text-slate-400 mt-2 hover:text-white underline">Join our team</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-4">
              {staff.map((member, idx) => (
                <div key={idx} className="staff-row glass-panel p-4 rounded-lg flex items-center justify-between group hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-[#C5A059] font-bold text-sm border border-slate-700">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-[#2DD4BF] transition-colors">{member.name}</h4>
                      <p className="text-xs text-slate-500">{member.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-600 border border-slate-800 px-2 py-1 rounded bg-slate-900">
                    {member.dept}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden cta-section">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1758833502047-8f1c7dc5edd7?w=1200&auto=format&fit=crop&q=80"
            alt="Modern office waiting area"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center cta-box">
          <div className="inline-block p-3 rounded-full bg-[#2DD4BF]/10 mb-6">
            <Check className="w-8 h-8 text-[#2DD4BF]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-['Manrope'] text-white mb-6">
            Partner with a team that <br/> <span className="text-gradient-teal">values your growth.</span>
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Whether you need comprehensive auditing, tax restructuring, or financial advisory, John Hlongwani Associates brings the expertise to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-[#C5A059] hover:bg-[#D4B06A] text-slate-900 font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-[#C5A059]/20 flex items-center justify-center gap-2"
            >
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 bg-transparent border border-slate-600 hover:border-white text-white font-medium rounded-lg transition-all hover:bg-white/5 flex items-center justify-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
