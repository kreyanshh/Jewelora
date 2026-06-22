import React, { useState } from "react";
import { X, Trash2, ShieldCheck, Ticket, Check, CreditCard, Lock, HelpCircle } from "lucide-react";
import { CartItem } from "../types";

interface ShoppingTrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (prodId: string, q: number) => void;
  onRemoveItem: (prodId: string) => void;
  onClearCart: () => void;
}

export default function ShoppingTrayDrawer({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQty, 
  onRemoveItem, 
  onClearCart 
}: ShoppingTrayDrawerProps) {
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"tray" | "checkout">("tray");
  const [checkoutInputs, setCheckoutInputs] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    card: "",
    expiry: "",
    cvv: ""
  });

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shippingVal = subtotal > 3000 ? 0 : 75;
  const grandTotal = subtotal - discount + shippingVal;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "HERITAGE112") {
      setPromoApplied(true);
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCheckoutSuccess(true);
    setTimeout(() => {
      setShowCheckoutSuccess(false);
      setCheckoutStep("tray");
      onClearCart();
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-100 bg-black/60 backdrop-blur-xs flex justify-end animate-fade-in-left" id="shopping-tray-overlay">
      <div 
        className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl border-l border-gray-150 flex flex-col justify-between overflow-hidden text-left"
        id="shopping-tray-drawer-panel"
      >
        {/* Header Block */}
        <div className="bg-[#1A1515] text-[#C5A059] p-5 flex items-center justify-between border-b border-[#C5A059]/10 flex-shrink-0">
          <div>
            <h3 className="font-serif text-lg sm:text-xl uppercase tracking-wide">Your Shopping Tray</h3>
            <p className="text-[10px] text-gray-300 font-mono tracking-wider uppercase mt-0.5">Sovereign Insured Asset Transit</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-white/70 hover:text-white p-1 hover:bg-white/10 rounded-full cursor-pointer"
            id="close-shopping-tray-btn"
          >
            <X size={20} />
          </button>
        </div>

        {showCheckoutSuccess ? (
          /* Transaction Completed Screen */
          <div className="flex-1 p-8 text-center flex flex-col justify-center items-center space-y-4" id="checkout-completed-portal">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shadow-sm">
              <Check size={32} />
            </div>
            <h4 className="font-serif text-xl font-bold text-gray-800 uppercase">Transaction Authorized Safely</h4>
            <p className="text-xs font-mono text-[#1A1515] uppercase tracking-widest bg-emerald-50/50 border border-emerald-600/10 px-3 py-1.5 rounded">
              Secure Receipt ID: TXN-{Math.floor(Math.random() * 899999) + 100000}
            </p>
            <div className="text-sm text-gray-500 font-light max-w-xs leading-relaxed">
              Your sovereign gold order has been successfully locked in and passed to our fully insured transit coordinators. A shipping notification containing live coordinates has been dispatched.
            </div>
          </div>
        ) : checkoutStep === "checkout" ? (
          /* Checkout Payment Step */
          <form onSubmit={handleCheckoutSubmit} className="flex-1 overflow-y-auto p-5 space-y-4 font-sans" id="checkout-payment-form">
            <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest font-bold border-b border-gray-100 pb-2">
              RECIPIENT TRANSIT ADDRESS
            </h4>

            <div className="space-y-3">
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Full Legal Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Johnathan Doe" 
                  value={checkoutInputs.name}
                  onChange={(e) => setCheckoutInputs({...checkoutInputs, name: e.target.value})}
                  className="w-full bg-white border border-gray-200 rounded px-3 py-1.5 text-xs text-[#1A1515] focus:ring-1 focus:ring-[#C5A059] focus:outline-none placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Delivery Address</label>
                <input 
                  type="text" 
                  placeholder="e.g. 52 Luxury Boulevard Apt 4C" 
                  value={checkoutInputs.address}
                  onChange={(e) => setCheckoutInputs({...checkoutInputs, address: e.target.value})}
                  className="w-full bg-white border border-gray-200 rounded px-3 py-1.5 text-xs text-[#1A1515] focus:ring-1 focus:ring-[#C5A059] focus:outline-none placeholder-gray-400"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">City</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Beverly Hills" 
                    value={checkoutInputs.city}
                    onChange={(e) => setCheckoutInputs({...checkoutInputs, city: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded px-3 py-1.5 text-xs text-[#1A1515] focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">ZIP / Postal Code</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 90210" 
                    value={checkoutInputs.zip}
                    onChange={(e) => setCheckoutInputs({...checkoutInputs, zip: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded px-3 py-1.5 text-xs text-[#1A1515] focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest font-bold border-b border-gray-100 pb-2 pt-4">
              SECURE FINANCIAL CAPTURE
            </h4>

            <div className="space-y-3">
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1 flex items-center gap-1">
                  <CreditCard size={11} />
                  <span>Card Number</span>
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 4111 2222 3333 4444" 
                  value={checkoutInputs.card}
                  onChange={(e) => setCheckoutInputs({...checkoutInputs, card: e.target.value})}
                  className="w-full bg-white border border-gray-200 rounded px-3 py-1.5 text-xs text-[#1A1515] focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">Expiry Date</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    value={checkoutInputs.expiry}
                    onChange={(e) => setCheckoutInputs({...checkoutInputs, expiry: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded px-3 py-1.5 text-xs text-[#1A1515] focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">CVV / Secure Code</label>
                  <input 
                    type="password" 
                    placeholder="•••" 
                    maxLength={4}
                    value={checkoutInputs.cvv}
                    onChange={(e) => setCheckoutInputs({...checkoutInputs, cvv: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded px-3 py-1.5 text-xs text-[#1A1515] focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-150">
              <div className="bg-gray-100 p-3 rounded text-xs space-y-1 text-gray-600">
                <div className="flex justify-between font-mono text-[11px]">
                  <span>Total Value Matched:</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between font-mono text-[11px] text-green-700 font-medium">
                    <span>10% Curation Discount:</span>
                    <span>-${discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between font-mono text-[11px]">
                  <span>Insured Global Logistics:</span>
                  <span>{shippingVal === 0 ? "Free Transit" : `$${shippingVal}`}</span>
                </div>
                <div className="flex justify-between font-mono text-xs font-bold text-[#1A1515] border-t border-gray-200 pt-2.5">
                  <span>FINAL CAPTURE VALUE:</span>
                  <span>${grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <button 
                  type="button" 
                  onClick={() => setCheckoutStep("tray")}
                  className="py-2.5 border border-gray-300 text-xs text-gray-500 uppercase font-mono tracking-wider rounded font-medium cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  Back To Tray
                </button>
                <button 
                  type="submit" 
                  className="py-2.5 bg-[#1A1515] text-[#C5A059] text-xs font-mono tracking-widest font-bold uppercase rounded-sm hover:bg-[#C5A059] hover:text-[#1A1515] transition-colors cursor-pointer"
                >
                  Pay ${grandTotal.toLocaleString()}
                </button>
              </div>
            </div>
          </form>
        ) : (
          /* Shopping tray item lists */
          <div className="flex-grow flex flex-col justify-between overflow-hidden">
            {/* Upper half: Scroll list */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" id="shopping-tray-item-scroller">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col justify-center items-center text-center text-gray-400 py-12">
                  <X size={36} className="opacity-30 mb-2" />
                  <p className="font-serif text-lg font-medium text-gray-600">Your jewelry tray is empty.</p>
                  <p className="text-xs font-light text-gray-400 font-sans max-w-xs mt-1">
                    Return to our bestsellers and add sovereign creations to inspect specifications.
                  </p>
                </div>
              ) : (
                <>
                  {/* Free fully insured logistics progress tier bar */}
                  <div className="p-3 bg-stone-50 rounded-lg border border-[#C5A059]/30 text-left" id="free-transit-progression-bar">
                    <p className="text-[11px] font-sans text-gray-600">
                      {subtotal >= 3000 ? (
                        <span className="text-green-700 font-semibold">✓ Congratulations! Your tray qualified for complimentary fully-insured global courier service.</span>
                      ) : (
                        <span>Add <strong className="font-semibold text-[#1A1515]">${(3000 - subtotal).toLocaleString()}</strong> more to unlock free fully-insured luxury transport.</span>
                      )}
                    </p>
                    <div className="w-full bg-gray-200 h-1 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="bg-[#1A1515] h-full transition-all duration-500" 
                        style={{ width: `${Math.min((subtotal / 3000) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* List */}
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div 
                        key={item.product.id} 
                        className="flex gap-4 p-3 bg-white border border-gray-100 rounded-lg shadow-2xs items-start"
                        id={`tray-node-${item.product.id}`}
                      >
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          referrerPolicy="no-referrer"
                          className="w-16 h-16 rounded object-cover border border-gray-100 flex-shrink-0" 
                        />
                        <div className="flex-1 min-w-0 text-left">
                          <p className="font-serif text-[#1A1515] font-semibold text-xs sm:text-sm truncate leading-tight mb-0.5">{item.product.name}</p>
                          <p className="text-[9px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                            {item.selectedSize ? `FIT SIZE: ${item.selectedSize}` : `Standard Size`} • {item.product.metal}
                          </p>
                          
                          {/* Qty controls */}
                          <div className="flex items-center justify-between" id={`qty-controls-${item.product.id}`}>
                            <div className="flex items-center border border-gray-100 rounded bg-gray-50 overflow-hidden font-mono text-xs">
                              <button 
                                onClick={() => onUpdateQty(item.product.id, item.quantity - 1)}
                                className="px-2 py-1 hover:bg-gray-200 hover:text-[#1A1515] transition-colors"
                              >-</button>
                              <span className="px-2 font-bold">{item.quantity}</span>
                              <button 
                                onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                                className="px-2 py-1 hover:bg-gray-200 hover:text-[#1A1515] transition-colors"
                              >+</button>
                            </div>
                            <span className="font-mono text-xs font-bold text-gray-900">${(item.product.price * item.quantity).toLocaleString()}</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-gray-400 hover:text-red-500 p-1 rounded-full hover:bg-gray-50 flex-shrink-0 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Down half: Price card, vouchers, checkout */}
            {cart.length > 0 && (
              <div className="p-4 bg-white border-t border-gray-150 relative z-30" id="tray-drawer-footer-calculations">
                
                {/* Vouchers/Promo Code */}
                <div className="flex gap-2 mb-4" id="promo-code-strip">
                  <div className="flex-1 flex items-center bg-gray-50 border border-gray-200 rounded px-2 text-xs">
                    <Ticket size={13} className="text-gray-400 mr-1.5" />
                    <input 
                      type="text" 
                      placeholder="Enter VOUCHER (try HERITAGE112)" 
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full bg-transparent border-none py-1.5 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 uppercase font-mono"
                    />
                  </div>
                  <button 
                    onClick={handleApplyPromo}
                    className="px-3 bg-[#1A1515] text-[#C5A059] font-mono text-[10px] font-bold uppercase rounded-sm hover:bg-[#C5A059] hover:text-[#1A1515] transition-all py-1.5 cursor-pointer"
                    id="apply-promo-btn"
                  >
                    Apply
                  </button>
                </div>

                {promoApplied && (
                  <div className="flex justify-between items-center bg-emerald-50 text-emerald-800 text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1.5 rounded mb-3 border border-emerald-200">
                    <span>Voucher Applied: heritage112 saving 10%!</span>
                    <span className="text-emerald-500">✓ Active</span>
                  </div>
                )}

                {/* Billing specs */}
                <div className="space-y-2 pb-4 text-xs font-sans text-right" id="tray-invoice-details">
                  <div className="flex justify-between font-mono text-[11px] text-gray-500">
                    <span>Sovereign Metals Value:</span>
                    <span className="text-gray-900">${subtotal.toLocaleString()}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between font-mono text-[11px] text-green-700 font-semibold">
                      <span>Voucher Discount (10%):</span>
                      <span>-${discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-mono text-[11px] text-gray-500">
                    <span>Fully Shielded Transit Insurance:</span>
                    <span>{shippingVal === 0 ? "Complimentary" : `$${shippingVal}`}</span>
                  </div>
                  <div className="flex justify-between font-mono text-sm font-bold text-[#1A1515] border-t border-gray-100 pt-3">
                    <span>AGGREGATE TRADING VALUE:</span>
                    <span>${grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Submits */}
                <div className="space-y-2">
                  <button 
                    onClick={() => setCheckoutStep("checkout")}
                    className="w-full py-3.5 bg-[#1A1515] text-[#C5A059] text-xs font-mono tracking-widest font-bold uppercase rounded-sm hover:bg-[#C5A059] hover:text-[#1A1515] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    id="drawer-checkout-confirmation-btn"
                  >
                    <Lock size={13} />
                    <span>Secure Transition to Escrow</span>
                  </button>
                  <button 
                    onClick={onClearCart}
                    className="w-full py-2 border border-gray-200 text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-red-500 rounded-sm hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    Clear Tray
                  </button>
                </div>
              </div>
            )}
          </div>
        )
        }
      </div>
    </div>
  );
}
