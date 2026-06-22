import React, { useState } from "react";
import { 
  Search, 
  MapPin, 
  User, 
  PhoneCall, 
  ShoppingBag, 
  Star, 
  Camera, 
  Mic, 
  ArrowRight, 
  X, 
  Sparkles, 
  Layers, 
  Gift, 
  Check 
} from "lucide-react";
import { Product, CartItem } from "../types";
import { PRODUCTS } from "../data";

interface HeaderProps {
  cart: CartItem[];
  onRemoveFromCart: (prodId: string) => void;
  onOpenCart: () => void;
  onOpenBooking: () => void;
  onSelectProduct: (product: Product) => void;
}

export default function Header({ 
  cart, 
  onRemoveFromCart, 
  onOpenCart, 
  onOpenBooking, 
  onSelectProduct 
}: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [searchPulse, setSearchPulse] = useState(false);

  // Filter products based on search query
  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const handleVoiceSearch = () => {
    setSearchPulse(true);
    setSearchQuery("Gia Certified Solitaire Rings");
    setTimeout(() => setSearchPulse(false), 1500);
  };

  const handleCameraSearch = () => {
    setSearchPulse(true);
    setSearchQuery("22K Gold Chevron Choker");
    setTimeout(() => setSearchPulse(false), 1500);
  };

  const menuCategories = [
    { name: "All Jewellery", tag: "all", icon: Layers },
    { name: "Gold Curation", tag: "gold", icon: Sparkles },
    { name: "Diamond", tag: "diamond", icon: Star },
    { name: "Earrings", tag: "earrings", icon: Sparkles },
    { name: "Rings", tag: "rings", icon: Sparkles },
    { name: "Wedding", tag: "wedding", icon: Sparkles },
    { name: "Gifting", tag: "gifting", icon: Gift }
  ];

  const megamenuColumns = [
    {
      title: "By Category",
      items: ["Choker Necklaces", "Solitaire Bands", "Sculptural Hoops", "Teardrop Earrings", "Exquisite Bangles", "Filigree Pendants"]
    },
    {
      title: "By Metal & Stones",
      items: ["22K Solid Yellow Gold", "18K High-Brilliance Gold", "14K Diamond Gold", "Pure Rose Gold Curation", "GIA Certified Solitaires"]
    },
    {
      title: "By Occasion",
      items: ["Bridal & Auspicious Heritage", "Modern Professional Wear", "Gala Statement Sets", "Intimate Everyday Essentials", "Milestone Anniversary Gifts"]
    },
    {
      title: "Budget Curation",
      items: ["Under $1,000", "$1,000 - $2,500", "$2,500 - $4,000", "Elite Masterpieces ($4,000+)"]
    }
  ];

  const totalCartPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <header className="w-full relative z-50 bg-[#FDFCFB] shadow-xs" id="jewelora-main-header">
      {/* Top Luxury Banner */}
      <div className="w-full bg-[#1A1515] text-[#C5A059] py-2 px-4 text-center text-[10px] tracking-[0.2em] font-sans font-light flex items-center justify-center gap-2 border-b border-white/5" id="top-announcement-strip">
        <Sparkles size={11} className="text-[#C5A059] animate-pulse" />
        <span className="uppercase font-semibold text-white/95">Complimentary Premium Fully-Insured Global Logistics & Lifetime Authenticity Guarantee</span>
        <div className="hidden md:flex ml-4 border-l border-white/10 pl-4 gap-4 text-gray-400">
          <span>Heritage Since 1914</span>
          <span className="text-[#C5A059] font-medium">100% Certified Ethical Gold</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between gap-4 border-b border-[#E5E1DA]" id="main-navigation-bar">
        {/* Brand Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl tracking-widest text-[#2A2A2A] font-bold uppercase relative inline-block">
              Jewelora
            </h1>
            <p className="font-mono text-[9px] tracking-[0.35em] text-[#C5A059] uppercase -mt-1 block font-bold">
              The Jewellery Hub
            </p>
          </div>
        </div>

        {/* Central Search Optimization Frame */}
        <div className="flex-1 max-w-lg relative hidden md:block" id="optimized-header-search">
          <div className={`relative flex items-center bg-white border ${searchPulse ? 'border-[#C5A059] ring-1 ring-[#C5A059]' : 'border-gray-200'} rounded-full px-4 py-2 transition-all duration-300`}>
            <Search size={18} className="text-gray-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for engagement rings, 22K gold, diamond bands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0"
              id="header-search-input"
            />
            
            {/* Image Search & Voice Actions Icons */}
            <div className="flex items-center gap-2 ml-2 flex-shrink-0 border-l border-gray-100 pl-2 text-gray-400">
              <button 
                type="button" 
                onClick={handleCameraSearch} 
                title="Search by image / design upload"
                className="hover:text-[#C5A059] transition-colors p-1"
                id="camera-search-btn"
              >
                <Camera size={16} />
              </button>
              <button 
                type="button" 
                onClick={handleVoiceSearch} 
                title="Search by voice consultation"
                className="hover:text-[#C5A059] transition-colors p-1"
                id="microphone-search-btn"
              >
                <Mic size={16} className={searchPulse ? "text-[#C5A059] animate-bounce" : ""} />
              </button>
            </div>
          </div>

          {/* Search Dropdown Panel */}
          {searchQuery && (
            <div className="absolute top-12 left-0 right-0 bg-white shadow-xl rounded-xl p-4 border border-gray-100 z-50 text-left" id="search-dropdown-results">
              <h3 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-2 font-mono">Matched Creations</h3>
              {filteredProducts.length > 0 ? (
                <div className="space-y-3">
                  {filteredProducts.map(p => (
                    <div 
                      key={p.id} 
                      onClick={() => {
                        onSelectProduct(p);
                        setSearchQuery("");
                      }}
                      className="flex items-center gap-3 cursor-pointer p-1.5 hover:bg-gray-50 rounded-lg transition-colors group"
                      id={`search-item-${p.id}`}
                    >
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        referrerPolicy="no-referrer" 
                        className="w-10 h-10 object-cover rounded-md border border-gray-100 group-hover:border-[#C5A059] transition-colors" 
                      />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-800 group-hover:text-[#C5A059] transition-colors">{p.name}</p>
                        <p className="text-[10px] font-mono text-gray-400">{p.metal} • {p.metalColor}</p>
                      </div>
                      <p className="text-sm font-mono font-medium text-gray-900">${p.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500 py-3 text-center">No catalog designs matched "{searchQuery}"</p>
              )}
            </div>
          )}
        </div>

        {/* Action Widgets */}
        <div className="flex items-center gap-3 md:gap-5" id="header-action-controls">
          <button 
            onClick={onOpenBooking}
            className="flex items-center gap-1 text-[#1A1515] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors text-xs font-medium uppercase tracking-wider border border-[#E5E1DA] px-3 py-1.5 rounded-full"
            title="Book Boutique Consultation"
            id="book-consultation-header-btn"
          >
            <PhoneCall size={13} />
            <span className="hidden lg:inline">Book Salon</span>
          </button>
          
          <button 
            className="text-gray-700 hover:text-[#C5A059] transition-colors relative" 
            title="Saloons Near You"
            onClick={() => window.scrollTo({top: document.getElementById('experience-centers-section')?.offsetTop, behavior: 'smooth'})}
            id="nearby-store-btn"
          >
            <MapPin size={20} />
          </button>

          {/* Cart Icon with Interactive Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowCartDropdown(!showCartDropdown)}
              onMouseEnter={() => setShowCartDropdown(true)}
              className="text-[#1A1515] hover:text-[#C5A059] transition-colors p-1.5 relative rounded-full hover:bg-[#FAF8F5]"
              title="Cart Inventory"
              id="shopping-cart-toggle"
            >
              <ShoppingBag size={21} />
              {cart.reduce((acc, item) => acc + item.quantity, 0) > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[10px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FDFCFB]">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>

            {/* Hover Trigger Box to enable smooth mouse transitions */}
            {showCartDropdown && (
              <div 
                className="absolute right-0 top-11 w-80 bg-white shadow-2xl rounded-xl border border-gray-100 p-4 z-50 text-left animate-fade-in-left"
                onMouseLeave={() => setShowCartDropdown(false)}
                id="shopping-cart-dropdown-panel"
              >
                <div className="flex justify-between items-center pb-2 mb-3 border-b border-gray-100">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-800 font-mono">Cart Creations</h4>
                  <button onClick={() => setShowCartDropdown(false)} className="text-gray-400 hover:text-gray-600">
                    <X size={15} />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="py-6 text-center text-gray-400">
                    <ShoppingBag size={32} className="mx-auto mb-2 opacity-30 text-gray-400" />
                    <p className="text-xs font-mono">Your jewelry tray is empty.</p>
                  </div>
                ) : (
                  <>
                    <div className="max-h-56 overflow-y-auto space-y-3 mb-3 pr-1">
                      {cart.map((item) => (
                        <div key={item.product.id} className="flex gap-3 text-xs border-b border-gray-50 pb-2">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 rounded object-cover border border-gray-100" 
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-800 truncate">{item.product.name}</p>
                            <p className="text-[10px] text-gray-400 uppercase font-mono">{item.selectedSize ? `Size: ${item.selectedSize}` : `One Size`} • Qty: {item.quantity}</p>
                            <p className="text-xs font-bold font-mono text-[#C5A059] mt-1">${(item.product.price * item.quantity).toLocaleString()}</p>
                          </div>
                          <button 
                            onClick={() => onRemoveFromCart(item.product.id)}
                            className="text-gray-400 hover:text-red-500 self-center"
                            id={`remove-cart-item-${item.product.id}`}
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <div className="flex justify-between text-xs font-bold text-gray-800 mb-3 font-mono">
                        <span>ESTIMATED TRADING VALUE:</span>
                        <span className="text-sm text-[#1A1515]">${totalCartPrice.toLocaleString()}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          onClick={() => {
                            setShowCartDropdown(false);
                            onOpenCart();
                          }}
                          className="w-full text-center text-xs py-2 border border-[#C5A059] text-[#C5A059] rounded font-medium hover:bg-gray-50 transition-colors uppercase font-mono tracking-wider"
                          id="cart-tray-view-btn"
                        >
                          View Tray
                        </button>
                        <button 
                          onClick={() => {
                            setShowCartDropdown(false);
                            onOpenCart();
                          }}
                          className="w-full text-center text-xs py-2 bg-[#C5A059] text-white rounded font-medium hover:bg-[#B38E45] transition-colors uppercase font-mono tracking-wider"
                          id="cart-checkout-btn"
                        >
                          Secure Checkout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Horizontal Nav Row with Category Matrix triggers */}
      <nav className="w-full bg-white border-b border-[#E5E1DA] relative" id="megamenu-category-navbar">
        <div className="max-w-4xl mx-auto px-4 flex justify-around items-center h-12">
          {menuCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.tag}
                className="h-full relative group flex items-center"
                onMouseEnter={() => setActiveMenu(cat.tag)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className="px-3 h-full flex items-center gap-1.5 text-xs tracking-widest text-gray-700 hover:text-[#C5A059] hover:bg-[#FAF8F5]/40 uppercase font-sans font-semibold transition-all duration-300 border-b-2 border-transparent hover:border-[#C5A059]"
                  id={`nav-item-${cat.tag}`}
                >
                  <Icon size={11} className="text-[#C5A059] group-hover:scale-110 transition-transform" />
                  <span>{cat.name}</span>
                </button>

                {/* Micro-dot or subtle visual indicator under active category hover state */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#C5A059] rounded-full scale-0 group-hover:scale-100 transition-all duration-300" />
                
                {/* Custom Interactive Hover Megamenu Frame */}
                {activeMenu === cat.tag && (
                  <div 
                    className="absolute top-12 left-1/2 -translate-x-[45vw] w-[90vw] max-w-5xl bg-white shadow-2xl border border-[#E5E1DA] p-8 grid grid-cols-1 md:grid-cols-12 gap-8 z-55 animate-fade-in-left glass-luxury rounded-b-2xl text-left"
                    style={{ minHeight: "260px" }}
                    id="megamenu-expanded-container"
                  >
                    {/* Megamenu layout: Left 4-column category matrix */}
                    <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                      {megamenuColumns.map((col, index) => (
                        <div key={index} className="space-y-3">
                          <h5 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] border-b border-[#F0EFEA] pb-1.5">
                            {col.title}
                          </h5>
                          <ul className="space-y-1.5">
                            {col.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <a 
                                  href={`#${cat.tag}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setSearchQuery(item);
                                  }}
                                  className="text-xs text-gray-600 hover:text-[#C5A059] hover:translate-x-1 transition-all duration-300 block font-sans"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Megamenu layout: Right side lifestyle active ad photo advertisement */}
                    <div className="md:col-span-4 bg-[#1A1515]/5 rounded-xl overflow-hidden relative group p-5 flex flex-col justify-end min-h-[180px] border border-[#E5E1DA]">
                      <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                           style={{ backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400')` }} 
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1A1515]/90 via-[#1A1515]/40 to-transparent" />
                      
                      {/* Lifestyle text */}
                      <div className="relative z-20 text-left">
                        <span className="font-mono text-[9px] tracking-[0.3em] text-[#C5A059] uppercase mb-1 block">LIMITED COLLECTION</span>
                        <h4 className="font-serif text-lg text-white leading-tight mb-2 font-medium">The Sovereign Bridal 22K Line</h4>
                        <a 
                          href="#Wedding"
                          onClick={() => {
                            setActiveMenu(null);
                            window.scrollTo({
                              top: document.getElementById('bestsellers-row-section')?.offsetTop,
                              behavior: 'smooth'
                            });
                          }}
                          className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-white transition-colors uppercase tracking-widest font-mono font-medium group/btn"
                        >
                          <span>Discover Craft</span>
                          <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
