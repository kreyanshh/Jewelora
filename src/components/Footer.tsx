import React from "react";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  MessageCircle, 
  PhoneCall, 
  Mail, 
  Clock, 
  ShieldCheck, 
  FileText, 
  MapPin, 
  Handshake,
  Globe
} from "lucide-react";

export default function Footer() {
  const columnLinks1 = [
    { name: "Delivery Information", href: "#Delivery" },
    { name: "International Shipping", href: "#Shipping" },
    { name: "Payment Options", href: "#Payments" },
    { name: "Track your Order", href: "#Track" },
    { name: "Returns & Exchanges", href: "#Returns" },
    { name: "Find a Store Boutique", href: "#Stores" }
  ];

  const columnLinks2 = [
    { name: "Journal & Lifestyle Blog", href: "#Blog" },
    { name: "Offers & Contest Details", href: "#Contests" },
    { name: "Help & Frequently Asked FAQs", href: "#FAQs" },
    { name: "About Kalyan", href: "#Kalyan" },
    { name: "Our Ethical Gold Sourcing Accord", href: "#EthicalSpecs" }
  ];

  const systemLinks = [
    { name: "Cyber Security Policy", href: "#Security" },
    { name: "Terms & Conditions", href: "#Terms" },
    { name: "Privacy Notice", href: "#Privacy" },
    { name: "Sovereign Disclaimer Accord", href: "#Disclaimer" }
  ];

  const merchantIcons = [
    { name: "VISA", color: "text-[#1A1F71]" },
    { name: "Mastercard", color: "text-amber-500" },
    { name: "Maestro", color: "text-[#EB001B]" },
    { name: "PayPal", color: "text-[#003087]" },
    { name: "Diners Club", color: "text-[#0079C1]" },
    { name: "American Express", color: "text-[#007CC3]" }
  ];

  return (
    <footer className="w-full bg-[#1A1515] text-[#C5A059] pt-16 pb-8 border-t border-[#C5A059]/10" id="universal-platform-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-left pb-12 border-b border-[#C5A059]/10">
          
          {/* Column 1: Useful Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4" id="footer-links-col-1">
            <h4 className="font-mono text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase border-b border-[#C5A059]/10 pb-2.5">
              Useful Links
            </h4>
            <ul className="space-y-2.5">
              {columnLinks1.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-xs text-gray-300 hover:text-white transition-colors block font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Information (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4" id="footer-links-col-2">
            <h4 className="font-mono text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase border-b border-[#C5A059]/10 pb-2.5">
              Information
            </h4>
            <ul className="space-y-2.5">
              {columnLinks2.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-xs text-gray-300 hover:text-white transition-colors block font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Support channels (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4 text-left" id="footer-links-col-3">
            <h4 className="font-mono text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase border-b border-[#C5A059]/10 pb-2.5">
              Contact & Support
            </h4>
            
            <div className="space-y-3 font-sans">
              {/* Mandatory Helpline fields */}
              <div className="flex gap-2.5 items-start">
                <PhoneCall size={14} className="text-[#C5A059] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Helpline Number</p>
                  <a 
                    href="tel:18002966677" 
                    className="text-xs font-mono font-bold text-white hover:text-[#C5A059] transition-colors block"
                  >
                    1800-296-6677
                  </a>
                </div>
              </div>

              {/* Mandatory WhatsApp Chat Integration */}
              <div className="flex gap-2.5 items-start">
                <MessageCircle size={14} className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-white/50 uppercase tracking-wider">WhatsApp Support</p>
                  <a 
                    href="https://wa.me/918147349242" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-mono font-bold text-white hover:text-emerald-400 transition-colors block"
                  >
                    +91 8147349242
                  </a>
                </div>
              </div>

              {/* Email channel */}
              <div className="flex gap-2.5 items-start">
                <Mail size={14} className="text-[#C5A059]/80 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-white/50 uppercase tracking-wider">General Inquiries</p>
                  <a 
                    href="mailto:concierge@jewelora.com" 
                    className="text-xs text-gray-300 hover:text-white break-all text-left"
                  >
                    concierge@jewelora.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Brand trust statement (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4" id="footer-brand-summary">
            <h4 className="font-serif text-lg tracking-widest text-[#C5A059] uppercase font-medium">
              Jewelora Group
            </h4>
            <p className="text-xs text-gray-300 font-sans leading-relaxed font-light font-sans">
              Crafting stories of heritage and uncompromising business transparency since pre-independent India. Built to provide timeless, priceless, and irreplaceable assets.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#C5A059]">
              <ShieldCheck size={12} />
              <span>Sovereign Security Standard</span>
            </div>
          </div>

        </div>

        {/* Dynamic secure merchant icons row, active social handles, and copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6" id="trust-baseline-controls">
          
          {/* Approved secure merchant icons */}
          <div className="flex flex-wrap items-center gap-4 bg-black/30 px-4 py-2 border border-[#C5A059]/5 rounded-sm" id="accepted-merchant-tray">
            <span className="text-[9px] font-mono tracking-wider text-white/50 uppercase mr-1">SECURE TRANSACTION SYSTEMS:</span>
            <div className="flex gap-3 text-[10px] font-mono font-bold">
              {merchantIcons.map((merch, idx) => (
                <span 
                  key={idx} 
                  className={`${merch.color} bg-[#faf8f5] px-1.5 py-0.5 rounded-sm text-gray-800 scale-95 uppercase tracking-tighter shadow-xs`}
                  title={`Secured using approved ${merch.name}`}
                >
                  {merch.name}
                </span>
              ))}
            </div>
          </div>

          {/* Active social handles */}
          <div className="flex items-center gap-4" id="concierge-social-row">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-black/40 border border-[#C5A059]/20 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#1A1515] text-[#C5A059] transition-all" title="Instagram handle">
              <Instagram size={15} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-black/40 border border-[#C5A059]/20 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#1A1515] text-[#C5A059] transition-all" title="X Social handle">
              <svg size={14} viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-black/40 border border-[#C5A059]/20 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#1A1515] text-[#C5A059] transition-all" title="Facebook community">
              <Facebook size={15} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-black/40 border border-[#C5A059]/20 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#1A1515] text-[#C5A059] transition-all" title="YouTube luxury channel">
              <Youtube size={15} />
            </a>
          </div>

        </div>

        {/* Legally compliant system footer policy anchors */}
        <div className="pt-6 mt-6 border-t border-[#C5A059]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-gray-400 font-sans font-light" id="footer-policy-legal-bar">
          <p>© 2026 Jewelora e-Commerce & Brand Platform Group. All Sovereign Intellectual Rights Reserved.</p>
          
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {systemLinks.map((sub, idx) => (
              <a 
                key={idx} 
                href={sub.href} 
                className="hover:text-white transition-colors border-r border-[#C5A059]/10 pr-4 last:border-none"
              >
                {sub.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
