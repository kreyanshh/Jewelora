import React, { useState } from "react";
import { Gavel, Heart, Sparkles, MapPin, Laptop, AppWindow, Calendar, Compass, Clock, Check } from "lucide-react";
import { AppointmentBooking } from "../types";

interface ExperienceHubProps {
  onOpenBooking: () => void;
  onOpenChat: () => void;
}

export default function ExperienceHub({ onOpenBooking, onOpenChat }: ExperienceHubProps) {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingFields, setBookingFields] = useState<AppointmentBooking>({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "11:00 AM - 12:30 PM",
    type: "Boutique Visit",
    notes: ""
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setShowBookingModal(false);
      setBookingFields({
        name: "",
        email: "",
        phone: "",
        date: "",
        timeSlot: "11:00 AM - 12:30 PM",
        type: "Boutique Visit",
        notes: ""
      });
    }, 2500);
  };

  const validationStrip = [
    {
      icon: Gavel,
      title: "Quality Craftsmanship",
      sub: "Bespoke engineering with pristine laser calibrations and ancient gold filigree standards."
    },
    {
      icon: Heart,
      title: "Ethically Sourced Alloys",
      sub: "All precious metals abide by environmental compliance, supporting artisanal miners and communities."
    },
    {
      icon: Sparkles,
      title: "100% Core Transparency",
      sub: "Each gemstone receives verified weight certification, with no hidden margins. Real-time pricing index."
    }
  ];

  return (
    <section className="w-full relative bg-white pb-20" id="experience-centers-section">
      
      {/* 1. Validation Strip Element */}
      <div className="w-full border-y border-gray-100 bg-[#FDFCFB]" id="validation-strip-element">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {validationStrip.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4 text-left group" id={`validation-strip-card-${idx}`}>
                  <div className="w-12 h-12 bg-[#C5A059]/5 group-hover:bg-[#1A1515] text-[#C5A059] group-hover:text-white rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm font-semibold text-gray-900 uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed font-light">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Cross-Channel Experience Centers Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Editorial header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#C5A059] uppercase font-bold">CROSS-CHANNEL CONCIERGE</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1515] font-medium uppercase mt-2">The Experience Hub</h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light mt-3">
            Choose how you wish to engage with our gemologists. From virtual consultations to private physical salon visits, we curate personalized journeys just for you.
          </p>
        </div>

        {/* 3-Column Experience Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="experience-hub-grid">
          
          {/* Column 1: Store Boutique Visit */}
          <div 
            className="group rounded-xl overflow-hidden border border-gray-150 shadow-xs hover:shadow-xl transition-all duration-500 bg-white flex flex-col justify-between"
            id="experience-hub-col-1"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src="/src/assets/images/boutique_storefront_1782106572052.jpg" 
                alt="Jewelora Sovereign Store Boutique Mall Facade" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-[#C5A059] font-bold flex items-center gap-1.5 border border-[#E5E1DA]">
                <MapPin size={11} />
                <span>84 Global Boulevards</span>
              </div>
            </div>

            <div className="p-6 text-left flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 uppercase">Visit Our Store</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mb-6">
                  Immerse yourself in our private galleries. Touch, feel, and try on our heavy gold collections under beautiful direct studio lighting with our boutique managers.
                </p>
              </div>
              <button 
                onClick={() => {
                  setBookingFields(p => ({...p, type: "Boutique Visit"}));
                  setShowBookingModal(true);
                }}
                className="w-full py-2.5 bg-[#1A1515] text-white rounded-sm hover:bg-[#C5A059] text-xs font-mono tracking-widest font-bold uppercase transition-colors cursor-pointer"
                id="btn-visit-store-concierge"
              >
                Secure Store Appointment
              </button>
            </div>
          </div>

          {/* Column 2: Live Video Consult */}
          <div 
            className="group rounded-xl overflow-hidden border border-gray-150 shadow-xs hover:shadow-xl transition-all duration-500 bg-white flex flex-col justify-between"
            id="experience-hub-col-2"
          >
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1588702547837-2c11f416e0cc?auto=format&fit=crop&q=80&w=400" 
                alt="Laptop live concierge videoconference session" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-[#C5A059] font-bold flex items-center gap-1.5 border border-[#E5E1DA]">
                <Laptop size={11} />
                <span>Interactive Telepresence</span>
              </div>
            </div>

            <div className="p-6 text-left flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 uppercase">Book An Appointment</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mb-6">
                  Schedule an ultra-high resolution virtual consult. Our certified gemologist will present custom designs side-by-side using high-magnification studio cameras.
                </p>
              </div>
              <button 
                onClick={() => {
                  setBookingFields(p => ({...p, type: "Virtual Video Consult"}));
                  setShowBookingModal(true);
                }}
                className="w-full py-2.5 bg-white text-[#1A1515] border border-[#1A1515] rounded-sm hover:bg-[#1A1515] hover:text-white text-xs font-mono tracking-widest font-bold uppercase transition-all duration-300 cursor-pointer"
                id="btn-book-consult-teleconcierge"
              >
                Virtual Video Consultation
              </button>
            </div>
          </div>

          {"   "}{/* Column 3: Live chat help channels */}
          <div 
            className="group rounded-xl overflow-hidden border border-gray-150 shadow-xs hover:shadow-xl transition-all duration-500 bg-white flex flex-col justify-between"
            id="experience-hub-col-3"
          >
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=400" 
                alt="Smartphone chat concierge overlay" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-[#C5A059] font-bold flex items-center gap-1.5 border border-[#E5E1DA]">
                <AppWindow size={11} />
                <span>Fast Aligned Responses</span>
              </div>
            </div>

            <div className="p-6 text-left flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 uppercase">Talk To An Expert</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mb-6">
                  Instantly access our luxury chat desk. Talk directly to Elara, our helpful AI concierge, or get routed instantly to an experienced advisor on our secure channels.
                </p>
              </div>
              <button 
                onClick={onOpenChat}
                className="w-full py-2.5 bg-[#FAF8F5] text-[#C5A059] border border-[#E5E1DA] rounded-sm hover:bg-[#FAF8F5]/80 hover:border-[#C5A059] text-xs font-mono tracking-widest font-bold uppercase transition-colors cursor-pointer"
                id="btn-chat-experts-desk"
              >
                Chat Instant Counselor
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Appointment Scheduler Dialog Overlays */}
      {showBookingModal && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in-left" id="scheduler-modal-layer">
          <div className="bg-[#FAF8F5] rounded-xl border border-gray-150 max-w-lg w-full overflow-hidden shadow-2xl relative text-left">
            <div className="bg-[#1A1515] text-white p-6 relative">
              <h3 className="font-serif text-xl sm:text-2xl uppercase tracking-wide font-medium">CONCIERGE SALON BOOKING</h3>
              <p className="text-xs text-[#C5A059] font-mono tracking-wider mt-1 uppercase font-bold">112 Years of Sovereign Service Purity</p>
              <button 
                onClick={() => setShowBookingModal(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer"
                id="close-scheduler-modal"
              >
                ✕
              </button>
            </div>

            {bookingSuccess ? (
              <div className="p-8 text-center space-y-4" id="scheduler-success-feedback">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Check size={32} />
                </div>
                <h4 className="font-serif text-xl font-bold text-gray-800">CONSULTATION RECORDED Successfully</h4>
                <p className="text-xs font-mono text-[#C5A059] uppercase tracking-widest font-bold">Appointment ID: JWL-{Math.floor(Math.random() * 8999) + 1000}</p>
                <div className="text-sm text-gray-500 font-light max-w-sm mx-auto leading-relaxed">
                  Thank you for placing your trust in Jewelora. A senior boutique host has been reserved and will contact you shortly on <span className="font-semibold text-gray-700">{bookingFields.phone}</span>.
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="p-6 space-y-4 font-sans" id="scheduler-booking-form">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Service Type Requested</label>
                  <select 
                    value={bookingFields.type}
                    onChange={(e) => setBookingFields({...bookingFields, type: e.target.value as any})}
                    className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                    required
                  >
                    <option value="Boutique Visit">Private Boutique Visit (Physical Salon)</option>
                    <option value="Virtual Video Consult">Virtual Video Live Consultation (HD Studio)</option>
                    <option value="Expert Chat Help">Sovereign Expert Chat Help (Secure Desk)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe" 
                      value={bookingFields.name}
                      onChange={(e) => setBookingFields({...bookingFields, name: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:ring-[#C5A059] focus:outline-none placeholder-gray-400"
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
                      className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:ring-[#C5A059] focus:outline-none placeholder-gray-400"
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
                    className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:ring-[#C5A059] focus:outline-none placeholder-gray-400"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      value={bookingFields.date}
                      onChange={(e) => setBookingFields({...bookingFields, date: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Preferred Time Slot</label>
                    <select 
                      value={bookingFields.timeSlot}
                      onChange={(e) => setBookingFields({...bookingFields, timeSlot: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                      required
                    >
                      <option value="11:00 AM - 12:30 PM">Morning (11:00 AM - 12:30 PM)</option>
                      <option value="01:30 PM - 03:00 PM">Afternoon (01:30 PM - 03:00 PM)</option>
                      <option value="04:00 PM - 05:30 PM">Late Afternoon (04:00 PM - 05:30 PM)</option>
                      <option value="06:30 PM - 08:00 PM">Evening (06:30 PM - 08:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Special Design Consult Notes (Optional)</label>
                  <textarea 
                    rows={2}
                    placeholder="Tell us what gold ornaments, diamond carats, or specific heritage collections you want us to set aside."
                    value={bookingFields.notes}
                    onChange={(e) => setBookingFields({...bookingFields, notes: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-gray-800 focus:ring-1 focus:ring-[#C5A059] focus:outline-none placeholder-gray-400"
                  />
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setShowBookingModal(false)}
                    className="px-4 py-2 text-xs font-mono uppercase text-gray-500 hover:text-[#C5A059] cursor-pointer"
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

    </section>
  );
}
