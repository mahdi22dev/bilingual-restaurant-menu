import menuData from './menuItems.json';

export interface BilingualText {
  ar: string;
  en: string;
}

export type DietTag = 'popular' | 'vegetarian' | 'spicy';
export type Category = 'starters' | 'mains' | 'desserts' | 'drinks';

export interface MenuItem {
  id: string;
  category: Category;
  diet: DietTag;
  price: number;
  image: string;
  name: BilingualText;
  desc: BilingualText;
  ingredients: BilingualText;
  pairing: BilingualText;
}

export const MENU_ITEMS: MenuItem[] = menuData as MenuItem[];
