import React, { useState } from "react";
import { X, ShoppingBag, ShieldAlert, Star, Heart, Check, Trash2 } from "lucide-react";
import { Product } from "../types";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size?: string) => void;
}

export default function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  if (!product) return null;

  const sizes = product.category === "Rings" 
    ? ["Size 6", "Size 7", "Size 8", "Size 9"] 
    : product.category === "Necklaces" 
      ? ["14 inches", "16 inches", "18 inches"] 
      : [];

  const handleAddWithDetails = () => {
    onAddToCart(product, selectedSize || undefined);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-100 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in-left" id="product-detail-modal-box">
      <div className="bg-[#FAF8F5] rounded-2xl border border-gray-150 max-w-3xl w-full overflow-hidden shadow-2xl relative text-left grid grid-cols-1 md:grid-cols-12">
        
        {/* Close Button top-right */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-gray-700 hover:text-black hover:bg-white shadow-md cursor-pointer transition-colors"
          id="close-detail-modal-btn"
        >
          ✕
        </button>

        {/* Left: Product Images (Split Column 5 cols) */}
        <div className="md:col-span-5 bg-[#FAF8F5] relative h-64 md:h-full min-h-[280px]">
          <div className="w-full h-full relative group">
            {/* Img 1: Main */}
            <img 
              src={product.image} 
              alt={product.name} 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
            />
            {/* Img 2: Hover details view */}
            <img 
              src={product.hoverImage} 
              alt={`${product.name} model detail view`} 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" 
            />
          </div>
          
          <div className="absolute bottom-3 left-3 bg-black/30 backdrop-blur-xs text-white text-[9px] font-mono whitespace-nowrap px-2 py-1 rounded">
            Hover photo to rotate angle focus
          </div>
        </div>

        {/* Right: Specifications & CTA Add Layer (7 cols) */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4" id="detail-modal-spec-column">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[9px] text-[#C5A059] tracking-[0.2em] uppercase font-bold border border-[#C5A059]/30 px-2 py-0.5 rounded-sm bg-stone-50">
                {product.metal}
              </span>
              <span className="text-xs text-gray-400 font-sans font-light">• {product.metalColor}</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-[#1A1515] uppercase tracking-wide leading-tight mb-2 font-medium">
              {product.name}
            </h3>

            {/* Price section */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-xl sm:text-2xl font-mono font-bold text-[#1A1515]">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm font-mono text-gray-400 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light mb-4">
              {product.description}
            </p>

            {/* Spec breakdown table */}
            <div className="border border-gray-100 rounded-lg p-3 sm:p-4 bg-white/60 space-y-2 text-xs" id="product-specs-breakdown">
              <h4 className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">CARAT & MATERIAL CONFORMANCE</h4>
              <div className="grid grid-cols-2 gap-y-1 gap-x-4">
                <div className="flex justify-between border-b border-gray-50 pb-1 font-mono text-[11px]">
                  <span className="text-gray-400 uppercase">Gross Weight:</span>
                  <span className="text-gray-800 font-medium">{product.specs.weight || "Adaptive Gold Standard"}</span>
                </div>
                {product.specs.carat && (
                  <div className="flex justify-between border-b border-gray-50 pb-1 font-mono text-[11px]">
                    <span className="text-gray-400 uppercase">Pave Carat:</span>
                    <span className="text-gray-800 font-medium">{product.specs.carat}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-gray-50 pb-1 font-mono text-[11px]">
                  <span className="text-gray-400 uppercase">Certificate:</span>
                  <span className="text-gray-800 font-medium truncate max-w-[100px]">{product.specs.certification || "BIS Hallmarked"}</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-1 font-mono text-[11px]">
                  <span className="text-gray-400 uppercase">Authenticity:</span>
                  <span className="text-emerald-700 font-semibold">100% Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Sizes Selection */}
            {sizes.length > 0 && (
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-gray-400 tracking-wider mb-2">SELECT FIT MEASUREMENT</label>
                <div className="flex gap-2" id="sizer-row-controls">
                  {sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors cursor-pointer ${
                        selectedSize === sz 
                          ? "bg-[#1A1515] text-white border-transparent" 
                          : "bg-white border-gray-200 text-gray-700 hover:border-[#1A1515]"
                      }`}
                      id={`btn-size-selector-${sz.replace(" ", "-")}`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Main Action trigger */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleAddWithDetails}
                className="flex-1 py-3 bg-[#1A1515] text-white text-xs font-mono tracking-widest font-bold uppercase rounded-sm hover:bg-[#C5A059] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-gray-100"
                id="btn-confirm-add-tray"
              >
                {successMsg ? (
                  <>
                    <Check size={14} className="text-emerald-400 animate-pulse" />
                    <span>Added To Gold Tray</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={14} />
                    <span>Secure Adding To Tray</span>
                  </>
                )}
              </button>
            </div>
            
            <p className="text-[10px] text-center text-gray-400 font-sans tracking-wide">
              🔒 Standard 112-year sovereign security return protocols apply.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
