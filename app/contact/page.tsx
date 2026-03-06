'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ArrowRight, 
  Clock, 
  Check, 
  ChevronRight,
  Globe,
  Linkedin,
  Twitter
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useGSAP(() => {
    // Hero Entrance
    const tl = gsap.timeline();
    
    tl.from('.hero-text-element', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    })
    .from('.contact-card', {
      x: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.hero-form-container', {
      x: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6');

    // Map Section Animation
    gsap.from('.map-container', {
      scrollTrigger: {
        trigger: '.map-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Staggered info blocks below map
    gsap.from('.info-block', {
      scrollTrigger: {
        trigger: '.info-grid',
        start: 'top 85%',
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    });

  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      if (formRef.current) formRef.current.reset();
    }, 1500);
  };

  return (
    <main ref={containerRef} className="min-h-screen w-full bg-[#0F172A] text-slate-200 selection:bg-[#C5A059] selection:text-[#0F172A]">
      
      {/* Breadcrumb */}
      <div className="absolute top-24 left-0 w-full z-20 px-6 md:px-12 lg:px-24">
        <div className="flex items-center gap-2 text-sm text-slate-400 font-medium font-['Inter']">
          <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-200">Contact</span>
        </div>
      </div>

      {/* SECTION 1: Contact Hero (Split Form) */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549851501-a521e1e3fb85?w=1200&auto=format&fit=crop&q=80)' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]"></div>
          
          {/* Abstract Gradient Blob */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#475569] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="space-y-4">
                <span className="hero-text-element inline-block py-1 px-3 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-xs font-bold tracking-widest uppercase font-['Manrope']">
                  Get in Touch
                </span>
                <h1 className="hero-text-element text-4xl md:text-5xl lg:text-6xl font-bold font-['Manrope'] text-white leading-tight">
                  Let's Build Your <span className="text-gradient-gold">Legacy</span>
                </h1>
                <p className="hero-text-element text-lg text-slate-400 font-['Inter'] max-w-md leading-relaxed">
                  Whether you're looking for corporate advisory, wealth management, or strategic investment planning, our team in Sandton is ready to assist.
                </p>
              </div>

              <div className="space-y-4 mt-4">
                {/* Contact Card: Address */}
                <div className="contact-card glass-panel p-6 rounded-xl flex items-start gap-4 hover:border-[#C5A059]/30 transition-colors group">
                  <div className="p-3 rounded-lg bg-[#0F172A] border border-slate-700 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0F172A] transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold font-['Manrope'] mb-1">Headquarters</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      135 West Street, Sandton Central<br />
                      Johannesburg, 2196<br />
                      South Africa
                    </p>
                  </div>
                </div>

                {/* Contact Card: Digital */}
                <div className="contact-card glass-panel p-6 rounded-xl flex items-start gap-4 hover:border-[#C5A059]/30 transition-colors group">
                  <div className="p-3 rounded-lg bg-[#0F172A] border border-slate-700 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0F172A] transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold font-['Manrope'] mb-1">Direct Channels</h3>
                    <p className="text-slate-400 text-sm mb-1">
                      <a href="mailto:contact@jha.co.za" className="hover:text-[#C5A059] transition-colors">contact@jha.co.za</a>
                    </p>
                    <p className="text-slate-400 text-sm">
                      <a href="tel:+27115550123" className="hover:text-[#C5A059] transition-colors">+27 11 555 0123</a>
                    </p>
                  </div>
                </div>

                {/* Contact Card: WhatsApp */}
                <Link href="https://wa.me/27115550123" className="contact-card glass-panel p-6 rounded-xl flex items-start gap-4 hover:border-[#2DD4BF]/30 transition-colors group">
                  <div className="p-3 rounded-lg bg-[#0F172A] border border-slate-700 text-[#2DD4BF] group-hover:bg-[#2DD4BF] group-hover:text-[#0F172A] transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold font-['Manrope'] mb-1">WhatsApp Support</h3>
                    <p className="text-slate-400 text-sm">
                      Chat with our client services team instantly.
                    </p>
                    <span className="text-[#2DD4BF] text-xs font-semibold mt-2 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Start Chat <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7 hero-form-container">
              <div className="glass-panel p-8 md:p-10 rounded-2xl border border-slate-700/50 shadow-2xl relative overflow-hidden">
                {/* Decorative sheen */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#C5A059]/10 to-transparent rounded-bl-full pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-['Manrope'] text-white mb-6">Send a Message</h3>
                  
                  {formStatus === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                      <div className="w-16 h-16 rounded-full bg-[#2DD4BF]/20 flex items-center justify-center text-[#2DD4BF] mb-2">
                        <Check className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Message Sent Successfully</h4>
                      <p className="text-slate-400 max-w-xs">
                        Thank you for reaching out. A senior associate will contact you within 24 hours.
                      </p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-4 text-sm text-[#C5A059] hover:text-white underline decoration-[#C5A059] underline-offset-4"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            required
                            className="w-full bg-[#0F172A]/80 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium text-slate-300">Company</label>
                          <input 
                            type="text" 
                            id="company" 
                            className="w-full bg-[#0F172A]/80 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                            placeholder="Organization Ltd."
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                          <input 
                            type="email" 
                            id="email" 
                            required
                            className="w-full bg-[#0F172A]/80 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="service" className="text-sm font-medium text-slate-300">Service Interest</label>
                          <div className="relative">
                            <select 
                              id="service"
                              className="w-full bg-[#0F172A]/80 border border-slate-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                              defaultValue=""
                            >
                              <option value="" disabled>Select a service...</option>
                              <option value="wealth">Wealth Management</option>
                              <option value="advisory">Corporate Advisory</option>
                              <option value="tax">Tax Structuring</option>
                              <option value="estate">Estate Planning</option>
                              <option value="other">Other Inquiry</option>
                            </select>
                            <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                        <textarea 
                          id="message" 
                          rows={4}
                          required
                          className="w-full bg-[#0F172A]/80 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all resize-none"
                          placeholder="How can we assist you today?"
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#B8860B] text-[#0F172A] font-bold font-['Manrope'] text-lg hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {formStatus === 'submitting' ? (
                          <span className="inline-block w-5 h-5 border-2 border-[#0F172A] border-t-transparent rounded-full animate-spin"></span>
                        ) : (
                          <>
                            Send Message <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                      
                      <p className="text-xs text-slate-500 text-center mt-4">
                        By submitting this form, you agree to our <Link href="/privacy" className="text-[#C5A059] hover:underline">Privacy Policy</Link>.
                        <br />Your data is protected by industry-standard encryption.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Map & Location Details */}
      <section className="map-section relative py-20 bg-[#0F172A] border-t border-slate-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold font-['Manrope'] text-white mb-4">
                Visit Our <span className="text-gradient-gold">Headquarters</span>
              </h2>
              <p className="text-slate-400 font-['Inter']">
                Located in the heart of Sandton's financial district, our offices are designed to provide a private and sophisticated environment for our clients.
              </p>
            </div>
            <div className="flex gap-4">
               <a 
                 href="https://www.google.com/maps/search/?api=1&query=135+West+Street+Sandton" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 text-slate-300 hover:border-[#C5A059] hover:text-[#C5A059] transition-all text-sm font-medium"
               >
                 <Globe className="w-4 h-4" /> Open in Maps
               </a>
            </div>
          </div>

          {/* Map Container */}
          <div className="map-container w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 relative bg-slate-800 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.662588722444!2d28.0555!3d-26.1076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957339db36f737%3A0x6295739812739!2s135%20West%20St%2C%20Sandown%2C%20Sandton%2C%202031!5e0!3m2!1sen!2sza!4v1709901234567!5m2!1sen!2sza" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="John Hlongwani Associates Office Location"
              className="absolute inset-0"
            ></iframe>
            
            {/* Map Overlay Card */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-[#0F172A]/90 backdrop-blur-md p-6 rounded-xl border border-slate-700 shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Office Status</span>
              </div>
              <p className="text-white font-medium mb-1">Open Now</p>
              <p className="text-slate-400 text-xs">Closes at 17:00 SAST</p>
            </div>
          </div>

          {/* Additional Info Grid */}
          <div className="info-grid grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            
            <div className="info-block glass-panel p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
              <Clock className="w-8 h-8 text-[#C5A059] mb-4" />
              <h4 className="text-lg font-bold text-white mb-2 font-['Manrope']">Business Hours</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-slate-200">08:00 - 17:00</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span className="text-slate-200">By Appointment</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="text-slate-500">Closed</span></li>
              </ul>
            </div>

            <div className="info-block glass-panel p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
              <Globe className="w-8 h-8 text-[#2DD4BF] mb-4" />
              <h4 className="text-lg font-bold text-white mb-2 font-['Manrope']">Global Reach</h4>
              <p className="text-sm text-slate-400 mb-4">
                While based in Johannesburg, we serve clients across the SADC region and maintain partnerships in London and Dubai.
              </p>
              <Link href="/about" className="text-sm text-[#2DD4BF] hover:underline flex items-center gap-1">
                View our network <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="info-block glass-panel p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
              <div className="flex gap-4 mb-4">
                <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-[#0077B5] hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-black hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 font-['Manrope']">Connect Socially</h4>
              <p className="text-sm text-slate-400">
                Follow JHA for market insights, firm news, and economic commentary from our senior partners.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative Image Strip at Bottom */}
      <section className="h-64 md:h-80 w-full relative overflow-hidden">
         <div className="absolute inset-0 flex">
            <div className="w-1/3 h-full relative">
              <div className="absolute inset-0 bg-[#0F172A]/40 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1771942806343-71910840c852?w=800&auto=format&fit=crop&q=80" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/3 h-full relative">
              <div className="absolute inset-0 bg-[#0F172A]/40 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1772033762746-e887b4a45ed0?w=800&auto=format&fit=crop&q=80" 
                alt="Skyline Reflection" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/3 h-full relative">
              <div className="absolute inset-0 bg-[#0F172A]/40 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1549851501-a521e1e3fb85?w=800&auto=format&fit=crop&q=80" 
                alt="Office Exterior" 
                className="w-full h-full object-cover"
              />
            </div>
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent z-20"></div>
         <div className="absolute bottom-10 left-0 w-full z-30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-['Manrope'] text-white">John Hlongwani Associates</h3>
            <p className="text-slate-400 text-sm mt-2">Excellence in Financial Stewardship</p>
         </div>
      </section>

    </main>
  );
}

// Helper Component for the Select Dropdown Arrow
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
