'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Check, AlertCircle, Scale, ArrowRight } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TermsOfServicePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animations
    gsap.from('.terms-hero-text', {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.terms-hero-image', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      delay: 0.2,
      ease: 'power2.out'
    });

    // Section Animations
    const sections = gsap.utils.toArray<HTMLElement>('.terms-block');
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="text-sm text-slate-400 mb-8 font-medium">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Terms of Service</span>
      </nav>

      {/* Hero Header */}
      <header className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="terms-hero-text">
          <div className="flex items-center gap-2 text-amber-500 mb-4 font-semibold tracking-wide uppercase text-sm">
            <Scale className="w-5 h-5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading leading-tight">
            Terms of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Service</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Please read these terms carefully before using our services. By accessing or using the services provided by John Hlongwani Associates, you agree to be bound by these terms.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
             <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Version 2.4</span>
             <span>Effective Date: January 1, 2026</span>
          </div>
        </div>
        
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-700 terms-hero-image group">
          <Image 
            src="https://images.unsplash.com/photo-1603980367201-85e0479436f5?w=1200&auto=format&fit=crop&q=80"
            alt="Legal documents and glasses"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-16">
        
        <section className="terms-block">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 flex-shrink-0 text-white font-bold">1</div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client" or "User") and John Hlongwani Associates ("Company," "we," "us," or "our"). By accessing our website, engaging our consultancy services, or utilizing our digital platforms, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
              <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-teal-500 text-sm text-slate-300">
                If you do not agree with any part of these terms, you are prohibited from using our services and must discontinue use immediately.
              </div>
            </div>
          </div>
        </section>

        <section className="terms-block">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 flex-shrink-0 text-white font-bold">2</div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Services Provided</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                John Hlongwani Associates provides financial consultancy, wealth management, and corporate strategy services. The specific scope of services for each client will be detailed in a separate Engagement Letter or Service Agreement.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                {['Strategic Financial Planning', 'Risk Management', 'Investment Advisory', 'Regulatory Compliance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <Check className="w-4 h-4 text-amber-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="terms-block">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 flex-shrink-0 text-white font-bold">3</div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">User Obligations</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-300 marker:text-slate-500">
                <li>Provide accurate, current, and complete information during the registration or onboarding process.</li>
                <li>Maintain the security of your password and identification.</li>
                <li>Promptly notify us of any unauthorized use of your account or breach of security.</li>
                <li>Use our services only for lawful purposes and in accordance with all applicable laws and regulations.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="terms-block">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 flex-shrink-0 text-white font-bold">4</div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                To the fullest extent permitted by law, John Hlongwani Associates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <div className="bg-red-500/5 border border-red-500/20 p-5 rounded-lg flex gap-4">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                <p className="text-sm text-slate-300">
                  (i) your access to or use of or inability to access or use the services; (ii) any conduct or content of any third party on the services; (iii) any content obtained from the services; and (iv) unauthorized access, use, or alteration of your transmissions or content.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-block">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 flex-shrink-0 text-white font-bold">5</div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="text-slate-300 leading-relaxed">
                The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of John Hlongwani Associates and its licensors. The Service is protected by copyright, trademark, and other laws of both South Africa and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of John Hlongwani Associates.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* CTA Footer */}
      <div className="mt-24 pt-12 border-t border-slate-800">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-700 shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Questions about our terms?</h3>
            <p className="text-slate-400">Our legal team is available to clarify any points of confusion.</p>
          </div>
          <div className="flex gap-4">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2"
            >
              Contact Legal Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
