import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  tagline: string;
  title: string;
  subtitle: string;
  actionText: string;
  tag: string;
}

export default function HeroSlider() {
  const slides: Slide[] = [
    {
      id: 1,
      image: "/src/assets/images/hero_luxury_gold_model_1782106525986.jpg",
      tagline: "Sovereign Heritage Curation",
      title: "Jewelora Pure Solid Gold",
      subtitle: "Masterful designs uniting heritage 22K craftsmanship with clean, modern symmetric silhouettes, tailored for the contemporary creator.",
      actionText: "Shop Solid Gold Curation",
      tag: "gold"
    },
    {
      id: 2,
      image: "/src/assets/images/hero_minimal_pedestal_1782106540834.jpg",
      tagline: "The Art of Jewellery",
      title: "Modern Jewellery, Evolved",
      subtitle: "Exceptional GIA certified diamonds nested in luxury high-brilliance white gold alloys. Crafted to capture eternal brilliance.",
      actionText: "Explore Jewellery",
      tag: "diamond"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Restart automated carousel loop
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      handleNextSlide(true); // Is automatic
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [currentIndex]);

  const triggerTransition = (action: () => void) => {
    setIsTransitioning(true);
    setTimeout(() => {
      action();
      setIsTransitioning(false);
    }, 400); // matches the transition duration
  };

  // Switch to next slide
  const handleNextSlide = (isAuto = false) => {
    if (!isAuto) {
      // Manual override cancels and restarts the timer securely
      stopTimer();
    }
    triggerTransition(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    });
  };

  // Switch to previous slide
  const handlePrevSlide = () => {
    // Manual override cancels and restarts the timer securely
    stopTimer();
    triggerTransition(() => {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    });
  };

  // Manual dot jump
  const handleDotJump = (index: number) => {
    if (index === currentIndex) return;
    stopTimer();
    triggerTransition(() => {
      setCurrentIndex(index);
    });
  };

  const activeSlide = slides[currentIndex];

  return (
    <section 
      className="w-full relative bg-[#1A1515] h-[480px] sm:h-[600px] overflow-hidden group" 
      id="homepage-hero-banner-slider"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      {/* Background Slides Frame */}
      <div className="absolute inset-0 w-full h-full" id="luxury-active-slide-frame">
        {/* Slide Photo with fade-in-to-the-left motion layout */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${activeSlide.image}')`,
            transition: "ease-in-out 0.4s",
            opacity: isTransitioning ? 0.3 : 1,
            transform: isTransitioning ? "translateX(-60px)" : "translateX(0)"
          }}
          referrerPolicy="no-referrer"
        />
        
        {/* Premium Dark Dual Gradient Overlay - emphasizing luxury typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1515]/90 via-[#1A1515]/45 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1515]/40 via-transparent to-transparent z-10" />
      </div>

      {/* Slide Text Content Column */}
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col justify-center text-left" id="slide-text-container">
        <div 
          className="max-w-xl space-y-4 sm:space-y-6"
          style={{
            transition: "ease-in-out 0.4s",
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? "translateX(-35px)" : "translateX(0)"
          }}
        >
          <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A059]/20">
            <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-ping" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
              {activeSlide.tagline}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-wide leading-tight uppercase font-medium">
            {activeSlide.title}
          </h2>

          <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            {activeSlide.subtitle}
          </p>

          <div className="pt-2 sm:pt-4 flex items-center gap-4">
            <button 
              onClick={() => {
                const target = document.getElementById("bestsellers-row-section");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-[#C5A059] text-white font-mono text-xs tracking-widest font-bold uppercase rounded-sm hover:bg-[#B38E45] transition-colors shadow-lg shadow-[#1A1515]/50 hover:scale-101 transform duration-300"
              id={`slide-cta-btn-${activeSlide.id}`}
            >
              {activeSlide.actionText}
            </button>
            <button 
              onClick={() => {
                const target = document.getElementById("why-buy-from-us-section");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 border border-white/30 text-white font-mono text-xs tracking-widest font-medium uppercase rounded-sm hover:bg-white hover:text-[#1A1515] transition-all duration-300"
              id="slider-secondary-cta"
            >
              Our Legacy
            </button>
          </div>
        </div>
      </div>

      {/* Hover Arrow Controls (Left & Right) */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={handlePrevSlide}
          className="w-12 h-12 bg-[#1A1515]/60 hover:bg-[#C5A059] text-[#C5A059] hover:text-white rounded-full flex items-center justify-center border border-white/10 hover:border-transparent transition-all pointer-events-auto cursor-pointer"
          aria-label="Previous slide"
          id="hero-slider-prev-arrow"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => handleNextSlide(false)}
          className="w-12 h-12 bg-[#1A1515]/60 hover:bg-[#C5A059] text-[#C5A059] hover:text-white rounded-full flex items-center justify-center border border-white/10 hover:border-transparent transition-all pointer-events-auto cursor-pointer"
          aria-label="Next slide"
          id="hero-slider-next-arrow"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Baseline Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5 items-center bg-[#1A1515]/40 backdrop-blur-md px-4 py-2 rounded-full" id="slider-pagination-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotJump(index)}
            className={`transition-all duration-300 cursor-pointer ${
              index === currentIndex 
                ? "w-7 h-1.5 bg-[#C5A059] rounded-full" 
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80 rounded-full"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            id={`hero-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
