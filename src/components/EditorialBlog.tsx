import React from "react";
import { ArrowUpRight, BookOpen, Clock, Heart, Pocket } from "lucide-react";

export default function EditorialBlog() {
  const articles = [
    {
      id: "art-1",
      category: "Heritage & Ethics",
      title: "Carat Ethics & Sovereign Purity: The 112-Year Kalyan Lineage",
      summary: "In a pre-independent India, business was established upon the bedrock of trust. Today, we delve into how we authenticate every single gram of gold, from BIS hallmark certifications to responsible ecologically balanced mining protocols.",
      readTime: "4 min read",
      date: "June 21, 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "art-2",
      category: "Gemology Craft",
      title: "Fine Rings Construction: Masterful Solitaire Seating & Premium Claws Optimization",
      summary: "The position of a diamond claw is not merely a structural choice—it is a light-gathering science. Discover how our gemologists curate GIA certified solitaires to elevate luminance dispersion by 30% through premium four-prong layouts.",
      readTime: "6 min read",
      date: "June 18, 2026",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "art-3",
      category: "Fashion Curation",
      title: "Gold Layering: Aligning Sovereign Chevrons with Intimate Chains",
      summary: "Modern young professionals and creators are reshaping how fine jewelry fits luxury daily fashion. Elite stylists reveal exactly how to layer delicate 18K solid rose-gold necklaces alongside heavy 22K yellow-gold heritage collars.",
      readTime: "3 min read",
      date: "May 29, 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section className="w-full py-20 bg-white" id="editorial-luxury-curation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Title */}
        <div className="flex items-end justify-between border-b border-gray-100 pb-6 mb-12 text-left">
          <div className="space-y-2">
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#C5A059] uppercase font-bold">LIFESTYLE CURATION</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1515] font-medium uppercase font-serif tracking-tight">
              Jewelora Editorial & Lifestyle
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#1A1515] uppercase">
            <BookOpen size={14} />
            <span>Journal Vol. XV</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="editorial-split-view">
          
          {/* LEFT: Stacked Editorial Articles layout (matching image_571114.png hierarchy) */}
          <div className="lg:col-span-7 space-y-8" id="editorial-stacked-articles-column">
            {articles.map((art) => (
              <article 
                key={art.id} 
                className="group border-b border-gray-100 pb-8 flex flex-col sm:flex-row gap-6 items-start text-left"
                id={`article-node-${art.id}`}
              >
                {/* Article Image thumbnail */}
                <div className="w-full sm:w-44 h-32 rounded bg-gray-50 overflow-hidden flex-shrink-0 relative border border-gray-100" id={`art-thumb-${art.id}`}>
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-2 left-2 bg-[#1A1515] text-[#C5A059] font-mono text-[8px] font-bold px-1.5 py-0.5 uppercase tracking-wider rounded-xs">
                    {art.category}
                  </div>
                </div>

                {/* Article Text hierarchy */}
                <div className="flex-1 space-y-2" id={`art-text-block-${art.id}`}>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {art.readTime}
                    </span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#C5A059] transition-colors leading-snug">
                    <a href={`#journal-${art.id}`}>
                      {art.title}
                    </a>
                  </h3>

                  <p className="text-xs text-gray-500 font-sans leading-relaxed font-light line-clamp-2">
                    {art.summary}
                  </p>

                  <div className="pt-1 flex items-center gap-4 text-[11px] font-mono font-bold tracking-widest text-[#1A1515] uppercase group-hover:text-[#C5A059] transition-colors">
                    <span className="cursor-pointer flex items-center gap-1">
                      Read Blueprint
                      <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT: Asymmetric men's gold curation banner matching image_5710f7.png */}
          <div className="lg:col-span-5 w-full" id="mens-curation-banner-column">
            <div className="relative rounded-2xl overflow-hidden bg-gray-950 h-[480px] sm:h-[530px] shadow-xl group border border-gray-900/10 flex flex-col justify-end p-8 text-left">
              {/* Curation cover portrait photo generated earlier */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-104"
                style={{ backgroundImage: `url('/src/assets/images/campaign_men_gold_1782106557332.jpg')` }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1515] via-[#1A1515]/40 to-transparent z-10" />

              {/* Text overlays and muted earth/metal tone buttons */}
              <div className="relative z-20 space-y-3 max-w-sm">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#C5A059] font-bold uppercase block">THE MODERN PATRIARCH</span>
                
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium uppercase leading-tight tracking-wide">
                  Men's Solid Gold Curation
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light font-sans">
                  Bold, geometric structures, solid 22-karat masculine chains, and polished architectural signet bands. Hand-shaped to embody eternal self-sufficiency.
                </p>

                <div className="pt-4">
                  <button 
                    onClick={() => {
                      const target = document.getElementById("bestsellers-row-section");
                      if (target) target.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4B372] text-[#1A1515] font-mono text-xs tracking-widest font-bold uppercase rounded-sm transition-all duration-300 transform group-hover:scale-102 flex items-center gap-2 cursor-pointer shadow-lg shadow-[#1A1515]/40"
                    id="shopnow-mens-gold-curation"
                  >
                    <span>#Shop Now</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
