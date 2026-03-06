'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Lock, Eye, FileText, ArrowRight } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PrivacyPolicyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header Fade In
    gsap.from('.policy-header', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Content Blocks Stagger
    const sections = gsap.utils.toArray<HTMLElement>('.policy-section');
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="text-sm text-slate-400 mb-8 font-medium">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Privacy Policy</span>
      </nav>

      {/* Header */}
      <header className="policy-header mb-16 border-b border-slate-800 pb-12">
        <div className="flex items-center gap-3 mb-4 text-teal-400">
          <Shield className="w-6 h-6" />
          <span className="text-sm font-bold uppercase tracking-widest">Legal & Compliance</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Privacy Policy</h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          At John Hlongwani Associates, we value your trust. This policy outlines how we collect, use, and protect your personal data in accordance with global standards.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Last Updated: January 14, 2026
        </p>
      </header>

      {/* Content */}
      <div className="grid md:grid-cols-12 gap-12">
        
        {/* Table of Contents (Sticky) */}
        <aside className="hidden md:block md:col-span-4 lg:col-span-3">
          <nav className="sticky top-32 space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pl-3">Contents</p>
            {['Introduction', 'Information Collection', 'Data Usage', 'Data Protection', 'Your Rights', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block py-2 px-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Text */}
        <article className="md:col-span-8 lg:col-span-9 space-y-12 text-slate-300 leading-7">
          
          <section id="introduction" className="policy-section">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              1. Introduction
            </h2>
            <p className="mb-4">
              John Hlongwani Associates ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our financial consultancy services.
            </p>
            <p>
              By accessing our services, you consent to the data practices described in this policy. We reserve the right to make changes to this policy at any given time.
            </p>
          </section>

          <section id="information-collection" className="policy-section">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-teal-400" />
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-teal-400">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register for services.</li>
              <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) and portfolio details necessary for wealth management services.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed.</li>
            </ul>
          </section>

          <section id="data-usage" className="policy-section">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal-400" />
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                "Create and manage your account.",
                "Process transactions and send related information.",
                "Provide personalized financial advice.",
                "Compile anonymous statistical data.",
                "Prevent fraudulent transactions.",
                "Comply with legal obligations."
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="data-protection" className="policy-section">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-teal-400" />
              4. Data Protection & Security
            </h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
            <p className="bg-amber-900/10 border-l-4 border-amber-500 p-4 text-amber-100/80 italic">
              We utilize AES-256 encryption for all sensitive financial data at rest and in transit.
            </p>
          </section>

          <section id="your-rights" className="policy-section">
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Your Rights
            </h2>
            <p className="mb-4">
              Depending on your location (e.g., if you are a resident of the European Economic Area), you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-teal-400">
              <li>The right to access the personal information we hold about you.</li>
              <li>The right to request the correction of inaccurate personal information.</li>
              <li>The right to request the deletion of your personal information.</li>
              <li>The right to restrict the processing of your data.</li>
            </ul>
          </section>

          <section id="contact" className="policy-section pt-8 border-t border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Contact Us
            </h2>
            <p className="mb-6">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 inline-block w-full sm:w-auto min-w-[300px]">
              <h3 className="text-white font-bold mb-2">John Hlongwani Associates</h3>
              <p className="text-slate-400 text-sm mb-1">Attn: Privacy Officer</p>
              <p className="text-slate-400 text-sm mb-4">120 Financial District Blvd, Sandton, 2196</p>
              <a href="mailto:privacy@jha.co.za" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
                privacy@jha.co.za
              </a>
            </div>
          </section>

        </article>
      </div>

      {/* Footer CTA */}
      <div className="mt-24 text-center">
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
        >
          Have a specific legal inquiry? Contact our team <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
