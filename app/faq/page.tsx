'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  ArrowRight, 
  MessageCircle, 
  Shield, 
  Zap, 
  Globe 
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const faqs = [
  {
    category: "General Services",
    items: [
      {
        question: "What specific services does John Hlongwani Associates provide?",
        answer: "We specialize in comprehensive financial consultancy, including corporate strategy, wealth management, risk assessment, and digital transformation for fintech enterprises. Our approach combines traditional financial wisdom with modern technological insights."
      },
      {
        question: "Do you work with international clients?",
        answer: "Yes, we operate globally. While our headquarters are based in South Africa, we serve clients across Europe, Asia, and the Americas, providing regulatory guidance and market entry strategies for diverse jurisdictions."
      },
      {
        question: "What makes your firm different from other consultancies?",
        answer: "Our unique 'Future-First' methodology integrates predictive analytics with personalized advisory services. We don't just manage wealth; we architect financial legacies using data-driven insights and sustainable investment strategies."
      }
    ]
  },
  {
    category: "Client Onboarding",
    items: [
      {
        question: "How do I become a client?",
        answer: "The process begins with a preliminary discovery call. You can schedule this via our Contact page. Following this, we conduct a needs analysis before presenting a tailored proposal and engagement letter."
      },
      {
        question: "Is there a minimum portfolio size for wealth management?",
        answer: "We generally recommend a minimum investable asset base of $500,000 for our private wealth management services to ensure cost-effectiveness. However, our corporate consultancy services are scoped based on project complexity rather than asset size."
      }
    ]
  },
  {
    category: "Security & Privacy",
    items: [
      {
        question: "How is my sensitive financial data protected?",
        answer: "We utilize bank-grade AES-256 encryption for all data transmission and storage. Our systems undergo quarterly penetration testing, and we strictly adhere to GDPR and POPIA compliance standards."
      },
      {
        question: "Do you share client information with third parties?",
        answer: "We maintain a strict confidentiality policy. Client data is never sold. It is only shared with trusted partners (such as custodians or legal counsel) when explicitly necessary for service delivery and authorized by you."
      }
    ]
  }
];

export default function FAQPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    // Hero Animation
    tl.from('.hero-content > *', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });

    // Categories Stagger
    gsap.utils.toArray<HTMLElement>('.faq-category').forEach((category, i) => {
      gsap.from(category, {
        scrollTrigger: {
          trigger: category,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

    // CTA Scale Animation
    gsap.from('.cta-section', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%'
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.2)'
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="text-sm text-slate-400 mb-8 font-medium">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">FAQ</span>
      </nav>

      {/* Hero Section */}
      <section className="hero-content text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] -z-10" />
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading tracking-tight">
          How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">help you?</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Find answers to common questions about our consultancy services, wealth management strategies, and security protocols.
        </p>

        {/* Search Bar (Visual) */}
        <div className="max-w-xl mx-auto relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-amber-400 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search for a topic..."
            className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all shadow-lg"
          />
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Sidebar Navigation (Desktop) */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 space-y-4">
            <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4">Categories</h3>
            {faqs.map((cat, idx) => (
              <a 
                key={idx} 
                href={`#cat-${idx}`}
                className="block text-slate-300 hover:text-amber-400 transition-colors py-2 border-l-2 border-transparent hover:border-amber-400 pl-4"
              >
                {cat.category}
              </a>
            ))}
            
            <div className="pt-8 mt-8 border-t border-slate-800">
              <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
                <MessageCircle className="w-8 h-8 text-teal-400 mb-4" />
                <h4 className="font-bold text-white mb-2">Still have questions?</h4>
                <p className="text-sm text-slate-400 mb-4">Our support team is ready to assist you directly.</p>
                <Link href="/contact" className="text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1">
                  Contact Support <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="lg:col-span-9 space-y-16">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} id={`cat-${catIndex}`} className="faq-category scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                {catIndex === 0 && <Globe className="w-6 h-6 text-teal-400" />}
                {catIndex === 1 && <Zap className="w-6 h-6 text-teal-400" />}
                {catIndex === 2 && <Shield className="w-6 h-6 text-teal-400" />}
                <h2 className="text-2xl font-bold text-white font-heading">{category.category}</h2>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const id = `${catIndex}-${itemIndex}`;
                  const isOpen = openIndex === id;
                  
                  return (
                    <div 
                      key={itemIndex}
                      className={`group rounded-xl border transition-all duration-300 overflow-hidden ${
                        isOpen 
                          ? 'bg-slate-800/60 border-amber-500/30 shadow-lg shadow-black/20' 
                          : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(id)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-amber-100' : 'text-slate-200 group-hover:text-white'}`}>
                          {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-slate-300 flex-shrink-0" />
                        )}
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-dashed border-slate-700/50 mt-2">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="cta-section mt-24 mb-12">
        <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 p-8 md:p-16 text-center">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
            alt="Office background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">
              Ready to elevate your financial strategy?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Book a consultation today and let us build a roadmap for your sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-500/20"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 text-white font-medium rounded-lg transition-all hover:bg-slate-800"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
