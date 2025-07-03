
export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  isVeg?: boolean;
  isSpecial?: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
  icon?: string;
}

export interface MenuData {
  categories: MenuCategory[];
}
