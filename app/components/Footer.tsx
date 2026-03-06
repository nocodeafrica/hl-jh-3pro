import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const footerData = {
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Insights", href: "/insights" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Expertise",
      links: [
        { label: "Tax Consulting", href: "/services/tax-consulting" },
        { label: "Audit & Assurance", href: "/services/audit-assurance" },
        { label: "Business Advisory", href: "/services/business-advisory" },
        { label: "Wealth Management", href: "/services/wealth-management" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" }
      ]
    }
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-white uppercase">
                  John Hlongwani
                </span>
                <span className="font-sans text-xs tracking-[0.2em] text-accent-gold uppercase">
                  Associates
                </span>
              </div>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Delivering sophisticated financial solutions with integrity and precision. 
              Your trusted partner in navigating the complex world of finance.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-accent-gold mt-1 shrink-0" />
                <span>Johannesburg, South Africa</span>
              </div>
              <a href="tel:+27721771438" className="flex items-center gap-3 text-slate-400 hover:text-accent-gold transition-colors">
                <Phone className="w-5 h-5 text-accent-gold shrink-0" />
                <span>+27 72 177 1438</span>
              </a>
              <a href="mailto:info@jhassociates.co.za" className="flex items-center gap-3 text-slate-400 hover:text-accent-gold transition-colors">
                <Mail className="w-5 h-5 text-accent-gold shrink-0" />
                <span>info@jhassociates.co.za</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerData.columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-heading font-semibold text-white mb-6">
                  {col.title}
                </h3>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="text-slate-400 hover:text-accent-gold transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} John Hlongwani Associates. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-accent-gold hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-accent-gold hover:text-primary transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-accent-gold hover:text-primary transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
