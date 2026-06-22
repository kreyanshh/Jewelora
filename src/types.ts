export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  hoverImage: string;
  category: string;
  subCategory?: string;
  metal: "18K Gold" | "22K Gold" | "14K Diamond Gold";
  metalColor: "Yellow Gold" | "Rose Gold" | "White Gold";
  description: string;
  specs: {
    weight?: string;
    carat?: string;
    certification?: string;
    collection?: string;
    height?: string;
    width?: string;
  };
  isBestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "elara" | "system";
  text: string;
  timestamp: Date;
}

export interface AppointmentBooking {
  name: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  type: "Boutique Visit" | "Virtual Video Consult" | "Expert Chat Help";
  notes?: string;
}
