'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Search, 
  ChevronRight, 
  TrendingUp, 
  FileText, 
  Shield 
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const articles = [
  {
    id: 1,
    title: 'Understanding the 2024 Budget Speech: Key Takeaways',
    excerpt: 'An in-depth analysis of the Minister of Finance’s recent address. We break down how changes to VAT thresholds, corporate tax rates, and fuel levies will impact South African businesses and private wealth portfolios.',
    category: 'Tax Law',
    date: 'Feb 24, 2024',
    readTime: '8 min read',
    // REPLACED: Generic stock photo with relevant financial documents imagery
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Tax Implications of Crypto Assets in South Africa',
    excerpt: 'SARS has clarified its stance on cryptocurrency. Whether you are a trader or a long-term holder, understanding the distinction between Capital Gains Tax and Income Tax is crucial for compliance.',
    category: 'Digital Assets',
    date: 'Mar 10, 2024',
    readTime: '6 min read',
    // REPLACED: Generic image with abstract digital/blockchain imagery
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 3,
    title: 'SME Survival Guide: Navigating Economic Volatility',
    excerpt: 'Practical strategies for small to medium enterprises to manage cash flow, hedge against Rand fluctuation, and optimize operational costs in the current economic climate.',
    category: 'Business Strategy',
    date: 'Mar 02, 2024',
    readTime: '5 min read',
    // REPLACED: Generic image with business strategy/meeting imagery
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=1200&auto=format&fit=crop&q=80',
    featured: false,
  },
];

const categories = ['All Insights', 'Tax Law', 'Wealth Management', 'Business Strategy', 'Digital Assets'];

export default function InsightsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All Insights');

  useGSAP(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    // Hero Animation
    const tl = gsap.timeline();
    tl.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    })
    .from('.search-bar', {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, '-=0.5');

    // Featured Article Animation
    gsap.from('.featured-article', {
      scrollTrigger: {
        trigger: '.featured-article',
        start: 'top 85%',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    // Grid Animation
    ScrollTrigger.batch('.article-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
        });
      },
      start: 'top 90%',
    });

    // CTA Animation
    gsap.from('.newsletter-cta', {
      scrollTrigger: {
        trigger: '.newsletter-cta',
        start: 'top 80%',
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="pt-24 pb-20 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#0F172A]/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8 hero-text">
          <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-200">Insights</span>
        </nav>

        {/* Hero Section */}
        <section className="mb-20 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-heading hero-text">
            <span className="block text-white">Financial Intelligence</span>
            <span className="text-gradient-gold">For the Modern Era.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed hero-text">
            Expert commentary on South African tax law, global market trends, and strategic wealth preservation.
            Stay ahead with updates from John Hlongwani Associates.
          </p>

          {/* Search & Filter */}
          <div className="search-bar glass-panel p-2 rounded-2xl flex flex-col md:flex-row gap-4 items-center max-w-2xl">
            <div className="relative flex-grow w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-teal-500 transition-colors placeholder:text-slate-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.slice(0, 3).map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all border ${
                    activeCategory === cat 
                      ? 'bg-teal-500/10 border-teal-500/50 text-teal-400' 
                      : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="mb-24 featured-article">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-teal-400" />
            <h2 className="text-sm font-bold tracking-widest uppercase text-slate-400">Featured Analysis</h2>
          </div>
          
          {/* FIX: Changed broken internal link to anchor ID */}
          <Link href={`#post-${articles[0].id}`} className="group block">
            <div className="glass-panel rounded-3xl overflow-hidden hover:border-teal-500/30 transition-all duration-500 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-[300px] lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-teal-500/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {articles[0].category}
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                  <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                    <FileText className="w-40 h-40 text-white" />
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {articles[0].date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {articles[0].readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                    {articles[0].title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                    {articles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center text-teal-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read Full Analysis <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Recent Articles Grid */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Insights</h2>
            {/* FIX: Changed broken archive link to anchor ID */}
            <Link href="#archive" className="text-sm text-teal-400 hover:text-teal-300 flex items-center gap-1">
              View Archive <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              /* FIX: Changed broken internal links to anchor IDs */
              <Link href={`#post-${article.id}`} key={article.id} className="group article-card">
                <div className="glass-panel rounded-2xl overflow-hidden h-full flex flex-col hover:border-teal-500/30 transition-all duration-300">
                  {/* Card Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute top-3 left-3 z-10 bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </div>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center text-sm font-medium text-white group-hover:text-teal-400 transition-colors mt-auto">
                      Read Article <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Newsletter Card (Fills 3rd slot) */}
            <div className="article-card glass-panel rounded-2xl p-8 flex flex-col justify-center items-start border-t-4 border-t-teal-500 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
              <div className="bg-teal-500/10 p-3 rounded-xl mb-6">
                <Shield className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Stay Informed</h3>
              <p className="text-slate-400 text-sm mb-6">
                Join 5,000+ subscribers receiving our monthly tax alerts and market briefs.
              </p>
              <form className="w-full space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                />
                <button className="w-full bg-teal-600 hover:bg-teal-500 text-white text-sm font-bold py-2 rounded-lg transition-all">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="newsletter-cta relative rounded-3xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
          
          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need personalized financial advice?
              </h2>
              <p className="text-slate-300 text-lg">
                Our insights are just the beginning. Let's discuss how these trends specifically affect your business or portfolio.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link 
                href="/contact" 
                className="inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-[#C5A059] to-[#E5C079] text-slate-900 font-bold rounded-lg hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all transform hover:-translate-y-1"
              >
                Book a Consultation
              </Link>
              <Link 
                href="/services" 
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all hover:border-slate-400"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
