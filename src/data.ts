import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    name: "Aurelia Chevron Diamond Choker",
    price: 3450,
    originalPrice: 4100,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600",
    category: "Necklaces",
    subCategory: "Chokers",
    metal: "22K Gold",
    metalColor: "Yellow Gold",
    description: "Our signature chevron layout collar. Handcrafted with precision by elite masters, combining a heritage 22K gold skeleton with shimmering brilliant-cut micro-diamonds.",
    specs: {
      weight: "18.4 grams",
      carat: "2.1 ct Diamond",
      certification: "BIS Hallmarked & GIA Certified",
      collection: "Heritage Gold",
      width: "14 inches"
    },
    isBestseller: true
  },
  {
    id: "prod-02",
    name: "Amara Premium Diamond Band",
    price: 1890,
    originalPrice: 2200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600",
    category: "Rings",
    subCategory: "Engagement",
    metal: "18K Gold",
    metalColor: "White Gold",
    description: "An elegant, timeless wedding band carrying a high-brilliance flawless brilliant-cut central diamond held in solid 18K white gold claws.",
    specs: {
      weight: "4.2 grams",
      carat: "1.05 ct Solitaire",
      certification: "Gia Certified Triple Excellent",
      collection: "Amara Solitaires",
    },
    isBestseller: true
  },
  {
    id: "prod-03",
    name: "Kalyan Heritage Hoop Earrings",
    price: 1120,
    originalPrice: 1350,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600",
    category: "Earrings",
    subCategory: "Hoops",
    metal: "22K Gold",
    metalColor: "Yellow Gold",
    description: "Traditional hoops reinvented with modern geometric ridging. Heavy 22K yellow gold provides maximum glow and lifetime durability.",
    specs: {
      weight: "8.5 grams",
      collection: "Heritage Gold",
      certification: "BIS Hallmarked"
    },
    isBestseller: true
  },
  {
    id: "prod-04",
    name: "Gild Stacking Sculptural Ring",
    price: 950,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1543294001-f7cbfe92237e?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600",
    category: "Rings",
    subCategory: "Stacking Bands",
    metal: "18K Gold",
    metalColor: "Yellow Gold",
    description: "Comfort-fit stacking ring with unique organic rippling, catching sunlight at every rotation. Perfect alone or aligned with sister pieces.",
    specs: {
      weight: "5.1 grams",
      collection: "Modernist Minimal"
    },
    isBestseller: false
  },
  {
    id: "prod-05",
    name: "Zenith Intertwined Bangle",
    price: 2800,
    originalPrice: 3100,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=600",
    category: "Gold",
    subCategory: "Bracelets",
    metal: "22K Gold",
    metalColor: "Yellow Gold",
    description: "An intertwined dual band bangle crafted with fine filigree engravings, symbolizing timeless connections. Possesses secure modern locking.",
    specs: {
      weight: "14.2 grams",
      collection: "Kalyan Essentials",
      certification: "100% BIS Hallmarked True Value"
    },
    isBestseller: true
  },
  {
    id: "prod-06",
    name: "Helia Statement Droplet Earrings",
    price: 1540,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1626784215021-2e39ac514150?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=600",
    category: "Earrings",
    subCategory: "Drops",
    metal: "18K Gold",
    metalColor: "Rose Gold",
    description: "Sleek sculptural teardrops featuring micro-pave champagne diamonds. Designed to frame the neck elegantly during exclusive events.",
    specs: {
      weight: "7.0 grams",
      carat: "0.6 ct Diamond",
      collection: "Sunset Rose"
    },
    isBestseller: false
  },
  {
    id: "prod-07",
    name: "Deco Modernist Geometric Ring",
    price: 1250,
    originalPrice: 1400,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600",
    category: "Rings",
    subCategory: "Wedding Bands",
    metal: "18K Gold",
    metalColor: "Yellow Gold",
    description: "An Art Deco inspired wedding band presenting precise geometric gold cells hosting premium baguette-cut eternal diamonds.",
    specs: {
      weight: "6.2 grams",
      carat: "0.8 ct Diamond",
      collection: "Modern Deco"
    },
    isBestseller: true
  },
  {
    id: "prod-08",
    name: "Stellar Solitaire Pendant",
    price: 2400,
    originalPrice: 2850,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600",
    category: "Diamond",
    subCategory: "Necklaces",
    metal: "14K Diamond Gold",
    metalColor: "Yellow Gold",
    description: "A gorgeous single drop solitaire set on a delicate 14-karat solid yellow gold cable chain with custom ring connectors.",
    specs: {
      weight: "3.8 grams",
      carat: "1.2 ct Solitaire",
      certification: "GIA Certified Laser Inscribed"
    },
    isBestseller: true
  }
];
