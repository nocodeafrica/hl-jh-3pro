'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Tax Consulting", href: "/services/tax-consulting" },
      { label: "Audit & Assurance", href: "/services/audit-assurance" },
      { label: "Business Advisory", href: "/services/business-advisory" },
      { label: "Wealth Management", href: "/services/wealth-management" },
    ]
  },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-header py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl tracking-tight text-white uppercase">
              John Hlongwani
            </span>
            <span className="font-sans text-xs tracking-[0.2em] text-accent-gold uppercase">
              Associates
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.label} className="relative group">
              <Link 
                href={item.href}
                className={`font-medium text-sm tracking-wide transition-colors duration-200 flex items-center gap-1 ${
                  isActive(item.href) ? 'text-accent-gold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown */}
              {item.children && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="glass-panel p-2 rounded-lg min-w-[240px] flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 text-sm rounded-md transition-colors ${
                          pathname === child.href
                            ? 'bg-accent-gold/10 text-accent-gold'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* CTA Button */}
          <Link 
            href="/contact"
            className="ml-4 px-6 py-2 bg-accent-gold text-primary font-bold text-sm rounded hover:bg-white transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden relative z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Panel */}
        <div 
          className={`fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 flex flex-col justify-center px-8 transition-transform duration-300 lg:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col space-y-6">
            {navigation.map((item) => (
              <div key={item.label} className="flex flex-col">
                <Link 
                  href={item.href}
                  className={`text-2xl font-heading font-medium ${
                    isActive(item.href) ? 'text-accent-gold' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
                
                {item.children && (
                  <div className="flex flex-col mt-4 ml-4 space-y-4 border-l border-slate-700 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`text-lg font-sans ${
                          pathname === child.href ? 'text-accent-gold' : 'text-slate-400'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-8">
              <Link 
                href="/contact"
                className="inline-block w-full text-center px-6 py-4 bg-accent-gold text-primary font-bold text-lg rounded"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
