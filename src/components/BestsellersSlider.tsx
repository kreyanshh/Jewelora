import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Star, ShoppingBag, Eye, ShieldCheck, HelpCircle } from "lucide-react";
import { Product } from "../types";
import { PRODUCTS } from "../data";

interface BestsellersSliderProps {
  onAddToCart: (product: Product, size?: string) => void;
  onSelectProduct: (product: Product) => void;
}

export default function BestsellersSlider({ onAddToCart, onSelectProduct }: BestsellersSliderProps) {
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Auto scroll behavior
  const startAutoScroll = () => {
    stopAutoScroll();
    autoPlayRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If reached close to end, scroll back to 0, otherwise step right
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 4500);
  };

  const stopAutoScroll = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const handleScrollUpdate = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  // Manual scroll buttons: Cancel automatic rotation on click, and jump
  const handleScrollManual = (direction: "left" | "right") => {
    stopAutoScroll(); // Clear and delay periodic timer
    
    if (scrollRef.current) {
      const val = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: val, behavior: "smooth" });
    }
    
    // Delayed restart of automated scrolling
    setTimeout(() => {
      startAutoScroll();
    }, 6000);
  };

  return (
    <section 
      className="w-full py-16 sm:py-24 bg-[#FDFCFB] relative overflow-hidden" 
      id="bestsellers-row-section"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Matrix */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <span className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold">LUSTROUS STANDARDS</span>
            <span className="h-[1px] w-8 bg-[#C5A059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1515] font-medium uppercase tracking-tight">
            Our Bestsellers
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-500 tracking-wide mt-3 leading-relaxed font-light">
            Sovereign gold formulations that consistently capture modern hearts. From bespoke chokers to certified diamonds, explore why these designs lead our legacy.
          </p>
        </div>

        {/* Dynamic Carousel Frame */}
        <div className="relative group/carousel px-1" id="bestseller-carousel-portal">
          
          {/* Permanent outer directional arrow button - Left */}
          <button
            onClick={() => handleScrollManual("left")}
            className={`absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1A1515] hover:bg-[#C5A059] hover:text-white transition-all duration-300 border border-gray-100 cursor-pointer ${
              !canScrollLeft ? "opacity-40 cursor-not-allowed" : "opacity-100"
            }`}
            aria-label="Scroll left bestsellers"
            id="bestseller-arrow-left"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Core Horizontal Scroll Row */}
          <div
            ref={scrollRef}
            onScroll={handleScrollUpdate}
            className="w-full flex gap-6 overflow-x-auto scroll-smooth scrollbar-none pb-8 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
            id="bestsellers-horizontal-scroll-container"
          >
            {bestsellers.map((product) => (
              <div
                key={product.id}
                className="w-[280px] sm:w-[310px] flex-shrink-0 bg-white border border-[#fbf9f6] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 snap-start flex flex-col justify-between group"
                id={`product-card-${product.id}`}
              >
                {/* Visual Cover Layer showing Component A (Tanishq Inspired Hover Selector) */}
                <div 
                  className="w-full h-[280px] sm:h-[310px] bg-[#fbf9f6] overflow-hidden relative cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                  id={`hover-trigger-container-${product.id}`}
                >
                  {/* Image 1: Main (Slides and cross-fades LEFT on hover) */}
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out transform group-hover:opacity-0 group-hover:-translate-x-4 opacity-100 translate-x-0"
                    id={`product-main-img-${product.id}`}
                  />

                  {/* Image 2: Hover (Slides and cross-fades LEFT into place on hover) */}
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} alternate`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out transform opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                    id={`product-hover-img-${product.id}`}
                  />

                  {/* Luxury Tags Overlays */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
                    <span className="bg-[#C5A059] text-white text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 uppercase rounded-sm">
                      Bestseller
                    </span>
                    {product.originalPrice && (
                      <span className="bg-[#FAF8F5] text-amber-900 text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-sm border border-[#E5E1DA]">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-gray-700 shadow-md">
                      <Eye size={14} />
                    </span>
                  </div>

                  {/* Metal details visual strip */}
                  <div className="absolute bottom-2 inset-x-2 bg-white/95 backdrop-blur-xs border border-[#E5E1DA] py-1.5 px-3 rounded flex items-center justify-between text-[10px] font-mono text-[#C5A059] shadow-xs z-10">
                    <span>{product.metal}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>{product.metalColor}</span>
                  </div>
                </div>

                {/* Info Text Layer */}
                <div className="p-4 sm:p-5 text-left flex-1 flex flex-col justify-between" id={`product-info-panel-${product.id}`}>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5 text-amber-500">
                      <Star size={13} fill="currentColor" />
                      <span className="text-[11px] font-mono font-bold text-gray-700">{product.rating.toFixed(1)}</span>
                      <span className="text-[10px] text-gray-400 font-sans font-light">• Verified Client Review</span>
                    </div>

                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="font-serif text-sm sm:text-base text-gray-900 font-medium hover:text-[#C5A059] transition-colors cursor-pointer leading-tight mb-2 truncate"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed font-light mb-4 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline mb-4" id={`price-display-strip-${product.id}`}>
                      <div className="flex items-baseline gap-2">
                        <span className="text-base sm:text-lg font-mono font-bold text-[#C5A059]">
                          ${product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs font-mono text-gray-400 line-through">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-green-700 font-medium bg-green-50 px-1.5 py-0.5 rounded-sm">
                        Transit Fully Insured
                      </span>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="col-span-1 rounded bg-[#C5A059]/5 hover:bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center border border-[#E5E1DA] transition-colors cursor-pointer"
                        title="View Certificate Specifications"
                        id={`btn-view-certs-${product.id}`}
                      >
                        <ShieldCheck size={15} />
                      </button>
                      <button
                        onClick={() => onAddToCart(product)}
                        className="col-span-4 py-2 bg-[#1A1515] text-white text-xs font-mono tracking-widest font-bold uppercase rounded-sm hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        id={`btn-add-tray-${product.id}`}
                      >
                        <ShoppingBag size={13} />
                        <span>Add To Tray</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Permanent outer directional arrow button - Right */}
          <button
            onClick={() => handleScrollManual("right")}
            className={`absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1A1515] hover:bg-[#C5A059] hover:text-white transition-all duration-300 border border-gray-100 cursor-pointer ${
              !canScrollRight ? "opacity-40 cursor-not-allowed" : "opacity-100"
            }`}
            aria-label="Scroll right bestsellers"
            id="bestseller-arrow-right"
          >
            <ArrowRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}
