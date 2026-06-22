import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, User, Sparkles, Check, ChevronUp } from "lucide-react";
import { ChatMessage } from "../types";

interface ConciergeChatProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function ConciergeChat({ isOpen, onClose, onOpen }: ConciergeChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);
  const [showPillPrompt, setShowPillPrompt] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Suggested quick prompts cards
  const suggestedPrompts = [
    "Differentiate 18K vs 22K gold?",
    "Suggest a wedding anniversary gift",
    "How does Kalyan guarantee trust?",
    "Do you offer custom ring designs?"
  ];

  // Set up initial greeting
  useEffect(() => {
    setMessages([
      {
        id: "greet-1",
        sender: "elara",
        text: "Greetings. I am Elara, your personal concierge and fine gemology advisor. How may I guide your discovery today?",
        timestamp: new Date()
      }
    ]);
  }, []);

  // Scroll to bottom of message logs
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend })
      });

      const data = await res.json();

      if (res.ok && data.text) {
        setMessages((prev) => [
          ...prev,
          {
            id: `elara-${Date.now()}`,
            sender: "elara",
            text: data.text,
            timestamp: new Date()
          }
        ]);
      } else {
        throw new Error(data.error || "Failed execution");
      }
    } catch (err: any) {
      console.warn("API error, switching to luxurious offline concierging context:", err);
      // Fine-crafted elegant offline response simulation so the storefront remains interactive!
      setTimeout(() => {
        let responseText = "My deepest apologies, I am running in a secure, self-contained showcase environment now. I would be honored to guide you on this fine gold design. Let me know if you would like me to book an appointment with our master jeweler so they can personally call you.";
        
        const textLower = textToSend.toLowerCase();
        if (textLower.includes("18k") || textLower.includes("22k") || textLower.includes("karat")) {
          responseText = "Under fine guidelines, 22K (karat) gold consists of 91.6% pure gold alloyed with silver and copper to render heavy structural toughness—optimal for heritage bridal sets. 18K gold contains 75% pure gold and is the global absolute standard for setting solitaire diamonds and intricate daily stacking rings, providing immaculate security.";
        } else if (textLower.includes("gift") || textLower.includes("anniversary") || textLower.includes("bridal")) {
          responseText = "For exquisite milestone occasions, our clients heavily favor the 'Aurelia Chevron Diamond Choker' or our 'Amara Wedding Solitaire Rings'. They embody eternal promise and are certified by the GIA. May I guide you to book a boutique reservation for a closer evaluation?";
        } else if (textLower.includes("trust") || textLower.includes("kalyan") || textLower.includes("guarantee")) {
          responseText = "Jewelora carries a legacy of 112 years of transparent, ethical operation. Every single purchase includes a BIS hallmark certificate, pristine laser GIA inscriptions on solitaires, and a lifelong buyback transaction guarantee so you are buying an investment, not just a design.";
        } else if (textLower.includes("custom") || textLower.includes("customize")) {
          responseText = "Indeed. We offer custom structural rendering. You can upload reference design photos in our salon consultation or describe your blueprint. Our masters will cast a bespoke model for your final review before manufacturing starts.";
        }

        setMessages((prev) => [
          ...prev,
          {
            id: `elara-${Date.now()}`,
            sender: "elara",
            text: responseText,
            timestamp: new Date()
          }
        ]);
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-100 flex flex-col items-end font-sans">
      
      {/* 1. Extended Expanded Chat Panel */}
      {isOpen ? (
        <div className="w-[330px] sm:w-[380px] h-[480px] sm:h-[550px] bg-[#FAF8F5] rounded-2xl border border-gray-150 shadow-2xl flex flex-col justify-between overflow-hidden relative z-50 text-left animate-fade-in-left">
          
          {/* Header Banner */}
          <div className="bg-[#1A1515] text-white p-4 flex items-center justify-between border-b border-[#C5A059]/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" 
                  alt="Elara Personal Counselor Concierge Portrait" 
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-[#C5A059]/20" 
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#1A1515] animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="font-serif text-sm font-semibold tracking-wide">Elara Guidance</h4>
                  <Sparkles size={11} className="text-[#C5A059] animate-pulse" />
                </div>
                <p className="text-[10px] text-[#C5A059]/90 font-mono tracking-wider uppercase font-bold">Senior Concierge & Gemologist</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-white/70 hover:text-white p-1 hover:bg-white/10 rounded-full cursor-pointer transition-colors"
              id="close-expanded-chat-btn"
            >
              <X size={18} />
            </button>
          </div>

          {/* Conversation Feed */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-white scrollbar-thin">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                  m.sender === "user" 
                    ? "bg-[#1A1515] text-white rounded-br-none" 
                    : "bg-[#FAF8F5] text-gray-800 rounded-bl-none border border-gray-100"
                }`}>
                  <p className="whitespace-pre-line">{m.text}</p>
                  <p className={`text-[9px] mt-1 text-right block ${m.sender === "user" ? "text-white/60" : "text-gray-400 font-mono"}`}>
                    {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#FAF8F5] border border-gray-100 text-gray-500 rounded-xl rounded-bl-none px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'0ms'}} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'150ms'}} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'300ms'}} />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none">Consulting Archives...</span>
                </div>
              </div>
            )}
          </div>

          {/* Suggestions Layer */}
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex gap-1.5 overflow-x-auto scrollbar-none whitespace-nowrap py-2.5">
            {suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="text-[10px] bg-white border border-[#C5A059]/20 text-gray-600 hover:text-[#C5A059] hover:border-[#C5A059] rounded-full px-3 py-1 font-sans cursor-pointer transition-colors"
                id={`suggest-prompt-${idx}`}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input control row */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              placeholder="Ask Elara or type a question here..." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage(inputText);
              }}
              className="flex-1 bg-[#FAF8F5] border border-gray-200 rounded-full px-4 py-2 text-xs focus:ring-1 focus:ring-[#C5A059] focus:outline-none placeholder-gray-400 text-gray-800"
              id="chat-input-textbox"
            />
            <button 
              onClick={() => handleSendMessage(inputText)}
              className="w-9 h-9 bg-[#1A1515] text-white rounded-full flex items-center justify-center hover:bg-[#C5A059] transition-colors focus:scale-95 cursor-pointer flex-shrink-0"
              id="send-chat-message-btn"
            >
              <Send size={14} />
            </button>
          </div>

        </div>
      ) : (
        /* 2. Floating Avatar Trigger */
        <div className="flex items-center gap-3 text-right" id="chat-floating-trigger-strip">
          
          {/* Greeting Prompt Pill layout ("How can I help you?") as requested in image_57109c.png */}
          {showPillPrompt && (
            <div 
              className="bg-white px-4 py-2 rounded-full border border-[#C5A059]/40 shadow-xl flex items-center gap-2 animate-bounce cursor-pointer group"
              onClick={() => {
                onOpen();
                setShowPillPrompt(false);
              }}
              id="chat-pill-prompt"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-gray-800 group-hover:text-[#C5A059] font-sans">
                How can I help you?
              </span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPillPrompt(false);
                }} 
                className="text-gray-400 hover:text-gray-700 ml-1"
                title="Dismiss greeting prompt"
              >
                <X size={12} />
              </button>
            </div>
          )}

          {/* Friendly human support avatar asset */}
          <button
            onClick={() => {
              onOpen();
              setShowNotificationBadge(false);
              setShowPillPrompt(false);
            }}
            className="w-14 h-14 rounded-full bg-[#1A1515] border-2 border-[#C5A059] shadow-2xl flex items-center justify-center relative cursor-pointer hover:bg-[#C5A059] hover:scale-105 transition-all group"
            id="chat-main-trigger"
            aria-label="Open virtual concierge"
          >
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" 
              alt="Elara Support Advisor Headshot" 
              referrerPolicy="no-referrer"
              className="w-full h-full rounded-full object-cover group-hover:opacity-90"
            />
            {/* Online Green dot */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
            
            {showNotificationBadge && (
              <span className="absolute -top-1 -right-1 bg-red-600 w-4 h-4 rounded-full text-[9px] text-white flex items-center justify-center font-bold">
                1
              </span>
            )}
          </button>
        </div>
      )}

    </div>
  );
}
