export interface PizzaSize {
  size: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: {
    en: string;
    al: string;
  };
  description: {
    en: string;
    al: string;
  };
  price?: number;
  sizes?: PizzaSize[];
  imageUrl?: string;
}

export interface MenuCategory {
  id: string;
  name: {
    en: string;
    al: string;
  };
  items: MenuItem[];
}

export type Language = 'en' | 'al';

export interface MenuData {
  categories: MenuCategory[];
}