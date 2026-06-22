import React from "react";
import { Shield, Sparkles, RefreshCw, Award, Heart, CheckCircle2 } from "lucide-react";

export default function TrustWhyUs() {
  const badges = [
    {
      icon: Award,
      title: "100% BIS Hallmarked",
      desc: "Every gram of solid gold is tested and certified by Government bureaus to guarantee exact purity (22K or 18K)."
    },
    {
      icon: Shield,
      title: "GIA Laser Inscribed",
      desc: "Our precious solitaires are individually certified by the Gemological Institute of America with custom laser IDs."
    },
    {
      icon: RefreshCw,
      title: "Lifetime Resale Guarantee",
      desc: "Complete buyback transparency allowing you to exchange or trade sovereign assets at accurate, market-tied valuations."
    },
    {
      icon: Heart,
      title: "Ethically Sourced Gold",
      desc: "Complies entirely with strict international protocols, ensuring transparent labor and responsible ecological mining."
    }
  ];

  return (
    <div className="w-full bg-white relative">
      
      {/* SECTION 1: From the Chairman */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#E5E1DA]" id="chairman-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Minimalist portrait frame with high-contrast layout */}
          <div className="lg:col-span-4 flex justify-center" id="chairman-portrait-col">
            <div className="relative">
              {/* Outer brand aesthetic borders */}
              <div className="absolute -inset-3 border border-[#C5A059]/30 rounded-sm pointer-events-none z-0" />
              <div className="absolute inset-0 bg-[#1A1515] translate-x-3 translate-y-3 rounded-xs z-10" />
              
              {/* Portrait container */}
              <div className="relative z-20 w-64 h-80 sm:w-72 sm:h-96 bg-gray-200 overflow-hidden shadow-xl rounded-xs border border-white">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
                  alt="Chairman of Jewelora Group"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-105 saturate-95 hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Tag plate overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/95 backdrop-blur-xs border border-[#E5E1DA] p-3 rounded shadow-lg z-30 text-left">
                <p className="font-serif text-sm font-semibold tracking-wide text-gray-900 transition-colors duration-300 hover:text-[#C5A059]" id="chairman-display-name">Kreyansh Jain</p>
                <p className="font-mono text-[9px] text-[#C5A059] uppercase tracking-wider font-bold">CEO, Jewelora</p>
              </div>
            </div>
          </div>

          {/* Right Block: Typographic copy blocks */}
          <div className="lg:col-span-8 space-y-6 text-left" id="chairman-message-col">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#C5A059] tracking-[0.2em] uppercase font-bold">LEADERSHIP VISION</span>
              <span className="h-[1px] w-12 bg-[#C5A059]/40" />
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1515] font-medium uppercase tracking-tight">
              Chairman's Message
            </h3>

            {/* Mandated PRD Copy Blocks */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              <p className="font-serif italic text-gray-800 border-l-4 border-[#C5A059] pl-4 py-1 my-4">
                "Today, when I look around me, business is all about toplines, bottomlines and market capitalisation. But Kalyan entered into business in a pre-independent India to build a better India, as our forefathers believed ethical, fair business will make India self-sufficient and strong."
              </p>
              <p>
                Personally, I believe Kalyan Jewellers’ major achievement is the trust we have earned from millions of people across the length and breadth of a huge subcontinent like India, and abroad in the GCC.
              </p>
              <p className="text-xs font-mono text-gray-400">
                STRICT COMPLIANCE DIRECTIVES • HISTORIC TRUST METRIC: 100% SATISFACTION INDEX
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 2: Why Buy From Us */}
      <section className="bg-[#FAF8F5] py-20" id="why-buy-from-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Block: Authority Narrative Copystrip */}
            <div className="lg:col-span-7 text-left space-y-6" id="why-narrative-panel">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#C5A059] tracking-[0.2em] uppercase font-bold">THE 112-YEAR PROMISE</span>
                <span className="h-[1px] w-12 bg-[#C5A059]/40" />
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl text-[#1A1515] font-medium uppercase tracking-tight">
                Why Buy From Us
              </h3>

              {/* Mandated PRD copy */}
              <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed font-light font-sans">
                <p className="font-medium text-gray-800">
                  Kalyan is one of the most prominent business houses in India, with a strong legacy of 112 years. The entirety of our operations is based on ethical, honest and transparent business practices. Every step we take is for our customers, and our customers only.
                </p>
                
                <p>
                  For years we have told stories through our work, rather than create common designs. Our collections speak volumes about our heritage and craftsmanship - one that has been passed on from one generation to another - each generation adding immense value to the next.
                </p>

                <p className="bg-[#C5A059]/5 border-l-2 border-[#C5A059] p-4 text-gray-700 italic">
                  Our promise to you is the promise of value. The guarantee of purchasing something timeless, priceless and irreplaceable. We assure you that whatever you are buying is of the highest quality and nothing less. You will walk out of our stores with an eternal piece by the most trusted makers of today.
                </p>
              </div>
            </div>

            {/* Right Block: Minimal trust badge matrix */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-5" id="why-badge-panel">
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
                <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest font-bold border-b border-gray-100 pb-3">
                  EXCLUSIVE ASSURANCES ACCORD
                </h4>
                
                <div className="space-y-6">
                  {badges.map((b, idx) => {
                    const Icon = b.icon;
                    return (
                      <div key={idx} className="flex gap-4 items-start group" id={`trust-badge-${idx}`}>
                        <div className="w-10 h-10 rounded bg-[#C5A059]/5 group-hover:bg-[#1A1515] text-[#C5A059] group-hover:text-[#C5A059] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                          <Icon size={18} />
                        </div>
                        <div className="text-left space-y-1">
                          <h5 className="font-serif text-sm font-semibold text-gray-900 flex items-center gap-1.5">
                            {b.title}
                            <CheckCircle2 size={13} className="text-emerald-500" />
                          </h5>
                          <p className="text-xs text-gray-400 font-sans leading-relaxed font-light">
                            {b.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
