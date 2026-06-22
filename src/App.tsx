import React, { useState } from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import BestsellersSlider from "./components/BestsellersSlider";
import TrustWhyUs from "./components/TrustWhyUs";
import ExperienceHub from "./components/ExperienceHub";
import EditorialBlog from "./components/EditorialBlog";
import ConciergeChat from "./components/ConciergeChat";
import Footer from "./components/Footer";
import ProductDetailModal from "./components/ProductDetailModal";
import ShoppingTrayDrawer from "./components/ShoppingTrayDrawer";
import { Product, CartItem } from "./types";
import { Sparkles, Calendar, Heart, ShieldAlert, X, HelpCircle, Check, MapPin, PhoneCall } from "lucide-react";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isGlobalBookingOpen, setIsGlobalBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingFields, setBookingFields] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    type: "Boutique Visit"
  });

  // Global Actions helper
  const handleAddToCart = (product: Product, size?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map((item) => 
          item.product.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, selectedSize: size }];
    });
    // Triggers cart drawer sliding in for immediate premium response feedback
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (prodId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== prodId));
  };

  const handleUpdateQty = (prodId: string, q: number) => {
    if (q <= 0) {
      handleRemoveFromCart(prodId);
      return;
    }
    setCart((prev) => prev.map((item) => item.product.id === prodId ? { ...item, quantity: q } : item));
  };

  const handleGlobalBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsGlobalBookingOpen(false);
      setBookingFields({
        name: "",
        phone: "",
        email: "",
        date: "",
        type: "Boutique Visit"
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 overflow-x-hidden selection:bg-[#1A1515] selection:text-[#C5A059] flex flex-col justify-between" id="jewelora-e-commerce-portal">
      
      {/* 1. Universal header controls */}
      <Header 
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => setIsGlobalBookingOpen(true)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Main Column */}
      <main className="flex-1">
        
        {/* 2. Homepage Hero Banner Slider (Component B) */}
        <HeroSlider />

        {/* 3. Our Bestsellers Dynamic Slider Row (Component C) */}
        <BestsellersSlider 
          onAddToCart={handleAddToCart}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* 4. Leadership & Heritage Narrative content block (Why Buy From Us Section 1 & 2) */}
        <TrustWhyUs />

        {/* 5. Experience Hub Channels (Boutique, Consultation Booking, Chats Section 3) */}
        <ExperienceHub 
          onOpenBooking={() => setIsGlobalBookingOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
        />

        {/* 6. Lifestyle Content Editorial stacked blocks & Asymmetric Men Gold Curation */}
        <EditorialBlog />

      </main>

      {/* 7. Universal Platform Footer (Section 4) */}
      <Footer />

      {/* 8. Live Chat Automation Assistant Widget overlay */}
      <ConciergeChat 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpen={() => setIsChatOpen(true)}
      />

      {/* 9. Product quick focus details modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* 10. Shopping tray checkout sliding drawer panel */}
      <ShoppingTrayDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCart([])}
      />

      {/* 11. Global Concierge Reservation Scheduler Dialog popup */}
      {isGlobalBookingOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in-left" id="global-booking-modal-portal">
          <div className="bg-[#FAF8F5] rounded-xl border border-gray-150 max-w-md w-full overflow-hidden shadow-2xl relative text-left">
            <div className="bg-[#1A1515] text-[#C5A059] p-6 relative">
              <h3 className="font-serif text-xl sm:text-2xl uppercase tracking-wide font-medium">CONCIERGE SALON BOOKING</h3>
              <p className="text-xs text-[#C5A059]/80 font-mono tracking-wider mt-1 uppercase">112 Years of Sovereign Service Purity</p>
              <button 
                onClick={() => setIsGlobalBookingOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            {bookingSuccess ? (
              <div className="p-8 text-center space-y-4" id="global-booking-success">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Check size={32} />
                </div>
                <h4 className="font-serif text-xl font-bold text-gray-800">CONSULTATION RECORDED Successfully</h4>
                <p className="text-xs font-mono text-[#1A1515] uppercase tracking-widest bg-emerald-50/40 px-3 py-1.5 border border-emerald-600/10 rounded inline-block">Appointment ID: JWL-{Math.floor(Math.random() * 8999) + 1000}</p>
                <div className="text-sm text-gray-500 font-light max-w-sm mx-auto leading-relaxed">
                  Thank you for placing your trust in Jewelora. A senior boutique host has been reserved and will contact you shortly on <span className="font-semibold text-gray-700">{bookingFields.phone}</span>.
                </div>
              </div>
            ) : (
              <form onSubmit={handleGlobalBookingSubmit} className="p-6 space-y-4 font-sans" id="global-booking-form">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Service Type Requested</label>
                  <select 
                    value={bookingFields.type}
                    onChange={(e) => setBookingFields({...bookingFields, type: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-[#1A1515] focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                    required
                  >
                    <option value="Boutique Visit">Private Boutique Visit (Physical Salon)</option>
                    <option value="Virtual Video Live Consultation (HD Studio)">Virtual Video Live Consultation (HD Studio)</option>
                    <option value="Expert Chat Help">Sovereign Expert Chat Help (Secure Desk)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Jane Smith" 
                      value={bookingFields.name}
                      onChange={(e) => setBookingFields({...bookingFields, name: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-[#1A1515] focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. 1800-296-6677" 
                      value={bookingFields.phone}
                      onChange={(e) => setBookingFields({...bookingFields, phone: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-[#1A1515] focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="e.g. visitor@luxury.com" 
                    value={bookingFields.email}
                    onChange={(e) => setBookingFields({...bookingFields, email: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-[#1A1515] focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Preferred Date</label>
                  <input 
                    type="date" 
                    value={bookingFields.date}
                    onChange={(e) => setBookingFields({...bookingFields, date: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-[#1A1515] focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                    required
                  />
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsGlobalBookingOpen(false)}
                    className="px-4 py-2 text-xs font-mono uppercase text-gray-400 hover:text-[#1A1515] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-6 py-2 bg-[#1A1515] hover:bg-[#C5A059] text-white text-xs font-mono font-bold uppercase rounded-sm transition-colors cursor-pointer"
                  >
                    Confirm Concierge Slot
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
